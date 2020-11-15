import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'

import SaleItem from '~/components/ui/general/sale-item/sale-item.component'

import styles from './products-section.module.scss'

import { PageContext } from '~/contexts/data-provider.context'

const ProductsSection = ({ sales }) => {
  const { cart, addCart } = useContext(PageContext)

  return (
    <Container fluid>
      <h2 className={styles.mainTitle}>Акционные товары</h2>
      <Container className={styles.productsContainer}>
        {sales.map((sale) => {
          const addCartFunc = () => {
            addCart(sale)
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
              children={'Добавить в корзину'}
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
              click={addCartFunc}
            />
          )
        })}
      </Container>
    </Container>
  )
}

export default ProductsSection
