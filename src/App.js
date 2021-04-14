import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import Home from './components/Home';

export default () => {

  const [mainList, setMainList] = useState([])

  useEffect(() => {
    const load = async () => {
      let list = await Tmdb.getDataList();
      setMainList(list);
    }
    load();
  }, [])
  return (
    <div>
      {mainList &&
        <Home main={mainList} />
      }
    </div>
  )
}