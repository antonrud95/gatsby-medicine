import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import styles from './footer-section.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      flower: file(relativePath: { eq: "images/footer/flower.png" }) {
        childImageSharp {
          fluid(maxWidth: 94, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <React.Fragment>
      <Container fluid className={styles.upperContainer}>
        <Container className={styles.upperBorderContainer}>
          <div className={styles.logoWrapper}>
            <Link to="/" className={styles.navLinkLogo}>
              Logo
            </Link>
          </div>
          <div className={styles.pageLinks}>
            <div className={styles.pageLeftWrapper}>
              <Link
                to="/"
                className={[styles.border, styles.pageLinkUpper].join(' ')}
              >
                Политика конфиденциальности
              </Link>
              <Link to="/" className={styles.pageLinkLower}>
                Правила доставки препаратов
              </Link>
            </div>
            <div className={styles.pageRightWrapper}>
              <Link
                to="/"
                className={[styles.border, styles.pageLinkUpper].join(' ')}
              >
                Каталог препаратов
              </Link>
              <Link to="/" className={styles.pageLinkLower}>
                Контакты
              </Link>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <Img
              fluid={data.flower.childImageSharp.fluid}
              className={styles.imageStyles}
            />
          </div>
          <div className={styles.phoneWrapper}>
            <Link to="/" className={styles.navLink}>
              <FontAwesomeIcon icon={faPhoneAlt} className={styles.phoneIcon} />
              +38 050 937 99 92
            </Link>
          </div>
        </Container>
      </Container>
      <Container fluid className={styles.lowerContainer}>
        <Container className={styles.lowerBorderContainer}>
          <h2 className={styles.footerTitle}>
            Самолечение может нанести вред вашему здоровью
          </h2>
        </Container>
      </Container>
    </React.Fragment>
  )
}
export default Footer
