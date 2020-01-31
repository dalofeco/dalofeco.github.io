import React, { useState } from 'react';
import { navigate } from 'gatsby';
import { getEXIF } from '../utils/exif';

import Loading from './Loading';
import Image from './image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { GalleryType, PhotoAlbumType, PhotoMetadataType, PhotoType } from '../types/photo';
import '../styles/components/gallery.scss';

interface PhotoGalleryProps {
    gallery: GalleryType;
}

export const PhotoGallery = ({gallery} : PhotoGalleryProps) => {

    return (
        <div id="PhotoGalleryContainer">
            <h2 id="PhotoGalleryHeader">Gallery</h2>
            <div id="PhotoGalleryAlbumContainer">
                {gallery ? 
                    gallery.albums.map(album => (
                        <div key={album.name} className="PhotoGalleryAlbum" onClick={() => navigate(`/gallery/${album.name}`)}>
                            <Image id={`PhotoGalleryAlbumCover-${album.name}`} 
                                   className="PhotoGalleryAlbumCover" 
                                   src={album.coverURI}/>
                            <h3 className="PhotoGalleryAlbumTitle">{album.name}</h3>
                        </div>
                    ))
                : <Loading/>}
            </div>
        </div>
    )
}


interface PhotoAlbumProps {
    album: PhotoAlbumType;
    setAlbum: Function;
}


export const PhotoAlbum = ({album, setAlbum}: PhotoAlbumProps) => {

    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const onPhotoLoad = (index) => {
        return (photoMetadata) => {
            const newAlbum: PhotoAlbumType = {...album};
            newAlbum.photos[index].metadata = {...photoMetadata};
            setAlbum(newAlbum);
        }
    }

    const handlePhotoInspectorCloseClick = (e) => {
        if (e && e.target)
            if (e.target.id === "PhotoInspector")
                setSelectedPhoto(null);
    }

    const navigatePrevPhoto = () => {
        const prev: number = selectedPhoto - 1;
        if (prev < 0)
            setSelectedPhoto(album.photos.length - 1);
        else
            setSelectedPhoto(prev);
    }

    const navigateNextPhoto = () => {
        const next: number = (selectedPhoto + 1) % album.photos.length;
        setSelectedPhoto(next);
    }

    return (
        <>
        <div id="PhotoAlbumContainer">
            <div id="PhotoAlbumHeaderContainer">
                <h2 id="PhotoAlbumHeader">{album.name}</h2>
            </div>

            <div id="PhotoAlbumPhotosContainer">

                {album.photos.map((photo: PhotoType, i: number) => (
                    <div key={`PhotoAlbumContainer${i}`} className="PhotoAlbumPhotoContainer">

                        <h4 className="PhotoAlbumPhotoHeader">{photo.metadata ? photo.metadata.title : null}</h4>

                        <Image id={`PhotoAlbumPhoto${i}`} className="PhotoAlbumPhoto" meta={!!photo.metadata}
                            src={photo.uri} onLoad={onPhotoLoad(i)} onClick={() => setSelectedPhoto(i)}/>

                        <p>{photo.metadata ? photo.metadata.description : null}</p>
                    </div>
                ))}
            </div>
        </div>

        {selectedPhoto !== null ? 
            <div id="PhotoInspector" onClick={handlePhotoInspectorCloseClick}>
                <div id="PhotoInspectorNavigateArrowLeft">
                    <FontAwesomeIcon icon={faArrowLeft} onClick={navigatePrevPhoto}/>
                </div>
                <div id="PhotoInspectorNavigateArrowRight">
                    <FontAwesomeIcon icon={faArrowRight} onClick={navigateNextPhoto}/>
                </div>
                <div id="PhotoInspectorCloseContainer">
                    <FontAwesomeIcon icon={faTimes} onClick={() => setSelectedPhoto(null)}/>
                </div>
                <Image id={"PhotoInspectorImage"} src={album.photos[selectedPhoto].uri}/>
                {album.photos[selectedPhoto].metadata ? 
                    <div id="PhotoInspectorMetadataContainer">
                        <p>{album.photos[selectedPhoto].metadata.title}</p>
                        <p>{album.photos[selectedPhoto].metadata.description}</p>
                    </div>
                : null}
            </div>
        : null}
        </>
    )
}