import React, { useState } from 'react';
import { Stack, Typography, Box, Button, Container, Drawer, IconButton, useMediaQuery, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TuneIcon from '@mui/icons-material/Tune'; 
import CloseIcon from '@mui/icons-material/Close';

const products = [
    { id: 1, name: 'Rounded Red Hat', price: '$8.00', img: 'images/shopPage/heroSection/pic-1.png', colors: ['#FFD700', '#000000'], size: 'M', brand: 'Minimog' },
    { id: 2, name: 'Linen-blend Shirt', price: '$57.00', img: 'images/shopPage/heroSection/pic-2.png', colors: ['#ADD8E6', '#FFC0CB'], soldOut: true, size: 'M', brand: 'Retrolie' },
    { id: 3, name: 'Long-sleeve Coat', price: '$106.00', img: 'images/shopPage/heroSection/pic-3.png', colors: ['#F5F5DC', '#98FB98'], size: 'S', brand: 'Retrolie' },
    { id: 4, name: 'Boxy Denim Hat', price: '$175.00', img: 'images/shopPage/heroSection/pic-4.png', colors: ['#B0C4DE', '#000080'], size: 'L', brand: 'Brook' },
    { id: 5, name: 'Linen Plain Top', price: '$25.00', img: 'images/shopPage/heroSection/pic-5.png', colors: ['#D3D3D3', '#000000'], size: 'XL', brand: 'Minimog' },
    { id: 6, name: 'Oversized T-shirt', price: '$150.00', img: 'images/shopPage/heroSection/pic-6.png', colors: ['#FFC0CB', '#D8BFD8'], size: 'S', brand: 'Brook' },
];

const HeroSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [showAll, setShowAll] = useState(false);

    const [selectedSize, setSelectedSize] = useState('All');
    const [selectedBrand, setSelectedBrand] = useState('All');
    const [activeCollection, setActiveCollection] = useState('All products');

    const handleFilterClick = (filterType, value) => {
        if (filterType === 'size') setSelectedSize(value);
        if (filterType === 'brand') setSelectedBrand(value);
        if (filterType === 'collection') {
            if (value === 'All products') {
                setSelectedSize('All');
                setSelectedBrand('All');
                setShowAll(false);
            }
            setActiveCollection(value);
        }
        
        if (isMobile) setDrawerOpen(false);
    };

    const filteredProducts = products.filter((p) => {
        const sizeMatch = selectedSize === 'All' || p.size === selectedSize;
        const brandMatch = selectedBrand === 'All' || p.brand === selectedBrand;
        return sizeMatch && brandMatch;
    });

    const displayedProducts = isMobile && !showAll ? filteredProducts.slice(0, 2) : filteredProducts;

    const SidebarContent = () => (
        <Stack spacing={3} sx={{ width: isMobile ? '280px' : '220px', p: isMobile ? 3 : 0 }}>
            {isMobile && (
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Filters</Typography>
                    <IconButton onClick={() => setDrawerOpen(false)}><CloseIcon /></IconButton>
                </Stack>
            )}

            <Stack spacing={1}>
                <Typography sx={{ fontWeight: 'bold', fontSize: "16px" }}>Size</Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap gap={1}>
                    {['S', 'M', 'L', 'XL'].map((s) => (
                        <Box key={s} onClick={() => handleFilterClick('size', s)}
                            sx={{
                                width: 35, height: 35, border: '1px solid #ccc', borderRadius: '4px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: 'pointer', fontSize: '14px', color: selectedSize === s ? '#fff' : '#8A8A8A',
                                bgcolor: selectedSize === s ? '#000' : 'transparent'
                            }}>{s}</Box>
                    ))}
                </Stack>
            </Stack>

            <Stack spacing={1}>
                <Typography sx={{ fontWeight: 'bold', fontSize: "16px" }}>Colours</Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 1 }}>
                    {['#FF7F7F', '#FF8C00', '#FFF06C', '#90EE90', '#7FFFD4', '#6495ED', '#87CEFA', '#99f3ff', '#6e8fff', '#7b72ff', '#9b6cff', '#cc6cff', '#ff66e5', '#ff6b6b'].map((c, i) => (
                        <Box key={i} sx={{ width: 18, height: 18, bgcolor: c, borderRadius: '50%', cursor: 'pointer' }} />
                    ))}
                </Box>
            </Stack>

            <Stack spacing={1}>
                <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: "16px" }}>Brands</Typography>
                    <ExpandMoreIcon sx={{ fontSize: 16, transform: 'rotate(180deg)' }} />
                </Stack>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px 12px' }}>
                    {['Minimog', 'Retrolie', 'Brook', 'Learts', 'Vagabond', 'Abby'].map(b => (
                        <Typography key={b} onClick={() => handleFilterClick('brand', b)} sx={{ fontSize: '15px', color: selectedBrand === b ? '#000' : '#999', cursor: 'pointer' }}>{b}</Typography>
                    ))}
                </Box>
            </Stack>

            <Stack spacing={1}>
                <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: "16px" }}>Collections</Typography>
                    <ExpandMoreIcon sx={{ fontSize: 16, transform: 'rotate(180deg)' }} />
                </Stack>
                {['All products', 'Best sellers', 'New arrivals', 'Accessories'].map(c => (
                    <Typography key={c} onClick={() => handleFilterClick('collection', c)} 
                        sx={{ fontSize: '15px', color:"#999999" ,cursor: 'pointer' }}>{c}</Typography>
                ))}
            </Stack>

            <Stack spacing={1.5}>
                <Typography sx={{ fontWeight: 'bold', fontSize: "16px" }}>Tags</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px 15px' }}>
                    {['Fashion', 'Hats', 'Sandal', 'Belt', 'Bags', 'Snacker', 'Denim', 'Minimog', 'Vagabond', 'Sunglasses', 'Beachwear'].map(t => (
                        <Typography key={t} sx={{ fontSize: '14px', color: '#999', cursor: 'pointer', borderBottom: '1px solid transparent', '&:hover': { color: '#000' } }}>{t}</Typography>
                    ))}
                </Box>
            </Stack>
        </Stack>
    );

    return (
        <Container maxWidth="lg" sx={{ mt: 5, mb: 10 }}>
            <Stack direction="row" spacing={isMobile ? 0 : 8}>
                {!isMobile && <Box sx={{ width: '220px', flexShrink: 0 }}><SidebarContent /></Box>}
                <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}><SidebarContent /></Drawer>

                <Stack sx={{ flex: 1 }} spacing={4}>
                    <Stack spacing={3}>
                        {isMobile && (
                            <Button variant="contained" startIcon={<TuneIcon />} onClick={() => setDrawerOpen(true)}
                                sx={{ bgcolor: '#000', color: '#fff', py: 1.5, borderRadius: '4px', textTransform: 'none', width: '100%' }}>
                                Show Filters
                            </Button>
                        )}
                        <Stack direction="row" alignItems="center" spacing={0.5}>
                            <Typography sx={{ fontFamily: 'serif', fontSize: '20px', fontWeight: 'bold' }}>Best selling</Typography>
                            <ExpandMoreIcon sx={{ transform: 'rotate(180deg)' }} />
                        </Stack>
                    </Stack>

                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(3, 1fr)' }, gap: '40px 25px' }}>
                        {displayedProducts.map((product) => (
                            <Stack key={product.id} spacing={1.5}>
                                <Box component="img" src={product.img} sx={{ width: '100%', bgcolor: '#f5f5f5' }} />
                                <Stack direction="row" justifyContent="space-between">
                                    <Stack>
                                        <Typography sx={{ fontSize: '15px', fontWeight: 500 }}>{product.name}</Typography>
                                        <Typography sx={{ fontSize: '15px', fontWeight: '500' }}>{product.price}</Typography>
                                    </Stack>
                                    <Stack alignItems="flex-end">
                                        <Typography sx={{ fontSize: '12px' }}>Size:{product.size}</Typography>
                                        <Typography sx={{ fontSize: '12px' }}>Brand:{product.brand}</Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction="row" spacing={1}>
                                    {product.colors.map((c, i) => (
                                        <Box key={i} sx={{ width: 18, height: 18, bgcolor: c, borderRadius: '50%', border: '1px solid #000' }} />
                                    ))}
                                </Stack>
                            </Stack>
                        ))}
                    </Box>

                    {isMobile && filteredProducts.length > 2 && (
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                            <Button onClick={() => setShowAll(!showAll)}
                                sx={{ bgcolor: '#000', color: '#fff', px: 4, py: 1, borderRadius: 2, textTransform: 'none', fontWeight: 'bold', '&:hover': { bgcolor: '#333' } }}>
                                {showAll ? 'View Less' : 'View More'}
                            </Button>
                        </Box>
                    )}
                </Stack>
            </Stack>
        </Container>
    );
};

export default HeroSection;