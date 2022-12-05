import { Container } from "./FlashCard.styles";
import Play from "../../assets/img/seta_play.png";
import Turn from "../../assets/img/seta_virar.png";
import ErrorIcon from "../../assets/img/icone_erro.png";
import AlmostIcon from "../../assets/img/icone_quase.png";
import SuccessIcon from "../../assets/img/icone_certo.png";
import { useState } from "react";

export default function FlashCard(props) {
  const [cardOpen, setCardOpen] = useState(false);
  const [cardTurned, setCardTurned] = useState(false);
  const [cardFinished, setCardFinished] = useState(false);
  const [cardStatus, setCardStatus] = useState(null);

  function renderContent() {
    if (cardFinished) {
      let icon = null;
      switch (cardStatus) {
        case "green":
          icon = (<img src={SuccessIcon} alt="Success Icon" />);
          break;
        case "yellow":
          icon = (<img src={AlmostIcon} alt="Almost Icon" />);
          break;
        default:
          icon = (<img src={ErrorIcon} alt="Error Icon" />);
          break;
      }
      return (
        <Container className={`finished ${cardStatus}`}>
          <p>Pergunta {props.index + 1}</p>
          {icon}
        </Container>
      );
    }

    if (cardTurned) {
      return (
        <Container className="open back">
          <p>{props.card.answer}</p>
          <div className="buttons">
            <button className="red" onClick={() => {finishCard('red')}}>Não lembrei</button>
            <button className="yellow" onClick={() => {finishCard('yellow')}}>Quase não lembrei</button>
            <button className="green" onClick={() => {finishCard('green')}}>Zap!</button>
          </div>
        </Container>
      );
    }

    if (cardOpen) {
      return (
        <Container className="open">
          <p>{props.card.question}</p>
          <img
            src={Turn}
            alt="Turn Button"
            onClick={() => setCardTurned(true)}
          />
        </Container>
      );
    }

    return (
      <Container>
        <p>Pergunta {props.index + 1}</p>
        <img src={Play} alt="Play Button" onClick={() => setCardOpen(true)} />
      </Container>
    );
  }

  function finishCard(status) {
    props.setCountConcluded(prev => prev+1);
    setCardStatus(status);
    setCardFinished(true);
  }

  return (
    <>{renderContent()}</>
  );
}
