import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPlayerAction } from 'app/actions/player';
import { StateSchema } from 'state/types/store';

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const players = useSelector((state: StateSchema) => state.players);
  console.log(players);

  return (
    <div
      style={{ background: '#a43535', height: 120, width: 120 }}
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
