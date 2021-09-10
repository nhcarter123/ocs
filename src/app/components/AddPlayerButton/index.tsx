import React from 'react';
import { useDispatch } from 'react-redux';
import { createPlayerAction } from 'app/actions/player';
import { makeStyles } from '@material-ui/styles';

// todo move to other folder
const useStyles = makeStyles({
  root: {
    position: 'fixed',
    top: '150px',
    left: '200px'
  }
});

const App = (): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <button
      className={classes.root}
      onClick={(): void => {
        dispatch(
          createPlayerAction({
            firstName: `first ${Math.round(Math.random() * 10)}`,
            lastName: `last ${Math.round(Math.random() * 10)}`,
            rating: 500 + Math.round(Math.random() * 1500)
          })
        );
      }}
    >
      Add Player
    </button>
  );
};

export default App;
