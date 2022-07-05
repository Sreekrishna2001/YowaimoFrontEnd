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
      <div className='mb-2'>
        <Routes>
          <Route exact path="/" element={<Home route='/'/>} />
          <Route exact path="/kdrama" element={<Home route='/kdrama'/>} />
          <Route exact path="/kdrama/:kdramaname" element={<AnimeInfo type='kdrama/info'/>} />
          <Route exact path="/search/:animeName" element={<SearchAnime />} />
          <Route exact path="/anime/:animeName" element={<AnimeInfo type='animeinfo'/>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
