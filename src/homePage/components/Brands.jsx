import React, { useState } from 'react';
import { Stack, Typography, Container, useTheme, useMediaQuery } from '@mui/material';

const Brands = () => {

  const brandData = [
    { name: 'CHANEL', fontFamily: 'Verdana', fontSize: '32px', fontWeight: 500 },
    { name: 'LOUIS VUITTON', fontFamily: 'Verdana', fontSize: '18px', fontWeight: 400 },
    { name: 'PRADA', fontFamily: 'Courier New', fontSize: '42px', fontWeight: 700 },
    { name: 'Calvin Klein', fontFamily: 'Verdana', fontSize: '19px', fontWeight: 400 },
    { name: 'DENIM', fontFamily: 'fantasy', fontSize: '42px', fontWeight: 700 },
  ];

  const [activeIndex, setActiveIndex] = useState(2);
  const total = brandData.length;

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const getVisibleIndices = () => {
    if (isDesktop) return brandData.map((_, i) => i);

    const prev = (activeIndex - 1 + total) % total;
    const next = (activeIndex + 1) % total;
    return [prev, activeIndex, next];
  };

  const visibleBrands = getVisibleIndices();

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
      <Stack
        direction="row"
        justifyContent={isDesktop ? "space-between" : "center"}
        alignItems="center"
        spacing={isDesktop ? 0 : 0}
        sx={{
          width: "100%",
          overflow: "hidden", 
        }}
      >
        {visibleBrands.map((index) => {
          const brand = brandData[index];
          const isActive = index === activeIndex;

          return (
            <Typography
              key={brand.name}
              onClick={() => !isDesktop && setActiveIndex(index)}
              sx={{
                fontFamily: brand.fontFamily,
                whiteSpace: "nowrap",
                letterSpacing: "1px",
                textAlign: "center",

                ...(isDesktop && {
                  fontSize: brand.fontSize,
                  fontWeight: brand.fontWeight,
                  color: "#000",
                  cursor: "default",
                }),

                ...(!isDesktop && {
                  flex: 1, 
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",

                  fontSize: isActive ? "24px" : "14px",
                  fontWeight: isActive ? 700 : 400,
                  color: isActive ? "#000" : "#aca6a6",

                  transition: "all 0.3s ease",
                })
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