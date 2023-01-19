import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import useAxios from "./hooks/useAxios";
import axios from "axios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";



function CardTable() {
  const [response, makeRequest] = useAxios();
  const [deckId, setDeckId] = useState(null);
  const [cards, setCards] = useState([])
  const [count, setCount] = useState(0);


  async function Start() {
    const response = await makeRequest("https://deckofcardsapi.com/api/deck/new/shuffle")
    // console.log(response)
    console.log(response)
    const id = response.data.deck_id
    await setDeckId(id)
  }

  async function handleClick(evt) {
    evt.preventDefault();
    const response = await makeRequest(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    let retreived = (response.data.cards[0])
    // console.log(retreived)
    let code = retreived.code
    let image = retreived.image
    if (cards.length < 1) {
      console.log(code)
      setCards([{ "code": code, "image": image }]);
    } else {
      console.log(code)

      setCards([...cards, { "code": code, "image": image }]);
    }
  }

  console.log(cards)



  if (!deckId) {
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
        {cards.map(card => (
          <PlayingCard key={card.code} front={card.image} />
        ))}
      </div>
    </div>
  );
  }
}

CardTable.defaultProps = {};

export default CardTable;
