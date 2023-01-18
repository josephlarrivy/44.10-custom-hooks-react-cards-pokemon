import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import useAxios from "./hooks/useAxios";
import useStackAdder from "./hooks/useStackAdder";
import axios from "axios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";



function CardTable() {
  const [response, makeRequest] = useAxios();
  const [deckId, setDeckId] = useState(null);
  const [stack, addToStack] = useStackAdder([]);
  const [count, setCount] = useState(0);


  async function Start() {
    await makeRequest("https://deckofcardsapi.com/api/deck/new/shuffle")
    // console.log(response)
    const id = response.deck_id
    setDeckId(id)
    setCount(1)
    await makeRequest(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    console.log(response.cards[0])
    addToStack(response.cards[0])
    console.log(stack)
  }

  async function handleClick(evt) {
    evt.preventDefault();
    console.log(`DECKID: ${deckId}`)
    await makeRequest(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    console.log(response.cards[0])
    addToStack(response.cards[0])
    console.log(stack)
  }


  if (count < 1) {
    return(
      <div>
        <button onClick={Start}>Start</button>
      </div>
    )
  } else {
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={handleClick}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {stack.map(card => (
          <PlayingCard key={card.id} front={card.image} />
        ))}
      </div>
    </div>
  );
  }
}

CardTable.defaultProps = {};

export default CardTable;
