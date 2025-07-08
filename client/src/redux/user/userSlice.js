import { createSlice } from "@reduxjs/toolkit";

const initialState={
    curentUser:null,
    error: null,
    loading:false,
};

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        signInStar:(state)=>{
            state.loading=true;
        },
        signInSuccess:(state,action)=>{
            state.curentUser=action.payload;
            state.loading=false;
            state.error=null;
        },
        signInFailure:(state,action)=>{
            state.error=action.payload;
            state.loading=false;
        }
    }
});
export const {signInStar,signInSuccess,signInFailure}=userSlice.actions;
export default userSlice.reducer