import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {Container,Stack,Typography,Link,IconButton,Drawer,List,ListItem,ListItemButton,ListItemText,Box,useMediaQuery} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width:1024px)");

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Shop", path: "/shop" },
    { title: "Products", path: "/product" },
    { title: "Page", path: "/" }
  ];

  return (
    <Box component="header" sx={{ py: { xs: 2, md: 3 } }}>
      <Container maxWidth="lg">
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          
          <Typography
            sx={{
              fontFamily: "Volkhov",
              color: "#484848",
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
                  sx={{ color: "#484848" }}
                >
                  {link.title}
                </Link>
              ))}
            </Stack>
          )}

          <Stack direction="row" spacing={1} alignItems="center" color="#484848">
            <SearchIcon />

            {isDesktop && (
              <>
                <PermIdentityIcon />
                <StarBorderIcon />
              </>
            )}

            <IconButton component={RouterLink} to="/cart">
              <ShoppingBagIcon />
            </IconButton>

            {!isDesktop && (
              <IconButton onClick={() => setMobileOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}
          </Stack>
        </Stack>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <Box sx={{ width: 260, pt: 5 }}>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.title} disablePadding>
                <ListItemButton
                  component={RouterLink}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                >
                  <ListItemText primary={link.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Header;