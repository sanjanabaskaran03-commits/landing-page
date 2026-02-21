import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={{ xs: 0, md: 4 }}
      sx={{
        mt: { xs: "20px", md: "50px" },
        width: { xs: "95%", lg: "100%" },
        maxWidth: { xs: "1000px", lg: "1200px" },
        margin: { xs: "30px auto", lg: "50px auto" },
        overflow: "hidden"
      }}
    >
      <Box
        sx={{
          flex: 1,
          maxWidth: "350px",
          height: "556px",
          bgcolor: "#E0E0E0",
          position: "relative",
          borderRadius: "20px",
          display: { xs: "none", md: "block" }
        }}
      >
        <Box
          component="img"
          src="/images/homepage/herosection/image1.png"
          sx={{
            width: "192px",
            height: "400px",
            position: "absolute",
            bottom: "1px",
            left: "50%",
            transform: "translateX(-50%)"
          }}
        />
      </Box>

      <Box
        sx={{
          width: { xs: "100%", md: "350px" },
          height: "556px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: { xs: "20px", md: "0px" }
        }}
      >
        <Box
          component="img"
          src="/images/homepage/herosection/image2.png"
          sx={{
            width: { xs: "90%", md: "328px" },
            height: "145px",
            bgcolor: "#E0E0E0",
            borderRadius: "20px",
            objectFit: "cover",
            mt: "5px"
          }}
        />

        <Stack
          flex={1}
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          sx={{ px: 2 }}
        >
          <Typography
            sx={{
              color: "#484848",
              fontSize: { xs: "36px", md: "48px" },
              fontWeight: 500
            }}
          >
            ULTIMATE
          </Typography>

          <Typography
            sx={{
              color: "transparent",
              fontSize: { xs: "70px", md: "85px" },
              WebkitTextStroke: "1px #484848",
              lineHeight: 1,
              fontWeight: 500
            }}
          >
            SALE
          </Typography>

          <Typography
            sx={{
              fontSize: "12px",
              mt: 1,
              color: "#484848"
            }}
          >
            NEW COLLECTION
          </Typography>

          <Button
            component={Link}
            to="/shoppage"
            variant="contained"
            sx={{
              mt: 2,
              width: "125px",
              height: "40px",
              bgcolor: "#000",
              borderRadius: "10px",
              textTransform: "none",
              "&:hover": { bgcolor: "#333" }
            }}
          >
            SHOP NOW
          </Button>
        </Stack>

        <Box
          component="img"
          src="/images/homepage/herosection/image2-1.png"
          sx={{
            width: { xs: "90%", md: "328px" },
            height: "120px",
            borderRadius: "20px",
            objectFit: "cover",
            mb: "5px"
          }}
        />
      </Box>

      <Box
        sx={{
          flex: 1,
          maxWidth: "350px",
          height: "556px",
          bgcolor: "#E0E0E0",
          position: "relative",
          borderRadius: "20px",
          display: { xs: "none", md: "block" }
        }}
      >
        <Box
          component="img"
          src="/images/homepage/herosection/image3.png"
          sx={{
            width: "192px",
            height: "400px",
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)"
          }}
        />
      </Box>
    </Stack>
  );
};

export default HeroSection;