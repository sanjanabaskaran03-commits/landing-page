import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Stack, Typography, Link, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu'; 

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Shop', path: '/shop' },
    { title: 'Products', path: '/product' },
    { title: 'Page', path: '/' },
  ];

  return (
    <Stack 
      width={{ xs: "92%", sm: "90%", md: "100%" }} 
      maxWidth="1000px" 
      margin={{ xs: "15px auto", md: "30px auto" }} 
      direction="row" 
      alignItems="center" 
      justifyContent="space-between"
      sx={{ overflow: 'visible' }}
    >
      <Typography sx={{ 
        color: "#484848", 
        fontFamily: "volkhov", 
        fontSize: { xs: "24px", sm: "30px", md: "44px", lg: "46px" },
        fontWeight: 'bold'
      }}>
        FASCO
      </Typography>

      <Stack 
        direction="row" 
        spacing={{ md: 2, lg: 4 }} 
        alignItems="center" 
        sx={{ display: { xs: 'none', md: 'flex' } }}
      >
        {navLinks.map((link) => (
          <Link 
            key={link.title}
            component={RouterLink} 
            to={link.path} 
            underline="none" 
            sx={{ 
              color: "#484848", 
              fontFamily: "Poppins", 
              fontSize: "16px",
              display: 'inline-flex', 
              alignItems: 'center',
              whiteSpace: 'nowrap'
            }}
          >
            {link.title} {link.title === 'Page' && <ArrowDropDownIcon fontSize="small" />}
          </Link>
        ))}
      </Stack>

      <Stack direction="row" spacing={{ xs: 1.5, sm: 2, md: 3 }} alignItems="center">
        <SearchIcon sx={{ color: "#484848", cursor: 'pointer', fontSize: { xs: '20px', sm: '24px' } }} />
        <PermIdentityIcon sx={{ color: "#484848", cursor: 'pointer', display: { xs: 'none', sm: 'block' } }} />
        <StarBorderIcon sx={{ color: "#484848", cursor: 'pointer', display: { xs: 'none', sm: 'block' } }} />
        
        <IconButton component={RouterLink} to="/cart" sx={{ color: "#484848", p: 0 }}>
          <ShoppingBagIcon sx={{ fontSize: { xs: '20px', sm: '24px' } }} />
        </IconButton>
        
        <IconButton 
          sx={{ display: { md: 'none' }, color: "#484848", p: { xs: 0, sm: 1 } }} 
          onClick={toggleDrawer}
        >
          <MenuIcon sx={{ fontSize: { xs: '24px', sm: '28px' } }} />
        </IconButton>
      </Stack>

      <Drawer 
        anchor="right" 
        open={mobileOpen} 
        onClose={toggleDrawer}
        PaperProps={{ sx: { width: { xs: '70%', sm: '300px' } } }}
      >
        <Box sx={{ pt: 5 }} onClick={toggleDrawer}>
          <Typography variant="h5" sx={{ textAlign: 'center', fontFamily: 'volkhov', mb: 4, color: "#484848" }}>
            FASCO
          </Typography>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.title} disablePadding>
                <ListItemButton 
                  component={RouterLink} 
                  to={link.path}
                  sx={{ py: 2, justifyContent: 'center' }}
                >
                  <ListItemText 
                    primary={link.title} 
                    sx={{ 
                      textAlign: 'center', 
                      '& span': { 
                        fontFamily: 'Poppins', 
                        fontWeight: 500,
                        fontSize: '18px',
                        color: '#484848'
                      } 
                    }} 
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Stack>
  );
}

export default Header;