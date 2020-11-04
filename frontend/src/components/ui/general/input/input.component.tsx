import React from 'react'

import FC from '~/types/fc'

interface Props {
  type: string
  styles: string
  placeholder: string
}

const SInput: FC<Props> = ({ type, styles, placeholder }) => {
  return <input type={type} className={styles} placeholder={placeholder} />
}

export default SInput
