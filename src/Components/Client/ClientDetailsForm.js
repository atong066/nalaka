import React,{useState} from "react";
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container';
import './Client.css'
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import  Button  from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addNewUser } from "../app/EmployeeSlice";

import { useSelector } from "react-redux/es/hooks/useSelector";
import {selectUserById,fetchPosts,updateUserInformation} from "../app/EmployeeSlice";
const ClientDetailsForm = (props) =>{

 
    const dispatch=useDispatch();
    const updateUser=useSelector((state)=>selectUserById(state,Number(props.userId)))
    const [clientName,setClientName]=useState('')
    const [clientAddress,setClientAddress]=useState('')
    const [clientStatus,setClientStatus]=useState('Active')
    const handleSubmit = (event) =>{
        event.preventDefault();
        dispatch(
            addNewUser({
                clientName,
                clientAddress,
                clientStatus,})
        ).unwrap()
        setClientName('')
        setClientAddress('')
        setClientStatus('')
    
    }
        const handleUpdate=(event)=>{
            event.preventDefault();
            dispatch(
                updateUserInformation({
                    clientName,
                    clientAddress,
                    clientStatus,
                    })
            ).unwrap()
        
        }
    return(
        
        <Container maxWidth='false' >
             <FormControl sx={{width:"50rem"}}>
                <div >
        <fieldset className="field">
            <legend>Client Information:</legend>
                <Grid container spacing={3}>
                <Grid item xs={4}>
                    <TextField size ="small" fullWidth  id="outlined-multiline-flexible"
                                        label="Client Name"
                                        multiline
                                        maxRows={4} 
                                        value={clientName}
                                        onChange={(e)=>setClientName(e.target.value)}
                                        />
                </Grid>
                <Grid item xs={4}>
                    <TextField size ="small" fullWidth  id="outlined-multiline-flexible"
                                label="Client Address"
                                multiline
                                maxRows={4}
                                value={cFirstName}
                                onChange={(e)=>setcFirstName(e.target.value)}
                                />
               </Grid>
               <Grid item xs={3}>
                <TextField size ="small" fullWidth id="outlined-multiline-flexible"
                            label="Middle Name"
                            multiline
                            maxRows={3}
                            value={cMiddleName}
                            onChange={(e)=>setcMiddleName(e.target.value)}
                            />
              </Grid>
                <Grid item xs={1}>
                <TextField size ="small" fullWidth  id="outlined-multiline-flexible"
                            label="Ext"
                            multiline
                            maxRows={3} 
                            value={cExt}
                            onChange={(e)=>setcExt(e.target.value)}
                            />
                </Grid>
                <Grid item xs={6}>
                <TextField size ="small" fullWidth  id="outlined-multiline-flexible"
                            label="Address"
                            multiline
                            maxRows={3}
                            value={cAddress}
                            onChange={(e)=>setcAddress(e.target.value)}
                            />
                </Grid>
                <Grid item xs={2}>
                <TextField size ="small" fullWidth  id="outlined-multiline-flexible"
                            label="Relationship"
                            multiline
                            maxRows={3}
                            value={cRelation}
                            onChange={(e)=>setcRelation(e.target.value)}
                            />
                </Grid>

                <Grid item xs={4}>
                <TextField size ="small" fullWidth  id="outlined-multiline-flexible"
                            label="Contact Number"
                            multiline
                            maxRows={3} 
                            value={cContactNumber}
                            onChange={(e)=>setcContactNumber(e.target.value)}
                            />
                </Grid>
        </Grid>
        </fieldset>
        </div> 
                {!updateUser? <Button sx={{marginBottom:'20px',marginTop:'20px'}} onClick={handleSubmit} className="addButton" variant="contained" color="success">Add</Button> :<Button sx={{marginBottom:'20px',marginTop:'20px'}} onClick={handleUpdate} className="addButton" variant="contained" color="success">Update</Button>}
            </FormControl>
        </Container>
        )
        }
export default ClientDetailsForm;