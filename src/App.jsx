import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';
import Pokemones from './pages/Pokemones';

function App() {
    return (
        <div className="App">
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokemones" element={<Pokemones />} />
                <Route path="/pokemones/:pkm" element={<Pokemon />} />
            </Routes>
        </div>
    );
}

export default App;
