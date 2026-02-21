import React from 'react'
import { Stack, Typography } from '@mui/material'
import { AddIcCall } from '@mui/icons-material'

const Demo = () => {
    return (
        <Stack width="100%" alignSelf='center'>

            <Typography variant='title' sx={{ fontSize: '1rem' }}>
                Demo
                <AddIcCall />

            </Typography>

        </Stack>
    )
}

export default Demo
