import React from 'react';
import './Home.css';

export default ({ main }) => {
  let firstDate = new Date(main.first_air_date);

  let genres = [];
  for (let i in main.genres) {
    genres.push(main.genres[i].name);
  }

  return (
    <section className="home">
      <div className="vertical-home">
        <div className="home-container">
          <div className="home-name">{main.original_name}</div>
          <div className="home-datas">
            <div>{firstDate.getFullYear()}</div>
            <span>&nbsp; • &nbsp;</span>
            <div>{main.number_of_seasons} temporadas</div>
          </div>
          <div className="home-genres">
            <div><span className="genres-title">Gêneros: </span>{genres.join(', ')}</div>
          </div>
          <div className="home-vote">
            <div><span className="vote-title">Avaliação: </span>{main.vote_average}</div>
          </div>
          </div>
        </div>
    </section>
  )
}