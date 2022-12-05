import { Body } from './App.styles';
import Header from './components/Header/Header'
import Deck from './components/Deck/Deck'
import Footer from './components/Footer/Footer'
import { useState } from 'react';

const cards = [
	{ question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
	{ question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
	{ question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
	{ question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
	{ question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
	{ question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
	{ question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
	{ question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]

function App() {
  const [countConcluded, setCountConcluded] = useState(0)

  return (
    <Body>
      <Header />
      <Deck cards={cards} setCountConcluded={setCountConcluded} />
      <Footer countConcluded={countConcluded} cardsLength={cards.length} />
    </Body>
  );
}

export default App;
