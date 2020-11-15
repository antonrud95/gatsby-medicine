import React from 'react'

import FC from '~/types/fc'

interface Props {
  type: string
  styles: string
  placeholder: string
  value?: any
  onchange?: any
}

const SInput: FC<Props> = ({ type, styles, placeholder, value, onchange }) => {
  return (
    <input
      type={type}
      className={styles}
      placeholder={placeholder}
      value={value}
      onChange={onchange}
    />
  )
}

export default SInput
