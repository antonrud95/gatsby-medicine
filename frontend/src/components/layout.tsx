import React from 'react'
import Navbar from '~/components/ui/general/navbar/navbar.component'
import Footer from '~/components/sections/footer/footer.component'
import '~/styles/index.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
