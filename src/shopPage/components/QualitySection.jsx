import { Stack, Typography, Button, Box, Rating, MobileStepper, IconButton } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedIcon from '@mui/icons-material/Verified';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
function QualitySection() {
  return (
    <Stack width= "1000px" height="auto" margin="30px auto" direction="row" alignItems="center" justifyContent="space-between" position="relative" marginTop="8%">
        <Stack direction="row" alignItems="center" gap="5px">
            <Stack direction="row" alignItems="center" justifyContent="center" position="relative">
                    <VerifiedIcon sx={{fontSize:"42px"}}/>
            </Stack>
            <Stack>
                <Typography sx={{fontFamily: "Poppins",fontWeight: "medium",fontSize: "20px",color: "#484848"}}>High Quality</Typography>
                <Typography sx={{fontFamily: "Poppins",fontWeight: "regular",fontSize: "16px",color: "#484848"}}>crafted from top materials</Typography>
            </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" gap="5px">
        <Stack direction="row" alignItems="center" justifyContent="center" position="relative">
            <WorkspacePremiumIcon sx={{fontSize:"42px"}} />
            </Stack>
            <Stack>
                <Typography sx={{fontFamily: "Poppins",fontWeight: "medium",fontSize: "20px",color: "#484848"}}>Warrany Protection</Typography>
                <Typography sx={{fontFamily: "Poppins",fontWeight: "regular",fontSize: "16px",color: "#484848"}}>Over 2 years</Typography>
            </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" gap="5px">
          <Stack direction="row" alignItems="center" justifyContent="center" position="relative">
            <LocalShippingIcon sx={{fontSize:"42px"}} />
            </Stack>
            <Stack>
                <Typography sx={{fontFamily: "Poppins",fontWeight: "medium",fontSize: "20px",color: "#484848"}}>Free Shipping</Typography>
                <Typography sx={{fontFamily: "Poppins",fontWeight: "regular",fontSize: "16px",color: "#484848"}}>Order over 150 $</Typography>
            </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" gap="5px">
          <Stack direction="row" alignItems="center" justifyContent="center" position="relative">
            <WifiCalling3Icon  sx={{fontSize:"42px"}}/>
            </Stack>
            <Stack>
                <Typography sx={{fontFamily: "Poppins",fontWeight: "medium",fontSize: "20px",color: "#484848"}}>24 / 7 Support</Typography>
                <Typography sx={{fontFamily: "Poppins",fontWeight: "regular",fontSize: "16px",color: "#484848"}}>Dedicated support</Typography>
            </Stack>
        </Stack>
    </Stack>
  );
}

export default QualitySection;
