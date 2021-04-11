module.exports = {
  siteMetadata: {
    title: `https://s.cann.i.ng`,
    author: `@scanning`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-splitbee`,
      options: {
        includeInDevelopment: false,
        delayTimeout: 0,
        disableCookie: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
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
        icon: `src/images/scanning.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
