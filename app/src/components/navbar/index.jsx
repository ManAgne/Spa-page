import * as React from 'react';
import {
  AppBar,
  Box,
  IconButton,
  Drawer,
  useMediaQuery,
  Badge,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import SelfImprovementRoundedIcon from '@mui/icons-material/SelfImprovementRounded';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import * as Nav from './components';

const links = [
  { text: 'Home', to: '/' },
  { text: 'Treatments', to: '/treatments' },
  { text: 'Cosmetics', to: '/cosmetics' },
  { text: 'Online reservation', to: '/reservation' },
];

const expandBr = 'md';

const Navbar = () => {
  const { cartItemsCount } = useCart();
  const navigate = useNavigate();
  const isContracted = useMediaQuery((theme) => theme.breakpoints.down(expandBr));
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!isContracted && open) {
      setOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isContracted]);

  return (
    <AppBar position="static">
      <Box sx={(theme) => theme.mixins.navbar}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          sx={{ display: { [expandBr]: 'none' }, alignSelf: 'center' }}
          onClick={() => setOpen(!open)}
        >
          {open
            ? <CloseIcon sx={(theme) => ({ marginLeft: theme.spacing(1) })} />
            : <MenuIcon sx={(theme) => ({ marginLeft: theme.spacing(1) })} />}
        </IconButton>

        <Box sx={{ display: { xs: 'none', [expandBr]: 'flex' }, alignSelf: 'stretch' }}>
          {links.map(({ text, to }) => <Nav.Link key={to} to={to} sx={{ px: 4 }}>{text}</Nav.Link>)}
        </Box>

        {isContracted && (
          <Drawer anchor="top" open={open} sx={{ zIndex: 1 }}>
            <Box sx={(theme) => ({
              paddingTop: `calc(${theme.spacing(4)} + ${theme.mixins.navbar.height})`,
              paddingBottom: theme.spacing(4),
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100vh',
            })}
            >
              <Box>
                {links.map(({ text, to }) => (
                  <Nav.Link
                    key={to}
                    to={to}
                    contracted
                    onClick={() => setOpen(false)}
                  >
                    {text}
                  </Nav.Link>
                ))}
              </Box>

              <Box sx={{ display: 'flex', alignSelf: 'stretch', flexDirection: 'column' }}>
                <Nav.Link to="/cart" onClick={() => setOpen(false)} contracted>Shopping Bag</Nav.Link>
                <Nav.Link to="/wishlist" onClick={() => setOpen(false)} contracted>Wishlist</Nav.Link>
                <Nav.Link to="/login" onClick={() => setOpen(false)} contracted>Login</Nav.Link>
                <Nav.Link to="/register" onClick={() => setOpen(false)} contracted>Sign up</Nav.Link>
              </Box>
            </Box>
          </Drawer>
        )}

        <Box sx={{ display: { xs: 'none', [expandBr]: 'flex' }, alignSelf: 'stretch' }}>
          <IconButton
            size="large"
            color="inherit"
            onClick={() => {
              if (isContracted && open) setOpen(false);
              navigate('/login');
            }}
          >
            <SelfImprovementRoundedIcon />
          </IconButton>

          <IconButton
            size="large"
            color="inherit"
            onClick={() => {
              if (isContracted && open) setOpen(false);
              navigate('/wishlist');
            }}
          >
            <FavoriteRoundedIcon />
          </IconButton>

          <IconButton
            size="large"
            color="inherit"
            sx={(theme) => ({ marginRight: theme.spacing(1) })}
            onClick={() => {
              if (isContracted && open) setOpen(false);
              navigate('/cart');
            }}
          >
            {cartItemsCount !== 0 ? (
              <Badge badgeContent={cartItemsCount} color="secondary">
                <ShoppingBagIcon sx={{ color: 'common.white' }} />
              </Badge>
            ) : <ShoppingBagIcon sx={{ color: 'common.white' }} />}
          </IconButton>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Navbar;
