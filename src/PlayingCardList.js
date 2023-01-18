import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import useAxios from "./hooks/useAxios";
import useStackAdder from "./hooks/useStackAdder";
import axios from "axios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";



function CardTable() {
  const [response, makeRequest] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/");
  const [deckId, setDeckId] = useState(null);
  const [stack, addToStack] = useStackAdder([])

  useEffect(() => {
    async function start() {
      console.log('checkpoint1')
      await makeRequest();
      console.log(response)

    }
    console.log('checkpoint2')
    start()
    console.log('checkpoint3')

  }, [])

  // console.log(`stack ${JSON.stringify(stack)}`)
  // console.log(response.data)


  async function handleClick(evt) {
    evt.preventDefault();
    // const btn = evt.target
    await makeRequest();
    const image = response.data.cards[0].image
    await addToStack(image);
  }


  if (stack.length < 1) {
    return(
      <div>
        <button onClick={handleClick}>Add a playing card!</button>
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
        {/* {stack.map(element => (
          <PlayingCard front={element.data.cards[0].image} />
        ))} */}
        {/* {stack.map(element => (
          JSON.stringify(element.data.cards[0].image)
        ))} */}
      </div>
    </div>
  );
  }
}

CardTable.defaultProps = {};

export default CardTable;
