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
          icon = (<img data-test="no-icon" src={SuccessIcon} alt="Success Icon" />);
          break;
        case "yellow":
          icon = (<img data-test="partial-icon" src={AlmostIcon} alt="Almost Icon" />);
          break;
        default:
          icon = (<img data-test="zap-icon" src={ErrorIcon} alt="Error Icon" />);
          break;
      }
      return (
        <Container className={`finished ${cardStatus}`}>
          <p data-test="flashcard-text">Pergunta {props.index + 1}</p>
          {icon}
        </Container>
      );
    }

    if (cardTurned) {
      return (
        <Container className="open back">
          <p data-test="flashcard-text">{props.card.answer}</p>
          <div className="buttons">
            <button className="red" data-test="no-btn" onClick={() => {finishCard('red')}}>Não lembrei</button>
            <button className="yellow" data-test="partial-btn" onClick={() => {finishCard('yellow')}}>Quase não lembrei</button>
            <button className="green" data-test="zap-btn" onClick={() => {finishCard('green')}}>Zap!</button>
          </div>
        </Container>
      );
    }

    if (cardOpen) {
      return (
        <Container className="open">
          <p data-test="flashcard-text">{props.card.question}</p>
          <img
            src={Turn}
            alt="Turn Button"
            data-test="turn-btn"
            onClick={() => setCardTurned(true)}
          />
        </Container>
      );
    }

    return (
      <Container>
        <p data-test="flashcard-text">Pergunta {props.index + 1}</p>
        <img src={Play} alt="Play Button" data-test="play-btn" onClick={() => setCardOpen(true)} />
      </Container>
    );
  }

  function finishCard(status) {
    props.setCountConcluded(prev => prev+1);
    setCardStatus(status);
    setCardFinished(true);
  }

  return (
    <div data-test="flashcard">{renderContent()}</div>
  );
}
