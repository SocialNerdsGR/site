require("dotenv").config({ path: ".env" });

module.exports = {
  siteMetadata: {
    title: `SocialNerds`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `SocialNerds`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-eventbrite`,
      options: {
        organizationId: process.env.EVENTBRITE_ORGANIZATION,
        accessToken: process.env.EVENTBRITE_TOKEN,
        entities: ["events"],
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
  ],
};
// {
//   resolve: `gatsby-plugin-manifest`,
//   options: {
//     name: `gatsby-starter-default`,
//     short_name: `starter`,
//     start_url: `/`,
//     background_color: `#663399`,
//     theme_color: `#663399`,
//     display: `minimal-ui`,
//     icon: `src/images/gatsby-icon.png`,
//   },
// },
