import { Stack, Typography, Box } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedIcon from '@mui/icons-material/Verified';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';

const qualityFeatures = [
  {
    icon: <VerifiedIcon sx={{ fontSize: "40px" }} />,
    title: "High Quality",
    desc: "crafted from top materials"
  },
  {
    icon: <WorkspacePremiumIcon sx={{ fontSize: "40px" }} />,
    title: "Warranty Protection",
    desc: "Over 2 years"
  },
  {
    icon: <LocalShippingIcon sx={{ fontSize: "40px" }} />,
    title: "Free Shipping",
    desc: "Order over 150 $"
  },
  {
    icon: <WifiCalling3Icon sx={{ fontSize: "40px" }} />,
    title: "24 / 7 Support",
    desc: "Dedicated support"
  }
];

function QualitySection() {
  return (
    <Box 
      component="section" 
      sx={{ 
        width: "100%", 
        bgcolor: "#fff", 
        borderTop: "1px solid #f0f0f0",
        borderBottom: "1px solid #f0f0f0",
        py: 6 
      }}
    >
      <Stack 
        direction="row" 
        alignItems="center" 
        justifyContent="space-between"
        flexWrap="wrap"
        sx={{ 
          width: "95%", 
          maxWidth: "1200px", 
          margin: "0 auto", 
          gap: { xs: 4, md:7, lg: 10 }, 
          px: 2
        }}
      >
        {qualityFeatures.map((feature, index) => (
          <Stack 
            key={index} 
            direction="row" 
            alignItems="center" 
            gap="15px"
            sx={{ 
              flex: { xs: "1 1 100%", sm: "1 1 45%", md: "1" }, 
              minWidth: "200px",
              justifyContent: { xs: "flex-start", md: "center" } 
            }}
          >
            <Box 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                color: "#484848" 
              }}
            >
              {feature.icon}
            </Box>

            <Stack>
              <Typography 
                sx={{ 
                  fontFamily: "Poppins", 
                  fontWeight: "600", 
                  fontSize: "16px", 
                  color: "#484848",
                  lineHeight: 1.2
                }}
              >
                {feature.title}
              </Typography>
              <Typography 
                sx={{ 
                  fontFamily: "Poppins", 
                  fontWeight: "400", 
                  fontSize: "13px", 
                  color: "#8A8A8A" 
                }}
              >
                {feature.desc}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}

export default QualitySection;