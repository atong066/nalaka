import React ,{useState} from "react";
import Sidebar from "../Sidebar/Sidebar"
import Grid from '@mui/material/Grid';
import  Container  from "@mui/material/Container";
import Typography  from "@mui/material/Typography";
import Modal from 'react-bootstrap/Modal';
import Pagination from '@mui/material/Pagination';
import { Button } from "@mui/material";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Slide from '@mui/material/Slide';
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
    
const Client =()=>{
    const [isOPen, setIsOpen] = React.useState(true);
    const [pages,setPages]=React.useState([0,10])
    const [page, setPage] = React.useState(1);
    const [search,setSearch]= React.useState('')
    const [open, setOpen] = React.useState(false);
    const [userID,seteditName]=React.useState('');
    let [counter,setCounter]=React.useState(1);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(show)
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
                <Sidebar statusMain={isOPen}></Sidebar>
                 <Container className="mainContent"  maxWidth='false' sx={{width:'77% !important'}}>
                  <Typography variant="h4" gutterBottom sx={{position:'relative'}}>Clients List</Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={10}>
                        <Paper
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 ,height:30}}
                        >
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Search Client"
                                inputProps={{ 'aria-label': 'search google maps' }}
                                onChange={(e)=>setSearch(e.target.value)}
                            />
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                    <Button variant="contained" color="warning">Primary</Button>{' '}
                    </Grid>
                  </Grid>
                    
                    
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Client Name</th>
                        <th>Address</th>
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
                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            </section>
    )
}

export default Client;