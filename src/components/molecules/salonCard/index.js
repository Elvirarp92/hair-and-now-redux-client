import { CardImg, CardName } from './../../atoms'
import { CardContainer } from './styled'

const SalonCard = ({ ...props }) => {
  return (
    <CardContainer>
      <CardImg src='./../../../../default-barbershop-tim-mossholder-unsplash.jpg' />
      <CardName>{props.name}</CardName>
    </CardContainer>
  )
}

export { SalonCard }
