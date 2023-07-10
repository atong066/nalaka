import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import HomeIcon from '@mui/icons-material/Home';
import './Sidebar.css'
import PersonIcon from '@mui/icons-material/Person';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GroupsIcon from '@mui/icons-material/Groups';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';    
import SchoolIcon from '@mui/icons-material/School';
import DevicesIcon from '@mui/icons-material/Devices';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import EventIcon from '@mui/icons-material/Event';
import DownloadIcon from '@mui/icons-material/Download';
import PolicyIcon from '@mui/icons-material/Policy';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from "react-router-dom";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Navbar from "../Navbar/Navbar";
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
const Sidebar = (props) =>{

    const [open, setOpen] = React.useState(props.statusMain);
    const [open2, setOpen2] = React.useState(props.statusSub);
    const handleClick = () => {
      setOpen(!open);
    
    };
    const handleClick2 = () => {
       
        setOpen2(!open2);
      };
    return(
        <>
        <Navbar></Navbar>
        <div className="sideNav">
            <List>
            <Link to="../Dashboard">  <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                    </ListItemButton>
                </ListItem></Link>
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                    <GroupsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Personnel" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <ListItem disablePadding sx={{ pl: 1 }} onClick={handleClick2}>
                        <ListItemButton>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary="Employees" />
                        {open2 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                    </ListItem>
                    <Collapse in={open2} timeout="auto" unmountOnExit>
                    <Link to="../add-employee">
                         <ListItem disablePadding sx={{ pl: 4}}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <PersonAddIcon />
                                </ListItemIcon>
                                <ListItemText primary="Add Employee" />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to="../employee-list">
                         <ListItem disablePadding sx={{ pl: 4}}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <FormatListNumberedRtlIcon />
                                </ListItemIcon>
                                <ListItemText primary="Employee List" />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    </Collapse>
                    <Link to="../Client">
                    <ListItem disablePadding sx={{ pl: 1}}>
                        <ListItemButton>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary="Clients" />
                        </ListItemButton>
                    </ListItem>
                    </Link>
                </Collapse>
                <Link to="../Projects">
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <AccountTreeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Projects" />
                    </ListItemButton>
                </ListItem>
                </Link>
                <Link to="../BankAccounts">
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <AccountBalanceIcon />
                    </ListItemIcon>
                    <ListItemText primary="Bank Account" />
                    </ListItemButton>
                </ListItem>
                </Link>
                <Link to="../Teams">
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <GroupsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Teams" />
                    </ListItemButton>
                </ListItem>
                </Link>
                <Link to="../Roles">
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <SchoolIcon />
                    </ListItemIcon>
                    <ListItemText primary="Roles" />
                    </ListItemButton>
                </ListItem>
                </Link>
                <Link to="../Assets">
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <DevicesIcon />
                    </ListItemIcon>
                    <ListItemText primary="Assets" />
                    </ListItemButton>
                </ListItem>
                </Link>
                <Link to="../Leaves">
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <CardGiftcardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Leaves" />
                    </ListItemButton>
                </ListItem>
                </Link>
                <Link to="../Promotions">
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <LocalConvenienceStoreIcon />
                    </ListItemIcon>
                    <ListItemText primary="Promotions" />
                    </ListItemButton>
                </ListItem>
                </Link>
                <Link to="../Expenses">
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <LocalAtmIcon />
                    </ListItemIcon>
                    <ListItemText primary="Expenses" />
                    </ListItemButton>
                </ListItem>
                </Link>
                <Link to="../Awards">
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <EmojiEventsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Awards" />
                    </ListItemButton>
                </ListItem>
                </Link>
                <Link to="../Trainings">
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <WorkOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primary="Trainings" />
                    </ListItemButton>
                </ListItem>
                </Link>
                <Link to="../Attendance">
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <CheckBoxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Attendance" />
                    </ListItemButton>
                </ListItem>
                </Link>
                <Link to="../Holliday">
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <CalendarMonthIcon />
                    </ListItemIcon>
                    <ListItemText primary="Holliday" />
                    </ListItemButton>
                </ListItem>
                </Link>
                <Link to="../Meetings">
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <MeetingRoomIcon />
                    </ListItemIcon>
                    <ListItemText primary="Meeting Invitation" />
                    </ListItemButton>
                </ListItem>
                </Link>
                <Link to="../Events">
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <EventIcon />
                    </ListItemIcon>
                    <ListItemText primary="Event Invitation" />
                    </ListItemButton>
                </ListItem>
                </Link>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <DownloadIcon />
                    </ListItemIcon>
                    <ListItemText primary="Download Items" />
                    </ListItemButton>
                </ListItem>
            
            </List>
            <Divider />
            <List>
            <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <PolicyIcon />
                    </ListItemIcon>
                    <ListItemText primary="Company Policy" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <Link to="../Setting"><ListItemText primary="Settings" /></Link>
                    </ListItemButton>
                </ListItem>
            </List>
    </div>
        </>
    
    )
}
export default Sidebar;