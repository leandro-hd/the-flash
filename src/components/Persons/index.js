import React from 'react';
import './Persons.css';

export default ({ persons }) => {

  return (
    <section className="persons">
      <div className="persons-container">
      {persons.cast.length > 0 && persons.cast.map((person, key) => (
        <div key={key}>
          <img src={`https://image.tmdb.org/t/p/w300${persons.cast[key].profile_path}`} alt={persons.cast[key].original_name}/>
        </div>
      ))}
      </div>
    </section>
  )
}