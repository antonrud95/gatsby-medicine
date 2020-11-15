import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Container } from 'react-bootstrap'
import SInput from '~/components/ui/general/input/input.component'
import SButton from '~/components/ui/general/button/button.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import styles from './hero-section.module.scss'
import Img from 'gatsby-image'

const HeroSection = ({ items }) => {
  const data = useStaticQuery(graphql`
    query {
      firstStep: file(relativePath: { eq: "images/hero/first-step.png" }) {
        childImageSharp {
          fluid(maxWidth: 270, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      line: file(relativePath: { eq: "images/hero/line.png" }) {
        childImageSharp {
          fluid(maxWidth: 174, quality: 100) {
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
      leftBg: file(relativePath: { eq: "images/hero/image-left.png" }) {
        childImageSharp {
          fluid(maxWidth: 264, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rightBg: file(relativePath: { eq: "images/hero/image-right.png" }) {
        childImageSharp {
          fluid(maxWidth: 368, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [show, setShow] = useState(false)
  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    const titles = items.map((item) => item.title)
    const results = titles.filter((item) =>
      item.toLowerCase().includes(searchTerm)
    )
    setSearchResults(results)
  }, [searchTerm])

  const showTrue = () => {
    setShow(true)
  }
  const showFalse = () => {
    setShow(false)
  }
  return (
    <Container fluid className={styles.fluidContainer}>
      <Container>
        <div className={styles.heroBlock}>
          <h2 className={styles.headerMainTitle}>
            Введи название препарата в строку ниже
          </h2>
          <div className={styles.formWrapper}>
            <div className={styles.searchBox}>
              <FontAwesomeIcon
                icon={faSearch}
                size="lg"
                className={styles.iconStyles}
              />
              <SInput
                type="text"
                placeholder="Введите название препарата"
                styles={styles.input}
                value={searchTerm}
                onchange={handleChange}
              />
            </div>

            <SButton
              variant="primary"
              className={styles.formBtn}
              onClick={showTrue}
            >
              Найти
            </SButton>
            {show && (
              <div className={styles.goodsWrapper} onMouseLeave={showFalse}>
                {searchResults.map((item) => (
                  <li key={item.id}>{item}</li>
                ))}
              </div>
            )}
          </div>
          <div className={styles.imageWrapper}>
            <Img
              fluid={data.firstStep.childImageSharp.fluid}
              className={styles.headerImage}
            />
            <Img
              fluid={data.line.childImageSharp.fluid}
              className={styles.lineImage}
            />
            <Img
              fluid={data.secondStep.childImageSharp.fluid}
              className={styles.headerImage}
            />
          </div>
          <div className={styles.bgImageWrapper}>
            <Img
              fluid={data.leftBg.childImageSharp.fluid}
              className={styles.headerLeftImage}
            />
            <Img
              fluid={data.rightBg.childImageSharp.fluid}
              className={styles.headerRightImage}
            />
          </div>
        </div>
      </Container>
    </Container>
  )
}
export default HeroSection
