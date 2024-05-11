import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">Menu</Button>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Recipe finder
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Search for what you need
          </Typography>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
