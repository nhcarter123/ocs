import React from 'react';
import PlayersList from 'app/components/PlayersList';
import AddPlayerButton from 'app/components/AddPlayerButton';

// todo use makeStyles

const PlayersPage = (): JSX.Element => {
  return (
    <div
      style={{
        display: 'grid',
        justifyContent: 'center',
        gridTemplateColumns: 'auto minmax(0, 1fr)',
        gap: '20px'
      }}
    >
      <AddPlayerButton />
      <PlayersList />
    </div>
  );
};

export default PlayersPage;
