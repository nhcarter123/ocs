import React from 'react';
import PlayersTable from 'app/components/tables/PlayersTable';
import ContentHeader from 'app/components/ContentHeader';

const PlayersPage = (): JSX.Element => {
  return (
    <div>
      <ContentHeader title={'Players'} />
      <PlayersTable />
    </div>
  );
};

export default PlayersPage;
