import { Box, Container, Stack, Typography } from '@mui/material';
import pokeball from '../assets/pokeball.svg';

const Error = () => {
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
                <Typography variant="h2">
                    Ha habido un error en la petición
                </Typography>
            </Stack>
        </Container>
    );
};

export default Error;
