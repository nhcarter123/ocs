import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import players from 'state/store/playerReducer';
import tournaments from 'state/store/tournamentReducer';

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    players,
    tournaments
  })
);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
