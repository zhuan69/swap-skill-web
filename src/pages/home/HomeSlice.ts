// src/features/counterSlice.ts  
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userDetail } from '../../services/Member';
import { MemberData } from '../../types/Member';


export const memberDetailAPI = createAsyncThunk(
    'user/memberDetail',
    async () => {
        const data = await userDetail()
        return data
    }
)

interface UserDetailState {
    user?: MemberData | null
    error?: string | null
    isLogin?: boolean | null
    isLoading?: boolean
}

const initialState: UserDetailState = {
    user: null,
    isLogin: false,
    isLoading: true
};

const homeSlice = createSlice({
    name: 'memberDetail',
    initialState,
    reducers: {
        setValue: (state, action: PayloadAction<MemberData>) => {
            state.user = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(memberDetailAPI.pending, (state, action) => {
            state.user = null
            state.isLogin = false
            state.isLoading = true
        })
        builder.addCase(memberDetailAPI.fulfilled, (state, action) => {
            state.user = action.payload.data
            state.isLogin = true
            state.isLoading = false
        })
        builder.addCase(memberDetailAPI.rejected, (state, action) => {
            console.log(action.error.message)
            state.error = action.error.message
            state.isLoading = false
        })
    }
});

export const { setValue } = homeSlice.actions;
export default homeSlice.reducer;  
