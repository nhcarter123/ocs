import React, { useEffect } from 'react';
import logo from 'frontend/logo.svg';
import 'frontend/App.css';
import Database from '../backend/database/database';
import PlayersService from '../backend/services/players/players.service';
import { useLocalStorage } from '@rehooks/local-storage';

function App(): JSX.Element {
  const [data] = useLocalStorage('players');
  console.log(data);

  useEffect(() => {
    Database.init();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={(): void => {
            PlayersService.create({
              firstName: 'nate',
              lastName: 'carter',
              rating: 1200
            });
          }}
        >
          test
        </button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/frontend/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
