// src/features/counterSlice.ts  
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegisterParams, userRegister } from '../../services/Register';
import { RegisterTypes } from '../../types/Register';
import { userRecomendation } from '../../services/Recomendation';
import { RecomendationTypes } from '../../types/Recomendation';


export const swapRecommendation = createAsyncThunk(
    'swap/recommendations',
    async () => {
        const data = await userRecomendation()
        return data
    }
)

interface SwapRecommendationState {
    responseData?: RecomendationTypes | null
    error?: string | null
}

const initialState: SwapRecommendationState = {
    responseData: null
};

const recommendationSlice = createSlice({
    name: 'swapRecommendations',
    initialState,
    reducers: {
        setValue: (state, action: PayloadAction<RecomendationTypes>) => {
            state.responseData = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(swapRecommendation.fulfilled, (state, action) => {
            console.log(action.payload.data)
            state.responseData = action.payload
        })
        builder.addCase(swapRecommendation.rejected, (state, action) => {
            console.log(action.error.message)
            state.error = action.error.message
        })
    }
});

export const { setValue } = recommendationSlice.actions;
export default recommendationSlice.reducer;  
