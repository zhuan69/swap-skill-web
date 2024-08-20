// src/store.ts  
import { configureStore } from '@reduxjs/toolkit';
import LoginSlice from './pages/login/LoginSlice';
import ProfileSlice from './pages/profile/ProfileSlice';
import SignUpSlice from './pages/signup/SignUpSlice';
import SwapSlice from './pages/swaprecomendation/SwapSlice';

const store = configureStore({
    reducer: {
        login: LoginSlice,
        profile: ProfileSlice,
        register: SignUpSlice,
        swapRecommendation: SwapSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;  
