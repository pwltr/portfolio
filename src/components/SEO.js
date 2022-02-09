import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ title, description, keywords, pathname }) {
  return (
    <StaticQuery
      query={query}
      render={({
        site: {
          siteMetadata: {
            title,
            // titleTemplate,
            description,
            keywords,
            url,
            // defaultImage,
            twitterUsername,
          },
        },
      }) => {
        const seo = {
          title: `${title} | ${pathname || 'Portfolio'}`,
          description: description || defaultDescription,
          keywords,
          // image: `${siteUrl}${image || defaultImage}`,
          url: `${url}${pathname || '/'}`,
        }

        return (
          <Helmet title={seo.title}>
            <meta name="description" content={seo.description} />
            {seo.keywords && <meta name="keywords" content={seo.keywords} />}
            <meta name="image" content={seo.image} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {/* {(article ? true : null) && (
              <meta property="og:type" content="article" />
            )} */}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && <meta property="og:description" content={seo.description} />}
            {/* {seo.image && <meta property="og:image" content={seo.image} />} */}
            {/* <meta name="twitter:card" content="summary_large_image" /> */}
            {twitterUsername && <meta name="twitter:creator" content={twitterUsername} />}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && <meta name="twitter:description" content={seo.description} />}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
            <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
            <link rel="manifest" href="/favicons/site.webmanifest" />
            <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
            <link rel="icon" href="/favicons/favicon.ico" />
            <meta name="msapplication-TileColor" content="#2b5797" />
            <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
            <meta name="theme-color" content="#ffffff" />
          </Helmet>
        )
      }}
    />
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        keywords
        url
        twitterUsername
      }
    }
  }
`
