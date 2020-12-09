import React from 'react';
import Helmet from 'react-helmet';
import SiteMetadata from '../data/site';

interface SEOProps {
  title: string;
  description?: string;
  lang?: string;
}

const SEO = ({ title, description = '', lang = 'en' }: SEOProps) => {
  // const { site } = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           title
  //           description
  //           author
  //         }
  //       }
  //     }
  //   `,
  // );

  // Description
  const metaDescription = React.useMemo(() => description || SiteMetadata.description, [description]);

  return (
    <Helmet
      title={title}
      htmlAttributes={{ lang }}
      titleTemplate={`%s | ${SiteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: SiteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ]}
    />
  );
};

export default SEO;
