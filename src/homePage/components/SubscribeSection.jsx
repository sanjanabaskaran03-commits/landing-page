import { Stack, Typography, Button, Box, TextField } from '@mui/material';

function SubscribeSection() {
  return (
    <Stack 
      direction={{ xs: "column", lg: "row" }} 
      alignItems="center" 
      justifyContent="center"
      sx={{ 
        width: "100%", 
        maxWidth: "1200px", 
        margin: { xs: "40px auto", md: "80px auto" }, 
        px: 2,
        gap: { xs: 4, lg: 0 } 
      }}
    >
      <Box sx={{ flex: 1, order: { xs: 1, lg: 1 }, textAlign: "center" }}>
        <Box 
          component="img" 
          src="/images/homepage/subscribe/subscribe-2.png" 
          sx={{ height: { xs: "220px", md: "350px", lg: "450px" }, objectFit: "contain" }} 
        />
      </Box>

      <Stack 
        spacing={3} 
        alignItems="center" 
        sx={{ flex: 2, textAlign: "center", order: { xs: 2, lg: 2 } }}
      >
        <Typography 
          sx={{ 
            fontFamily: "Volkhov", 
            fontSize: { xs: "24px", md: "36px" }, 
            color: "#484848",
            lineHeight: 1.2,
            fontWeight:"bold"
          }}
        >
          Subscribe To Our Newsletter
        </Typography>

        <Typography 
          sx={{ 
            fontFamily: "Poppins", 
            fontSize: "12px", 
            color: "#8A8A8A", 
            maxWidth: "420px" 
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices
          sollicitudin aliquam sem.
        </Typography>

        <Stack 
          direction={{ xs: "column", sm: "row" }} 
          spacing={2}
          alignItems="center"
          justifyContent="center"
          sx={{ 
            width: "100%", 
            maxWidth: "500px", 
            mt: 2 
          }}
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
                px: 2,
                height: "55px",
                boxShadow: "0px 10px 30px rgba(0,0,0,0.05)",
                fontFamily: "Poppins",
              }
            }}
          />
          
          <Button 
            variant="contained"
            sx={{ 
              bgcolor: "#000", 
              color: "#fff", 
              width: { xs: "160px", sm: "auto" }, 
              px: 4, 
              height: "55px",
              borderRadius: "10px", 
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "bold",
              boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
              "&:hover": { bgcolor: "#333" }
            }}
          >
            Subscribe 
          </Button>
        </Stack>
      </Stack>

      <Box sx={{ flex: 1, order: { xs: 3, lg: 3 }, textAlign: "center" }}>
        <Box 
          component="img" 
          src="/images/homepage/subscribe/subscribe-1.png" 
          sx={{ height: { xs: "220px", md: "350px", lg: "450px" }, objectFit: "contain" }} 
        />
      </Box>
    </Stack>
  );
}

export default SubscribeSection;