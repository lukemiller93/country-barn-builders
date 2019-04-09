import React from "react"
import Helmet from "react-helmet"
import propTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
const Seo = ({ title, desc, pathname, article, banner }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        buildTime,
        siteMetadata: {
          defaultBanner,
          defaultTitle,
          shortName,
          author,
          siteLanguage,
          logo,
          siteUrl,
          pathPrefix,
          defaultDescription,
          twitter,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: desc || defaultDescription,
        image: `${siteUrl}${banner || defaultBanner}`,
        url: `${siteUrl}${pathname || "/"}`,
      }
      const realPrefix = pathPrefix === "/" ? "" : pathPrefix
      let schemaOrgJSONLD = [
        {
          "@context": "http://schema.org",
          "@type": "WebSite",
          "@id": siteUrl,
          url: siteUrl,
          name: defaultTitle,
          alternateName: defaultTitle || "",
        },
      ]
      if (article) {
        schemaOrgJSONLD = [
          {
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            "@id": seo.url,
            url: seo.url,
            name: title,
            alternateName: title || "",
            headline: title,
            image: {
              "@type": "ImageObject",
              url: seo.image,
            },
            description: seo.description,
            datePublished: buildTime,
            dateModified: buildTime,
            author: {
              "@type": "Person",
              name: author,
            },
            publisher: {
              "@type": "Organization",
              name: author,
              logo: {
                "@type": "ImageObject",
                url: siteUrl + realPrefix + logo,
              },
            },
            isPartOf: siteUrl,
            mainEntityOfPage: {
              "@type": "WebSite",
              "@id": siteUrl,
            },
          },
        ]
      }
      return (
        <>
          <Helmet title={`${seo.title} | ${defaultTitle}`}>
            <html lang={siteLanguage} />
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta name="apple-mobile-web-app-title" content={shortName} />
            <meta name="application-name" content={shortName} />
            <script type="application/ld+json">
              {JSON.stringify(schemaOrgJSONLD)}
            </script>

            {/* OpenGraph  */}
            <meta property="og:url" content={seo.url} />
            <meta property="og:type" content={article ? "article" : null} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={twitter} />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
          </Helmet>
        </>
      )
    }}
  />
)
export default Seo

Seo.propTypes = {
  title: propTypes.string,
  desc: propTypes.string,
  banner: propTypes.string,
  pathname: propTypes.string,
  article: propTypes.bool,
}

Seo.defaultProps = {
  title: null,
  desc: null,
  banner: null,
  pathname: null,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        defaultTitle: title
        shortName
        author
        siteLanguage
        logo
        siteUrl: url
        pathPrefix
        defaultDescription: description
        defaultBanner: banner
        twitter
      }
    }
  }
`
