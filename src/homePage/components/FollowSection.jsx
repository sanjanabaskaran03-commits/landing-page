import React from 'react';
import { Stack, Typography, Box, GlobalStyles, Container } from '@mui/material';

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

      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          sx={{ 
            fontFamily: 'Volkhov, serif', 
            fontSize: { xs: '26px', md: '46px' }, 
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
            fontSize: '16px',
            color: '#8A8A8A', 
            textAlign: 'center',
            maxWidth: '650px',
            mx: 'auto',
            mt: 2,
            lineHeight: 1.6
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem.
        </Typography>
      </Container>

      <Stack 
        className="hide-scrollbar"
        direction="row" 
        alignItems="flex-end" 
        spacing={0} 
        sx={{ 
          mt: '60px', 
          width: '100%',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          animation: { md: 'floatTogether 5s ease-in-out infinite', xs: 'none' }, // Disable float on mobile for better swiping
        }}
      >
        {images.map((src, i) => (
          <Box 
            key={i} 
            component="img" 
            src={src} 
            sx={{  
              flex: { xs: '0 0 33.33%', md: '0 0 180px' }, 
              height: { xs: '150px', md: '240px' },
              objectFit: 'cover', 
              transition: 'all 0.3s ease',
              filter: 'brightness(0.95)',
              cursor: 'pointer',
              scrollSnapAlign: 'start',
              '&:nth-of-type(2n)': {
                height: { md: '300px' },
                width: { md: '210px' },
                flex: { md: '0 0 210px' },
                filter: 'brightness(1)',
              },
              '&:hover': {
                filter: 'brightness(1)',
                zIndex: 10,
                transform: 'scale(1.05)', 
              }
            }} 
          />
        ))}
      </Stack>
    </Box>
  );
};

export default FollowSection;