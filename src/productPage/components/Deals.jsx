import React, { useState, useEffect, useCallback } from 'react'; 
import { Stack, Typography, Button, Box, Container, IconButton, useMediaQuery, useTheme } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const images = [
  { id: 0, src: "/images/homepage/deals/img1.png", label: "01 — Spring Sale", off: "30% OFF" },
  { id: 1, src: "/images/homepage/deals/img2.png", label: "02 — Summer Sale", off: "20% OFF" },
  { id: 2, src: "/images/homepage/deals/img3.png", label: "03 — Winter Sale", off: "50% OFF" },
];

function Deals() {
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [timeLeft, setTimeLeft] = useState({
    days: '02',
    hours: '06',
    mins: '05',
    secs: '30'
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2);
    targetDate.setHours(targetDate.getHours() + 6);
    targetDate.setMinutes(targetDate.getMinutes() + 5);
    targetDate.setSeconds(targetDate.getSeconds() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          days: String(d).padStart(2, '0'),
          hours: String(h).padStart(2, '0'),
          mins: String(m).padStart(2, '0'),
          secs: String(s).padStart(2, '0')
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleNext = useCallback(() => {
    setActiveStep((prev) => (prev + 1) % images.length);
  }, []);

  const handleBack = () => {
    setActiveStep((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const slideTimer = setInterval(() => handleNext(), 5000);
    return () => clearInterval(slideTimer);
  }, [handleNext, activeStep]);

  return (
    <Container maxWidth="xl" sx={{ my: { xs: 4, md: 10 }, px: { xs: 2, md: 10 } }}>
      <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 5, md: 6 }} alignItems="flex-start">
        
        <Box sx={{ width: { xs: "100%", md: "35%" }, textAlign: { xs: "center", md: "left" }, pt: { md: 2 } }}>
          <Typography variant="h3" sx={{ fontFamily: "Volkhov", mb: 2, color: "#484848", fontSize: { xs: "32px", md: "42px" }, fontWeight: 700, lineHeight: 1.2 }}>
            Deals Of The Month
          </Typography>
          <Typography sx={{ fontFamily: "Poppins", color: "#8A8A8A", mb: 4, fontSize: "16px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem.
          </Typography>
          
          <Button variant="contained" sx={{ bgcolor: "#000", px: 5, py: 1.8, mb: 4, textTransform: "none", borderRadius: "8px" }}>
            Buy Now
          </Button>

          <Typography sx={{ fontWeight: "bold", color: "#484848", fontSize: { xs: "18px", md: "22px" }, mb: 3 }}>
            Hurry, Before It’s Too Late!
          </Typography>

          <Stack direction="row" spacing={2} justifyContent={{ xs: "center", md: "flex-start" }} sx={{ mb: 4 }}>
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hr', value: timeLeft.hours },
              { label: 'Mins', value: timeLeft.mins },
              { label: 'Secs', value: timeLeft.secs }
            ].map((item, i) => (
              <Box key={i} sx={{ textAlign: "center" }}>
                <Box sx={{ width: "60px", height: "60px", bgcolor: "#fff", borderRadius: "8px", boxShadow: "0 10px 25px rgba(0,0,0,0.08)", display: "flex", justifyContent: "center", alignItems: "center", mb: 0.5 }}>
                  <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>{item.value}</Typography>
                </Box>
                <Typography variant="caption" sx={{ fontWeight: 600, color: "#484848" }}>{item.label}</Typography>
              </Box>
            ))}
          </Stack>

          {!isMobile && (
            <Stack direction="row" spacing={2} sx={{ mt: 2, justifyContent: "flex-end", width: "80%" }}>
              <IconButton onClick={handleBack} sx={{ bgcolor: "#fff", boxShadow: "0 4px 15px rgba(0,0,0,0.1)", width: 50, height: 50, left: "120px", position: "relative" }}>
                <ArrowBackIosNewIcon sx={{ fontSize: "18px" }} />
              </IconButton>
              <IconButton onClick={handleNext} sx={{ bgcolor: "#fff", boxShadow: "0 4px 15px rgba(0,0,0,0.1)", width: 50, height: 50, left: "100px", position: "relative" }}>
                <ArrowForwardIosIcon sx={{ fontSize: "18px" }} />
              </IconButton>
            </Stack>
          )}
        </Box>

        <Box sx={{ width: { xs: "100%", md: "65%" } }}>
          <Box sx={{ height: { xs: "450px", md: "500px" }, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Stack direction="row" spacing={isMobile ? 0 : 3} sx={{ width: "100%", height: "100%", position: "relative" }}>
              {images.map((img, index) => {
                const isActive = index === activeStep;
                const isFirstImageSource = img.id === 0;

                return (
                  <Box 
                    key={img.id} 
                    onClick={() => setActiveStep(index)}
                    sx={{ 
                      cursor: "pointer", borderRadius: "20px", overflow: "hidden",
                      transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                      position: isMobile ? "absolute" : "relative",
                      width: isMobile ? "100%" : (isActive ? "46%" : "24%"),
                      height: isMobile ? "100%" : (isActive ? "100%" : "85%"),
                      opacity: isMobile ? (isActive ? 1 : 0) : 1,
                      zIndex: isActive ? 2 : 1,
                      alignSelf: "center",
                      ...(isMobile && { transform: isActive ? "scale(1)" : "scale(0.9) translateY(20px)" }),
                      boxShadow: isActive ? "0 30px 60px rgba(0,0,0,0.15)" : "none",
                    }}
                  >
                    <Box component="img" src={img.src} sx={{ width: "100%", height: "100%", objectFit: "cover", filter: isActive ? "grayscale(0)" : "grayscale(0.4)" }} />
                    {isFirstImageSource && (
                      <Box sx={{ position: "absolute", bottom: 25, left: 20, bgcolor: "#fff", p: 2, borderRadius: "8px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)", textAlign: "left" }}>
                        <Typography variant="caption" sx={{ color: "#8A8A8A", fontWeight: 600, display: "block" }}>{img.label}</Typography>
                        <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>{img.off}</Typography>
                      </Box>
                    )}
                  </Box>
                );
              })}
            </Stack>
          </Box>

          <Stack direction="row" spacing={1.5} justifyContent="center" sx={{ mt: 5 }}>
            {images.map((_, i) => (
              <Box key={i} onClick={() => setActiveStep(i)} sx={{ width: activeStep === i ? "12px" : "8px", height: activeStep === i ? "12px" : "8px", borderRadius: "50%", bgcolor: activeStep === i ? "#000" : "#D1D1D1", cursor: "pointer", transition: "0.3s" }} />
            ))}
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}

export default Deals;