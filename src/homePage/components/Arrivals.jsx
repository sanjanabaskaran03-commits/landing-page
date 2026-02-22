import { Stack, Typography, Box } from '@mui/material';

const categoryStyle = {
  color: "#8A8A8A",
  fontFamily: "Poppins",
  fontWeight: 400,
  fontSize: "18px",
  cursor: "pointer",
  transition: "0.3s",
  "&:hover": {
    color: "#000"
  }
};

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
      <Typography 
        variant="h2" 
        sx={{
          fontFamily: "volkhov, serif",
          fontWeight: 400,
          fontSize: { xs: "32px", md: "46px" },
          color: "#484848",
        }}
      >
        New Arrivals
      </Typography>

      <Typography 
        sx={{
          fontFamily: "poppins, sans-serif",
          fontWeight: 400,
          fontSize: "16px",
          maxWidth: "530px",
          marginTop: "10px",
          color: "#8A8A8A",
          lineHeight: 1.6
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin 
      </Typography>
      
      <Box sx={{ width: "100%", maxWidth: "1150px", mx: "auto" }}>
        <Stack 
          direction="row" 
          alignItems="center" 
          flexWrap="wrap"
          sx={{ 
            width: "100%", 
            marginTop: "40px",
            justifyContent: { xs: "center", md: "space-between" },
            gap: { xs: "20px", md: "0px" } 
          }}
        >
          <Typography sx={categoryStyle}>Men's Fashion</Typography>
          
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
      </Box>
    </Stack> 
  );
} 

export default Arrivals;