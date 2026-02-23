import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, Stack, Typography, Link, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Box, useMediaQuery } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MenuIcon from "@mui/icons-material/Menu";

function Header({ cartCount = 0 }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width:1024px)");

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Shop", path: "/shop" },
    { title: "Products", path: "/product" },
    { title: "Page", path: "/" }
  ];

  return (
    <Box 
      component="header" 
      sx={{ 
        py: { xs: 2, md: 3 },
        position: "sticky",
        top: 0,
        zIndex: 1100,
        bgcolor: "white",
        boxShadow: "0px 2px 10px rgba(0,0,0,0.05)",
      }}
    >
      <Container maxWidth="lg">
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography
            sx={{
              fontFamily: "Volkhov",
              color: "#484848",
              fontWeight: "bold",
              fontSize: { xs: "26px", md: "32px", lg: "48px" }
            }}
          >
            FASCO
          </Typography>

          {isDesktop && (
            <Stack direction="row" spacing={4}>
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  component={RouterLink}
                  to={link.path}
                  underline="none"
                  sx={{ color: "#484848", fontWeight: 500 }}
                >
                  {link.title}
                </Link>
              ))}
            </Stack>
          )}

          <Stack direction="row" spacing={1} alignItems="center" color="#484848">
            <IconButton color="inherit"><SearchIcon /></IconButton>
            
            {isDesktop && (
              <>
                <IconButton color="inherit"><PermIdentityIcon /></IconButton>
                <IconButton color="inherit"><StarBorderIcon /></IconButton>
              </>
            )}

            <IconButton component={RouterLink} to="/cart" color="inherit">
               <ShoppingBagIcon />
            </IconButton>

            {!isDesktop && (
              <IconButton onClick={() => setMobileOpen(true)} color="inherit">
                <MenuIcon />
              </IconButton>
            )}
          </Stack>
        </Stack>
      </Container>
      {/* ... Drawer code ... */}
    </Box>
  );
}

export default Header;