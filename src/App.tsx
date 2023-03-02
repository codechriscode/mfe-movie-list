const TMDB_API_KEY = "1ceb06f64a238e7613e019876a434837"; // not cool but ok
const TMDB_BASE_URL =
  "https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&api_key=";

import { useEffect, useState } from "react";
import attribution from "./assets/tmdb.svg";
import "./App.css";

function App() {
  const [featureList, setFeatureList] = useState<any>({});

  const fetchData = async () => {
    setTimeout(
      () =>
        fetch(`${TMDB_BASE_URL}${TMDB_API_KEY}`)
          .then((r) => r.json())
          .then((data) => {
            setFeatureList(data);
          }),
      2000
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="banner">
        <h1>Aqui está sua lista de filmes</h1>
        <div className="movie-list">
          {featureList?.results?.length
            ? featureList.results.map((m: any) => <h2>{m.original_title}</h2>)
            : <h2>Carregando filmes populares...</h2>}
        </div>
        <img
          className="attribution"
          src={attribution}
          alt="The Movie Database"
        />
      </div>
    </div>
  );
}

export default App;
