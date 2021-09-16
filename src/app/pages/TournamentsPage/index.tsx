import React from 'react';
import AddTournamentButton from 'app/components/AddTournamentButton';
import TournamentsTable from 'app/components/TournamentsTable';

const TournamentsPage = (): JSX.Element => {
  return (
    <div>
      <AddTournamentButton />
      <TournamentsTable />
    </div>
  );
};

export default TournamentsPage;
