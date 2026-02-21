import React, { useState } from 'react';
import { Stack, Typography, Box, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const products = [
    { id: 1, name: 'Rounded Red Hat', price: '$8.00', img: 'images/shopPage/heroSection/pic-1.png', colors: ['#FFD700', '#000000'], size: 'M', brand: 'Minimog' },
    { id: 2, name: 'Linen-blend Shirt', price: '$57.00', img: 'images/shopPage/heroSection/pic-2.png', colors: ['#ADD8E6', '#FFC0CB'], soldOut: true, size: 'M', brand: 'Retrolie' },
    { id: 3, name: 'Long-sleeve Coat', price: '$106.00', img: 'images/shopPage/heroSection/pic-3.png', colors: ['#F5F5DC', '#98FB98'], size: 'S', brand: 'Retrolie' },
    { id: 4, name: 'Boxy Denim Hat', price: '$175.00', img: 'images/shopPage/heroSection/pic-4.png', colors: ['#B0C4DE', '#000080'], size: 'L', brand: 'Brook' },
    { id: 5, name: 'Linen Plain Top', price: '$25.00', img: 'images/shopPage/heroSection/pic-5.png', colors: ['#D3D3D3', '#000000'], size: 'XL', brand: 'Minimog' },
    { id: 6, name: 'Oversized T-shirt', price: '$150.00', oldPrice: '$14.00', img: 'images/shopPage/heroSection/pic-6.png', colors: ['#FFC0CB', '#D8BFD8'], size: 'S', brand: 'Brook' },
    { id: 7, name: 'Polarised Sunglasses', price: '$18.00', img: 'images/shopPage/heroSection/pic-7.png', colors: ['#000000', '#836953'], size: 'XL', brand: 'Learts' },
    { id: 8, name: 'Rockstar Jacket', price: '$340.00', img: 'images/shopPage/heroSection/pic-8.png', colors: ['#C6AEC7', '#BEDCE3'], size: 'XL', brand: 'Vagabond' },
    { id: 9, name: 'Dotted Black Dress', price: '$400.00', img: 'images/shopPage/heroSection/pic-9.png', colors: ['#063E66', '#000000', '#B1C5D4'], size: 'M', brand: 'Abby' },
];

const HeroSection = () => {
    const [selectedSize, setSelectedSize] = useState('All');
    const [selectedPriceRange, setSelectedPriceRange] = useState('All');
    const [selectedBrand, setSelectedBrand] = useState('All');

    const filteredProducts = products.filter((product) => {
       
        const matchesSize = selectedSize === 'All' || product.size === selectedSize;
        
        const matchesBrand = selectedBrand === 'All' || product.brand === selectedBrand;
        
        let matchesPrice = true;
        if (selectedPriceRange !== 'All') {
            const priceNum = parseFloat(product.price.replace('$', ''));
            const bounds = selectedPriceRange.replace(/\$/g, '').split('-');
            const min = parseFloat(bounds[0]);
            const max = parseFloat(bounds[1]);
            matchesPrice = priceNum >= min && priceNum <= max;
        }

        return matchesSize && matchesBrand && matchesPrice;
    });

    const resetFilters = () => {
        setSelectedSize('All');
        setSelectedPriceRange('All');
        setSelectedBrand('All');
    };

    return (
        <Box sx={{ width: "1000px", margin: "30px auto", marginTop: "5%" }}>
            <Stack direction="row" spacing={8}>

                <Stack sx={{ width: '220px', flexShrink: 0 }} spacing={4}>
                    <Typography variant="h4" sx={{ fontFamily: 'Volkhov', fontSize: "20px", fontWeight: "bold" }}>Filters</Typography>

                    <Stack spacing={1.5}>
                        <Typography sx={{ fontFamily: 'Volkhov', fontSize: "16px" }}>Size</Typography>
                        <Stack direction="row" spacing={1} flexWrap="wrap">
                            {['S', 'M', 'L', 'XL'].map((size) => (
                                <Box
                                    key={size}
                                    onClick={() => setSelectedSize(selectedSize === size ? 'All' : size)}
                                    sx={{
                                        width: 35, height: 35, border: '1px solid #e0e0e0',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        cursor: 'pointer', fontSize: '12px',
                                        backgroundColor: selectedSize === size ? '#000' : 'transparent',
                                        color: selectedSize === size ? '#fff' : '#8A8A8A',
                                        transition: '0.2s'
                                    }}>
                                    {size}
                                </Box>
                            ))}
                        </Stack>
                    </Stack>

                    <Stack spacing={1.5}>
                        <Typography sx={{ fontFamily: 'Volkhov', fontSize: "16px" }}>Colors</Typography>
                        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 1 }}>
                            {['#FF7F7F', '#FF8C00', '#FFF06C', '#90EE90', '#7FFFD4', '#87CEFA', '#E0FFFF', '#6495ED', '#9370DB', '#BA55D3', '#DA70D6', '#FF6347'].map((color, i) => (
                                <Box key={i} sx={{ width: 20, height: 20, bgcolor: color, borderRadius: '50%', cursor: 'pointer' }} />
                            ))}
                        </Box>
                    </Stack>

                    <Stack spacing={1}>
                        <Typography sx={{ fontFamily: 'Volkhov', fontSize: "16px" }}>Prices</Typography>
                        {['$0-$50', '$50-$100', '$100-$150', '$150-$200', '$300-$400'].map(price => (
                            <Typography 
                                key={price} 
                                onClick={() => setSelectedPriceRange(selectedPriceRange === price ? 'All' : price)}
                                sx={{ 
                                    fontSize: '14px', 
                                    color: selectedPriceRange === price ? '#000' : '#8A8A8A', 
                                    fontWeight: selectedPriceRange === price ? 700 : 400,
                                    cursor: 'pointer', 
                                    '&:hover': { color: '#000' } 
                                }}
                            >
                                {price}
                            </Typography>
                        ))}
                    </Stack>

                    <Stack spacing={1.5}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Typography sx={{ fontFamily: 'Volkhov', fontSize: "16px" }}>Brands</Typography>
                            <ExpandMoreIcon fontSize="small" sx={{ transform: 'rotate(180deg)' }} />
                        </Stack>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px 16px' }}>
                            {['Minimog', 'Retrolie', 'Brook', 'Learts', 'Vagabond', 'Abby'].map((brand) => (
                                <Typography 
                                    key={brand} 
                                    onClick={() => setSelectedBrand(selectedBrand === brand ? 'All' : brand)}
                                    sx={{ 
                                        fontSize: '14px', 
                                        color: selectedBrand === brand ? '#000' : '#8A8A8A', 
                                        fontWeight: selectedBrand === brand ? 700 : 400,
                                        cursor: 'pointer' 
                                    }}
                                >
                                    {brand}
                                </Typography>
                            ))}
                        </Box>
                    </Stack>

                    <Stack spacing={1.5}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Typography sx={{ fontFamily: 'Volkhov', fontSize: "16px" }}>Collections</Typography>
                            <ExpandMoreIcon fontSize="small" sx={{ transform: 'rotate(180deg)' }} />
                        </Stack>
                        <Stack spacing={1}>
                            {['All products', 'Best sellers', 'New arrivals', 'Accessories'].map((item) => (
                                <Typography 
                                    key={item} 
                                    onClick={item === 'All products' ? resetFilters : undefined}
                                    sx={{ fontSize: '14px', color: '#8A8A8A', cursor: 'pointer', '&:hover': { color: '#000' } }}
                                >
                                    {item}
                                </Typography>
                            ))}
                        </Stack>
                    </Stack>

                    <Stack spacing={1.5}>
                        <Typography sx={{ fontFamily: 'Volkhov', fontSize: "16px" }}>Tags</Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px 12px' }}>
                            {['Fashion', 'Hats', 'Sandal', 'Belt', 'Bags', 'Snacker', 'Denim', 'Minimog', 'Vagabond', 'Sunglasses', 'Beachwear'].map((tag) => (
                                <Typography key={tag} sx={{ fontSize: '13px', color: '#8A8A8A', cursor: 'pointer', borderBottom: '1px solid transparent', '&:hover': { color: '#000', borderBottom: '1px solid #000' } }}>
                                    {tag}
                                </Typography>
                            ))}
                        </Box>
                    </Stack>
                </Stack>

                <Stack sx={{ flex: 1 }} spacing={4}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Stack direction="row" alignItems="center" spacing={0.5} sx={{ cursor: 'pointer' }}>
                            <Typography variant="body2" sx={{ fontWeight: 500 }}>Best selling</Typography>
                            <ExpandMoreIcon fontSize="small" />
                        </Stack>
                        
                        <Stack direction="row" alignItems="center" gap="10px">
                            {['II', 'III', 'IIII', 'IIIII'].map((text) => (
                                <Button 
                                    key={text}
                                    sx={{
                                        minWidth: "0", 
                                        width: "auto", 
                                        height: "30px", 
                                        px: 1,
                                        borderRadius: "5px", 
                                        backgroundColor: "#F2F2F2", 
                                        color: "#000",
                                        "&:hover": { backgroundColor: "#e0e0e0" }
                                    }}
                                >
                                    {text}
                                </Button>
                            ))}
                        </Stack>
                    </Stack>

                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px 25px' }}>
                        {filteredProducts.map((product) => (
                            <Stack key={product.id} spacing={1.5}>
                                <Box sx={{ position: 'relative', overflow: 'hidden', bgcolor: '#f5f5f5' }}>
                                    <Box component="img" src={product.img} sx={{ width: '100%', display: 'block', transition: '0.3s', '&:hover': { transform: 'scale(1.05)' } }} />
                                    {product.soldOut && (
                                        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: '#B1B1B1', color: '#fff', width: "54px", height: "54px", borderRadius: '50%', fontSize: '12px', fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", lineHeight: 1 }}>
                                            SOLD OUT
                                        </Box>
                                    )}
                                </Box>
                                
                                <Stack direction="row" justifyContent="space-between" marginTop="10px">
                                    <Stack maxWidth="70%" marginTop="10px">
                                        <Typography sx={{ fontFamily: 'Volkhov', fontSize: '14px', fontWeight: 500 }}>{product.name}</Typography>
                                        <Stack direction="row" spacing={1} alignItems="center">
                                            <Typography sx={{ fontSize: '14px' }}>{product.price}</Typography>
                                            {product.oldPrice && <Typography sx={{ fontSize: '12px', color: '#8A8A8A', textDecoration: 'line-through' }}>{product.oldPrice}</Typography>}
                                        </Stack>
                                    </Stack>

                                    <Stack marginTop="10px" alignItems="flex-end">
                                        <Typography sx={{ fontSize: '12px', color: '#000' }}>Size: {product.size}</Typography>
                                        <Typography sx={{ fontSize: '12px', color: '#000' }}>Brand: {product.brand}</Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction="row" spacing={1}>
                                    {product.colors.map((c, i) => (
                                        <Box key={i} sx={{ 
                                            width: 14, 
                                            height: 14, 
                                            bgcolor: c, 
                                            borderRadius: '50%', 
                                            border: i === 0 ? '1px solid #000' : '1px solid #ddd',
                                            outline: i === 0 ? '1px solid #fff' : 'none',
                                            outlineOffset: '-2px'
                                        }} />
                                    ))}
                                </Stack>
                            </Stack>
                        ))}
                    </Box>

                    {filteredProducts.length === 0 && (
                        <Typography sx={{ textAlign: 'center', mt: 8, color: '#8A8A8A', fontFamily: 'Volkhov' }}>
                            No products match your current filter combination.
                        </Typography>
                    )}
                </Stack>
            </Stack>
        </Box>
    );
};

export default HeroSection;