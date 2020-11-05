import React from 'react'
import Img, { FluidObject } from 'gatsby-image'

import FC from '~/types/fc'
import SButton from '~/components/ui/general/button/button.component'

interface Props {
  itemWrapper?: string
  image: FluidObject
  imageStyles: string
  title: string
  titleStyles?: string
  contentContainer?: string
  contentContainerItem?: string
  containerTextStyles?: string
  containerSpan?: string
  containerDescriptionStyles?: string
  containerDescription: string
  containerDescriptionSecond: string
  containerDescriptionThird: string
  containerDescriptionFourth: string
  price: string
  stylesPrice?: string
  oldPrice: string
  stylesOldPrice?: string
  priceContainer?: string
  variant?: any
  btnStyles?: string
  children?: any
}

const SaleItem: FC<Props> = ({
  itemWrapper,
  image,
  imageStyles,
  title,
  titleStyles,
  contentContainer,
  contentContainerItem,
  containerTextStyles,
  containerSpan,
  containerDescriptionStyles,
  containerDescription,
  containerDescriptionSecond,
  containerDescriptionThird,
  containerDescriptionFourth,
  price,
  stylesPrice,
  oldPrice,
  stylesOldPrice,
  priceContainer,
  variant,
  btnStyles,
  children,
}) => {
  return (
    <div className={itemWrapper}>
      <Img fluid={image} className={imageStyles} />
      <h3 className={titleStyles}>{title}</h3>
      <div className={contentContainer}>
        <div className={contentContainerItem}>
          <span className={containerSpan} />
          <p className={containerTextStyles}>Дозировка:</p>
          <p className={containerDescriptionStyles}>{containerDescription}</p>
        </div>
        <div className={contentContainerItem}>
          <span className={containerSpan} />
          <p className={containerTextStyles}>Форма выпуска:</p>
          <p className={containerDescriptionStyles}>
            {containerDescriptionSecond}
          </p>
        </div>
        <div className={contentContainerItem}>
          <span className={containerSpan} />
          <p className={containerTextStyles}>Действующее в-во</p>
          <p className={containerDescriptionStyles}>
            {containerDescriptionThird}
          </p>
        </div>
        <div className={contentContainerItem}>
          <span className={containerSpan} />
          <p className={containerTextStyles}>Кол-во в-ва в составе</p>
          <p className={containerDescriptionStyles}>
            {containerDescriptionFourth}
          </p>
        </div>
      </div>
      <div className={priceContainer}>
        <p className={stylesPrice}>{price}</p>
        <p className={stylesOldPrice}>{oldPrice}</p>
      </div>
      <SButton variant={variant} className={btnStyles}>
        {children}
      </SButton>
    </div>
  )
}

export default SaleItem
