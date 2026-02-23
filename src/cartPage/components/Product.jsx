import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Stack, Typography, Box, Button, Divider, Checkbox, FormControlLabel, Link, Container } from "@mui/material";

function Product() {
    const [giftWrap, setGiftWrap] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const pricePerItem = 14.90;
    const giftWrapFee = 10.00;

    const rowTotal = (quantity * pricePerItem).toFixed(2);

    const finalSubtotal = (
        (quantity * pricePerItem) + (giftWrap ? giftWrapFee : 0)
    ).toFixed(2);

    return (
        <Container maxWidth="lg" sx={{mb:{xs:"50px"}}}>
            <Stack 
                marginTop="5%" 
                display={{ xs: "none", md: "grid" }} 
                gridTemplateColumns="3fr 1fr 1.5fr 1fr" 
                alignItems="center" 
                columnGap="20px" 
                padding="20px 0" 
                borderBottom="1px solid #ddd"
            >
                <Typography sx={{ fontFamily: "Poppins", fontSize:"22px", fontWeight: 600 }}>Product</Typography>
                <Typography sx={{ fontFamily: "Poppins", fontSize:{xs:"1px",sm:"14px",md:"22px",lg:"22px"}, fontWeight: 600 }}>Price</Typography>
                <Typography sx={{ fontFamily: "Poppins", fontSize: "22px", fontWeight: 600, textAlign: "center" }}>Quantity</Typography>
                <Typography sx={{ fontFamily: "Poppins", fontSize: "22px", fontWeight: 600, textAlign: "right" }}>Total</Typography>
            </Stack>

            <Stack 
                display={{ xs: "flex", md: "grid" }} 
                flexDirection="column"
                gridTemplateColumns="3fr 1fr 1.5fr 1fr" 
                alignItems="flex-start" 
                columnGap="20px" 
                padding="40px 0" 
                borderBottom="1px solid #ddd"
                spacing={{ xs: 2, md: 0 }}
            >
                <Stack direction="row" gap="20px">
                    <Box component="img" src="/images/shopPage/heroSection/pic-2.png" sx={{ width: "100px", objectFit: "cover" }} />
                    <Stack gap="6px">
                        <Typography sx={{ fontFamily: "volkhov", fontSize: { xs: "12px",sm:"14px", md: "22px",lg:"22px" }, fontWeight: 'regular', width: "160px" }}>Mini Dress With Ruffled Straps</Typography>
                        <Typography sx={{ color: "#8a8a8a", fontSize: { xs: "16px",sm:"18px", md: "22px",lg:"22px" }, fontFamily: "Poppins" }}>Color : Red</Typography>
                        <Typography sx={{ fontSize: { xs: "16px",sm:"18px", md: "22px",lg:"22px" }, fontFamily: "Poppins", color: "#8a8a8a", textDecoration: "underline", cursor: "pointer", mt: 1 }}>Remove</Typography>
                    </Stack>
                </Stack>

                <Typography sx={{ fontSize:{xs:"18px",sm:"20px",md:"22px",lg:"22px"}, fontFamily: "volkhov", fontWeight: "regular", mt: { xs: 2, md: 0 } }}>
                    <Box component="span" sx={{ display: { md: "none" }, fontWeight: "bold" }}>Price : </Box>
                    ${pricePerItem.toFixed(2)}
                </Typography>

                <Stack direction={{ xs: "row", md: "column" }} alignItems={{ xs: "center", md: "center" }} spacing={1} width={{ md: "100%" }}>
                    <Typography sx={{ display: { md: "none" }, fontWeight: "bold",  fontSize:{xs:"18px",sm:"20px",md:"22px",lg:"22px"}, fontFamily: "Poppins" }}>Quantity : </Typography>
                    <Stack direction="row" border="1px solid #ddd" width="fit-content" mx={{ md: "auto" }} alignItems="center">
                        <Button 
                            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                            sx={{ minWidth: "40px", color: "#000",  fontSize:{xs:"18px",sm:"20px",md:"22px",lg:"22px"} }}
                        >
                            -
                        </Button>
                        <Typography sx={{ px: 2, fontFamily: "Poppins",  fontSize:{xs:"18px",sm:"20px",md:"22px",lg:"22px"}, color: "#8a8a8a" }}>
                            {quantity.toString().padStart(2, '0')}
                        </Typography>
                        <Button 
                            onClick={() => setQuantity(quantity + 1)}
                            sx={{ minWidth: "40px", color: "#000",  fontSize:{xs:"18px",sm:"20px",md:"22px",lg:"22px"}}}
                        >
                            +
                        </Button>
                    </Stack>
                </Stack>

                <Typography sx={{  fontSize:{xs:"18px",sm:"20px",md:"22px",lg:"22px"}, fontFamily: "volkhov", fontWeight: "regular", textAlign: { xs: "left", md: "right" }, width: { md: "100%" } }}>
                    <Box component="span" sx={{ display: { md: "none" }, fontWeight: "bold" }}>Total : </Box>
                    ${rowTotal}
                </Typography>
            </Stack>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'flex-start', md: 'flex-end' }, mt: 4 }}>
                <Box sx={{ width: "100%", maxWidth:"450px"}}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={giftWrap}
                                onChange={(e) => setGiftWrap(e.target.checked)}
                                sx={{ '&.Mui-checked': { color: 'black' } }}
                            />
                        }
                        label={
                            <Typography sx={{ color: "#8A8A8A", fontFamily: "Poppins", fontSize: { xs: "14px",sm:"16px", md: "22px",lg:"22px" } }}>
                                For <span style={{ color: "black", fontWeight: "bold" }}>$10.00</span> Please Wrap The Product
                            </Typography>
                        } 
                    />

                    <Divider sx={{ my: 3 }} />

                    <Stack direction="row" justifyContent="space-between" mb={3}>
                        <Typography variant="h6" fontWeight="bold">Subtotal</Typography>
                        <Typography variant="h6" fontWeight="bold">${finalSubtotal}</Typography>
                    </Stack>

                    <Stack spacing={2}>
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{ bgcolor: "black", color: "white", py: 2, borderRadius: "8px", textTransform: "none", fontSize: "16px", "&:hover": { bgcolor: "#333" } }}
                        >
                            Checkout
                        </Button>
                        <Link component={RouterLink} to="/cart"
                            variant="body2"
                            align="center"
                            sx={{ cursor: "pointer", textDecoration: "underline", fontWeight: "bold", color: "#000" }}
                        >
                            View Cart
                        </Link>
                    </Stack>
                </Box>
            </Box>
        </Container>
    );
}

export default Product;