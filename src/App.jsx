import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';
import Pokemones from './pages/Pokemones';

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokemones" element={<Pokemones />} />
                <Route path="/pokemones/:pkm" element={<Pokemon />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
