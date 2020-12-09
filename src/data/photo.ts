export interface PhotoType {
  uri: string;
  metadata?: PhotoMetadataType;
}

export interface PhotoMetadataType {
  title: string;
  description: string;
  location: string;
  date: string;

  shutter: string;
  aperture: string;
  iso: string;
  focalLength: string;

  cameraMake: string;
  cameraModel: string;
  lensModel: string;
}

export interface PhotoAlbumType {
  name: string;
  photos: PhotoType[];
  coverURI: string;
}

export interface GalleryType {
  albums: PhotoAlbumType[];
}

export const EmptyGallery = {
  albums: [],
};
