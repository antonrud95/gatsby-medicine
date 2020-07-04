import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from '~/components/header/header.component'

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(query)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />

      <main>{children}</main>

      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> and{' '}
        <a href="http://strapi.io">Strapi</a>
      </footer>
    </>
  )
}

export default Layout
