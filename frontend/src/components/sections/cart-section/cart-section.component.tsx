import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'

import SaleItem from '~/components/ui/general/sale-item/sale-item.component'

import styles from './cart-section.module.scss'

import { PageContext } from '~/contexts/data-provider.context'

import EmptyCartImage from '~/assets/images/cart/empty.svg'

const CartSection = () => {
  const { cart, removeCart } = useContext(PageContext)
  console.log(cart)

  return (
    <Container fluid className={styles.cartMain}>
      <h2 className={styles.mainTitle}>Корзина товаров</h2>
      {cart.length === 0 && (
        <>
          <p className={styles.emptyTitle}>Ваша корзина пуста :(</p>
          <div className={styles.logoEmptyWrapper}>
            <EmptyCartImage className={styles.logoEmpty} />
          </div>
        </>
      )}
      <Container className={styles.productsContainer}>
        {cart.map((sale) => {
          const removeCartFunc = () => {
            removeCart(sale.id)
          }
          return (
            <SaleItem
              key={sale.id}
              title={sale.title}
              containerDescription={sale.descFirst}
              containerDescriptionSecond={sale.descSecond}
              containerDescriptionThird={sale.descThird}
              containerDescriptionFourth={sale.descFourth}
              price={sale.price}
              oldPrice={sale.oldPrice}
              image={sale.image.childImageSharp.fluid}
              imageStyles={styles.imgItemStyles}
              children={'Убрать из корзины'}
              variant={'primary'}
              itemWrapper={styles.productItem}
              titleStyles={styles.productTitle}
              contentContainer={styles.rowDescriptionContainer}
              contentContainerItem={styles.rowDescription}
              priceContainer={styles.priceContainer}
              containerSpan={styles.productSpan}
              containerTextStyles={styles.rowText}
              containerDescriptionStyles={styles.rowBlueText}
              stylesPrice={styles.price}
              stylesOldPrice={styles.oldPrice}
              btnStyles={styles.btnStyles}
              click={removeCartFunc}
            />
          )
        })}
      </Container>
    </Container>
  )
}

export default CartSection
