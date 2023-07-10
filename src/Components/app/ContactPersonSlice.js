import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const URL='http://49.151.218.125:3001/post'

//initialize state
const initialState={
    cpusers:[],
    status: 'idle',
    error:null

}
    
//create thunk
export const fetchContactpersons=createAsyncThunk('contactpersons/getCperson',async()=>{
    try{
        const response= await axios.get(URL)
        return [...response.data];
    }catch(err){
        return err.message
    }
})
//create Slice

const contactpersonsSlice=createSlice({
    name:'contactpersons',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(fetchContactpersons.fulfilled,(state,action)=>{
            state.status='succeeded'
            const loadedposts=action.payload
            state.cpusers=loadedposts
        })
    }
})

//export reducer
export const selectAllcontactPersons=(state)=>state.contactpersons.cpusers;
export const selectCpersonelById=(state,userId)=> state.contactpersons.cpusers.find(user=>user.employeeId===userId)
export default contactpersonsSlice.reducer