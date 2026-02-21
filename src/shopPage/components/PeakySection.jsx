import { Stack, Typography, Button, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function PeakySection() {
  const SECTION_HEIGHT = "520px";

  return (
    <Stack 
      direction="row" 
      alignItems="stretch" 
      sx={{ mt: "10%", height: SECTION_HEIGHT }} 
    >
      
      <Stack 
        width="50%" 
        position="relative" 
        sx={{ 
          display: "flex", 
          justifyContent: "center",
          alignItems: "center",
          height: "100%", 
          '&::before': {
            content: '""',
            position: 'absolute',
            width: '140px',
            height: '100%',
            left: '22%',
            top: 0,
            bgcolor: "#f3f3f3", 
            zIndex: 1,
          }
        }}
      >
        <Box sx={{ position: "absolute", inset: 0, zIndex: 4 }}>
         
          <Typography sx={tagStyle({ top: "60px", right: "235px" })}>Flat Cap</Typography>
          <Box component="img" src="/images/homepage/peaky/point (2).png" sx={pointStyle({ top: "25px", right: "275px" })} />

          <Typography sx={tagStyle({ top: "165px", left: "95px" })}>Suspender</Typography>
          <Box component="img" src="/images/homepage/peaky/point.png" sx={pointStyle({ top: "128px", left: "145px" })} />

          <Typography sx={tagStyle({ top: "305px", left: "95px" })}>Hugo Boss</Typography>
          <Box component="img" src="/images/homepage/peaky/point (1).png" sx={pointStyle({ top: "268px", left: "145px" })} />

          <Typography sx={tagStyle({ top: "220px", left: "335px" })}>Hugo Boss</Typography>
          <Box component="img" src="/images/homepage/peaky/point (3).png" sx={pointStyle({ top: "185px", left: "275px" })} />

          <Typography sx={tagStyle({ bottom: "25px", right: "250px" })}>Santoni</Typography>
          <Box component="img" src="/images/homepage/peaky/point (4).png" sx={pointStyle({ bottom: "45px", right: "310px" })} />
        </Box>

        <Box 
          component="img" 
          src="/images/homepage/peaky/peaky.png" 
          sx={{ height: "100%", width: "auto", objectFit: "contain", position: "relative", zIndex: 3 }} 
        />
      </Stack>

      <Stack 
        sx={{ 
          width: "50%", 
          padding: "10px", 
          gap: "10px", 
          bgcolor: "#f3f3f3",
          height: "100%",
          justifyContent: "center" 
        }}
      >
        <Typography sx={{ color: "#767676", fontSize: "20px" }}>Women Collection</Typography>
        <Typography sx={{ fontFamily: "Volkhov, serif", fontSize: "42px", color: "#484848", mb: 1 }}>
          Peaky Blinders
        </Typography>

        <Typography sx={{ textDecoration: "underline", fontWeight: "bold" }}>
          Description
        </Typography>
        <Typography sx={{ color: "#555", fontSize: "14px", lineHeight:"1.6", maxWidth: "380px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin
          aliquam sem. Scelerisque duis ultrices sollicitudin.
        </Typography>

        <Stack direction="row" alignItems="center" gap="10px" sx={{ my: 2 }}>
          <Typography sx={{ fontSize: "14px", color: "#767676" }}>Size:</Typography>
          <Typography sx={{ bgcolor: "#000", color: "#fff", px: 2, py: 0.2, borderRadius: "4px" }}>M</Typography>
        </Stack>

        <Typography sx={{ fontSize: "24px", fontWeight: "medium", mb: 2 }}>$100.00</Typography>
        
        <Button 
          startIcon={<ShoppingCartIcon />}
          variant="contained"
          sx={{ bgcolor: "black", width: "160px", height: "45px", borderRadius: "8px", "&:hover": { bgcolor: "#333" } }}
        >
          Buy Now
        </Button>
      </Stack>
    </Stack>
  );
}

const tagStyle = (positions) => ({
  position: "absolute",
  bgcolor: "#fff",
  fontSize: "11px",
  padding: "4px 12px",
  borderRadius: "2px",
  border: "1px solid #000",
  boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
  zIndex: 10,
  ...positions
});

const pointStyle = (positions) => ({
  position: "absolute",
  width: "70px",
  height: "40px",
  zIndex: 5,
  ...positions
});

export default PeakySection;