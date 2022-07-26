import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const auth = React.useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          {auth.user?.username ?
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="right">
              {auth.user?.username}
            </Typography> 
            :
            <Typography color="inherit" variant="h6" component="div" onClick={() => navigate('/login')}>Login</Typography>
          }

        </Toolbar>
      </AppBar>
    </Box>
  );
}
