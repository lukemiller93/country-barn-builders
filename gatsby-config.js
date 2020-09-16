const config = require("./config/site")

module.exports = {
  siteMetadata: {
    ...config,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static/assets`,
      },
    },
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
        name: `locations`,
        path: `${__dirname}/content/locations`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `specials`,
        path: `${__dirname}/content/specials`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `specials`,
        path: `${__dirname}/content/shed-styles`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 650,
              quality: 75,
              withWebP: true,
            },
          },
        ],
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "config/typography.js",
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-138397284-1`,
        //puts tracking script in the head instead of the body
        head: true,
      },
    },
    "gatsby-plugin-offline",
  ],
}
