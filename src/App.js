
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import MovieList from './components/movieList/MovieList';
import Movie from './pages/movieDetail/Movie';

function App() {
  return (
    <div className="App">
     <Router> {/*used to wrap entire application. provides the context for handling client-side routing.*/}
      <Header /> {/*The component that appears on the every page of the application*/}
      <Routes> {/*used to define the different routes within the applicatio*/}
        <Route index element={<Home />}></Route>
        <Route path="movie/:id" element={<Movie />}></Route>
        <Route path="movies/:type" element={<MovieList />}></Route>
        <Route path="/" element={<h1>Error page</h1>}></Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
