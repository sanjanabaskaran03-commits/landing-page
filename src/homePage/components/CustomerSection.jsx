import React, { useState } from 'react';
import { Stack, Typography, Box, Rating, IconButton, useMediaQuery, useTheme } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const REVIEWS = [
  { 
    name: "Sarah W.", 
    role: "Explorer", 
    img: "images/homepage/customer/customer1.png", 
    text: "The best service I have ever used. Highly recommended to everyone looking for quality and comfort." 
  },
  { 
    name: "James K.", 
    role: "Traveler", 
    img: "images/homepage/customer/customer2.png", 
    text: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!" 
  },
  { 
    name: "Michael B.", 
    role: "Designer", 
    img: "images/homepage/customer/image-1.png", 
    text: "Exceptional experience! I've tried many others, but this one stands out for its attention to detail." 
  },
  { 
    name: "Michael.", 
    role: "Designer", 
    img: "images/homepage/customer/image-1.png", 
    text: "Exceptional experience! I've tried many others, but this one stands out for its attention to detail." 
  }
];

function CustomerSection() {
  const [active, setActive] = useState(0);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const getStyle = (idx) => {
    const total = REVIEWS.length;
    
    if (idx === active) {
      return { 
        zIndex: 10, 
        transform: "translate(0, 0) scale(1)", 
        opacity: 1 
      };
    }

    if (idx === (active - 1 + total) % total) {
      return { 
        zIndex: 5, 
        transform: isDesktop 
            ? "translateX(-150px) scale(0.85)" 
            : "translateY(20px) scale(0.92)",  
        opacity: isDesktop ? 0.6 : 0.8
      };
    }

    if (idx === (active + 1) % total) {
      return { 
        zIndex: 5, 
        transform: isDesktop 
            ? "translateX(150px) scale(0.85)"  
            : "translateY(40px) scale(0.85)",
        opacity: isDesktop ? 0.6 : 0.4
      };
    }

    return { opacity: 0, zIndex: 0 };
  };

  return (
    <Stack width="100%" margin="40px auto" sx={{ overflow: 'hidden' }}>
      <Stack width="100%" alignItems="center" sx={{ py: 4, bgcolor: "#fdfdfd" }}>
        <Typography variant="h3" sx={{ textAlign:"center", fontFamily: "Volkhov", fontSize: {xs:"32px", md:"36px"}, color: "#484848" }}>
          This Is What Our Customers Say
        </Typography>
        
        <Box sx={{ 
          position: 'relative', 
          height: {xs:"350px", md:"400px"},
          width: '100%', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          mt: 4
        }}>
          {REVIEWS.map((r, i) => (
            <Stack 
              key={i}
              direction={{xs: "column", sm: "row"}} 
              spacing={{xs: 2, md: 3}}
              sx={{
                position: 'absolute',
                width: {xs:"85%", md:"550px"},
                bgcolor: '#fff',
                p: {xs: 2, md: 3},
                borderRadius: '20px',
                border: "1px solid #eee",
                boxShadow: i === active ? "0 20px 40px rgba(0,0,0,0.08)" : "none",
                transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                pointerEvents: i === active ? 'auto' : 'none', 
                ...getStyle(i)
              }}
            >
              <Box component="img" src={r.img} sx={{ 
                width: {xs:"60px", md:"100px"}, 
                height: {xs:"60px", md:"120px"}, 
                objectFit: "cover", 
                borderRadius: "12px",
                mx: {xs: 'auto', sm: 0} // Center image on mobile
              }} />
              
              <Stack textAlign={{xs: "center", sm: "left"}} justifyContent="center" flex={1}>
                <Typography sx={{ color: "#555", fontStyle: 'italic', mb: 1, fontSize: {xs: "13px", md: "15px"} }}>
                  "{r.text}"
                </Typography>
                <Rating value={5} readOnly size="small" sx={{ mb: 0.5, justifyContent: {xs: 'center', sm: 'flex-start'} }} />
                <Typography sx={{ fontWeight: 'bold', mt: 1 }}>{r.name}</Typography>
                <Typography sx={{ color: "#8A8A8A", fontSize: "12px"}}>{r.role}</Typography>
              </Stack>
            </Stack>
          ))}
        </Box>

        <Stack direction="row" spacing={2} sx={{ mt: {xs: 2, md: 4}, zIndex: 20 }}>
          <IconButton onClick={() => setActive((a) => (a - 1 + REVIEWS.length) % REVIEWS.length)} sx={{ border: "1px solid #eee", bgcolor: "#fff" }}>
            <KeyboardArrowLeftIcon />
          </IconButton>
          <IconButton onClick={() => setActive((a) => (a + 1) % REVIEWS.length)} sx={{ border: "1px solid #eee", bgcolor: "#fff" }}>
            <KeyboardArrowRightIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default CustomerSection;