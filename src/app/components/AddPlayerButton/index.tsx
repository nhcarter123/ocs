import React from 'react';
import { useDispatch } from 'react-redux';
import { createPlayerAction } from 'app/actions/player';

const App = (): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={(): void => {
        dispatch(
          createPlayerAction({
            firstName: 'first',
            lastName: 'last',
            rating: 500 + Math.round(Math.random() * 1500)
          })
        );
      }}
    >
      Add Player
    </button>
  );
};

export default App;
