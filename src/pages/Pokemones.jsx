import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import {
    Autocomplete,
    Button,
    Container,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import Swal from 'sweetalert2';

const Pokemones = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const { data, loading } = useFetch(
        'https://pokeapi.co/api/v2/pokemon?limit=898&offset=0'
    );

    let pokemonList = [];

    const handleClick = () => {
        if (!inputValue) {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Debes seleccionar un Pokémon!',
            });
        }
        navigate(`/pokemones/${inputValue}`);
    };

    if (loading) {
        return <Loading />;
    } else {
        pokemonList = data.results.map((item) => item.name);
    }

    return (
        <Container maxWidth="lg" sx={{ margin: '2rem auto' }}>
            <Stack sx={{ alignItems: 'center', gap: '2rem' }}>
                <Typography variant="h2">Selecciona un Pokémon</Typography>
                <Autocomplete
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                    }}
                    blurOnSelect
                    options={pokemonList}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                        <TextField {...params} label="Pokemones" />
                    )}
                />
                <Button
                    size="large"
                    variant="contained"
                    color="secondary"
                    onClick={handleClick}
                >
                    Ver Detalle
                </Button>
            </Stack>
        </Container>
    );
};

export default Pokemones;
