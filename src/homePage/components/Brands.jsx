import React, { useState } from 'react';
import { Stack, Typography, Container } from '@mui/material';

const Brands = () => {
  const brandData = [
    { name: 'CHANEL', fontFamily: 'Verdana' },
    { name: 'LOUIS VUITTON', fontFamily: 'Verdana' },
    { name: 'PRADA', fontFamily: 'Courier New' },
    { name: 'Calvin Klein', fontFamily: 'Verdana' },
    { name: 'DENIM', fontFamily: 'fantasy' },
  ];

  const [activeIndex, setActiveIndex] = useState(2);
  const total = brandData.length;

  const getFontSize = (name, isActive, isMobile) => {
    const isLong = name.length > 8;
    if (isMobile) {
      if (isActive) return isLong ? '16px' : '22px';
      return isLong ? '10px' : '13px';
    }
    if (isActive) return isLong ? '30px' : '42px';
    return isLong ? '16px' : '20px';
  };

  const getVisibleIndices = () => {
    const prev = (activeIndex - 1 + total) % total;
    const next = (activeIndex + 1) % total;
    return [prev, activeIndex, next];
  };

  const visibleIndices = getVisibleIndices();

  return (
    <Container maxWidth="lg" sx={{ mt: '5%', mb: 5 }}>
      <Stack 
        direction="row" 
        justifyContent="center" 
        alignItems="center" 
        spacing={{ xs: 1, sm: 2, md: 8 }} 
        sx={{ 
          maxWidth: "1000px", 
          margin: "30px auto",
          minHeight: '80px',
        }}
      >
        {visibleIndices.map((brandIndex) => {
          const brand = brandData[brandIndex];
          const isActive = brandIndex === activeIndex;

          return (
            <Typography 
              key={brand.name}
              onClick={() => setActiveIndex(brandIndex)}
              sx={{ 
                cursor: 'pointer',
                fontFamily: brand.fontFamily,
                transition: 'all 0.4s ease-in-out',
                whiteSpace: 'nowrap',
                textAlign: 'center',
                flex: 1,
                
                color: isActive ? '#000' : '#CCCCCC',
                fontWeight: isActive ? 'bold' : 'normal',
                
                fontSize: {
                  xs: getFontSize(brand.name, isActive, true),
                  md: getFontSize(brand.name, isActive, false)
                },
                
                transform: isActive ? 'scale(1.1)' : 'scale(1)',
                '&:hover': {
                  color: isActive ? '#000' : '#8A8A8A',
                }
              }}
            >
              {brand.name}
            </Typography>
          );
        })}
      </Stack>
    </Container>
  );
};

export default Brands;