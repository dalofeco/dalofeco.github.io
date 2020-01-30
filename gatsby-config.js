module.exports = {
  // pathPrefix: "/dalofeco.github.io",
  siteMetadata: {
    title: 'Dalofeco',
    description: "Dalofeco's legitimate portfolio website",
    author: 'dalofeco',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`,
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Dalofeco',
        short_name: 'dalofeco',
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-compile-es6-packages',
    'gatsby-plugin-typescript'
  ],
}
