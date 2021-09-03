import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import playersReducer from 'backend/store/playersReducer';

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(playersReducer)
);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
