import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import players from 'state/store/playerReducer';

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    players
  })
);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
