import React from 'react'

const Layout = ({ children }) => {
  return (
    <>
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
