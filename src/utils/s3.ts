import AWS from 'aws-sdk';
import { GalleryType, PhotoType } from '../types/photo';

const BUCKET_NAME: string = 'dalofeco-gallery';

const getS3 = () : AWS.S3 => {
    // Initialize the Amazon Cognito credentials provider
    AWS.config.region = 'us-east-1'; // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'us-east-1:126ea0d7-557c-4d40-b54b-ba6fb7d655d8',
    });
    const s3 = new AWS.S3({
        apiVersion: '2006-03-01',
        params: {Bucket: BUCKET_NAME}
    });
    return s3;
};

export const getAlbums = () : Promise<string[]> => {

    return new Promise<string[]>((resolve, reject) => {

        const s3: AWS.S3 = getS3();

        s3.listObjects({Delimiter: '/', Bucket: BUCKET_NAME}, (err, data) => {
            if (err) reject(err);
            else {
                const albumNames: Array<string> = data.CommonPrefixes.map(commonPrefix => {
                    const prefix = commonPrefix.Prefix;
                    const albumName = decodeURIComponent(prefix.replace('/', ''));
                    return albumName;
                });
                resolve(albumNames);
            }
        });
    });
}

export const getImages = (albumName: string) : Promise<PhotoType[]>  => {

    return new Promise((resolve, reject) => {

        const albumPhotosKey = `${albumName}/`;
        const s3: AWS.S3 = getS3();

        s3.listObjects({Prefix: albumPhotosKey, Bucket: BUCKET_NAME}, function (err, data) {
            if (err) reject(err);
            else {
                var href = this.request.httpRequest.endpoint.href;
                var bucketUrl = href + BUCKET_NAME + '/';

                const photos: Array<PhotoType> = data.Contents.map(photo => {
                    const photoKey = photo.Key;
                    const photoURL = bucketUrl + encodeURIComponent(photoKey);
                    return {
                        'uri': photoURL,
                        'metadata': null,
                    }
                });

                resolve(photos.filter(photo => photo.uri.endsWith('.jpeg') || photo.uri.endsWith('.jpg')));
            }
        });
    });
}

export const getGallery = () : Promise<GalleryType>  => {

    return new Promise<GalleryType>((resolve, reject) => {
        
        const gallery: GalleryType = {
            albums: []
        };

        getAlbums().then((albumNames: string[])  => {

            // Initialize entry in gallery for each album
            albumNames.forEach(albumName => gallery.albums.push({
                name: albumName,
                photos: [],
                coverURI: '',
            }));

            // Promise to get all images
            const promises = albumNames.map(albumName => getImages(albumName))
            return Promise.all(promises)

        }).then((albums: Array<PhotoType[]>) => {

            // Add photos and cover uri from each album
            albums.forEach((album: PhotoType[], i: number) => {
                gallery.albums[i].photos = album;
                gallery.albums[i].coverURI = album.find(photo => photo.uri.includes('cover')).uri || gallery.albums[i].photos[0].uri;
            })

            // Return gallery type
            console.log(gallery);
            resolve(gallery);

        }).catch(err => reject(err));
    });
}