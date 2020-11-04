import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import classnames from 'classnames'

import Button from '~/components/ui/general/button/button.component'

import styles from './navbar.module.scss'

const SNavbar = () => {
  return (
    <Navbar
      fixed="top"
      className={classnames(styles.navbar, styles.navbar__onLight)}
    >
      <Container>
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
          <Button variant={'secondary'} className={styles.navBtn}>
            Корзина
            <FontAwesomeIcon
              icon={faShoppingBasket}
              className={styles.basketIcon}
              size="lg"
            />
          </Button>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default SNavbar
