import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import 'app/App.css';
import 'antd/dist/antd.css';

import { persistor, store } from 'state/store/store';

import PlayersPage from 'app/pages/PlayersPage';
import TournamentsPage from 'app/pages/TournamentsPage';

import { Pages } from 'app/types/pages';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>lod</div>} persistor={persistor}>
        <Router>
          <Redirect from={'/'} exact to={Pages.players} />
          <Route path={Pages.players} component={PlayersPage} />
          <Route path={Pages.tournaments} component={TournamentsPage} />
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
