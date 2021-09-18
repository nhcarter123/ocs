import React from 'react';
import PlayersTable from 'app/components/tables/PlayersTable';
import AddPlayerButton from 'app/components/buttons/AddPlayerButton';
import { makeStyles } from '@material-ui/core';
import ContentHeader from 'app/components/ContentHeader';

// todo move to other folder
const useStyles = makeStyles({
  root: {
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: 'auto minmax(0, 1fr)',
    gap: '20px'
  }
});
const PlayersPage = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div>
      <ContentHeader title={'Players'} />
      <div className={classes.root}>
        <AddPlayerButton />
        <PlayersTable />
      </div>
    </div>
  );
};

export default PlayersPage;
