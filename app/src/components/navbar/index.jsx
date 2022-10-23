import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import SelfImprovementRoundedIcon from '@mui/icons-material/SelfImprovementRounded';
import { useNavigate } from 'react-router-dom';
import * as Nav from './components';

const pages = [
  { text: 'Home', to: '/' },
  { text: 'Treatments', to: '/treatments' },
  { text: 'Cosmetics', to: '/cosmetics' },
  { text: 'Online reservation', to: '/reservation' },
];

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ display: { sm: 'none ' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: 'flex', alignSelf: 'stretch' }}>
            {pages.map(({ text, to }) => (
              <Nav.Link
                key={to}
                to={to}
                sx={{ px: 4 }}
              >
                {text}
              </Nav.Link>
            ))}
          </Box>

          <Box>

            <IconButton
              size="large"
              color="inherit"
              onClick={() => navigate('/login')}
            >
              <SelfImprovementRoundedIcon />
            </IconButton>

            <IconButton
              size="large"
              color="inherit"
              onClick={() => navigate('/wishlist')}
            >
              <FavoriteRoundedIcon />
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              color="inherit"
              onClick={() => navigate('/cart')}
            >
              <ShoppingBagIcon />
            </IconButton>

          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
