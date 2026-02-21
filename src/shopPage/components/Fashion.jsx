import { Stack, Typography,Tab,Link } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";


function Fashion() {
  return (
            <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
  <Link component={RouterLink} to="/" underline="hover" sx={{ color: "#484848" }}>Home</Link>
  <Typography sx={{ color: "#8A8A8A" }}>&gt;</Typography> 
  <Link component={RouterLink} to="/shop"  underline="hover" sx={{ color: "#484848" }}>Fashion</Link>
</Stack>
  );
}
export default Fashion;