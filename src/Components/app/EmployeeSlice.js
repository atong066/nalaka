import { createSlice,createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from 'sweetalert2';
const POSTS_URL='http://49.151.218.125:3001/post'
const initialState={
    users:[],
    status: 'idle',
    error:null
}
export const fetchPosts=createAsyncThunk('employees/fetchPosts',async ()=>{
    try{
        const response=await axios.get(POSTS_URL)
        return [...response.data];
    } catch(err){
        return err.message
    }
})
export const addNewUser=createAsyncThunk('employees/addNewUser',async(userInfo)=>{
    try{
        const response= await axios.post(POSTS_URL,userInfo)
      
        return response.data
    }catch(err){
        return err.message
    }
})
export const updateUserInformation=createAsyncThunk('exployees/updateUserInformation',async(userInfo)=>{
    const {id}=userInfo;
    try{
        const response= await axios.put(`${POSTS_URL}`,userInfo)
        return response.data;
    }
    catch(err){
        return err.message
    }
})
const EmployeeSlice= createSlice({
    name:'employees',
    initialState,
    reducers:{
        addEmployee:{
            reducer(state,action)
            {
               state.users.push(action.payload)
            },
        prepare(
            lastName,
            position,
            dateHired,
            middleName,
            firstName,
            status,
            ext,
            address,
            dateOfBirth,
            contactNumber,
            emailAddress,
            philHealth,
            sss,
            tinNumber,
            pagIbig,
            gender,
            employeeId,
            cLastName,
            cFirstName,
            cMiddleName,
            cExt,
            cContactNumber,
            cRelation,
            cAddress){
            return{
                payload:{
                    lastName,
                    position,
                    dateHired,
                    middleName,
                    firstName,
                    status,
                    ext,
                    address,
                    dateOfBirth,
                    contactNumber,
                    emailAddress,
                    philHealth,
                    sss,
                    tinNumber,
                    pagIbig,
                    gender,
                    employeeId,
                    cLastName,
                    cFirstName,
                    cMiddleName,
                    cExt,
                    cContactNumber,
                    cRelation,
                    cAddress
            }
            }
        }
    }

},
extraReducers(builder){
    
    builder.addCase(fetchPosts.pending,(state,action)=>{
        state.status='loading'
    })
    builder.addCase(fetchPosts.fulfilled,(state,action)=>{
        state.status='succeeded'
        const loadedposts=action.payload
        state.users=loadedposts
    })
    builder.addCase(fetchPosts.rejected,(state,action)=>{
        state.status='failed'
        state.error=action.error.message
    })
    builder.addCase(addNewUser.fulfilled,(state,action)=>{
        state.status='succeeded'
        state.users.push(action.payload)
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
    builder.addCase(updateUserInformation.fulfilled,(state,action)=>{
        if(!action.payload?.id){
            return
        }
        const {id}=action.payload;
        const users=state.users.filter(e=>e.id !==id);
        state.users=[...users,action.payload]    
        state.users.sort((a, b) => a.id - b.id);
     
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
export const selectAllPosts=(state)=>state.employees.users;
export const selectUserById=(state,id)=> state.employees.users.find(user=>user.id===id)
export const {addEmployee} =EmployeeSlice.actions;
export default EmployeeSlice.reducer;