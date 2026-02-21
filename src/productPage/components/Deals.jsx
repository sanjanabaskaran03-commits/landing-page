import React, { useState, useEffect } from 'react';
import { Stack, Typography, Button, Box, IconButton } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const images = [
  "/images/homepage/deals/img1.png",
  "/images/homepage/deals/img2.png",
  "/images/homepage/deals/img3.png"
];

const TOTAL_STEPS = images.length;

function Deals() {
  const [activeStep, setActiveStep] = useState(0);
  
  const [timeLeft, setTimeLeft] = useState({ d: '00', h: '00', m: '00', s: '00' });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3); 

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ d: '00', h: '00', m: '00', s: '00' });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          d: String(days).padStart(2, '0'),
          h: String(hours).padStart(2, '0'),
          m: String(minutes).padStart(2, '0'),
          s: String(seconds).padStart(2, '0'),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => setActiveStep((prev) => (prev + 1) % TOTAL_STEPS);
  const handleBack = () => setActiveStep((prev) => (prev - 1 + TOTAL_STEPS) % TOTAL_STEPS);

  return (
    <Stack width="1000px" margin="30px auto">
      <Stack 
        direction="row" 
        className="deals" 
        sx={{ 
          width: "100%", 
          mt: "5%", 
          justifyContent: "center", 
          gap: "40px",
          alignItems: "stretch" 
        }}
      >
        
        <Stack sx={{ width: "40%", alignItems: "flex-start" }}>
          <Typography 
            variant="h1" 
            sx={{ 
              fontFamily: "Volkhov", 
              fontSize: "38px", 
              lineHeight: "80px", 
              color: "#484848" 
            }}
          >
            Deals Of The Month
          </Typography>

          <Typography 
            sx={{ 
              fontFamily: "Poppins", 
              fontSize: "16px", 
              color: "#484848", 
              width: "88%", 
              mb: "10px" 
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
            ultrices sollicitudin aliquam sem.
          </Typography>
          
          <Box sx={{ lineHeight: "80px" }}>
            <Button 
              startIcon={<ShoppingCartIcon />}
              variant="contained"
              sx={{ bgcolor: "black", width: "160px", height: "45px", borderRadius: "8px", "&:hover": { bgcolor: "#333" } }}
            >
              Buy Now
            </Button>
          </Box>

          <Typography 
            sx={{ 
              fontFamily: "Poppins", 
              fontWeight: "bold", 
              fontSize: "22px", 
              color: "#484848", 
              lineHeight: "40px", 
              mt: "15px",
              mb: "25px" 
            }}
          >
            Hurry, Before It’s Too Late!
          </Typography>

          <Stack direction="row" spacing={2.5} sx={{ mb: 4 }}>
            {[
              { v: timeLeft.d, l: 'Days' }, 
              { v: timeLeft.h, l: 'Hr' }, 
              { v: timeLeft.m, l: 'Mins' }, 
              { v: timeLeft.s, l: 'Sec' }
            ].map((t, i) => (
              <Stack key={i} alignItems="center">
                <Box sx={{ 
                  width: "60px", 
                  height: "60px", 
                  bgcolor: "#fff", 
                  borderRadius: "12px", 
                  boxShadow: "0 15px 25px rgba(184, 179, 179, 0.15)", 
                  display: "flex", 
                  justifyContent: "center", 
                  alignItems: "center" 
                }}>
                  <Typography 
                    sx={{ 
                      fontFamily: "'Courier New', monospace", 
                      fontSize: "32px", 
                      fontWeight: "bold", 
                      color: "#484848" 
                    }}
                  >
                    {t.v}
                  </Typography>
                </Box>
                <Typography sx={{ fontFamily: "Poppins", fontSize: "14px", color: "#484848", mt: 1 }}>
                  {t.l}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>

        <Stack sx={{ width: "60%", alignItems: "center", position: "relative" }}>
          <Stack direction="row" spacing={4} alignItems="center" sx={{ height: "500px", position: 'relative' }}>
            
            <Stack 
                direction="row" 
                spacing={1} 
                sx={{ 
                    position: 'absolute', 
                    bottom: '30px', 
                    left: '-70px',
                    zIndex: 10 
                }}
            >
              <IconButton 
                onClick={handleBack} 
                sx={{ 
                  width: "40px",
                  height: "40px",
                  bgcolor: "#fff", 
                  color: "#000",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.15)", 
                  "&:hover": { bgcolor: "#000", color: "#fff" } 
                }}
              >
                <KeyboardArrowLeftIcon fontSize="small" />
              </IconButton>
              <IconButton 
                onClick={handleNext} 
                sx={{ 
                  width: "40px",
                  height: "40px",
                  bgcolor: "#fff", 
                  color: "#000",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.15)", 
                  "&:hover": { bgcolor: "#000", color: "#fff" } 
                }}
              >
                <KeyboardArrowRightIcon fontSize="small" />
              </IconButton>
            </Stack>

            {images.map((img, index) => {
              const isActive = index === activeStep;
              return (
                <Box key={index} sx={{ 
                  position: "relative",
                  width: isActive ? "260px" : "180px", 
                  height: isActive ? "460px" : "360px",
                  opacity: isActive ? 1 : 0.6,
                  transition: "all 0.6s ease",
                  borderRadius: "18px",
                  overflow: "hidden",
                  flexShrink: 0
                }}>
                  <Box component="img" src={img} sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  {index === 0 && (
                    <Box sx={{ 
                      position: "absolute", bottom: "20px", left: "20px", bgcolor: "#fff", 
                      p: "14px 16px", borderRadius: "6px", boxShadow: "0 12px 25px rgba(0,0,0,0.15)", zIndex: 5 
                    }}>
                      <Typography sx={{ fontSize: "12px", color: "#666", display: "block", fontFamily: "Poppins" }}>01 — Spring Sale</Typography>
                      <Typography sx={{ fontSize: "18px", fontWeight: "bold", color: "#000", fontFamily: "Poppins" }}>30% OFF</Typography>
                    </Box>
                  )}
                </Box>
              );
            })}
          </Stack>

          <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
            {images.map((_, i) => (
              <Box key={i} onClick={() => setActiveStep(i)} sx={{ 
                width: "8px", height: "8px", borderRadius: "50%", cursor: "pointer",
                bgcolor: i === activeStep ? "#000" : "#ccc" 
              }} />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Deals;