import React from 'react';
import { Stack, Typography, Button, Box } from '@mui/material';

function PeakySection() {
  return (
    <Stack
      className="peaky-section"
      direction="column"
      sx={{
        width: "100%",
        bgcolor: "#fff",
        mt: 10
      }}
    >
      <Box
        className="peaky-left"
        sx={{
          width: "100%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px 0",
          overflow: "hidden"
        }}
      >
        <Box className="tags" sx={{ position: "absolute", inset: 0, zIndex: 4 }}>

          <Typography sx={{ top: "17%", right: "28%", position: "absolute", bgcolor: "#fff", fontSize: "8px", padding: "2px 4px", borderRadius: "4px", border: "1px solid #000", boxShadow: "0 3px 8px rgba(0, 0, 0, 0.15)", whiteSpace: "nowrap", zIndex: 10, }}>Flat Cap</Typography>
          <Box component="img" src="/images/homepage/peaky/point (2).png"
            sx={{ top: "13%", right: "40%", width: "44px", position: "absolute", height: "auto", objectFit: "contain", pointerEvents: "none" }} />

          <Typography sx={{ top: "32%", left: "6%", position: "absolute", bgcolor: "#fff", fontSize: "8px", padding: "2px 4px", borderRadius: "4px", border: "1px solid #000", boxShadow: "0 3px 8px rgba(0, 0, 0, 0.15)", whiteSpace: "nowrap", zIndex: 10 }}>Suspender</Typography>
          <Box component="img" src="/images/homepage/peaky/point.png"
            sx={{ top: "29%", left: "20%", width: "44px", position: "absolute", height: "auto", objectFit: "contain", pointerEvents: "none" }} />

          <Typography sx={{ top: "54%", left: "9%", position: "absolute", bgcolor: "#fff", fontSize: "8px", padding: "2px 4px", borderRadius: "4px", border: "1px solid #000", boxShadow: "0 3px 8px rgba(0, 0, 0, 0.15)", whiteSpace: "nowrap", zIndex: 10 }}>Hugo Boss</Typography>
          <Box component="img" src="/images/homepage/peaky/point (1).png"
            sx={{ top: "52%", left: "22%", width: "44px", position: "absolute", height: "auto", objectFit: "contain", pointerEvents: "none" }} />

          <Typography sx={{ bottom: "14%", right: "38%", position: "absolute", bgcolor: "#fff", fontSize: "8px", padding: "2px 4px", borderRadius: "4px", border: "1px solid #000", boxShadow: "0 3px 8px rgba(0, 0, 0, 0.15)", whiteSpace: "nowrap", zIndex: 10 }}>Santoni</Typography>
          <Box component="img" src="/images/homepage/peaky/point (3).png"
            sx={{ top: "78%", left: "43%", width: "24px", position: "absolute", height: "auto", objectFit: "contain", pointerEvents: "none" }} />

          <Typography sx={{ top: "42%", left: "54%", position: "absolute", bgcolor: "#fff", fontSize: "8px", padding: "2px 4px", borderRadius: "4px", border: "1px solid #000", boxShadow: "0 3px 8px rgba(0, 0, 0, 0.15)", whiteSpace: "nowrap", zIndex: 10 }}>Hugo Boss</Typography>
          <Box component="img" src="/images/homepage/peaky/point (4).png"
            sx={{ top: "38%", right: "44%", width: "44px", position: "absolute", height: "auto", objectFit: "contain", pointerEvents: "none" }} />
        </Box>

        <Box className="peaky-img" sx={{ position: "relative", zIndex: 3 }}>
          <Box
            component="img"
            src="/images/homepage/peaky/peaky.png"
            sx={{
              width: "auto",
              height: "100%",
              maxHeight: "220px",
              objectFit: "contain",
              display: "block"
            }}
          />
        </Box>
      </Box>

      <Stack
        className="peaky-right"
        sx={{
          width: "100%",
          padding: "20px 15px",
          bgcolor: "#e5e5e5"
        }}
      >
        <Typography
          component="small"
          sx={{ color: "#767676", fontSize: "14px", mt: "10px", display: "block" }}
        >
          Women Collection
        </Typography>

        <Typography variant="h2" sx={{ fontSize: "32px", fontWeight: "bold", my: 1, color: "#484848" }}>
          Peaky Blinders
        </Typography>

        <Typography variant="h4" sx={{ fontSize: "14px", mb: 1, textDecoration: "underline" }}>
          Description
        </Typography>

        <Typography sx={{ color: "#484848", fontSize: "14px", lineHeight: 1.6, mb: 3 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin
          aliquam sem. Scelerisque duis ultrices sollicitudin.
        </Typography>

        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
          <Typography sx={{ fontSize: "14px" }}>Size:</Typography>
          <Button sx={{
            minWidth: "35px",
            bgcolor: "#000",
            color: "#fff",
            borderRadius: "4px",
            "&:hover": { bgcolor: "#333" }
          }}>M</Button>
        </Stack>

        <Typography variant="h3" sx={{ fontSize: "24px", fontWeight: "bold", mb: 2 }}>
          $100.00
        </Typography>

        <Button
          variant="contained"
          sx={{
            bgcolor: "#000",
            borderRadius: "4px",
            textTransform: "none",
            width: "fit-content",
            px: 4
          }}
        >
          Buy Now
        </Button>
      </Stack>
    </Stack>
  );
}



export default PeakySection;