import React from 'react';
import AddTournamentButton from 'app/components/AddTournamentButton';
import TournamentsList from 'app/components/TournamentsList';

const TournamentsPage = (): JSX.Element => {
  return (
    <div>
      <AddTournamentButton />
      <TournamentsList />
    </div>
  );
};

export default TournamentsPage;
