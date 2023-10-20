import "./App.css";
import Header from "./components/header/header";
import Movie from './components/movies/movies';
import { Route, Routes } from "react-router-dom";
import Details from "./components/moviedetails/movieDetails";
import Favorite from "./components/fav/favourite";

function App() {
  return (
    <>
      <div className="container">
        <Header/>
        <Routes>
        <Route path='/' element={<Movie />} />
        <Route path='/moviedetails/:id' element={<Details />} />
        <Route path='/favorites' element={<Favorite />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
