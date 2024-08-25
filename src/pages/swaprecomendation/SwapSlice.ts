// src/features/counterSlice.ts  
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
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
    isLoading?: boolean
}

const initialState: SwapRecommendationState = {
    responseData: null,
    isLoading: true
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
        builder.addCase(swapRecommendation.pending, (state, action) => {
            state.responseData = null
            state.isLoading = true
        })
        builder.addCase(swapRecommendation.fulfilled, (state, action) => {
            console.log(action.payload.data)
            state.responseData = action.payload
            state.isLoading = false
        })
        builder.addCase(swapRecommendation.rejected, (state, action) => {
            console.log(action.error.message)
            state.error = action.error.message
            state.isLoading = false
        })
    }
});

export const { setValue } = recommendationSlice.actions;
export default recommendationSlice.reducer;  
