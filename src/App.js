import "./App.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import  Header  from "./components/header/Header";
import Home from "./pages/home/Home";
import MovieDetails from "./pages/details/MovieDetails";
import MovieList from "./components/movieList/MovieList";


export default  function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route path="movie/:id" element={<MovieDetails />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<h1>error page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

