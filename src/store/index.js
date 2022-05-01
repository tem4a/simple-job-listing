import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './root-reducer';

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ["filter", "positions"],
  // blacklist: ["filter"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export { store };
export const persistor = persistStore(store);
