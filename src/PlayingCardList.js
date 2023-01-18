import React, { useState } from "react";
import { uuid } from "uuidv4";
import useAxios from "./hooks/useAxios";
import axios from "axios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";


function CardTable() {
  const [response, makeRequest] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/")
  // const [deckId, setDeckId] = useState(null);







  
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={makeRequest}>Add a playing card!</button>
      </div>
      {/* <div className="PlayingCardList-card-area">
        {responses.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.image} />
        ))}
      </div> */}
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
