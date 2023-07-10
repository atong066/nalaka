import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import  Container  from "@mui/material/Container";
import Typography  from "@mui/material/Typography";
import Chip from '@mui/material/Chip';
import Pagination from '@mui/material/Pagination';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import { FormControl } from "@mui/material";
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
function getChipColor(status){
    if(status==='Active'){
        return 'success'
    }
    else if(status==='Resigned'){
        return 'error'
    }
    }
    
const Projects =()=>{
    const [isOPen, setIsOpen] = React.useState(true);
    const [pages,setPages]=React.useState([0,10])
    const [page, setPage] = React.useState(1);
    const [search,setSearch]= React.useState('')
    const [open, setOpen] = React.useState(false);
    const [userID,seteditName]=React.useState('');
    let [counter,setCounter]=React.useState(1);
    const handleClose = () => {
        setOpen(false);
      };
    
    const handleChange = (event, value) => {
        var min=(value-1)*10;
        var max=min+10;
        setPages([min,max]);
        setPage(value)
      };
      const handleClickOpen = (event) => {
        setOpen(true);
        const example =
        event.currentTarget.getAttribute('data-example');
        seteditName(example)
      };
    return (
        
            <section className="section">
                <Sidebar></Sidebar>
                 <Container className="mainContent"  maxWidth='false' sx={{width:'77% !important'}}>
                  <Typography variant="h4" gutterBottom sx={{position:'relative'}}>Projects List</Typography>
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                    >
                     <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Project"
                        inputProps={{ 'aria-label': 'search google maps' }}
                        onChange={(e)=>setSearch(e.target.value)}
                     />
                     <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                     </IconButton>
                    </Paper>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Projectt Name</th>
                        <th>Descriptop</th>
                        <th>Team</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
               
                </tbody>
                <tfoot>
                    <tr>
                        <td sx={{border:'0 !important'}} colSpan={4}>
                        <Pagination count={10} page={page} onChange={handleChange} />
                        </td>
                        <td sx={{border:'0 !important'}} colSpan={2}>Pages {page} out of {10}</td>
                    </tr>
               </tfoot>
                
            </table>
          
         </Container>
          <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}>
             <AppBar sx={{ position: 'relative' }} color="success">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
          
            </Typography>
          </Toolbar>
         
        </AppBar>
        <FormControl sx={{marginTop:'30px'}}>
            
          </FormControl>
        </Dialog>
            </section>
    )
}

export default Projects;