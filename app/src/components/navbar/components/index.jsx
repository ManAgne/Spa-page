import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  color: theme.palette.common.white,

  '&.active': {
    boxShadow: `inset 0 -4px 0 ${theme.palette.common.white}`,
  },

  ':hover': {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
}));
