import React from 'react';
import './Home.css';

export default ({ main }) => {
  let firstDate = new Date(main.first_air_date);

  let genres = [];
  for (let i in main.genres) {
    genres.push( main.genres[i].name);
  }

  return (
    <div className="">
      <div>{main.original_name}</div>
      <div>{firstDate.getFullYear()}</div>
      <div>{main.number_of_seasons}</div>
      <div>{genres.join(', ')}</div>
      <div>{main.vote_average}</div>
    </div>
  )
}