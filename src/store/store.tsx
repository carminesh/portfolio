import { configureStore } from '@reduxjs/toolkit';
import { ThemeSlice } from './slices/ThemeSlice';
// ...
const store = configureStore({
    reducer: {
        themeReducer: ThemeSlice.reducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
