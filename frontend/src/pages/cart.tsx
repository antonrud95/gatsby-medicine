import React from 'react'

import Layout from '~/components/layout'
import SEO from '~/components/seo.component'
import CartSection from '~/components/sections/cart-section/cart-section.component'

const CartPage = () => {
  return (
    <Layout>
      <SEO title="Unikorns Starter Kit" />
      <CartSection />
    </Layout>
  )
}

export default CartPage
