import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Container } from 'react-bootstrap'
import SInput from '~/components/ui/general/input/input.component'
import SButton from '~/components/ui/general/button/button.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import styles from './hero-section.module.scss'
import Img from 'gatsby-image'

const HeroSection = () => {
  const data = useStaticQuery(graphql`
    query {
      firstStep: file(relativePath: { eq: "images/hero/first-step.png" }) {
        childImageSharp {
          fluid(maxWidth: 270, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      secondStep: file(relativePath: { eq: "images/hero/second-step.png" }) {
        childImageSharp {
          fluid(maxWidth: 270, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container>
      <div className={styles.heroBlock}>
        <h2 className={styles.headerMainTitle}>
          Введи название препарата в строку ниже
        </h2>
        <div className={styles.formWrapper}>
          <FontAwesomeIcon
            icon={faSearch}
            size="lg"
            className={styles.iconStyles}
          />
          <SInput
            type="text"
            placeholder="Введите название препарата"
            styles={styles.input}
          />
          <SButton variant="primary" className={styles.formBtn}>
            Найти
          </SButton>
        </div>
        <div className={styles.imageWrapper}>
          <Img
            fluid={data.firstStep.childImageSharp.fluid}
            className={styles.headerImage}
          />
          <Img
            fluid={data.secondStep.childImageSharp.fluid}
            className={styles.headerImage}
          />
        </div>
      </div>
    </Container>
  )
}
export default HeroSection
