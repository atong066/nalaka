import { configureStore } from "@reduxjs/toolkit";
import EmployeeReducer from "./EmployeeSlice";
import cpSliceRducer from "./ContactPersonSlice"
import clientSliceReduce from "./ClientSlice";
export const store =configureStore({
    reducer:{
        employees:EmployeeReducer,
        contactpersons:cpSliceRducer,
        clients:clientSliceReduce
    }
})