import { Container, Stack, Typography } from '@mui/material';
import React from 'react';
import pokeloading from '../assets/pokeloading.gif';

const Loading = () => {
    return (
        <Container maxWidth="md">
          <Stack alignItems="center" sx={{margin:"0 auto"}}>

            <img src={pokeloading} alt="" width="300" />
            <Typography variant='h2' component="span" sx={{fontWeight:"bold"}}>Cargando...</Typography>
          </Stack>
        </Container>

    );
};

export default Loading;
