import React from 'react';
import { 
  Stack, 
  Typography, 
  Button, 
  Box, 
  TextField, 
  Container 
} from '@mui/material';

function SubscribeSection() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 10 } }}>
      <Stack 
        direction={{ xs: "column", lg: "row" }} 
        alignItems="center" 
        justifyContent="center"
        spacing={{ xs: 4, lg: 2 }}
        sx={{ width: "100%" }}
      >
        
        <Box sx={{ flex: 1, textAlign: "center", width: "100%" }}>
          <Box 
            component="img" 
            src="/images/homepage/subscribe/subscribe-2.png" 
            sx={{ 
              width: "100%", 
              height: { xs: "auto", md: "350px", lg: "450px" }, 
              maxWidth: "400px",
              objectFit: "contain",
              borderRadius: "8px"
            }} 
          />
        </Box>

        <Stack 
          spacing={2} 
          alignItems="center" 
          sx={{ flex: 2, textAlign: "center", px: { xs: 2, md: 0 } }}
        >
          <Typography 
            variant="h1"
            sx={{ 
              fontFamily: "Volkhov", 
              fontSize: { xs: "21px", md: "36px", lg: "42px" }, 
              color: "#484848",
              fontWeight: "bold",
              lineHeight: 1.2
            }}
          >
            Subscribe To Our Newsletter
          </Typography>

          <Typography 
            sx={{ 
              fontFamily: "Poppins", 
              fontSize: { xs: "10px", md: "14px" }, 
              color: "#8A8A8A", 
              maxWidth: "420px",
              lineHeight: 1.5
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices
            sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin
          </Typography>

          <Stack 
            direction="column" 
            spacing={2} 
            sx={{ width: "100%", maxWidth: "450px", mt: 2 }}
          >
            <TextField
              fullWidth
              placeholder="michael@ymail.com"
              variant="standard"
              InputProps={{
                disableUnderline: true,
                sx: {
                  bgcolor: "#fff",
                  borderRadius: "10px",
                  px: 2.5,
                  height: { xs: "45px", md: "55px" },
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.05)",
                  fontFamily: "Poppins",
                  fontSize: "14px"
                }
              }}
            />

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button 
                variant="contained"
                sx={{ 
                  bgcolor: "#000", 
                  color: "#fff", 
                  width: { xs: "50%", sm: "200px",md:"190px",lg:"150px" }, 
                  height: { xs: "45px", md: "55px" },
                  borderRadius: "10px", 
                  textTransform: "none",
                  fontSize: {xs:"12px",md:"20px",lg:"14px"},
                  fontWeight: "bold",
                  boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                  "&:hover": { bgcolor: "#333" }
                }}
              >
                Subscribe Now
              </Button>
            </Box>
          </Stack>
        </Stack>
        <Box sx={{ flex: 1, textAlign: "center", width: "100%" }}>
          <Box 
            component="img" 
            src="/images/homepage/subscribe/subscribe-1.png" 
            sx={{ 
              width: "100%", 
              height: { xs: "auto", md: "350px", lg: "450px" }, 
              maxWidth: "400px",
              objectFit: "contain",
              borderRadius: "8px"
            }} 
          />
        </Box>

      </Stack>
    </Container>
  );
}

export default SubscribeSection;