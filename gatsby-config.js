module.exports = {
  siteMetadata: {
    title: `Nemecek Audio`,
    description: `Audio Portfolio`,
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
         bucketName: 'thiagonemecek.com'
     }
    }
  ]
}