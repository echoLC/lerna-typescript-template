import React, { FC } from 'react'
import LcRcHeader from 'lc-rc-header'

export interface AppProps {
  name?: string
}

const AppComponent: FC<AppProps> = ({ name }) => {
  return (
    <LcRcHeader title={name} />
  )
}

export default AppComponent
