import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import StyledAppBar from './Header.styles';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 'bold' }}>
            Recipe Finder
            <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
              Search for something tasty
            </Typography>
          </Typography>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
};

export default Header;
