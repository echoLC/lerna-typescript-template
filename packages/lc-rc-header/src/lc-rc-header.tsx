import React, { FC } from 'react'

interface LcRcHeaderProps {
  title: string
}

const LcRcHeader: FC<LcRcHeaderProps> = (props) => {
  return (
  <h2>{props.title}</h2>
  )      
}

export default LcRcHeader
