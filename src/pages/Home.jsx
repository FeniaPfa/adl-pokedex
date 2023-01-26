import { Container, Stack, Typography } from '@mui/material';
import pikachu from '../assets/pikachu.png';
import pokemon from '../assets/logo-pokemon.png';

const Home = () => {
    return (
        <Container maxWidth="xl" sx={{ margin: '2rem auto' }}>
            <Stack alignItems="center">
                <Typography variant="h2" fontWeight="bold">
                    Bienvenido Maestro
                </Typography>
                <img src={pokemon} alt="Logo Pokémon" width="300" />
                <img src={pikachu} alt="Pikachu" width="300" />
            </Stack>
        </Container>
    );
};

export default Home;
