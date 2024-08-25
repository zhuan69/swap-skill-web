// src/features/counterSlice.ts  
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SwapData } from '../../types/Swap';
import { listsSwap } from '../../services/Member';

export const swapApiListsThunk = createAsyncThunk(
    'swap/listAPI',
    async () => {
        const data = await listsSwap()
        return data
    }
)

interface UserDetailState {
    data?: SwapData[] | null
    isLoading: boolean
}

const initialState: UserDetailState = {
    data: null,
    isLoading: true
};

const swapListsProgress = createSlice({
    name: 'swapLists',
    initialState,
    reducers: {
        setValue: (state, action: PayloadAction<SwapData[]>) => {
            state.data = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(swapApiListsThunk.pending, (state, action) => {
            state.data = null
            state.isLoading = true
        })
        builder.addCase(swapApiListsThunk.fulfilled, (state, action) => {
            state.data = action.payload
            state.isLoading = false
        })
        builder.addCase(swapApiListsThunk.rejected, (state, action) => {
            console.log(action.error.message)
            state.isLoading = false
        })
    }
});

export const { setValue } = swapListsProgress.actions;
export default swapListsProgress.reducer;  
