import { AppBar, Container, Link, Stack, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
    return (
        <AppBar position="static" component="nav">
            <Container maxWidth="xl">
                <Toolbar
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <Stack
                        direction="row"
                        sx={{ gap: '2rem', '> a': { color: '#fff' } }}
                    >
                        <Link
                            style={({ isActive }) => (isActive ? { color: "black" } : { color: "white" })}
                            underline="none"
                            variant="h5"
                            component={NavLink}
                            to="/"
                        >
                            Home
                        </Link>
                        <Link
                        style={({ isActive }) => (isActive ? { color: "black" } : { color: "white" })}
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
