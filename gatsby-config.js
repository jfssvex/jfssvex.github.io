module.exports = {
  siteMetadata: {
    title: `JFSS VEX Robotics`,
    description: `John Fraser's one and only robotics team`,
    author: `@FraserJags`, // maybe make a Twitter at some point
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
        name: `JFSS VEX Robotics`,
        short_name: `JFSS VEX`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#571f86`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-chakra-ui`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
