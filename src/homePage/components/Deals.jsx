import React, { useState, useEffect } from 'react';
import { Stack, Typography, Button, Box, Container } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const images = [
  "/images/homepage/deals/img1.png",
  "/images/homepage/deals/img2.png",
  "/images/homepage/deals/img3.png"
];

function Deals() {
  const [activeStep, setActiveStep] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ d: '00', h: '00', m: '00', s: '00' });

  useEffect(() => {
    const autoPlayTimer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(autoPlayTimer);
  }, []);

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3); 
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          d: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0'),
          h: String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0'),
          m: String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0'),
          s: String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0'),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ my: { xs: 4, md: 8 } }}>
      <Stack 
        direction={{ xs: "column", md: "row" }} 
        spacing={{ xs: 5, md: 10 }}
        alignItems="center"
      >
        <Stack sx={{ width: { xs: "100%", md: "40%" }, alignItems: { xs: "center", md: "flex-start" }, textAlign: { xs: "center", md: "left" } }}>
          <Typography variant="h1" sx={{ fontFamily: "Volkhov", fontSize: { xs: "32px", md: "40px" }, color: "#484848", mb: 2 }}>
            Deals Of The Month
          </Typography>
          <Typography sx={{ fontFamily: "Poppins", fontSize: "14px", color: "#484848", mb: 3 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem.
          </Typography>
          <Button 
            startIcon={<ShoppingCartIcon />}
            variant="contained"
            sx={{ bgcolor: "black", width: "180px", height: "50px", borderRadius: "8px", mb: 4, "&:hover": { bgcolor: "#333" } }}
          >
            Buy Now
          </Button>

          <Typography sx={{ fontFamily: "Poppins", fontWeight: "bold", fontSize: "20px", color: "#484848", mb: 2 }}>
            Hurry, Before It’s Too Late!
          </Typography>

          <Stack direction="row" spacing={2}>
            {[{ v: timeLeft.d, l: 'Days' }, { v: timeLeft.h, l: 'Hr' }, { v: timeLeft.m, l: 'Mins' }, { v: timeLeft.s, l: 'Sec' }].map((t, i) => (
              <Stack key={i} alignItems="center">
                <Box sx={{ width: "55px", height: "55px", bgcolor: "#fff", borderRadius: "10px", boxShadow: "0 8px 20px rgba(0,0,0,0.06)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>{t.v}</Typography>
                </Box>
                <Typography sx={{ fontSize: "12px", mt: 1 }}>{t.l}</Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>

        <Stack sx={{ width: { xs: "100%", md: "60%" }, alignItems: "center" }}>
          <Box sx={{ 
            position: 'relative', 
            width: "100%", 
            height: { xs: "400px", md: "500px" }, 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            overflow: 'hidden' 
          }}>
            {images.map((img, index) => {
              const isActive = index === activeStep;
              return (
               <Box 
  key={index} 
  sx={{ 
    display: { xs: isActive ? "block" : "none", md: "block" },
    position: { xs: "relative", md: "absolute" },
    left: { md: `calc(50% + ${(index - activeStep) * 220}px)` },
    transform: { md: 'translateX(-50%)' },
    
    width: isActive ? { xs: "90vw", md: "260px" } : { md: "180px" }, 
    height: isActive ? { xs: "450px", md: "460px" } : { md: "360px" },
    
    opacity: isActive ? 1 : 0.4,
    transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)", 
    borderRadius: "24px", 
    overflow: "hidden",
    zIndex: isActive ? 2 : 1,
    flexShrink: 0 
  }}
>
  <Box 
    component="img" 
    src={img} 
    sx={{ 
      width: "100%", 
      height: "100%", 
      display: "block",
      objectFit: "cover", 
      objectPosition: "top center", 
    }} 
  />
</Box>
              );
            })}
          </Box>

          <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
            {images.map((_, i) => (
              <Box 
                key={i} 
                onClick={() => setActiveStep(i)} 
                sx={{ 
                  width: i === activeStep ? "24px" : "8px", 
                  height: "8px", 
                  borderRadius: "10px", 
                  cursor: "pointer",
                  bgcolor: i === activeStep ? "#000" : "#ccc",
                  transition: "all 0.3s ease"
                }} 
              />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}

export default Deals;