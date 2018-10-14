module.exports = {
  siteMetadata: {
    title: 'Automatic Filling Machine : IDCard Mark 2',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: './src/images/codefin.png',
      },
    },
    'gatsby-plugin-offline',
  ],
}
