import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import Home from './components/Home';
import LastEpisode from './components/LastEpisode';
import Seasons from './components/Seasons';
import Persons from './components/Persons';

export default () => {

  const [mainList, setMainList] = useState([]);

  useEffect(() => {
    const load = async () => {
      let list = await Tmdb.getDataList();
      setMainList(list);
    }
    load();
  }, [])

  return (
    <div>
      {mainList.length > 0 &&
        <Home main={mainList[0].main}/>
      }

      {mainList.length > 0 &&
        <LastEpisode main={mainList[0].main}/>
      }

      {mainList.length > 0 &&
        <Seasons main={mainList[0].main}/>
      }

      {mainList.map((person, key) => (
        <Persons key={key} persons={mainList[0].persons}/>
      ))}

      <footer>
        <div className="footer">
          <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg" alt="TMDB"/> <br/>
          <p>Feito por <strong>Leandro Dias</strong></p>
        </div>
      </footer>
    </div>
  )
}