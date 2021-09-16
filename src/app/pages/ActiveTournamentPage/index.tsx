import React from 'react';
import AddTournamentButton from 'app/components/buttons/AddTournamentButton';
import TournamentsTable from 'app/components/tables/TournamentsTable';

const TournamentsPage = (): JSX.Element => {
  return (
    <div>
      <AddTournamentButton />
      <TournamentsTable />
    </div>
  );
};

export default TournamentsPage;
