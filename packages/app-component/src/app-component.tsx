import React, { FC } from 'react'

interface AppProps {
  name: string
}

const App: FC<AppProps> = ({ name }) => {
  return (
    <h1>hello {name ? name : 'react' }!</h1>
  )
}

export default App
