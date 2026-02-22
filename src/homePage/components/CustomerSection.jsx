import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Avatar, 
  IconButton, 
  Rating, 
  Container 
} from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';

const testimonials = [
  {
    id: 1,
    name: "James K.",
    role: "Traveler",
    text: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
    img: "/images/homepage/customer/customer1.png",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah S.",
    role: "Traveler",
    text: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
    img: "/images/homepage/customer/customer2.png",
    rating: 5
  },
  {
    id: 3,
    name: "Albert M.",
    role: "Traveler",
    text: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
    img: "/images/homepage/customer/image-1.png",
    rating: 5
  }
];

const TestimonialSlider = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleBack = () => {
    setActiveStep((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const current = testimonials[activeStep];

  return (
    <Container sx={{ py: 8, textAlign: 'center' }}>
      {/* Header Section */}
      <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 1 }}>
        This Is What Our Customers Say
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
      </Typography>

      {/* Card Section */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Card 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' }, 
            p: 3, 
            maxWidth: 600, 
            borderRadius: 4, 
            bgcolor: '#f9f9f9', 
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            alignItems: 'center',
            textAlign: 'left'
          }}
        >
          <Avatar
            src={current.img}
            variant="rounded"
            sx={{ width: 100, height: 100, mr: { sm: 3 }, mb: { xs: 2, sm: 0 } }}
          />
          <CardContent sx={{ p: '0 !important' }}>
            <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 2 }}>
              "{current.text}"
            </Typography>
            
            <Rating value={current.rating} readOnly size="small" sx={{ mb: 1 }} />
            
            <Box sx={{ borderBottom: '1px solid #000', width: 60, mb: 2 }} />

            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', lineHeight: 1 }}>
              {current.name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {current.role}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Navigation Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <IconButton 
          onClick={handleBack} 
          sx={{ bgcolor: 'white', boxShadow: 1, '&:hover': { bgcolor: '#eee' } }}
        >
          <ArrowBackIosNew fontSize="small" />
        </IconButton>
        <IconButton 
          onClick={handleNext} 
          sx={{ bgcolor: 'white', boxShadow: 1, '&:hover': { bgcolor: '#eee' } }}
        >
          <ArrowForwardIos fontSize="small" />
        </IconButton>
      </Box>
    </Container>
  );
};

export default TestimonialSlider;