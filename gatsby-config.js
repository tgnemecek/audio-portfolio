module.exports = {
  siteMetadata: {
    title: `Thiago Nemecek`,
    description: `Audio Portfolio`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    'gatsby-plugin-smoothscroll',
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