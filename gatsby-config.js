module.exports = {
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-root-import",
    "gatsby-transformer-json",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "4sixes.coreyhutcheson.com",
        protocol: "https",
        hostingWPCOM: false,
        useACF: true,
      },
    },
  ],
};
