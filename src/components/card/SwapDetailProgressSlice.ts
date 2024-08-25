// src/features/counterSlice.ts  
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { detailSwap, listsSwap, userDetail } from '../../services/Member';
import { MemberData } from '../../types/Member';
import { SwapData } from '../../types/Swap';


export const swapDetailAPI = createAsyncThunk(
    'swap/detailAPI',
    async (id: number) => {
        const data = await detailSwap(id)
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

const swapDetailProgress = createSlice({
    name: 'memberDetail',
    initialState,
    reducers: {
        setValue: (state, action: PayloadAction<SwapData[]>) => {
            state.data = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(swapDetailAPI.pending, (state, action) => {
            state.data = null
            state.isLoading = true
        })
        builder.addCase(swapDetailAPI.fulfilled, (state, action) => {
            state.data = action.payload
            state.isLoading = false
        })
        builder.addCase(swapDetailAPI.rejected, (state, action) => {
            console.log(action.error.message)
            state.isLoading = false
        })
    }
});

export const { setValue } = swapDetailProgress.actions;
export default swapDetailProgress.reducer;  
