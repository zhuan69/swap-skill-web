// src/features/counterSlice.ts  
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginParams, userLogin } from '../../services/Login';
import { MemberData } from '../../types/Member';
import { userDetail } from '../../services/Member';


export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (payload: LoginParams) => {
        const data = await userLogin(payload)
        return data
    }
)

interface UserLoginState {
    user?: LoginParams | null
    token?: string | null
    isLogin?: boolean
    error?: string | null
    memberData?: MemberData | null
}

const initialState: UserLoginState = {
    user: null,
    token: null,
    isLogin: false
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setValue: (state, action: PayloadAction<LoginParams>) => {
            state.user = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.token = action.payload.data.token
            state.user = null
            state.isLogin = true
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.error = action.error.message
        })
    }
});

export const { setValue } = loginSlice.actions;
export default loginSlice.reducer;  
