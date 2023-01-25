import React, { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import pokeloading from '../assets/pokeloading.gif';
import { Autocomplete, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Pokemones = () => {
    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState('');
    const { data, loading, error } = useFetch(
        'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
    );

    let pokemonList = [];

    const handleClick = () => {
      navigate(`/pokemones/${inputValue}`)
    }

    if (loading) {
        return (
            <>
                <img src={pokeloading} alt="" width="250" />
                <p>Cargando pokemones...</p>
            </>
        );
    } else {
        pokemonList = data.results.map((item) => item.name);
    }

    return (
        <>
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
            <Button variant='contained'
            onClick={handleClick}
            >Buscar</Button>
        </>
    );
};

export default Pokemones;
