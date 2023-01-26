import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import pokeball from '../assets/pokeball.svg';

const NotFound = () => {
    return (
        <Container maxWidth="lg">
            <Stack mt="2rem" alignItems="center">
                <Typography variant="h2" fontWeight="bold">
                    ERROR
                </Typography>
                <Box>
                    <Stack direction="row" justifyContent="center">
                        <span style={{ fontSize: '200px', fontWeight: 'bold' }}>
                            4
                        </span>
                        <img src={pokeball} width="200" />
                        <span style={{ fontSize: '200px', fontWeight: 'bold' }}>
                            4
                        </span>
                    </Stack>
                </Box>
                <Typography variant="h2">Página no encontrada</Typography>
            </Stack>
        </Container>
    );
};

export default NotFound;
