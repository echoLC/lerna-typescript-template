import React, { FC } from 'react'

export interface AppProps {
  name?: string
}

const AppComponent: FC<AppProps> = ({ name }) => {
  return (
    <h1>hello {name ? name : 'react' }!</h1>
  )
}

export default AppComponent
