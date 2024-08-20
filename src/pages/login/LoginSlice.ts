// src/features/counterSlice.ts  
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginParams, userLogin } from '../../services/Login';


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
    isLoggin?: boolean
    error?: string | null
}

const initialState: UserLoginState = {
    user: null,
    token: null,
    isLoggin: false
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
            state.isLoggin = true
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            console.log(action.error.message)
            state.error = action.error.message
        })
    }
});

export const { setValue } = loginSlice.actions;
export default loginSlice.reducer;  
