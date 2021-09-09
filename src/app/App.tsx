import React from 'react';
import { Provider } from 'react-redux';
// import logo from 'app/logo.svg';

import { persistor, store } from 'state/store/store';
import 'app/App.css';
import { PersistGate } from 'redux-persist/integration/react';

import Test from 'app/components/Test';

const App = (): JSX.Element => {
  // const players = useSelector('opl');
  // console.log(data);

  return (
    <Provider store={store}>
      <PersistGate loading={<div>lod</div>} persistor={persistor}>
        <Test />
      </PersistGate>
    </Provider>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <button
  //         onClick={(): void => {
  //           PlayerService.create({
  //             firstName: 'nate',
  //             lastName: 'carter',
  //             rating: 1200
  //           });
  //         }}
  //       >
  //         test
  //       </button>
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/app/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
};

export default App;
