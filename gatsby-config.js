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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `product-images`,
        path: `${__dirname}/src/assets/images/products`,
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "4sixes-liquor-store.local",
        protocol: "http",
        hostingWPCOM: false,
        useACF: true,
      },
    },
  ],
};
