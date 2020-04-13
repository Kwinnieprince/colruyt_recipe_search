module.exports = {
  siteMetadata: {
    siteUrl: `https://food.kwinten.me`,
    title: `Wat eten we vandaag?`,
    description: `Weet je echt niet wat te eten vandaag of is de vraag weer: Wat eten we vandaag? kies wat voor soort eten je wilt eten, het seizoen waarin je eten wilt, of je vegetarisch wilt eten of niet en dan wordt een recept gekozen zodat je geen keuzestress meer moet hebben!`,
    author: `@kwintenD`,
  },
  plugins: [
    `gatsby-plugin-cname`,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-139623427-2",
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
    // },
  ],
}
