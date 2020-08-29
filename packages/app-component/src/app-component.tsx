import React, { FC } from 'react'

interface AppProps {
    msg: string
}

const key = 'app-component-key'

const App: FC<AppProps> = ({ msg }) => {

    return (
        <h1>hello {msg ? msg : 'react' }!</h1>
    )
}

export default App
