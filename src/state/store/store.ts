import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import players from 'state/store/reducers/playerReducer';
import tournaments from 'state/store/reducers/tournamentReducer';
import activeTournament from 'state/store/reducers/activeTournamentReducer';

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    players,
    tournaments,
    activeTournament
  })
);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
