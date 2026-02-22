import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Avatar, 
  IconButton, 
  Rating, 
  Container,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const testimonials = [
  {
    id: 1,
    name: "James K.",
    role: "Traveler",
    text: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
    img: "/images/homepage/customer/customer2.png", 
    rating: 5
  },
  {
    id: 2,
    name: "Sarah S.",
    role: "Designer",
    text: "The quality of service exceeded my expectations. I will definitely be using this again for my future trips!",
    img:  "/images/homepage/customer/customer1.png",
    rating: 5
  },
  {
    id: 3,
    name: "Albert M.",
    role: "Photographer",
    text: "Outstanding attention to detail. This product has changed the way I organize my travel schedule entirely.",
    img:  "/images/homepage/customer/image-1.png",
    rating: 5
  }
];

const CustomerSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  
  // Detects if we are on tablet or mobile
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));

  const handleNext = () => {
    setActiveStep((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleBack = () => {
    setActiveStep((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <Container sx={{ py: 8, textAlign: 'center' }}>
      <Typography sx={{ fontWeight: 'bold', mb: 2 ,fontSize:{xs:"18px",md:"48px",lg:"48px"},color:"#484848"}}>
        This Is What Our Customers Say
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: { xs: 1, md: 5 } }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
      </Typography>

      <Box sx={{ 
        position: 'relative', 
        height: { xs: 320, sm: 350, md: 320 }, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        mb: 6,
        overflow: 'visible' 
      }}>
        {testimonials.map((item, index) => {
          const isActive = index === activeStep;
          const isPrev = index === (activeStep === 0 ? testimonials.length - 1 : activeStep - 1);
          const isNext = index === (activeStep === testimonials.length - 1 ? 0 : activeStep + 1);

          // On mobile, they stack; on desktop, they spread
          const translateXValue = isMobileOrTablet ? '0%' : '40%';
          const translateYValue = isMobileOrTablet && !isActive ? '15px' : '0px';

          return (
            <Card 
              key={item.id}
              sx={{ 
                position: 'absolute',
                display: 'flex', 
                flexDirection: 'row', // Force horizontal layout on all screens
                p: { xs: 2, sm: 3 }, 
                width: '95%',
                maxWidth: 650, 
                borderRadius: 4, 
                bgcolor: 'white', 
                boxShadow: isActive ? '0 15px 50px rgba(0,0,0,0.1)' : '0 5px 15px rgba(0,0,0,0.05)',
                alignItems: 'center',
                textAlign: 'left',
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)', 
                
                zIndex: isActive ? 3 : 1,
                opacity: isActive ? 1 : 0.3,
                
                transform: isActive 
                  ? `translate(0, 0) scale(1)` 
                  : isPrev 
                    ? `translateX(-${translateXValue}) translateY(${translateYValue}) scale(0.85)` 
                    : isNext 
                      ? `translateX(${translateXValue}) translateY(${translateYValue}) scale(0.85)` 
                      : 'scale(0.7)',
                visibility: (isActive || isPrev || isNext) ? 'visible' : 'hidden'
              }}
            >
              <Avatar
                src={item.img}
                variant="rounded"
                sx={{ 
                    width: { xs: 80, sm: 120, md: 120 }, 
                    height: { xs: 100, sm: 120, md: 140 }, 
                    mr: { xs: 2, sm: 4 }, 
                    flexShrink: 0 // Prevents the image from getting squeezed
                }}
              />
              <CardContent sx={{ p: '0 !important', flex: 1 }}>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#555', 
                    mb: 1, 
                    fontSize: { xs: '0.75rem', sm: '0.9rem', md: '0.95rem' },
                    lineHeight: 1.4
                  }}
                >
                  "{item.text}"
                </Typography>
                
                <Rating value={item.rating} readOnly size="small" sx={{ color: '#FFD700', mb: 0.5 }} />
                
                <Box sx={{ borderBottom: '2px solid #000', width: { xs: 40, sm: 80, md: 100 }, mb: 1.5 }} />

                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', lineHeight: 1, fontSize: { xs: '0.9rem', sm: '1.1rem' } }}>
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.7rem', sm: '0.875rem' } }}>
                  {item.role}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>

      {/* Navigation Buttons */}
      {/* Navigation Controls - Pulled up using negative margin */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: 2, 
        mt: { xs: -10, md: -6 }, // Negative margin pulls the buttons upward
        position: 'relative',   // Ensures they sit on top of any overlapping shadows
        zIndex: 10 
      }}>
        <IconButton 
          onClick={handleBack} 
          sx={{ bgcolor: 'white', boxShadow: 1, '&:hover': { bgcolor: '#f5f5f5' } }}
        >
          <KeyboardArrowLeft />
        </IconButton>
        <IconButton 
          onClick={handleNext} 
          sx={{ bgcolor: 'white', boxShadow: 1, '&:hover': { bgcolor: '#f5f5f5' } }}
        >
          <KeyboardArrowRight />
        </IconButton>
      </Box>
    </Container>
  );
};

export default CustomerSection;