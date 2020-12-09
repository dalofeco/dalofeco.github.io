import React from 'react';
import { useParams } from 'react-router-dom';
import useGallery from '../hooks/gallery';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { PhotoGallery, PhotoAlbum } from '../components/gallery';
import { GalleryType, PhotoAlbumType } from '../data/photo';
import Loading from '../components/loading';

import '../styles/pages/gallery.less';

interface GalleryPageParams {
  albumId: string;
}

const GalleryPage = () => {
  const [album, setAlbum] = React.useState<PhotoAlbumType | undefined>(undefined);
  const { albumId } = useParams<GalleryPageParams>();
  const gallery: GalleryType = useGallery();

  React.useEffect(() => {
    if (gallery && albumId)
      setAlbum(gallery.albums.find((a) => a.name?.toLowerCase() === decodeURI(albumId).toLowerCase()));
    else setAlbum(undefined);
  }, [albumId, gallery]);

  // Photo Album View
  if (gallery && album)
    return (
      <Layout modal closeLink="/gallery">
        <SEO title={`${album.name} Gallery`} />
        <div id="GalleryPageContainer">
          <PhotoAlbum album={album} updateAlbum={setAlbum} />
        </div>
      </Layout>
    );

  // Gallery View
  if (gallery)
    return (
      <Layout modal>
        <SEO title="Gallery" />
        <div id="GalleryPageContainer">
          <PhotoGallery gallery={gallery} />
        </div>
      </Layout>
    );

  return <Loading />;
};

export default GalleryPage;
