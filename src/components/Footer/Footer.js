import { Container } from './Footer.styles'

export default function Footer(props) {
  return (
    <Container>
      <div data-test="footer" className="concluded">
        {props.countConcluded}/{props.cardsLength} CONCLUÍDOS
      </div>
    </Container>
  )
}