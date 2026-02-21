import { Stack, Typography, Box, GlobalStyles } from '@mui/material';

const globalAnimation = (
  <GlobalStyles
    styles={{
      '@keyframes float': {
        '0%, 100%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-10px)' },
      },
    }}
  />
);

const commonStyles = {
  width: "200px",     
  height: "220px",
  objectFit: "cover",
  transition: "all 0.4s ease",
  filter: "brightness(0.95)",
  animation: "float 4s ease-in-out infinite",
};

const featuredStyles = {
  ...commonStyles,
  height: "280px",    
  filter: "brightness(1)",
  zIndex: 2,
  animationDelay: "0.5s", 
};

function FollowSection() {
  return (
    <Stack width="100%" marginTop="5%" alignItems="center">
      {globalAnimation}
      
      <Typography sx={{ fontFamily: "volkhov", fontSize: "46px", color: "#484848" }}>
        Follow Us On Instagram
      </Typography>
      
      <Typography sx={{ 
        fontFamily: "Poppins", 
        fontSize: "18px", 
        color: "#8A8A8A", 
        textAlign: "center", 
        maxWidth: "600px", 
        mb: 5 
      }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem.
      </Typography>

      <Stack 
        direction="row" 
        justifyContent="center" 
        alignItems="center" 
        spacing={0} 
        sx={{ width: '100%', overflow: 'hidden' }}
      >
        <Box component="img" src="/images/homepage/follow/image-1.png" sx={commonStyles} />
        <Box component="img" src="/images/homepage/follow/image-2.png" sx={featuredStyles} />
        <Box component="img" src="/images/homepage/follow/image-3.png" sx={commonStyles} />
        <Box component="img" src="/images/homepage/follow/image-4.png" sx={featuredStyles} />
        <Box component="img" src="/images/homepage/follow/image-5.png" sx={commonStyles} />
        <Box component="img" src="/images/homepage/follow/image-6.png" sx={featuredStyles} />
        <Box component="img" src="/images/homepage/follow/image-7.png" sx={commonStyles} />
      </Stack>
    </Stack>
  );
}

export default FollowSection;