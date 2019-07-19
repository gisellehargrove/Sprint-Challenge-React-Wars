import React, { useState, useEffect } from 'react';
import Character from './components/Character/Character.js';
import { Pagination } from 'semantic-ui-react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [apiUrl, setApiUrl] = useState('https://swapi.co/api/people/')


  useEffect(() => {
    axios.get(apiUrl).then(response => {
      setData(response.data.results);
    });
  },[apiUrl]);

  const paginate = (e, page) => {
    setActivePage(page.activePage);
    setApiUrl('https://swapi.co/api/people/?page=' + page.activePage.toString());
  };
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>

      <Pagination
        activePage={activePage}
        onPageChange={paginate}
        siblingRange={1}
        totalPages={9}
        ellipsisItem={null}/>
      <div className="characters-container">
        {data.map((character, index) =>
          <Character key={index} data={character} />
        )}
      </div>
    </div>

  );
}

export default App;
