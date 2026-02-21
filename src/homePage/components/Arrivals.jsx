import { Stack, Typography, Box,Button } from '@mui/material';

function Arrivals() {
  return (
    <Stack 
      alignItems="center" 
      textAlign="center" 
      sx={{ 
        width: "100%", 
        maxWidth: "1200px", 
        margin: "100px auto 30px" 
      }}
    >
      {/* Main Heading */}
      <Typography 
        variant="h2" 
        sx={{
          fontFamily: "volkhov, serif",
          fontWeight: 400,
          fontSize: { xs: "32px", md: "46px" }, // Matches your CSS 46px
          color: "#484848",
        }}
      >
        New Arrivals
      </Typography>

      {/* Description */}
      <Typography 
        sx={{
          fontFamily: "poppins, sans-serif",
          fontWeight: 400,
          fontSize: "16px",
          maxWidth: "530px", // Replaces width + marginLeft % for better centering
          marginTop: "10px",
          color: "#8A8A8A",
          lineHeight: 1.6
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin 
      </Typography>
      
      {/* Category Tabs */}
      <Stack 
        direction="row" 
        alignItems="center" 
        justifyContent="center" 
        flexWrap="wrap"
        gap={{ xs: "15px", md: "40px" }} 
        marginTop="40px"
      >
        <Typography sx={categoryStyle}>Men's Fashion</Typography>
        
        {/* Active State Component */}
        <Box sx={{
          bgcolor: "#000",
          color: "#fff",
          borderRadius: "8px",
          height: "45px",
          px: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          fontFamily: "Poppins",
          fontSize: "16px"
        }}>
          Women's Fashion
        </Box>

        <Typography sx={categoryStyle}>Men Accessories</Typography>
        <Typography sx={categoryStyle}>Women Accessories</Typography>
        <Typography sx={categoryStyle}>Discount Deals</Typography>
      </Stack>
    </Stack>
  );
}

// Shared style for inactive categories
const categoryStyle = {
  color: "#8A8A8A",
  fontFamily: "Poppins",
  fontWeight: 400,
  fontSize: "16px",
  cursor: "pointer",
  transition: "0.3s",
  "&:hover": {
    color: "#000"
  }
};

export default Arrivals;


<Button 
                    variant="contained" 
                    sx={{
                      bgcolor: "#000",
                      color: "#fff",
                      px: 4,
                      py: 1.5,
                      borderRadius: "10px",
                      textTransform: "none",
                      fontSize: "16px",
                      fontWeight: "medium",
                      boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
                      "&:hover": { bgcolor: "#333" }
                    }}
                  >
                    Subscribe
                  </Button>