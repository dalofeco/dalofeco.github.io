import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { PhotoGallery, PhotoAlbum } from '../components/gallery';

import { PhotoAlbumType, GalleryType } from '../types/photo';
import { getGallery } from '../utils/s3';
import '../styles/pages/gallery.scss';
import Loading from '../components/Loading';


interface GalleryPageProps {
    location: any;
}

export const GalleryPage = ({location}: GalleryPageProps) => {

    const [gallery, setGallery] = useState(null);

    const setAlbum = (index: number) => {
        
        return (album: PhotoAlbumType) => {
            const newGallery: GalleryType = {
                albums: gallery.albums.map(
                    (a: PhotoAlbumType, i: number) => i === index ? album : a)
            }
            setGallery(newGallery);
        };
    }

    useEffect(() => {
        if (!gallery) getGallery()
                        .then((gallery: GalleryType) => setGallery(gallery))
                        .catch(err => alert(err));
    })

    // Wait until gallery is loaded
    if (!gallery) 
        return <Loading/>

    // Get album name from location
    const albumName: string = location.pathname.split('/').pop();
    const albumIndex = gallery.albums.findIndex(a => a.name.toLowerCase() == albumName.toLowerCase());
    if (albumIndex !== -1)
        return (
            <Layout modal closeLink="/gallery">
                <SEO title={`${gallery.albums[albumIndex].name} Gallery`}/>
                <div id="GalleryPageContainer">
                    <PhotoAlbum album={gallery.albums[albumIndex]} setAlbum={setAlbum(albumIndex)}/>
                </div>                
            </Layout>        
        )

    // Gallery View
   return (
        <Layout modal>
            <SEO title="Gallery" />
            <div id="GalleryPageContainer">
                <PhotoGallery gallery={gallery}/>
            </div>                
        </Layout>        
    )
}

export default GalleryPage;