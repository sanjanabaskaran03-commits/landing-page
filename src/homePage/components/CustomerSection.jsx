import React from "react";
import {
  Container,
  Stack,
  Typography,
  Box,
  Grid,
  useMediaQuery,
  Paper,
  Rating
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

function CustomerSection() {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  const isTablet = useMediaQuery("(min-width:600px) and (max-width:1023px)");
  const isMobile = useMediaQuery("(max-width:599px)");

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Fashion Enthusiast",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      text: "Amazing collection and fast shipping! The quality is exceptional and the customer service is outstanding.",
      rating: 5
    },
    {
      id: 2,
      name: "Emma Davis",
      role: "Style Blogger",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      text: "I love the latest trends available here. Every piece is carefully curated and worth every penny.",
      rating: 5
    },
    {
      id: 3,
      name: "Rachel Williams",
      role: "Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      text: "Professional, reliable, and always delivering on their promises. Highly recommended for quality fashion.",
      rating: 4
    }
  ];

  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 6, sm: 7, md: 8, lg: 10 },
        backgroundColor: "#fafafa"
      }}
    >
      <Container 
        maxWidth="lg" 
        sx={{ 
          px: { xs: 2, sm: 3, md: 4, lg: 0 }
        }}
      >
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7, lg: 8 } }}>
          <Typography
            sx={{
              fontFamily: "Volkhov",
              fontWeight: 700,
              color: "#484848",
              lineHeight: 1.2,
              fontSize: {
                xs: "28px",
                sm: "36px",
                md: "44px",
                lg: "56px",
                xl: "64px"
              },
              mb: { xs: 2, md: 3 },
              letterSpacing: { xs: "-0.5px", md: "-1px" }
            }}
          >
            What Our Customers Say
          </Typography>

          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: { xs: "14px", sm: "15px", md: "16px", lg: "17px" },
              color: "#8A8A8A",
              fontWeight: 400,
              lineHeight: 1.6,
              maxWidth: "600px",
              margin: "0 auto"
            }}
          >
            Join thousands of satisfied customers who trust us for quality fashion and exceptional service
          </Typography>
        </Box>

        <Grid 
          container 
          spacing={{ xs: 3, sm: 4, md: 4, lg: 5 }}
          sx={{ mb: { xs: 4, md: 6 } }}
        >
          {testimonials.map((testimonial) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4}
              key={testimonial.id}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, sm: 3.5, md: 4 },
                  borderRadius: "12px",
                  border: "1px solid #EAEAEA",
                  backgroundColor: "#fff",
                  transition: "all 0.3s ease",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": {
                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                    transform: "translateY(-4px)",
                    borderColor: "#D0D0D0"
                  }
                }}
              >
                {/* Quote Icon */}
                <FormatQuoteIcon 
                  sx={{ 
                    fontSize: { xs: 36, md: 40 },
                    color: "#484848",
                    opacity: 0.3,
                    mb: 2
                  }}
                />

                {/* Rating */}
                <Box sx={{ mb: 2 }}>
                  <Rating 
                    value={testimonial.rating} 
                    readOnly 
                    size={isMobile ? "small" : "medium"}
                    sx={{
                      fontSize: { xs: "18px", md: "20px" }
                    }}
                  />
                </Box>

                {/* Testimonial Text */}
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: { xs: "13px", sm: "14px", md: "15px" },
                    color: "#6A6A6A",
                    fontWeight: 400,
                    lineHeight: 1.7,
                    mb: "auto",
                    fontStyle: "italic",
                    minHeight: { xs: "60px", md: "70px" }
                  }}
                >
                  "{testimonial.text}"
                </Typography>

                {/* Divider */}
                <Box 
                  sx={{ 
                    height: "1px", 
                    backgroundColor: "#EAEAEA",
                    my: 3
                  }}
                />

                {/* Customer Info */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    component="img"
                    src={testimonial.image}
                    alt={testimonial.name}
                    sx={{
                      width: { xs: 44, md: 48 },
                      height: { xs: 44, md: 48 },
                      borderRadius: "50%",
                      objectFit: "cover"
                    }}
                  />
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: { xs: "13px", md: "14px" },
                        color: "#484848",
                        fontWeight: 600,
                        lineHeight: 1.3
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: { xs: "11px", md: "12px" },
                        color: "#8A8A8A",
                        fontWeight: 400
                      }}
                    >
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* STATS SECTION */}
        <Grid 
          container 
          spacing={{ xs: 3, sm: 4, md: 6 }}
          sx={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            border: "1px solid #EAEAEA",
            p: { xs: 4, sm: 5, md: 6, lg: 8 }
          }}
        >
          {[
            { number: "10K+", label: "Happy Customers" },
            { number: "50+", label: "Global Partners" },
            { number: "4.8★", label: "Average Rating" }
          ].map((stat, index) => (
            <Grid 
              item 
              xs={6} 
              sm={4}
              key={index}
              sx={{
                textAlign: "center",
                py: { xs: 2, md: 3 }
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Volkhov",
                  fontSize: { xs: "24px", sm: "28px", md: "36px", lg: "42px" },
                  fontWeight: 700,
                  color: "#484848",
                  mb: 1
                }}
              >
                {stat.number}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: { xs: "12px", sm: "13px", md: "14px", lg: "15px" },
                  color: "#8A8A8A",
                  fontWeight: 400
                }}
              >
                {stat.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default CustomerSection;