import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAuthValidation } from "../api/index";

const fetchUserAuth = createAsyncThunk('fetchUserAuth', async (_, thunkAPI) => {
    return await getAuthValidation()
});


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUserAuth.fulfilled, (state, action) => {
            if(action.payload) {
                return action.payload
            } else {
                return state
            }
        });
    }
});


export {fetchUserAuth}
export default authSlice.reducer
