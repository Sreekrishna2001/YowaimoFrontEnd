import logo from './logo.svg';
import AnimeCard from './components/AnimeCard/AnimeCard';
import './App.css';
import Home from './components/Home/Home';
import AnimeInfo from './components/AnimeInfo/AnimeInfo';
import SearchAnime from './components/SearchAnime/SearchAnime';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search/:animeName" element={<SearchAnime />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
