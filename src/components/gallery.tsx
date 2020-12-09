/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import Loading from './loading';
import Image from './image';
import { GalleryType, PhotoAlbumType, PhotoMetadataType, PhotoType } from '../data/photo';
import '../styles/components/gallery.less';

interface PhotoGalleryProps {
  gallery: GalleryType;
}

export const PhotoGallery = ({ gallery }: PhotoGalleryProps) => {
  const history = useHistory();

  const albumClickHandler = React.useCallback(
    (name: string) => (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      history.push(`/gallery/${name.toLowerCase()}`);
    },
    [history],
  );

  return (
    <div id="PhotoGalleryContainer">
      <h2 id="PhotoGalleryHeader">Gallery</h2>
      <div id="PhotoGalleryAlbumContainer">
        {gallery ? (
          gallery.albums.map((album) =>
            album ? (
              <div key={album.name} className="PhotoGalleryAlbum" onClick={albumClickHandler(album.name)}>
                <Image
                  id={`PhotoGalleryAlbumCover-${album.name}`}
                  className="PhotoGalleryAlbumCover"
                  src={album.coverURI}
                />
                <h3 className="PhotoGalleryAlbumTitle">{album.name}</h3>
              </div>
            ) : null,
          )
        ) : (
          <div className="FlexRowContainer">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
};

interface PhotoAlbumProps {
  album: PhotoAlbumType;
  updateAlbum: Function;
}

export const PhotoAlbum = ({ album, updateAlbum }: PhotoAlbumProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState(-1);

  const onPhotoLoad = (index: number) => (photoMetadata: PhotoMetadataType) => {
    const newAlbum: PhotoAlbumType = { ...album };
    newAlbum.photos[index].metadata = { ...photoMetadata };
    updateAlbum(newAlbum);
  };

  const handlePhotoInspectorCloseClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).id === 'PhotoInspector') setSelectedPhoto(-1);
    e.stopPropagation();
  };

  const navigatePrevPhoto = () => {
    const prev: number = selectedPhoto - 1;
    if (prev < 0) setSelectedPhoto(album.photos.length - 1);
    else setSelectedPhoto(prev);
  };

  const navigateNextPhoto = () => {
    const next: number = (selectedPhoto + 1) % album.photos.length;
    setSelectedPhoto(next);
  };

  return (
    <>
      <div id="PhotoAlbumContainer">
        <div id="PhotoAlbumHeaderContainer">
          <h2 id="PhotoAlbumHeader">{album.name}</h2>
        </div>

        <div id="PhotoAlbumPhotosContainer">
          {album.photos.map((photo: PhotoType, i: number) => (
            <div key={`PhotoAlbumContainer-photo-${photo.uri}`} className="PhotoAlbumPhotoContainer">
              <h4 className="PhotoAlbumPhotoHeader">{photo.metadata ? photo.metadata.title : null}</h4>

              <Image
                id={`PhotoAlbumPhoto${i}`}
                className="PhotoAlbumPhoto"
                meta={!!photo.metadata}
                src={photo.uri}
                onLoad={onPhotoLoad(i)}
                onClick={() => setSelectedPhoto(i)}
              />

              <p>{photo.metadata ? photo.metadata.description : null}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedPhoto !== -1 ? (
        <div id="PhotoInspector" onClick={handlePhotoInspectorCloseClick}>
          <div id="PhotoInspectorNavigateArrowLeft">
            <FontAwesomeIcon icon={faArrowLeft} onClick={navigatePrevPhoto} />
          </div>
          <div id="PhotoInspectorNavigateArrowRight">
            <FontAwesomeIcon icon={faArrowRight} onClick={navigateNextPhoto} />
          </div>
          <div id="PhotoInspectorCloseContainer">
            <FontAwesomeIcon icon={faTimes} onClick={() => setSelectedPhoto(-1)} />
          </div>
          <Image id="PhotoInspectorImage" src={album.photos[selectedPhoto].uri} />
          {album.photos[selectedPhoto].metadata ? (
            <div id="PhotoInspectorMetadataContainer">
              <p>{album.photos[selectedPhoto].metadata?.title}</p>
              <p>{album.photos[selectedPhoto].metadata?.description}</p>
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
};
