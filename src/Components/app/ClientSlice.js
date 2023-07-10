import { createSlice,createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from 'sweetalert2';
const POSTS_URL='http://49.151.218.125:3001/post'
const initialState={
    clients:[],
    status: 'idle',
    error:null
}
export const fetchClients=createAsyncThunk('clients/fetchPosts',async ()=>{
    try{
        const response=await axios.get(POSTS_URL)
        return [...response.data];
    } catch(err){
        return err.message
    }
})
export const addNewClient=createAsyncThunk('clients/addNewUser',async(clientInfo)=>{
    try{
        const response= await axios.post(POSTS_URL,clientInfo)
      
        return response.data
    }catch(err){
        return err.message
    }
})
export const updateClientInformation=createAsyncThunk('clients/updateUserInformation',async(clientInfo)=>{
    const {id}=clientInfo;
    try{
        const response= await axios.put(`${POSTS_URL}/clients`,clientInfo)
        return response.data;
    }
    catch(err){
        return err.message
    }
})
const ClientSlice= createSlice({
    name:'clients',
    initialState,
    reducers:{
},
extraReducers(builder){
    
    builder.addCase(fetchClients.pending,(state,action)=>{
        state.status='loading'
    })
    builder.addCase(fetchClients.fulfilled,(state,action)=>{
        state.status='succeeded'
        const loadedposts=action.payload
        state.clients=loadedposts
    })
    builder.addCase(fetchClients.rejected,(state,action)=>{
        state.status='failed'
        state.error=action.error.message
    })
    builder.addCase(addNewClient.fulfilled,(state,action)=>{
        state.status='succeeded'
        state.clients.push(action.payload)
        console.log(action.payload)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Success',
            text: 'Employee Successfully Added',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true
          })
    })
    builder.addCase(updateClientInformation.fulfilled,(state,action)=>{
        if(!action.payload?.id){
            return
        }
        const {id}=action.payload;
        const clients=state.clients.filter(e=>e.id !==id);
        state.clients=[...clients,action.payload]    
        state.clients.sort((a, b) => a.id - b.id);
     
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Success',
            text: 'Employee Details Successfully Updated',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true
          })
    })
}
})
export const selectAllClients=(state)=>state.clients.clients;
export const SelectClientById=(state,id)=> state.clients.clients.find(user=>user.id===id)
export const {addEmployee} =ClientSlice.actions;
export default ClientSlice.reducer;