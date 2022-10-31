import 
  { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Tooltip, Typography } 
  from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const drawerWidth = 240;
const navItems = [
  {
    'name': 'Home',
    'route': '/'
  },
  {
    'name': 'Browse',
    'route': '/browse'
  },
  {
    'name': 'About Us',
    'route': '/aboutUs'
  },
];


export function DrawerAppBar(props) {
  const router = useRouter();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  function RouterPush(event) {
    const route = event.target.getAttribute('route');
    router.push(route);
  }
  
  function DrawerRouterPush(event) {
    const buttonName = event.target.innerHTML;
    const route = navItems.filter(item=> item.name === buttonName);
    router.push(route[0].route);
  }


  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', height:'100%' }}  className='navbar-drawer'>
      <Image className='readNovelsLogo' src='/Read Novels.svg' width={134} height={67} alt='ReadJPNovels Logo'/>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={DrawerRouterPush}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}

      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" position='static' className='navbar'>
        <Toolbar>
          <Box sx={{ display: { xs: 'none', sm: 'block', sm: 'flex' }, mr: 1 }}>
          <Image className='readNovelsLogo' src='/Read Novels.svg' width={134} height={67} alt='ReadJPNovels Logo'/>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, ml: 'auto' }}>
            {navItems.map((item) => (
              <Button key={item.name} sx={{ color: 'inherit' }} onClick={RouterPush} route={item.route}>
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
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
      </Box>
    </Box>
  );
}
