import React,{useState} from "react";
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container';
import './Employee.css'
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Typography  from "@mui/material/Typography";
import  Button  from "@mui/material/Button";
import { useDispatch } from "react-redux";
import dayjs from 'dayjs';
import { addNewUser } from "../app/EmployeeSlice";
import Select from '@mui/material/Select';
import { useSelector } from "react-redux/es/hooks/useSelector";
import {selectUserById,fetchPosts,updateUserInformation} from "../app/EmployeeSlice";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import moment from "moment";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

import withReactContent from 'sweetalert2-react-content'
const EmployeeDetailsForm = (props) =>{

 
    const dispatch=useDispatch();
    const updateUser=useSelector((state)=>selectUserById(state,Number(props.userId)))
    const updateCpersonel=(updateUser? updateUser.contactperson:null)
    const[lastName,setLastName]=React.useState(updateUser ? updateUser.lastName:'')
    const[position,setPosition]=useState(updateUser ? updateUser.position:'')
    const[firstName,setfirstName]=useState(updateUser ? updateUser.firstName:'')
    const[hiredDate,setDateHired]=useState(updateUser ? dayjs(updateUser.hiringDate):null)
    const [middleName,setMiddleName]=useState(updateUser ? updateUser.middleName:'')
    const [ext,setExt]=useState(updateUser ? updateUser.ext:'')
    const [address,setAddress]=useState(updateUser ? updateUser.address:'')
    const [dateOfBirth,setdateOfBirth]=useState(updateUser ? dayjs(updateUser.dateOfBirth):null)
    const [contactNumber,setcontactNumber]=useState(updateUser ? updateUser.contactNumber:'')
    const [emailAddress,setemailAddress]=useState(updateUser ? updateUser.emailAddress:'')
    const [	philHealth,setphilHealth]=useState(updateUser ? updateUser.philHealth:'')
    const [sss,setsss]=useState(updateUser ? updateUser.sss:'')
    const [tinNumber,setTinNumber]=useState(updateUser ? updateUser.tinNumber:'')
    const [pagIbig,setPagIbig]=useState(updateUser ? updateUser.pagIbig:'')
    const [gender,setGender]=useState(updateUser ? updateUser.gender:'')
    const [cLastName,setcLastName]=useState(updateCpersonel ? updateCpersonel.cLastName:'')
    const [cFirstName,setcFirstName]=useState(updateCpersonel ? updateCpersonel.cFirstName:'')
    const [cMiddleName,setcMiddleName]=useState(updateCpersonel ? updateCpersonel.cMiddleName:'')
    const [cExt,setcExt]=useState(updateCpersonel ? updateCpersonel.cExt:'')
    const [cContactNumber,setcContactNumber]=useState(updateCpersonel ? updateCpersonel.cContactNumber:'')
    const [cRelation,setcRelation]=useState(updateCpersonel ? updateCpersonel.cRelation:'')
    const [cAddress,setcAddress]=useState(updateCpersonel ? updateCpersonel.cAddress:'')
    const [status,setStatus]=useState("Active");
    const handleSubmit = (event) =>{
        event.preventDefault();
        let dateHired = moment(hiredDate).format('YYYY/MM/DD');
        dispatch(
            addNewUser({
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
                cLastName,
                cFirstName,
                cMiddleName,
                cExt,
                cContactNumber,
                cRelation,
                cAddress}),fetchPosts()
        ).unwrap()
        setDateHired('')
        setPosition('')
        setfirstName('')
        setLastName('')
        setMiddleName('')
        setExt('')
        setAddress('')
        setdateOfBirth('')
        setcontactNumber('')
        setemailAddress('')
        setphilHealth('')
        setsss('')
        setTinNumber('')
        setPagIbig('')
        setGender('')
        setcLastName('')
        setcFirstName('')
        setcMiddleName('')
        setcExt('')
        setcContactNumber('')
        setcRelation('')
        setcAddress('')
    }
const handleUpdate=(event)=>{
    event.preventDefault();
    let dateHired = moment(hiredDate).format('YYYY/MM/DD');
    dispatch(
        updateUserInformation({
            id:Number(props.userId),
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
            contactperson:{
                cLastName,
                cFirstName,
                cMiddleName,
                cExt,
                cContactNumber,
                cRelation,
                cAddress,
                employeeId:props.userId
            },
            }),fetchPosts()
    ).unwrap()
 
}
    return(
        
        <Container maxWidth='false' >
             <FormControl fullWidth>
                <div >
                <Typography variant="h4" gutterBottom sx={{position:'relative'}}>Employee's Form</Typography>
         <fieldset className="field">
    <legend>Basic Information:</legend>
        <Grid container spacing={3}>
         <Grid item xs={2}>
            <FormControl size="small" fullWidth>
            <InputLabel id="demo-select-small-label">Position</InputLabel>
                <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={position}
                label="Position"
                onChange={(e)=>setPosition(e.target.value)}
            >
                <MenuItem value="">
                <em>None</em>
                </MenuItem>
                <MenuItem value={'Full Stack'}>Full Stack</MenuItem>
                <MenuItem value={'Admin'}>Admin</MenuItem>
                <MenuItem value={'Human Resources'}>Human Resources</MenuItem>
            </Select>
            </FormControl>
               </Grid>
               {updateUser? 
                <Grid item xs={2}>
                    <FormControl size="small" fullWidth>
                    <InputLabel id="demo-select-small-label">Status</InputLabel>
                        <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={status}
                        label="Status"
                        onChange={(e)=>setStatus(e.target.value)}
                    >
                        <MenuItem value="">
                        </MenuItem>
                        <MenuItem value={'Active'}>Active</MenuItem>
                        <MenuItem value={'Resigned'}>Resigned</MenuItem>
                        <MenuItem value={'Terminated'}>Terminated</MenuItem>
                        <MenuItem value={'Suspended'}>Suspended</MenuItem>
                    </Select>
                    </FormControl>
                </Grid>:null
               }
                
               <Grid item xs={3}>
               <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                label="Date Hired"
                size="small"
              slotProps={{ textField: { size: 'small' } }}
              inputFormat="E MMM dd yyyy HH:MM:SS O"
              value={hiredDate}
               onChange={(newdateHired) => setDateHired(newdateHired)}
                />
                </LocalizationProvider>
               </Grid>
             
            </Grid>
            <Grid container spacing={3} sx={{marginTop:"5px"}}>
         <Grid item xs={4}>
                    <TextField size ="small" fullWidth  id="outlined-multiline-flexible"
                            label="Last Name"
                            multiline
                            value={lastName}
                            maxRows={4}
                            onChange={(e)=>setLastName(e.target.value)} />
                </Grid>
                <Grid item xs={4}>
                <TextField size ="small" fullWidth  id="outlined-multiline-flexible"
                            label="First Name"
                            multiline
                            maxRows={4} 
                            value={firstName}
                            onChange={(e)=>setfirstName(e.target.value)}
                            />
               </Grid>
               <Grid item xs={3}>
                <TextField size ="small" fullWidth id="outlined-multiline-flexible"
                            label="Middle Name"
                            multiline
                            maxRows={3}
                            value={middleName}
                            onChange={(e)=>setMiddleName(e.target.value)}
                            />
              </Grid>
                <Grid item xs={1}>
                <TextField size ="small" fullWidth  id="outlined-multiline-flexible"
                            label="Ext"
                            multiline
                            maxRows={3}
                            value={ext}
                            onChange={(e)=>setExt(e.target.value)}
                            />
                </Grid>
                <Grid item xs={5}>
                <TextField size ="small" fullWidth  id="outlined-multiline-flexible"
                            label="Address"
                            multiline
                            maxRows={3} 
                            value={address}
                            onChange={(e)=>setAddress(e.target.value)}
                            />
                </Grid>
                <Grid item xs={2}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                label="Birth Date"
              slotProps={{ textField: { size: 'small' } }}
              inputFormat="E MMM dd yyyy HH:MM:SS O"
              value={dateOfBirth}
               onChange={(newdateHired) => setdateOfBirth(newdateHired)}
                />
                </LocalizationProvider>
                </Grid>
                <Grid item xs={2}>
                <FormControl fullWidth size="small">
                    <InputLabel id="GenderLabel">Gender</InputLabel>
                        <Select
                        labelId="GenderLabel"
                        id="demo-select-small"
                        value={gender}
                        onChange={(e)=>setGender(e.target.value)}
                    >
                        <MenuItem value={'Male'}>Male</MenuItem>
                        <MenuItem value={'Female'}>Female</MenuItem>
                    </Select>
                </FormControl>
                </Grid>
                <Grid item xs={3}>
                <TextField size ="small" fullWidth  id="outlined-multiline-flexible"
                            label="Contact Number"
                            multiline
                            maxRows={3}
                            value={contactNumber}
                            onChange={(e)=>setcontactNumber(e.target.value)}
                            />
                </Grid>
                <Grid item xs={4}>
                <TextField size ="small" fullWidth  id="outlined-multiline-flexible"
                            label="Email Address"
                            multiline
                            maxRows={3}
                            value={emailAddress}
                            onChange={(e)=>setemailAddress(e.target.value)}
                            />
                </Grid>
                <Grid item xs={2}>
                <TextField size ="small" fullWidth  id="outlined-multiline-flexible"
                            label="Philhealth Number"
                            multiline
                            maxRows={3}
                            value={philHealth}
                            onChange={(e)=>setphilHealth(e.target.value)}
                            />
                </Grid>
                <Grid item xs={2}>
                <TextField size ="small" fullWidth  id="outlined-multiline-flexible"
                            label="SSS/GSIS  Number"
                            multiline
                            maxRows={3}
                            value={sss}
                            onChange={(e)=>setsss(e.target.value)}
                            />
                </Grid>
                <Grid item xs={2}>
                <TextField size ="small" fullWidth  id="outlined-multiline-flexible"
                            label="TIN  Number"
                            multiline
                            maxRows={3}
                            value={tinNumber}
                            onChange={(e)=>setTinNumber(e.target.value)}
                            />
                </Grid>
                <Grid item xs={2}>
                <TextField size ="small" fullWidth  id="outlined-multiline-flexible"
                            label="Pag Ibig  Number"
                            multiline
                            maxRows={3}
                            value={pagIbig}
                            onChange={(e)=>setPagIbig(e.target.value)}
                            />
                </Grid>
        </Grid>
        </fieldset>
        <fieldset className="field">
    <legend>Emergency Contact Information:</legend>
        <Grid container spacing={3}>
         <Grid item xs={4}>
          <TextField size ="small" fullWidth  id="outlined-multiline-flexible"
                            label="Last Name"
                            multiline
                            maxRows={4} 
                            value={cLastName}
                            onChange={(e)=>setcLastName(e.target.value)}
                            />
                </Grid>
                        
                
                <Grid item xs={4}>
                <TextField size ="small" fullWidth  id="outlined-multiline-flexible"
                            label="First Name"
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
export default EmployeeDetailsForm;