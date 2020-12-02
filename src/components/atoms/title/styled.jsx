import styled from 'styled-components'
import './../../../utils/fonts.css'
import { theme } from './../../../utils/constants'

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  font-size: 36px;
  color: ${(props) => props.theme.blue};
  text-align: center;
`

Title.defaultProps = {
  theme: theme,
}

export { Title }
