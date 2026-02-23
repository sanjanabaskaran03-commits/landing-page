import React from 'react';
import { Stack, Typography, Box, GlobalStyles } from '@mui/material';

const FollowSection = () => {
  const images = [
    "/images/homepage/follow/image-1.png", "/images/homepage/follow/image-2.png", 
    "/images/homepage/follow/image-3.png", "/images/homepage/follow/image-4.png", 
    "/images/homepage/follow/image-5.png", "/images/homepage/follow/image-6.png", 
    "/images/homepage/follow/image-7.png"
  ];

  return (
    <Box sx={{ width: '100%', mt: '80px', mb: '40px', overflow: 'hidden' }}>
      <GlobalStyles styles={{
        '@keyframes floatTogether': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none'
        },
        '.hide-scrollbar': {
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }
      }} />

      <Box sx={{ px: 2 }}>
        <Typography 
          variant="h2" 
          sx={{ 
            fontFamily: 'Volkhov, serif', 
            fontSize: { xs: '26px', md: '46px', lg: "48px" }, 
            color: '#484848', 
            textAlign: 'center',
            fontWeight: "bold" 
          }}
        >
          Follow Us On Instagram
        </Typography>

        <Typography 
          sx={{ 
            fontFamily: 'Poppins, sans-serif', 
            fontSize: '24px',
            color: '#8A8A8A', 
            textAlign: 'center',
            maxWidth: '599px',
            mx: 'auto',
            mt: 2,
            lineHeight: 1.6
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem.
        </Typography>
      </Box>

      <Box 
        sx={{ 
          width: '100%', 
          mt: '60px',
        }}
      >
        <Stack 
          className="hide-scrollbar"
          direction="row" 
          alignItems="flex-end" 
          spacing={0} 
          sx={{ 
            width: '100%',
            flexWrap: 'nowrap', 
            overflowX: { xs: 'auto', md: 'hidden' }, 
            scrollSnapType: { xs: 'x mandatory', md: 'none' },
            WebkitOverflowScrolling: 'touch',
            animation: { md: 'floatTogether 5s ease-in-out infinite', xs: 'none' }, 
          }}
        >
          {images.map((src, i) => (
            <Box 
              key={i} 
              component="img" 
              src={src} 
              sx={{  
                flex: { xs: '0 0 33.333%', md: '1 1 0' }, 
                minWidth: 0, 
                height: { xs: '150px', md: '200px', lg: '280px' },
                objectFit: 'cover', 
                display: 'block',
                transition: 'all 0.3s ease',
                filter: 'brightness(0.95)',
                cursor: 'pointer',
                
                '&:nth-of-type(2n)': {
                  height: { md: '300px', lg: '360px' },
                  filter: 'brightness(1)',
                },
                
                '&:hover': {
                  filter: 'brightness(1)',
                  zIndex: 10,
                  transform: { md: 'scale(1.05)', xs: 'none' }, 
                }
              }} 
            />
          ))} 
        </Stack>
      </Box>
    </Box>
  );
};

export default FollowSection;