import React from 'react';
import AddTournamentButton from 'app/components/buttons/AddTournamentButton';
import TournamentsTable from 'app/components/tables/TournamentsTable';
import { History } from 'history';
import { makeStyles } from '@material-ui/core';

type TournamentPageProps = {
  history: History;
};

// todo move to other folder
const useStyles = makeStyles({
  root: {
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: 'auto minmax(0, 1fr)',
    gap: '20px'
  }
});

const TournamentsPage = (props: TournamentPageProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AddTournamentButton />
      <TournamentsTable history={props.history} />
    </div>
  );
};

export default TournamentsPage;
