import React from 'react'
import { graphql } from 'gatsby'

import Layout from '~/components/layout'
import SEO from '~/components/seo.component'
import HeroSection from '~/components/sections/hero-section/hero-section.component'
import ProductsSection from '~/components/sections/products-section/products-section.component'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Unikorns Starter Kit" />
      <HeroSection items={data.allStrapiSales.nodes} />
      <ProductsSection sales={data.allStrapiSales.nodes} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiSales {
      nodes {
        id
        title
        descFirst
        descSecond
        descThird
        descFourth
        price
        oldPrice
        image {
          childImageSharp {
            fluid(maxWidth: 270, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default IndexPage
