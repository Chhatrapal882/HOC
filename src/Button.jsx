import React from 'react'

function Button({onClick,children,color}) {
  return (
        <button onClick={onClick} style={{backgroundColor:color}}>{children}</button>
  )
}

export default Button