import React from 'react'
import { DataProvider } from '~/contexts/data-provider.context'

export const wrapRootElement = ({ element }) => (
  <DataProvider>{element}</DataProvider>
)
