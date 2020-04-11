module.exports = {
  siteMetadata: {
    title: `Wat eten we vandaag?`,
    description: `Zoek eten op de website van de colruyt`,
    author: `@kwintenD`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `steenweg project`,
        short_name: `steenweg`,
        start_url: `/`,
        background_color: `#428bca`,
        theme_color: `#428bca`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-fathom',
    //   options: {
    //     // Fathom server URL. Defaults to `cdn.usefathom.com`
    //     trackingUrl: 'vm.kwinten.me',
    //     // Unique site id
    //     siteId: 'EKLWA'
    //   }
    },
  ],
}
