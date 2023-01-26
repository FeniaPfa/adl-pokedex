import { Box, List, ListItem, Paper, Stack, Typography } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

import Loading from '../components/Loading';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const Pokemon = () => {
    const { pkm } = useParams();

    const { data, loading } = useFetch(
        `https://pokeapi.co/api/v2/pokemon/${pkm}`
    );

    if (loading) {
        return <Loading />;
    }

    return (
        <Paper
            sx={{
                background: '#fff',
                width: '50vw',
                borderRadius: '1rem',
                margin: '2rem auto',
                padding: '2rem',
            }}
        >
            <Stack
                direction="row"
                flexWrap="wrap"
                sx={{ gap: '2rem', justifyContent: 'space-around' }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: 'bold', color: '#455a64' }}
                    >
                        N° {data.id}
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                        {data.name.toUpperCase()}
                    </Typography>
                    <img
                        src={
                            data.sprites.other['official-artwork'].front_default
                        }
                        width="300"
                        alt={data.name}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '.8rem',
                        }}
                    >
                        {data.types.map((item) => (
                            <span
                                key={item.slot}
                                className={`poketype ${item.type.name}`}
                            >
                                {item.type.name}
                            </span>
                        ))}
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                        STATS
                    </Typography>
                    <List>
                        <Stack gap=".3em">
                            {data.stats.map((item) => (
                                <Box key={item.stat.name}>
                                    <ListItem
                                        sx={{
                                            display: 'flex',
                                            gap: '5rem',
                                            color: '#455a64',
                                            fontWeight: 'bold',
                                        }}
                                        
                                    >
                                        <span style={{ flexGrow: '1' }}>
                                            {item.stat.name}
                                        </span>
                                        <span>{item.base_stat}</span>
                                    </ListItem>
                                    <LinearProgress
                                        variant="determinate"
                                        sx={{
                                            height: '.35rem',
                                            borderRadius: '1rem',
                                        }}
                                        value={
                                            item.base_stat > 100
                                                ? 100
                                                : item.base_stat
                                        }
                                    />
                                </Box>
                            ))}
                        </Stack>
                    </List>
                    <Box sx={{ width: '100%' }}></Box>
                </Box>
            </Stack>
        </Paper>
    );
};

export default Pokemon;
