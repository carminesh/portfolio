import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface ThemeState {
    darkModeEnabled: boolean;
}

const initState: ThemeState = {
    darkModeEnabled: false,
};

export const ThemeSlice = createSlice({
    name: 'themeManager',
    initialState: initState,
    reducers: {
        switchTheme: (state: Draft<ThemeState>, action: PayloadAction<boolean>) => {
            state.darkModeEnabled = action.payload;
            const color: string = action.payload ? '#181818' : '#F7FAFC';
            document.querySelector('meta[name="theme-color"]')?.setAttribute('content', color);
        },
    },
});

export const { switchTheme } = ThemeSlice.actions;

export const getSelectedTheme = (state: RootState) => state.themeReducer.darkModeEnabled;
