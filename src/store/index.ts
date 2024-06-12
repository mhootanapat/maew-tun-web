import { rootPersistConfig, rootReducer } from '@/store/rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export const dispatch = store.dispatch;

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof dispatch;

export const persistor = persistStore(store);

export const useSelector = useAppSelector;

export const useDispatch = (): AppDispatch => useAppDispatch();
