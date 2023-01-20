import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { ThemeSlice } from './slices/ThemeSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    themeReducer: ThemeSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
export const persistor = persistStore(store);
