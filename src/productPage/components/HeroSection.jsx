import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Stack, Typography, Box, Rating, Button, Divider, LinearProgress, Drawer, IconButton, Checkbox, FormControlLabel, Link, Container } from "@mui/material";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ShareIcon from '@mui/icons-material/Share';
import InventoryIcon from '@mui/icons-material/Inventory';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CloseIcon from '@mui/icons-material/Close';

function HeroSection() {
    const [rating, setRating] = useState(1);
    const [reviewCount, setReviewCount] = useState(1);
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState("M");
    const [selectedColor, setSelectedColor] = useState("Blue");
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [giftWrap, setGiftWrap] = useState(false);

    const unitPrice = 14.80;
    const giftWrapPrice = 10.00;
    const [subtotal, setSubtotal] = useState(unitPrice);

    useEffect(() => {
        let total = quantity * unitPrice;
        if (giftWrap) {
            total += giftWrapPrice;
        }
        setSubtotal(total.toFixed(2));
    }, [quantity, giftWrap]);

    const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 24, minutes: 0, seconds: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                let { days, hours, minutes, seconds } = prev;
                if (seconds > 0) seconds--;
                else {
                    seconds = 59;
                    if (minutes > 0) minutes--;
                    else {
                        minutes = 59;
                        if (hours > 0) hours--;
                        else {
                            hours = 23;
                            if (days > 0) days--;
                        }
                    }
                }
                return { days, hours, minutes, seconds };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (num) => String(num).padStart(2, '0');

    return (
        <Container maxWidth="lg" sx={{ mt: 4 }} >
            <Stack direction={{ xs: "column", md: "row" }} spacing={4} sx={{ p: { xs: 2, md: 4 } }}>

                <Stack
                    direction={{ xs: "column", md: "row" }}
                    sx={{ flex: 1.5, width: "100%" }}
                >
                    <Box sx={{
                        order: { xs: 1, md: 2 },
                        width: "100%",
                        ml: { md: 4, xs: 0 },
                        mb: { xs: 2, md: 0 }
                    }}>
                        <Box
                            component="img"
                            src="/images/shopPage/heroSection/pic-2.png"
                            sx={{ width: "100%", height: { xs: "400px", md: "570px" }, objectFit: "cover" }}
                        />
                    </Box>

                    <Stack
                        direction={{ xs: "row", md: "column" }}
                        spacing={1}
                        sx={{
                            order: { xs: 2, md: 1 },
                            overflowX: { xs: "auto", md: "visible" },
                            overflowY: { xs: "hidden", md: "visible" },
                            whiteSpace: "nowrap",
                            pb: { xs: 1, md: 0 },
                            '&::-webkit-scrollbar': { display: 'none' },
                            msOverflowStyle: 'none',
                            scrollbarWidth: 'none',
                        }}
                    >
                        {["pic-1.png", "pic2.png", "pic-3.png", "pic-4.png", "pic-5.png", "35d.jpg.png", "pic-7.png"].map((img) => (
                            <Box
                                key={img}
                                component="img"
                                src={`/images/productPage/product/${img}`}
                                sx={{
                                    width: { xs: "calc(33.33% - 8px)", md: 60 },
                                    minWidth: { xs: "90px", md: 60 },
                                    height: { xs: 100, md: 75 },
                                    objectFit: "cover",
                                    cursor: "pointer",
                                    border: "1px solid #eee",
                                    flexShrink: 0
                                }}
                            />
                        ))}
                    </Stack>
                </Stack>

                <Stack sx={{ flex: 1 }} spacing={2}>
                    <Typography variant="body2" color="text.secondary">FASCO</Typography>

                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography variant="h4" fontWeight="bold" sx={{ fontFamily: 'Volkhov' }}>Denim Jacket</Typography>
                        <StarBorderIcon sx={{ cursor: 'pointer' }} />
                    </Stack>

                    <Stack direction="row" spacing={1} alignItems="center">
                        <Rating
                            value={rating}
                            size="small"
                            sx={{ color: "#000" }}
                            onChange={(event, newValue) => {
                                setRating(newValue);
                                setReviewCount(prev => prev + 1);
                            }}
                        />
                        <Typography variant="body2" color="text.secondary">({reviewCount})</Typography>
                    </Stack>

                    <Stack direction="row" spacing={1} alignItems="center">
                        <Typography variant="h6" fontWeight="bold">$39.00</Typography>
                        <Typography sx={{ fontSize: "14px", textDecoration: "line-through", color: "text.secondary" }}>$59.00</Typography>
                        <Button variant="contained" color="error" sx={{ borderRadius: 5, fontSize: "0.7rem", height: '24px' }}>SAVE 33%</Button>
                    </Stack>

                    <Stack direction="row" spacing={1} alignItems="center" sx={{ color: "text.secondary" }}>
                        <RemoveRedEyeIcon fontSize="small" sx={{ color: "#000" }} />
                        <Typography variant="body2">24 people are viewing this right now</Typography>
                    </Stack>

                    <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems={{ xs: "flex-start", sm: "center" }} sx={{ bgcolor: "#F8CCCC", p: 1.5, borderRadius: 1, gap: 1 }}>
                        <Typography color="#FF706B" fontWeight="bold" variant="body2">Hurry up! Sale ends in:</Typography>
                        <Stack direction="row" spacing={1} color="#FF706B" fontWeight="bold">
                            <Box>{formatTime(timeLeft.days)}</Box>:<Box>{formatTime(timeLeft.hours)}</Box>:
                            <Box>{formatTime(timeLeft.minutes)}</Box>:<Box>{formatTime(timeLeft.seconds)}</Box>
                        </Stack>
                    </Stack>

                    <Stack spacing={1}>
                        <Typography variant="body2" color="text.secondary">Only <b>9</b> item(s) left in stock!</Typography>
                        <LinearProgress variant="determinate" value={30} color="error" sx={{ height: 6, borderRadius: 5 }} />
                    </Stack>

                    <Stack spacing={1}>
                        <Typography fontWeight="bold">Size: {selectedSize}</Typography>
                        <Stack direction="row" spacing={1} flexWrap="wrap">
                            {["M", "L", "XL", "XXL"].map((size) => (
                                <Button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    variant={selectedSize === size ? "contained" : "outlined"}
                                    sx={{
                                        minWidth: 45,
                                        mb: 1,
                                        color: selectedSize === size ? "#fff" : "#000",
                                        bgcolor: selectedSize === size ? "#000" : "transparent",
                                        borderColor: "#ddd",
                                        "&:hover": { bgcolor: selectedSize === size ? "#333" : "#f5f5f5" }
                                    }}
                                >
                                    {size}
                                </Button>
                            ))}
                        </Stack>
                    </Stack>

                    <Stack spacing={1}>
                        <Typography fontWeight="bold">Color: {selectedColor}</Typography>
                        <Stack direction="row" spacing={2}>
                            {[
                                { name: "Blue", hex: "#9bb7d4" },
                                { name: "Black", hex: "#000000" },
                                { name: "Pink", hex: "#f6c1cc" }
                            ].map((color) => (
                                <Box
                                    key={color.name}
                                    onClick={() => setSelectedColor(color.name)}
                                    sx={{
                                        width: 22, height: 22, borderRadius: "50%",
                                        bgcolor: color.hex,
                                        cursor: "pointer",
                                        outline: selectedColor === color.name ? "2px solid #000" : "none",
                                        outlineOffset: "2px",
                                        border: "1px solid #ddd"
                                    }}
                                />
                            ))}
                        </Stack>
                    </Stack>

                    <Stack direction={{ xs: "row", sm: "row" }} spacing={2}>
                        <Stack direction="row" alignItems="center" sx={{ border: "1px solid #ddd", borderRadius: 1, width: { xs: "110px", sm: "fit-content" }, justifyContent: "center" }}>
                            <Button onClick={() => quantity > 1 && setQuantity(quantity - 1)} sx={{ color: "black" }}>−</Button>
                            <Typography sx={{ px: 1, fontWeight: 'bold' }}>{quantity}</Typography>
                            <Button onClick={() => setQuantity(quantity + 1)} sx={{ color: "black" }}>+</Button>
                        </Stack>
                        <Button
                            onClick={() => setIsCartOpen(true)}
                            fullWidth
                            sx={{ py: 1.5, border: "1px solid #000", fontSize: "10px", background: "#fff", color: "#000", "&:hover": { background: "#333", color: "#fff" } }}
                        >
                            Add to cart
                        </Button>
                    </Stack>

                    <Stack direction="row" spacing={2} sx={{ pt: 2, flexWrap: "wrap" }}>
                        <Stack direction="row" spacing={0.2} alignItems="center" sx={{ cursor: "pointer", mb: 1, fontSize: "5px" }}>
                            <CompareArrowsIcon sx={{ fontSize: "15px" }} /> <Typography variant="caption">Compare</Typography>
                        </Stack>
                        <Stack direction="row" spacing={0.2} alignItems="center" sx={{ cursor: "pointer", mb: 1, fontSize: "5px" }}>
                            <HelpOutlineIcon sx={{ fontSize: "15px" }} /> <Typography variant="caption">Ask a question</Typography>
                        </Stack>
                        <Stack direction="row" spacing={0.2} alignItems="center" sx={{ cursor: "pointer", mb: 1, fontSize: "5px" }}>
                            <ShareIcon sx={{ fontSize: "15px" }} /> <Typography variant="caption">Share</Typography>
                        </Stack>
                    </Stack>

                    <Divider sx={{ my: 1 }} />

                    <Stack spacing={1}>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <LocalShippingIcon sx={{ fontSize: "15px" }} />
                            <Typography sx={{ fontSize: "10px" }}><b>Estimated Delivery:</b> Jul 30 – Aug 03</Typography>
                        </Stack>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <InventoryIcon sx={{ fontSize: "15px" }} />
                            <Typography sx={{ fontSize: "10px" }}><b>Free Shipping & Returns:</b> On all orders over $75</Typography>
                        </Stack>
                    </Stack>

                    <Stack alignItems="center" sx={{ bgcolor: "#e9e9f1", p: 2, borderRadius: 1 }}>
                        <Box component="img" src="/images/productPage/product/trustbag.png.png" sx={{ width: "100%", height: 25, mb: 3 }} />
                        <Typography variant="body2">Guarantee safe & secure checkout</Typography>
                    </Stack>
                </Stack>

                <Drawer
                    anchor="right"
                    open={isCartOpen}
                    onClose={() => setIsCartOpen(false)}
                    variant="temporary"
                    disableScrollLock={true}
                    PaperProps={{
                        sx: {
                            width: {
                                xs: "90vw",   
                                sm: "90vw",   
                                md: "400px"    
                            },
                            p: { xs: 2, sm: 3, md: 4 }, 
                            maxWidth: "100%"
                        }
                    }}
                >
                    <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                        <Typography variant="h5" fontWeight="bold" sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
                            Shopping Cart
                        </Typography>
                        <IconButton onClick={() => setIsCartOpen(false)} size="large">
                            <CloseIcon />
                        </IconButton>
                    </Stack>

                    <Typography variant="body2" mb={3} sx={{ color: 'text.secondary' }}>
                        Buy <span style={{ color: "black", fontWeight: "bold" }}>$10.00</span> More And Get <span style={{ color: "black", fontWeight: "bold" }}>Free Shipping</span>
                    </Typography>

                    <Divider sx={{ mb: 3 }} />

                    <Stack direction="row" spacing={2} mb={3}>
                        <Box
                            component="img"
                            src="/images/shopPage/heroSection/pic-2.png"
                            sx={{
                                width: { xs: 80, sm: 100 },
                                height: { xs: 100, sm: 120 },
                                objectFit: "cover",
                                borderRadius: 1
                            }}
                        />
                        <Stack spacing={0.5} flex={1}>
                            <Typography fontWeight="bold" variant="subtitle1">Denim Jacket</Typography>
                            <Typography variant="body2" color="text.secondary">Color: {selectedColor}</Typography>
                            <Typography fontWeight="bold" sx={{ mt: 1 }}>${unitPrice.toFixed(2)}</Typography>

                            <Stack direction="row" alignItems="center" sx={{ border: "1px solid #eee", width: "fit-content", mt: 1, background: "#F1F1F1", borderRadius: 1 }}>
                                <Button size="small" onClick={() => quantity > 1 && setQuantity(quantity - 1)} sx={{ color: "#000", minWidth: 35 }}>−</Button>
                                <Typography variant="body2" sx={{ px: 1, color: "#000", fontWeight: 'bold' }}>{quantity}</Typography>
                                <Button size="small" onClick={() => setQuantity(quantity + 1)} sx={{ color: "#000", minWidth: 35 }}>+</Button>
                            </Stack>
                        </Stack>
                    </Stack>

                    <Divider sx={{ my: 1 }} />
                    <Stack mt={{xs:3,md:7.5}}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={giftWrap}
                                onChange={(e) => setGiftWrap(e.target.checked)}
                                sx={{ '&.Mui-checked': { color: 'black' } }}
                            />
                        }
                        label={<Typography variant="body2">For <span style={{ color: "black", fontWeight: "bold" }}>$10.00</span> Please Wrap The Product</Typography>}
                    />
                    <Box sx={{  pt: 3 }}>
                        <Divider sx={{ mb: 3 }} />
                        <Stack direction="row" justifyContent="space-between" mb={3}>
                            <Typography variant="h6" fontWeight="bold">Subtotal</Typography>
                            <Typography variant="h6" fontWeight="bold">${subtotal}</Typography>
                        </Stack>

                        <Stack spacing={2}>
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    bgcolor: "black",
                                    color: "white",
                                    py: 2,
                                    fontWeight: 'bold',
                                    "&:hover": { bgcolor: "#333" }
                                }}
                            >
                                Checkout
                            </Button>
                            <Link component={RouterLink} to="/cart"
                                variant="body1"
                                align="center"
                                sx={{ cursor: "pointer", textDecoration: "underline", fontWeight: "regular", color: "#000", display: 'block', pb: 2 }}
                            >
                                View Cart
                            </Link>
                        </Stack>
                        
                    </Box>
                    </Stack>
                </Drawer>
            </Stack>
        </Container>
    );
}

export default HeroSection;