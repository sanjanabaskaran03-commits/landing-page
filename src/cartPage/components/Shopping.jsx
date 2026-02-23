import { Stack, Typography,Tab,Link } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";


function Shopping() {
  return (
    <Stack>
        <Typography sx={{fontSize:{xs:"17px",sm:"19px",md:"42px",lg:"42px"},fontWeight:"medium",textAlign:"center",fontFamily:"volkhov"}}>
            Shopping Cart
        </Typography>
            <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
  <Link component={RouterLink} to="/" underline="hover" sx={{ color: "#484848",fontSize:{xs:"10px",sm:"12px",md:"16px",lg:"16px"},fontWeight:"regular",fontFamily:"volkhov" }}>Home</Link>
  <Typography sx={{ color: "#8A8A8A" }}>&gt;</Typography> 
  <Link component={RouterLink} to="/cart" underline="hover" sx={{ color: "#484848",fontSize:{xs:"10px",sm:"12px",md:"16px",lg:"16px"},fontWeight:"regular",fontFamily:"volkhov" }}>Your Shopping Cart</Link>
</Stack>
</Stack>
  );
}
export default Shopping;