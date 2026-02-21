import { Stack, Typography, Box } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedIcon from '@mui/icons-material/Verified';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';

// Data array to keep the JSX clean and maintainable
const qualityFeatures = [
  {
    icon: <VerifiedIcon sx={{ fontSize: "42px" }} />,
    title: "High Quality",
    desc: "crafted from top materials"
  },
  {
    icon: <WorkspacePremiumIcon sx={{ fontSize: "42px" }} />,
    title: "Warranty Protection",
    desc: "Over 2 years"
  },
  {
    icon: <LocalShippingIcon sx={{ fontSize: "42px" }} />,
    title: "Free Shipping",
    desc: "Order over 150 $"
  },
  {
    icon: <WifiCalling3Icon sx={{ fontSize: "42px" }} />,
    title: "24 / 7 Support",
    desc: "Dedicated support"
  }
];

function QualitySection() {
  return (
    <Stack 
      direction="row" 
      alignItems="center" 
      justifyContent="center"
      flexWrap="wrap" // Allows items to drop to the next line on mobile
      sx={{ 
        width: "95%", 
        maxWidth: "1000px", 
        margin: "30px auto", 
        gap: { xs: 4, md: 2 }, // Larger gap on mobile for readability
        py: 4,
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
            flex: { xs: "1 1 100%", sm: "1 1 45%", md: "1 1 0" }, // Responsive width
            minWidth: "220px" 
          }}
        >
          {/* Icon Container */}
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

          {/* Text Content */}
          <Stack>
            <Typography 
              sx={{ 
                fontFamily: "Poppins", 
                fontWeight: "600", 
                fontSize: { xs: "18px", md: "20px" }, 
                color: "#484848" 
              }}
            >
              {feature.title}
            </Typography>
            <Typography 
              sx={{ 
                fontFamily: "Poppins", 
                fontWeight: "400", 
                fontSize: "14px", 
                color: "#8A8A8A" 
              }}
            >
              {feature.desc}
            </Typography>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
}

export default QualitySection;