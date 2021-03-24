import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import sessionReducer from '../store/session/sessionReducer';
import errors from '../store/errors/errorsReducer';
import loadings from '../store/loading/loadingReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token', 'username'],
};

const rootReducer = combineReducers({
  session: persistReducer(persistConfig, sessionReducer),
  errors,
  loadings
});

const middleware = [ReduxThunk];

const enhancer =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(...middleware))
    : applyMiddleware(...middleware);

export const store = createStore(rootReducer, enhancer);

export const persistor = persistStore(store);
