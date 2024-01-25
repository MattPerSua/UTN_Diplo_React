import './styles/home.css';
import { BrowserRouter, Routes, Route} from "react-router-dom" ;


import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

import HomePage from "./pages/HomePage";
import GaleriaPage from "./pages/GaleriaPage";
import TemporadasPage from "./pages/TemporadasPage";
import PersonajesPage from "./pages/PersonajesPage";
import ContactoPage from "./pages/ContactoPage";
import NovedadesPage from "./pages/NovedadesPage";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Personajes" element={<PersonajesPage />} />
          <Route path="/Temporadas" element={<TemporadasPage />} />
          <Route path="/Galeria" element={<GaleriaPage />} />
          <Route path="/Contacto" element={<ContactoPage />} />
          <Route path="/Novedades" element={<NovedadesPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
