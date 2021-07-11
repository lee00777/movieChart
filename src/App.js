import Movie from "./movie/Movie";
import Contact from "./contact/Contact";
import "./utils/css/reset.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./movie/Navbar";
import TopMovies from "./topmovies/TopMovies";
import Details from "./movie/Details";
import TopMoviesDetails from "./topmovies/TopMoviesDetails";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Movie />
          </Route>

          <Route path="/details/:id">
            <Details />
          </Route>

          <Route path="/topmovies">
            <TopMovies />
          </Route>
          {/* 
          <Route path="/topmovies/details/:id">
            <TopMoviesDetails />
          </Route> */}

          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
