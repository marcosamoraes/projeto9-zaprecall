import FlashCard from '../FlashCard/FlashCard'

export default function Deck(props) {

  return (
    <>
      {props.cards.map((card, index) => {
        return (
          <FlashCard key={index} index={index} card={card} setCountConcluded={props.setCountConcluded} />
        )
      })}
    </>
  )
}