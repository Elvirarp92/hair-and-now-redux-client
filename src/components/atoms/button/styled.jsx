import styled from 'styled-components'
import { Link } from 'react-router-dom'
import './../../../utils/fonts.css'
import { theme } from './../../../utils/constants'

const ReactLinkButton = styled(Link)`
  display: block;
  height: ${props => props.size == 'small' ? '35px' : '45px'};
  width: ${props => props.size == 'small' ? '95px' : '250px'};
  border-radius: 5px;
  border: ${(props) => {
    if (props.isSolid) {
      return `0px`
    } else if (props.color == 'blue') {
      return `1px solid ${props.theme.blue}`
    } else if (props.color == 'red') {
      return `1px solid ${props.theme.red}`
    }
  }};
  font-family: 'Montserrat', sans-serif;
  background: ${(props) => {
    if (!props.isSolid) {
      return props.theme.white
    } else if (props.color == 'blue') {
      return props.theme.blue
    } else if (props.color == 'red') {
      return props.theme.red
    }
  }};
  color: ${(props) => {
    if (props.isSolid) {
      return props.theme.white
    } else if (props.color == 'blue') {
      return props.theme.blue
    } else if (props.color == 'red') {
      return props.theme.red
    }
  }};
  padding: 0.25em 1em;
  text-align: center;
`

const FormButton = styled.button`
  display: block;
  height: ${props => props.size == 'small' ? '35px' : '45px'};
  width: ${props => props.size == 'small' ? '95px' : '250px'};
  border-radius: 5px;
  border: ${(props) => {
    if (props.isSolid) {
      return `0px`
    } else if (props.color == 'blue') {
      return `1px solid ${props.theme.blue}`
    } else if (props.color == 'red') {
      return `1px solid ${props.theme.red}`
    }
  }};
  font-family: 'Montserrat', sans-serif;
  background: ${(props) => {
    if (!props.isSolid) {
      return props.theme.white
    } else if (props.color == 'blue') {
      return props.theme.blue
    } else if (props.color == 'red') {
      return props.theme.red
    }
  }};
  color: ${(props) => {
    if (props.isSolid) {
      return props.theme.white
    } else if (props.color == 'blue') {
      return props.theme.blue
    } else if (props.color == 'red') {
      return props.theme.red
    }
  }};
  padding: 0.25em 1em;
  text-align: center;
`

ReactLinkButton.defaultProps = {
  theme: theme,
}

FormButton.defaultProps = ReactLinkButton.defaultProps

export { ReactLinkButton, FormButton }
