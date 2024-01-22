import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from '../../img/Logo.png';
import { Link } from 'react-router-dom';
import LandPage from '../../Pages/LandPage/landPage';
const style = {

    background : 'black'
};

const drawerWidth = 240;
const navItems = [{"link":'Home'}, {"link":'Artists'},{"link":'Proyects'},{"link":'Academy'},{"link":'Webs'}];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        AGORA3DSTUDIO®
      </Typography>
      <Divider />
      <List>
        

          <ListItem key={'Home'} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
            <Link to="../Home"  exact  >
             <ListItemText primary={'Home'} />
              </Link>
            </ListItemButton>
    
          </ListItem>
          <ListItem key={'Artists'} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
            <Link to="../Artists"  exact  >
             <ListItemText primary={'Artists'} />
              </Link>
            </ListItemButton>
    
          </ListItem>
        
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className='w-screen relative'>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" style={style}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <img src={Logo} className='h-6' />

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            AGORA3DSTUDIO®
            
          </Typography>
          
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                 <Link to="../Home"  exact  >
              <Button key="Home" sx={{ color: '#fff' }}>
                Home
              </Button>
              </Link>
              <Link to="../Home"  exact  >
              <Button key="Home" sx={{ color: '#fff' }}>
                Proyects
              </Button>
              </Link>
              <Link to="../Artists"  exact  >
              <Button key="Artists" sx={{ color: '#fff' }}>
                Artists
              </Button>
              </Link>      <Link to="../Webs"  exact  >
              <Button key="Webs" sx={{ color: '#fff' }}>
                Webs
              </Button>
              </Link>
              <Link to="../Academy"  exact  >
              <Button key="Academy" sx={{ color: '#fff' }}>
                Academy
              </Button>
              </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
     
    </Box>
    </div>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;