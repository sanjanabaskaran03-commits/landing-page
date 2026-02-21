import { Stack, Typography, Link, Box, Container } from '@mui/material';

function Footer() {
  const footerLinks = [
    "Support Center", "Invoicing", "Contract", "Careers", "Blog", "FAQs"
  ];

  return (
    <Box component="footer" sx={{ width: "100%", marginTop: "10%" }}>
      <Container maxWidth="lg">
        <Stack 
          direction={{ xs: "column", md: "row" }} 
          alignItems="center" 
          justifyContent="space-between" 
          spacing={{ xs: 4, md: 0 }} 
          paddingBottom="40px"
        >
          <Typography sx={{ 
            color: "#484848", 
            fontFamily: "volkhov", 
            fontWeight: "regular", 
            fontSize: { xs: "40px", md: "52px" } 
          }}>
            FASCO
          </Typography>

          <Stack 
            direction="row" 
            flexWrap="wrap" 
            justifyContent="center"
            gap={{ xs: "15px", sm: "30px" }}
          >
            {footerLinks.map((text) => (
              <Link 
                key={text}
                href="#" 
                sx={{ 
                  textDecoration: "none", 
                  color: "#484848", 
                  fontFamily: "Poppins", 
                  fontSize: { xs: "14px", sm: "16px" }, 
                  whiteSpace: "nowrap"
                }}
              >
                {text}
              </Link>
            ))}
          </Stack>
        </Stack>
      </Container>

      <Stack 
        width="100%" 
        borderTop="1px solid #EAEAEA" 
        pt={3} 
        pb={5}
        px={2}
      >
        <Typography sx={{ 
          textAlign: "center", 
          color: "#484848", 
          fontFamily: "Poppins", 
          fontSize: { xs: "12px", sm: "16px" } 
        }}>
          Copyright © 2022 Xpro. All Rights Reserved
        </Typography>
      </Stack>
    </Box>
  );
}

export default Footer;