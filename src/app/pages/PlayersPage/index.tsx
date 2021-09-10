import React from 'react';
import PlayersList from 'app/components/PlayersList';
import AddPlayerButton from 'app/components/AddPlayerButton';

const PlayersPage = (): JSX.Element => {
  return (
    <>
      <AddPlayerButton />
      <PlayersList />
    </>
  );
};

export default PlayersPage;
