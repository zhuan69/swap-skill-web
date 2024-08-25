import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { courseLists } from "../../services/Course"
import { CourseData } from "../../types/Course"

export const courseRecommendAPI = createAsyncThunk(
    'recommend/course',
    async () => {
        const data = await courseLists()
        return data
    }
)

interface UserDetailState {
    data?: CourseData[] | null
    error?: string | null
}

const initialState: UserDetailState = {
    data: null,
    error: null
};

const recommendSlice = createSlice({
    name: 'courseRecommend',
    initialState,
    reducers: {
        setValue: (state, action: PayloadAction<CourseData[]>) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(courseRecommendAPI.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(courseRecommendAPI.rejected, (state, action) => {
            console.log(action.error.message)
            state.error = action.error.message
        })
    }
});

export const { setValue } = recommendSlice.actions;
export default recommendSlice.reducer;