/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'JamesHagood Design and Development',
    description:
      'Fullstack JavaScript Development To Fit All of Your Application Needs. Using The Latest Most Cutting Edge Technology That Web Development Has To Offer. Delivering Blazing Fast Web Sites to All of Your Customers Improving The Customer Experience',
    author: 'James Hagood',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `workImages`,
        path: `${__dirname}/src/workImages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `constants`,
        path: `${__dirname}/src/constants/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
          },
          {
            family: `Poppins`,
            subsets: [`latin`],
          },
          {
            family: `Poppins`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
  ],
};
