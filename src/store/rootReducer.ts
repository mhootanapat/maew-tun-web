import homePageReducer from '@/store/slices/homePageReducer';
import { combineReducers } from 'redux';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

// slices

const createNoopStorage = () => ({
  getItem() {
    return Promise.resolve(null);
  },
  setItem(_key: unknown, value: unknown) {
    return Promise.resolve(value);
  },
  removeItem() {
    return Promise.resolve();
  },
});

// createNoopStorage is handle for create the localstorage object on the server side
const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

const rootReducer = combineReducers({
  homePageSlice: homePageReducer,
});

export { rootPersistConfig, rootReducer };
