import React, { useState } from 'react';
import { Stack, Typography, Button, Box, Rating, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const productData = [
  { id: 0, title: "Shiny Dress", price: "$95.50", brand: "Al Karam", reviews: "4.1k" },
  { id: 1, title: "Long Dress", price: "$95.50", brand: "Al Karam", reviews: "4.1k" },
  { id: 2, title: "Full Sweater", price: "$95.50", brand: "Al Karam", reviews: "4.1k" },
  { id: 3, title: "White Dress", price: "$95.50", brand: "Al Karam", reviews: "4.1k" },
  { id: 4, title: "Colorful Dress", price: "$95.50", brand: "Al Karam", reviews: "4.1k" },
  { id: 5, title: "White Shirt", price: "$95.50", brand: "Al Karam", reviews: "4.1k" },
];

function Products() {
  const [showAll, setShowAll] = useState(false);
  const isLargeScreen = useMediaQuery('(min-width:1024px)');
  const navigate = useNavigate();

  const visibleProducts = isLargeScreen ? productData : (showAll ? productData : productData.slice(0, 2));

  const handleButtonClick = () => {
    if (isLargeScreen) {
      navigate('/shop'); 
    } else {
      setShowAll(!showAll);
    }
  };

  return (
    <Stack sx={{ width: "95%", maxWidth: "1200px", margin: "30px auto", alignItems: "center" }}>
      
      <Box 
        display="grid" 
        gridTemplateColumns={{ 
            xs: "1fr",          
            sm: "1fr 1fr",      
            md: "repeat(3, 1fr)" 
        }} 
        gap="30px"
        width="100%"
      >
        {visibleProducts.map((item) => (
          <Stack 
            key={item.id}
            sx={{ 
              backgroundColor: "#fff",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)", 
              padding: "15px", 
              borderRadius: "20px",
              transition: "transform 0.3s ease",
              "&:hover": { transform: "translateY(-5px)" }
            }}
          >
            <Box 
              component="img" 
              src={`/images/homepage/arrivals/Images (${item.id}).png`} 
              sx={{ width: "100%", borderRadius: "15px", height: "250px", objectFit: "cover" }}
            />
            
            <Stack direction="row" alignItems="center" justifyContent="space-between" mt={2}>
              <Typography sx={{ fontWeight: "600", fontFamily: "Volkhov" }}>{item.title}</Typography>
              <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small" />
            </Stack>

            <Typography sx={{ color: "#8A8A8A", fontFamily: "Poppins", fontSize: "14px", mt: 0.5 }}>
              {item.brand}
            </Typography>

            <Typography sx={{ color: "#484848", fontFamily: "Poppins", fontSize: "13px", mt: 2 }}>
              ({item.reviews}) Customer Reviews
            </Typography>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mt={2}>
              <Typography sx={{ color: "#484848", fontFamily: "Poppins", fontWeight: "600", fontSize: "20px" }}>
                {item.price}
              </Typography>
              <Typography sx={{ color: "#FF4646", fontFamily: "Poppins", fontSize: "12px", fontWeight: "500" }}>
                Almost Sold Out
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Box>

      <Button 
        variant="contained"
        onClick={handleButtonClick}
        startIcon={(!isLargeScreen && showAll) ? <ExpandLessIcon /> : <AcUnitIcon />}
        sx={{
          mt: 6,
          bgcolor: "#000",
          color: "#fff",
          px: 4,
          py: 1.5,
          borderRadius: "10px",
          textTransform: "none",
          fontFamily: "Poppins",
          boxShadow: "0 8px 15px rgba(0,0,0,0.2)",
          "&:hover": { bgcolor: "#333" }
        }}
      >
        {isLargeScreen ? "View More" : (showAll ? "View Less" : "View More")}
      </Button>
    </Stack>
  );
}

export default Products;