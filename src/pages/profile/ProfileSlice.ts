// src/features/counterSlice.ts  
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileState {
    profile: any;
}

const initialState: ProfileState = {
    profile: null,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setValue: (state, action: PayloadAction<any>) => {
            state.profile = action.payload;
        },
    },
});

export const { setValue } = profileSlice.actions;
export default profileSlice.reducer;  
