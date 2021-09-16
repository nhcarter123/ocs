import React from 'react';
import PlayersTable from 'app/components/PlayersTable';
import AddPlayerButton from 'app/components/AddPlayerButton';
import { makeStyles } from '@material-ui/core';

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
    <div className={classes.root}>
      <AddPlayerButton />
      <PlayersTable />
    </div>
  );
};

export default PlayersPage;
