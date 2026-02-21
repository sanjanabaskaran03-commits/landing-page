import { Stack, Typography, Button, Box, Rating, MobileStepper, IconButton } from '@mui/material';

function SubscribeSection() {
  return (
    <Stack width="1000px" height="auto" margin="30px auto" direction="row" alignItems="center" justifyContent="space-between" position="relative" marginTop="4%">
      <Stack>
        <Box component="img" src="/images/homepage/subscribe/subscribe-2.png" sx={{ height: "500px"}} />

      </Stack>
      <Stack>
        <Typography sx={{fontFamily: "volkhov",fontWeight: "regular",fontSize: "36px",color: "#484848",textAlign: "center"}}>Subscribe To Our Newsletter</Typography>
        <Typography sx={{fontFamily: "Poppins",fontWeight: "regular",fontSize: "14px",color: "#8A8A8A",textAlign: "center",width: "420px",marginTop: "20px",marginLeft: "7%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices
          sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin</Typography>
        <Typography sx={{fontFamily: "Poppins",fontWeight: "regular",fontSize: "18px",color: "#8A8A8A",marginTop: "20px",marginLeft: "9%"}}>michael@ymail.com</Typography>

        <Stack  marginTop="20px" width="500px" height="150px" background= "linear-gradient(to bottom, #e2e4e4 10%, #f7f7f8 100%)" opacity= "0.5">
        </Stack>
        <Button  variant="contained" sx={{ width: "145px",height: "55px",borderRadius: "10px",border: "none",backgroundColor: "#000000",fontFamily: "Poppins",fontWeight: "medium",fontSize: "16px",color: "#ffffff",
    cursor: "pointer",
    boxShadow: "0px 18px 18px -8px #000",
    position: "absolute",
    top: "300px",
    marginLeft: "180px"}}>
          Subscribe
        </Button>

      </Stack>
      <Stack>
        <Box component="img" src="/images/homepage/subscribe/subscribe-1.png" sx={{height: "500px" }} />

      </Stack>
    </Stack>
  );
}

export default SubscribeSection;
