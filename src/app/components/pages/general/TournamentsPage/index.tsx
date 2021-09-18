import React from 'react';
import TournamentsTable from 'app/components/tables/TournamentsTable';
import { History } from 'history';
import ContentHeader from 'app/components/ContentHeader';

type TournamentPageProps = {
  history: History;
};

const TournamentsPage = (props: TournamentPageProps): JSX.Element => {
  return (
    <div>
      <ContentHeader title={'Tournaments'} />
      <TournamentsTable history={props.history} />
    </div>
  );
};

export default TournamentsPage;
