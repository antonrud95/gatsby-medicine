import React, { useState, useContext } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import Link from 'gatsby-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import classnames from 'classnames'
import { PageContext } from '~/contexts/data-provider.context'

import Button from '~/components/ui/general/button/button.component'

import styles from './navbar.module.scss'

const SNavbar = () => {
  const { cart } = useContext(PageContext)

  const [isOnTop, setOnTop] = useState(true)
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (currPos.y >= -50) {
        setOnTop(true)
      } else {
        setOnTop(false)
      }
    },
    [isOnTop]
  )
  return (
    <Navbar
      fixed="top"
      className={
        !isOnTop
          ? classnames(styles.navbar, styles.navbar__onLight)
          : styles.navbar
      }
    >
      <Container className={styles.navFlex}>
        <Link to="/" className={styles.navLinkLogo}>
          Logo
        </Link>
        <Nav className={classnames(styles.nav, 'mr-4', 'ml-auto')}>
          <Link to="/" className={styles.navLink}>
            <FontAwesomeIcon icon={faPhoneAlt} className={styles.phoneIcon} />
            +38 050 937 99 92
          </Link>
        </Nav>
        <Nav className={styles.nav}>
          <Link to="/cart">
            <Button variant={'secondary'} className={styles.navBtn}>
              Корзина
              <FontAwesomeIcon
                icon={faShoppingBasket}
                className={styles.basketIcon}
                size="lg"
              />
              <span className={styles.cartSpan}>{cart.length}</span>
            </Button>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default SNavbar
