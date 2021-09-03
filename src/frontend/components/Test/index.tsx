import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPlayerAction } from 'frontend/actions/player';
import { StateSchema } from '../../../backend/types/store';

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const players = useSelector((state: StateSchema) => state.players);

  return (
    <div
      onClick={(): void => {
        dispatch(
          createPlayerAction({
            firstName: 'asda',
            lastName: 'dfdf',
            rating: 1200
          })
        );
      }}
    >
      {players.map((player) => (
        <div key={player.id}>{player.id}</div>
      ))}
    </div>
  );
};

export default App;
