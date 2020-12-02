import styled from 'styled-components'
import './../../../utils/fonts.css'
import { theme } from './../../../utils/constants'

const CardName = styled.p`
  font-family: 'Montserrat', sans-serif;
  color: ${props => props.theme.red};
  font-size: 16px;
  font-weight: 300;
`

CardName.defaultProps = {
  theme: theme,
}

export { CardName }
