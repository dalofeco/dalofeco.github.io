import AWS from 'aws-sdk/global';
import S3 from 'aws-sdk/clients/s3';
import { GalleryType, PhotoType } from '../data/photo';

const BUCKET_NAME: string = 'dalofeco-gallery';

const getS3 = (): S3 => {
  // Initialize the Amazon Cognito credentials provider
  AWS.config.region = 'us-east-1'; // Region
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:126ea0d7-557c-4d40-b54b-ba6fb7d655d8',
  });
  const s3 = new S3({
    apiVersion: '2006-03-01',
    params: { Bucket: BUCKET_NAME },
  });
  return s3;
};

export const getAlbums = (): Promise<string[]> =>
  new Promise<string[]>((resolve, reject) => {
    const s3: S3 = getS3();

    s3.listObjects({ Delimiter: '/', Bucket: BUCKET_NAME }, (err, data) => {
      if (err) reject(err);
      else {
        const albumNames: string[] =
          data.CommonPrefixes?.map((commonPrefix) => {
            const prefix = commonPrefix.Prefix || '';
            const albumName = decodeURIComponent(prefix.replace('/', ''));
            return albumName;
          }) || [];
        resolve(albumNames);
      }
    });
  });

export const getImages = (albumName: string): Promise<PhotoType[]> =>
  new Promise((resolve, reject) => {
    const albumPhotosKey = `${albumName}/`;
    const s3: S3 = getS3();

    s3.listObjects(
      { Prefix: albumPhotosKey, Bucket: BUCKET_NAME },
      function c(this: { request: AWS.Request<S3.ListObjectsOutput, AWS.AWSError> }, err, data) {
        if (err) reject(err);
        else {
          // 'this' references the AWS.Response instance that represents the response
          const { href } = this.request.httpRequest.endpoint;
          const bucketUrl = `${href + BUCKET_NAME}/`;
          const photos: PhotoType[] = [];

          // Iterate through response contents if present
          data.Contents?.forEach((photo) => {
            const photoKey = photo.Key;
            if (photoKey) {
              const photoURL = bucketUrl + encodeURIComponent(photoKey);
              photos.push({
                uri: photoURL,
                metadata: undefined,
              });
            }
          });

          // Filter photos to allow only specific file endings
          resolve(photos.filter((photo) => photo.uri.endsWith('.jpeg') || photo.uri.endsWith('.jpg')));
        }
      },
    );
  });

export const getGallery = (): Promise<GalleryType> =>
  new Promise<GalleryType>((resolve, reject) => {
    const gallery: GalleryType = {
      albums: [],
    };

    getAlbums()
      .then((albumNames: string[]) => {
        // Initialize entry in gallery for each album
        albumNames.forEach((albumName) =>
          gallery.albums.push({
            name: albumName,
            photos: [],
            coverURI: '',
          }),
        );

        // Promise to get all images
        const promises = albumNames.map((albumName) => getImages(albumName));
        return Promise.all(promises);
      })
      .then((albums: Array<PhotoType[]>) => {
        // Add photos and cover uri from each album
        albums.forEach((album: PhotoType[], i: number) => {
          const albumCover = album.find((photo) => photo.uri.includes('cover'));
          gallery.albums[i].photos = album;
          gallery.albums[i].coverURI = albumCover?.uri || gallery.albums[i].photos[0].uri;
        });

        // Resolve gallery
        resolve(gallery);
      })
      .catch((err) => reject(err));
  });
