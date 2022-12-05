import { Container } from './Header.styles'
import Logo from '../../assets/img/logo.png';

export default function Header() {
  return (
    <Container>
      <img src={Logo} alt='Logo'></img>
      <h1>ZapRecall</h1>
    </Container>
  )
}