import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'app/App.css';
import 'antd/dist/antd.css';

import { persistor, store } from 'state/store/store';

import PageLayout from 'app/components/PageLayout';
import { BrowserRouter as Router } from 'react-router-dom';

const App = (): JSX.Element => {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={<div>lod</div>} persistor={persistor}>
          <PageLayout />
        </PersistGate>
      </Provider>
    </Router>
  );
};

export default App;
