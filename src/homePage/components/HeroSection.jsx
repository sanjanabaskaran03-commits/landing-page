import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <Stack 
      direction="row" 
      justifyContent="center" 
      alignItems="center" 
      spacing={{ xs: 0, md: 4 }} 
      sx={{ 
        mt: { xs: '20px', md: '50px' }, 
        width: '95%',
        maxWidth: '1000px', 
        margin: "30px auto",
        overflow: 'hidden' 
      }}
    >
      <Box sx={{ 
        flex: 1, 
        maxWidth: '350px',
        height: '556px', 
        bgcolor: '#E0E0E0', 
        position: 'relative', 
        borderRadius: '20px',
        display: { xs: 'none', md: 'block' } 
      }}>
        <Box 
          component="img" 
          src="/images/homepage/herosection/image1.png" 
          sx={{ width: '192px', height: '400px', position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)' }} 
        />
      </Box>

      <Box sx={{ 
        width: { xs: '100%', md: '350px' }, 
        height: '556px', 
        position: 'relative', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        borderRadius: { xs: '20px', md: '0px' }, 
      }}>
        
        <Box 
          component="img" 
          src="/images/homepage/herosection/image2.png" 
          sx={{ 
            width: { xs: '90%', md: '328px' }, 
            height: '145px', 
            position: 'absolute', 
            bgcolor: '#E0E0E0', 
            borderRadius: '20px', 
            top: '5px', 
            zIndex: 1,
            display:"block",
            objectFit: 'cover'
          }} 
        />

        <Stack 
          spacing={0}
          sx={{ 
            position: 'absolute', 
            top: '155px', 
            bottom: '125px', 
            left: 0, 
            right: 0, 
            textAlign: 'center', 
            zIndex: 2,
            justifyContent: 'center' 
          }}
          alignItems="center"
        >
          <Typography sx={{ color: '#484848', fontFamily: 'Verdana', fontSize: { xs: '36px', sm:"40px",md: '48px' }, fontWeight: 500, lineHeight: 1 }}>
            ULTIMATE
          </Typography>
          <Typography sx={{ 
            color: 'transparent', 
            fontFamily: 'Verdana', 
            fontSize: { xs: '70px', md: '90px' }, 
            fontWeight: 500, 
            lineHeight: { xs: '70px', md: '90px' },
            WebkitTextStroke: '1px #484848' 
          }}>
            SALE
          </Typography>
          <Typography sx={{ color: '#484848', fontFamily: 'Poppins', fontSize: '12px', mt: 1, mb: 2 }}>
            NEW COLLECTION
          </Typography>
          <Button 
            component={Link} 
            to="/shoppage"
            variant="contained"
            sx={{ 
              width: '125px', 
              height: '40px', 
              bgcolor: '#000', 
              borderRadius: '10px', 
              fontFamily: 'Poppins',
              fontSize: '14px',
              textTransform: 'none',
              '&:hover': { bgcolor: '#333' }
            }}
          >
            SHOP NOW
          </Button>
        </Stack>

        <Box 
          component="img" 
          src="/images/homepage/herosection/image2-1.png" 
          sx={{ 
            width: { xs: '90%', md: '328px' }, 
            height: '120px', 
            position: 'absolute', 
            bottom: '5px', 
            zIndex: 1,
            borderRadius: '20px',
            objectFit: 'cover'
          }} 
        />
      </Box>

      <Box sx={{ 
        flex: 1,
        maxWidth: '350px',
        height: '556px', 
        bgcolor: '#E0E0E0', 
        position: 'relative', 
        borderRadius: '20px',
        display: { xs: 'none', md: 'block' }
      }}>
        <Box 
          component="img" 
          src="/images/homepage/herosection/image3.png" 
          sx={{ width: '192px', height: '400px', position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)' }} 
        />
      </Box>
    </Stack>
  );
};

export default HeroSection;