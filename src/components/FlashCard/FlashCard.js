import { Container } from "./FlashCard.styles";
import Play from "../../assets/img/seta_play.png";
import Turn from "../../assets/img/seta_virar.png";
import ErrorIcon from "../../assets/img/icone_erro.png";
import AlmostIcon from "../../assets/img/icone_quase.png";
import SuccessIcon from "../../assets/img/icone_certo.png";

export default function FlashCard(props) {
  return (
    <Container>
      <p>Pergunta 1</p>
      <img src={Play} alt="Play Button" />
    </Container>

    // <Container className='open'>
    //   O que é JSX?
    //   <img src={Turn} alt="Turn Button" />
    // </Container>

    // <Container className="open back">
    //   JSX é uma sintaxe para escrever HTML dentro do JS
    //   <div className="buttons">
    //     <button className="red">Não lembrei</button>
    //     <button className="yellow">Quase não lembrei</button>
    //     <button className="green">Zap!</button>
    //   </div>
    // </Container>

    // <Container className="finished red">
    //   <p>Pergunta 1</p>
    //   <img src={ErrorIcon} alt="Error Icon" />
    // </Container>

    // <Container className="finished yellow">
    //   <p>Pergunta 1</p>
    //   <img src={AlmostIcon} alt="Almost Icon" />
    // </Container>

    // <Container className="finished green">
    // <p>Pergunta 1</p>
    // <img src={SuccessIcon} alt="Success Icon" />
    // </Container>
  );
}
