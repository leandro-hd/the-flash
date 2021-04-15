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
    </div>
  )
}