// src/store.ts  
import { configureStore } from '@reduxjs/toolkit';
import LoginSlice from './pages/login/LoginSlice';
import ProfileSlice from './pages/profile/ProfileSlice';
import SignUpSlice from './pages/signup/SignUpSlice';
import SwapSlice from './pages/swaprecomendation/SwapSlice';
import HomeSlice from './pages/home/HomeSlice';
import CourseRecommendSlice from './pages/home/CourseRecommendSlice';
import SwapDetailProgressSlice from './components/card/SwapDetailProgressSlice';
import SwapListsProgressSlice from './components/card/SwapListsProgressSlice';

const store = configureStore({
    reducer: {
        login: LoginSlice,
        profile: ProfileSlice,
        register: SignUpSlice,
        swapRecommendation: SwapSlice,
        homeSlice: HomeSlice,
        courseRecommendation: CourseRecommendSlice,
        swapDetailProgress: SwapDetailProgressSlice,
        swapListsProgress: SwapListsProgressSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;  
