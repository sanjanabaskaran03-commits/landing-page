import { Stack, Typography, Link, Box, useMediaQuery, Container } from "@mui/material";

function Footer() {
  const isLaptopUp = useMediaQuery("(min-width:1024px)");

  const footerLinks = [
    "Support Center",
    "Invoicing",
    "Contract",
    "Careers",
    "Blog",
    "FAQs"
  ];

  return (
    <Box component="footer" sx={{ mt: { xs: "50px", md: "80px" } }}>
      <Container maxWidth="lg">
        <Stack
          direction={isLaptopUp ? "row" : "column"}
          justifyContent="space-between"
          alignItems="center"
          spacing={{ xs: 3, md: 0 }}
          pb={{ xs: 2, md: 4 }}
        >
          <Typography
            sx={{
              fontFamily: "Volkhov",
              fontSize: { xs: "32px", lg: "52px" },
              color: "#484848"
            }}
          >
            FASCO
          </Typography>

          <Stack
            direction="row"
            spacing={{ xs: 2, md: 4 }}
            flexWrap="wrap"
            justifyContent="center"
          >
            {footerLinks.map((text) => (
              <Link
                key={text}
                href="#"
                underline="none"
                sx={{ color: "#484848", fontSize: "14px" }}
              >
                {text}
              </Link>
            ))}
          </Stack>
        </Stack>

        <Box
          sx={{
            borderTop: "1px solid #EAEAEA",
            pt: 3,
            pb: 5,
            textAlign: "center"
          }}
        >
          <Typography sx={{ fontSize: "14px", opacity: 0.8 }}>
            Copyright © 2022 Xpro. All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;