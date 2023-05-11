import React, { MouseEvent } from 'react'

interface Button {
 text: string
 onClick?: MouseEvent<HTMLButtonElement>
}



const Button: React.FC<Button> = (props: Button) => {
  return (
    <button
    >{props.text}</button>
  )
}

export default Button