const sanitizeHtml = require('./src/util/sanitizeDocExport')

module.exports = {
  siteMetadata: {
    title: `Gaardbo Digital`,
    description: `Portfolio Page`,
    author: `JJGaardbo`,
  },
  plugins: [
    {
      resolve: '@acto/gatsby-plugin-drive',
      options: {
        folderId: '1HwWPwl65cFQZas-GhUOZo_XFJXJGjgKH',
        keyFile: `${__dirname}/client_secret.json`,
        destination: `${__dirname}/content`,
        exportGDocs: true,
        exportMimeType: 'text/html',
        exportMiddleware: sanitizeHtml
      }
    },
    {
      resolve: '@acto/gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: '@acto/gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`
      }
    },
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-emotion',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
