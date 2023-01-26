import {
    AppBar,
    Container,
    Link,
    Stack,
    Toolbar,
    Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import logo from '../assets/pokeball.svg';

const Navbar = () => {
    const activeStyle = {
        color: '#ffea00',
        fontWeight: 'bold',
    };
    return (
        <AppBar position="static" component="nav">
            <Container maxWidth="xl">
                <Toolbar
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <Stack
                        direction="row"
                        sx={{ alignItems: 'center', gap: '.8rem' }}
                    >
                        <img src={logo} alt="Pokeball" width={50} />
                        <Typography
                            variant="h4"
                            component="h1"
                            fontWeight="bold"
                        >
                            Pokedex
                        </Typography>
                    </Stack>
                    <Stack
                        direction="row"
                        sx={{ gap: '2rem', '> a': { color: '#fff' } }}
                    >
                        <Link
                            style={({ isActive }) =>
                                isActive ? activeStyle : { color: 'white' }
                            }
                            underline="none"
                            variant="h5"
                            component={NavLink}
                            to="/"
                        >
                            Home
                        </Link>
                        <Link
                            style={({ isActive }) =>
                                isActive ? activeStyle : { color: 'white' }
                            }
                            underline="none"
                            variant="h5"
                            component={NavLink}
                            to="/pokemones"
                        >
                            Pokemones
                        </Link>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
