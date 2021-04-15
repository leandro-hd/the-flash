import React from 'react';
import './LastEpisode.css';

export default ({ main }) => {
  let date = new Date(main.last_air_date);
  let formattedDate = ((date.getDate() )) + "/" + ((date.getMonth() + 1)) + "/" + date.getFullYear(); 

  return (
    <section className="last-episode">
      <div className="episode-container">
        <img className="episode-image" src={`https://image.tmdb.org/t/p/w500${main.last_episode_to_air.still_path}`} alt="Último episódio"/>
        <div className="episode-name">{main.last_episode_to_air.name}</div>
        <div className="episode-overview">{main.last_episode_to_air.overview}</div>
        <div className="episode-data">
          <div className="season">T{main.last_episode_to_air.season_number}</div>
          <span>&nbsp;</span>
          <div className="episode">EP{main.last_episode_to_air.episode_number}</div>
          <span>&nbsp; • &nbsp;</span>
          <div className="date">{formattedDate}</div>
        </div>
      </div>
    </section>
  )
}