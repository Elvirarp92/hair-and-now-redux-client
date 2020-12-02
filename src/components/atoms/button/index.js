import React from 'react'
import { ReactLinkButton, FormButton } from './styled'

const Button = ({ ...props }) => {
  if (props.isLink) {
    return <ReactLinkButton {...props} />
  } else {
    return <FormButton {...props} />
  }
}

export { Button }
