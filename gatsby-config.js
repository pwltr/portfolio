module.exports = {
  siteMetadata: {
    title: 'Philipp Walter',
    description: 'Fullstack Developer',
    keywords: 'developer, fullstack, javascript, typescript, react, nodejs, fullstack, hire, contact',
    url: 'https://www.pwltr.me',
    twitterUsername: '@_pwltr',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-postcss',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/layout.js'),
      },
    },
  ],
}
