import React, { useState } from 'react';
import './Persons.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({ persons }) => {

  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 3);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 3);
    let listW = persons.cast.length * 1.1 * 215;
    if ((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60;
    }
    setScrollX(x);
  }

  return (
    <section className="persons">
      <div className="icon-left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{fontSize: 64}} />
      </div>
      <div className="icon-right" onClick={handleRightArrow}>
        <NavigateNextIcon style={{fontSize: 64}} />
      </div>
      <div className="persons-container" style={{
        marginLeft: scrollX,
        width: persons.cast.length * 1.1 * 230
      }}>
        {persons.cast.length > 0 && persons.cast.map((person, key) => (
          <div key={key} >
            <div className="person-image">
              <img src={`https://image.tmdb.org/t/p/w200${persons.cast[key].profile_path}`} alt={persons.cast[key].original_name}/>
            </div>
            <div className="person-name">
              <span className="name">{persons.cast[key].original_name}</span> <br/>
              <span className="character">({persons.cast[key].character})</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}