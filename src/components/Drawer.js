import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import ListItemButton from '@mui/material/ListItemButton';
import { Link } from 'react-router-dom';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [batch, setbatch] = React.useState(false)
  const [mentor, setmentor] = React.useState(true)
  const [request, setrequest] = React.useState(true)
  let changeLogo1=()=>{
    setbatch(false)
    setmentor(true)
    setrequest(true)
  }

  let changeLogo2=()=>{
    setbatch(true)
    setmentor(false)
    setrequest(true)
  }
  let changeLogo3=()=>{
    setbatch(true)
    setmentor(true)
    setrequest(false)
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
        </DrawerHeader>

        <List >
          <ListItemButton>
            <Link to="/" >
            { batch ? <img src={require('./../image/group (1).png')} alt='' onClick={changeLogo1}></img>:
             <img src={require('./../image/group (2).png')} alt="" style={{backgroundColor:"#086288", borderRadius:"6px",width:"40px", padding:"5px"}}></img> }
            </Link>
          </ListItemButton>
          <br></br>
          <ListItemButton>
            <Link to="/Mentor" >
            { mentor ? <img src={require('./../image/team (4).png')} alt='' onClick={changeLogo2}></img>:
             <img src={require('./../image/team (3).png')} alt="" style={{backgroundColor:"#086288", borderRadius:"6px",width:"40px", padding:"5px"}}></img> }
            </Link>
          </ListItemButton>
          <br></br>
          <ListItemButton>
            <Link to="/Request" >
            { request ? <img src={require('./../image/add-user (2).png')} alt='' onClick={changeLogo3}></img>:
             <img src={require('./../image/add-user.png')} alt="" style={{backgroundColor:"#086288", borderRadius:"6px",width:"40px", padding:"5px"}}></img> }
            </Link>
          </ListItemButton>
        </List>

      </Drawer>
    </Box>
  );
}
