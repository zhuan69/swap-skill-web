// src/features/counterSlice.ts  
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegisterParams, userRegister } from '../../services/Register';
import { RegisterTypes } from '../../types/Register';


export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (payload: RegisterParams) => {
        const data = await userRegister(payload)
        return data
    }
)

interface RegisterState {
    register?: RegisterParams | null;
    responseData?: RegisterTypes | null
    error?: string | null
}

const initialState: RegisterState = {
    register: null,
    responseData: null
};

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        setValue: (state, action: PayloadAction<RegisterParams>) => {
            state.register = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            console.log(action.payload.data)
            state.responseData = action.payload
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            console.log(action.error.message)
            state.error = action.error.message
        })
    }
});

export const { setValue } = registerSlice.actions;
export default registerSlice.reducer;  
