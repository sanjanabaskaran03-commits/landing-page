import React from 'react';
import { Stack, Typography, Button, Box, useMediaQuery, useTheme } from '@mui/material';

const tagBaseStyle = {
  position: "absolute",
  bgcolor: "#fff",
  fontSize: "10px",
  padding: "4px 12px",
  borderRadius: "2px",
  border: "1px solid #000",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  whiteSpace: "nowrap",
  zIndex: 10,
  fontFamily: "Poppins",
};

function PeakySection() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      sx={{
        width: "100%",
        mt: 10,
        bgcolor: { xs: "#D9D9D9", md: "#f3f3f3" },
        position: "relative",
        overflow: "hidden"
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          position: "relative",
          bgcolor: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          height: { xs: "450px", md: "520px" },
        }}
      >
        <Box className="tags-layer" sx={{ position: "absolute", inset: 0, zIndex: 4 }}>
          <Typography sx={{ ...tagBaseStyle, top: { xs: "15%", md: "90px" }, right: { xs: "20%", md: "140px",lg:"190px" } }}>
            Flat Cap
          </Typography>
          {isDesktop && (
            <Box component="img" src="/images/homepage/peaky/point (2).png" 
              sx={{ position: "absolute", width: {xs:"150px",md:"70px"}, top: {xs:"-1020px",md:"70px",lg:"70px"}, right: {xs:"20px",md:"200px",lg:"250px"}, objectFit: "contain" }} 
            />
          )}

          <Typography sx={{ ...tagBaseStyle, top: { xs: "40%", md: "190px" }, left: { xs: "2%", md: "30px",lg:"55px" } }}>
            Suspender
          </Typography>
          {isDesktop && (
            <Box component="img" src="/images/homepage/peaky/point.png" 
              sx={{ position: "absolute",  width: {xs:"50px",md:"80px"}, top: {xs:"20px",md:"175px",lg:"175px"}, left: {xs:"20px",md:"70px",lg:"120px"}, objectFit: "contain" }} 
            />
          )}

          <Typography sx={{ ...tagBaseStyle, top: { xs: "49%", md: "240px" }, right: { xs: "27%", md: "215px" } }}>
            Hugo Boss
          </Typography>
          {isDesktop && (
            <Box component="img" src="/images/homepage/peaky/point (4).png" 
              sx={{ position: "absolute", width: {xs:"50px",md:"70px"}, top: {xs:"20px",md:"220px",lg:"220px"}, left: {xs:"20px",md:"200px",lg:"240px"}, objectFit: "contain" }} 
            />
          )}

          <Typography sx={{ ...tagBaseStyle, top: { xs: "63%", md: "305px",lg:"305px" }, left: { xs: "1%", md: "20px",lg:"50px" } }}>
            Hugo Boss
          </Typography>
          {isDesktop && (
            <Box component="img" src="/images/homepage/peaky/point (1).png" 
              sx={{ position: "absolute", width: {xs:"50px",md:"90px",lg:"90px"}, top: {xs:"20px",md:"290px",lg:"290px"}, left: {xs:"20px",md:"75px",lg:"115px"}, objectFit: "contain" }} 
            />
          )}

          <Typography sx={{ ...tagBaseStyle, bottom: { xs: "4%", md: "25px",lg:"30px"}, right: { xs: "35%", md: "180px",lg:"230px" } }}>
            Santoni
          </Typography>
          {isDesktop && (
            <Box component="img" src="/images/homepage/peaky/point (3).png" 
              sx={{ position: "absolute", width: {xs:"50px",md:"70px",lg:"70px"}, bottom: {xs:"20px",md:"50px",lg:"50px"}, right: {xs:"20px",md:"235px",lg:"280px"}, objectFit: "contain" }} 
            />
          )}
        </Box>

        <Box 
          component="img"
          src="/images/homepage/peaky/peaky.png"
          sx={{ height: "90%", zIndex: 3, objectFit: "contain", display: "block" }}
        />
      </Box>

      <Stack
        sx={{
          width: { xs: "100%", md: "50%" },
          padding: { xs: "40px 24px", md: "60px 80px" },
          bgcolor: { xs: "#D9D9D9", md: "transparent" },
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Typography sx={{ color: "#767676", fontSize: { xs: "14px", md: "18px" }, mb: 1, fontFamily: "Poppins" }}>
          Women Collection
        </Typography>

        <Typography 
          variant="h2" 
          sx={{ 
            fontSize: { xs: "34px", md: "44px" }, 
            fontWeight: "bold", 
            my: 1, 
            color: "#484848",
            fontFamily: "Volkhov, serif" 
          }}
        >
          Peaky Blinders
        </Typography>

        <Typography 
          sx={{ 
            fontSize: "12px", 
            fontWeight: "bold", 
            mb: 1, 
            textDecoration: "underline",
            fontFamily: "Verdana",
            letterSpacing: "1px"
          }}
        >
          DESCRIPTION
        </Typography>

        <Typography sx={{ color: "#484848", fontSize: "14px", lineHeight: 1.7, mb: 4, maxWidth: "420px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin
          aliquam sem. Scelerisque duis ultrices sollicitudin.
        </Typography>

        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
          <Typography sx={{ fontSize: "14px", color: "#767676" }}>Size:</Typography>
          <Box sx={{
            bgcolor: "#000",
            color: "#fff",
            px: 2,
            py: 0.6,
            borderRadius: "6px",
            fontWeight: "bold",
            fontSize: "14px"
          }}>M</Box>
        </Stack>

        <Typography sx={{ fontSize: "28px", fontWeight: "bold", mb: 4, color: "#000" }}>
          $100.00
        </Typography>

        <Button
          variant="contained"
          sx={{
            bgcolor: "#000",
            color: "#fff",
            borderRadius: "10px",
            textTransform: "none",
            width: "155px",
            height: "50px",
            fontSize: "16px",
            fontWeight: "500",
            boxShadow: "0 10px 20px rgba(0,0,0,0.25)",
            "&:hover": { bgcolor: "#333" }
          }}
        >
          Buy Now
        </Button>
      </Stack>
    </Stack>
  );
}

export default PeakySection;