import React from 'react';
import {
  Box,
  Button,
  Drawer,
  Typography,
} from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';

const FilterDrawer = ({ drawerWidth, children }) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <>
      <Button
        size="large"
        color="primary"
        variant="contained"
        sx={{
          position: 'fixed',
          bottom: 15,
          right: 15,
          zIndex: 1,
          height: 64,
          width: 64,
          borderRadius: '50%',
        }}
        onClick={() => setDrawerOpen(!drawerOpen)}
      >
        <TuneIcon sx={{ color: 'common.white', fontSize: '2rem' }} />
      </Button>

      <Drawer
        anchor="left"
        variant="temporary"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={(theme) => ({ width: drawerWidth, p: 2, mt: theme.mixins.navbar.height })}>
          <Typography variant="h4">Filters</Typography>
          {children}
        </Box>
      </Drawer>
    </>
  );
};

export default FilterDrawer;
