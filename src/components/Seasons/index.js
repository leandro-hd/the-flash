import React, { useState } from 'react';
import './Seasons.css';

export default ({ main }) => {

  const [number, setNumber] = useState(0);

  if (number != 0) {
    for (let count = 1; count <= 7; count++) {
      document.getElementById('number0' + count).style.background = '#121212';
      document.getElementById('number0' + count).style.color = '#FFFFFF'; 
    }
    document.getElementById('number0' + parseInt(number)).style.background = '#FF0000';
  }

  return (
    <section className="seasons">
      <div className="season-container">
        <div className="season-title">TEMPORADAS</div>
        <div className="season-numbers">
          <span onClick={() => setNumber(1)} id="number01">1</span>
          <span onClick={() => setNumber(2)} id="number02">2</span>
          <span onClick={() => setNumber(3)} id="number03">3</span>
          <span onClick={() => setNumber(4)} id="number04">4</span>
          <span onClick={() => setNumber(5)} id="number05">5</span>
          <span onClick={() => setNumber(6)} id="number06">6</span>
          <span onClick={() => setNumber(7)} id="number07">7</span>
        </div>
          <img className="season-image" src={`https://image.tmdb.org/t/p/w500${main.seasons[number].poster_path}`} alt="Pôster"/>
        <div className="season-overview">{main.seasons[number].overview}</div>
        <div className="season-episodes">({main.seasons[number].episode_count} episódios)</div>
      </div>
    </section>
  )
}