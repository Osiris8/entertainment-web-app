import Card from "./Card";
import { useState, useEffect } from "react";
import axios from "axios";
function Movie() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("code");
  const [sortTopFlop, setSortTopFlop] = useState("code");
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=bcfff3e4dbf56262dbedd3c5c677bcba&query=" +
          search +
          "&langage=fr-FR"
      )
      .then((res) => setData(res.data.results));
  }, [search]);

  return (
    <div className="container">
      <div className="row">
        <input
          class="form-control"
          type="text"
          placeholder="Search for movies and TV series"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="container">
          <div className="row">
            <div className="flex justify-content-center">
              <button
                type="button"
                class="btn btn-dark margin-16"
                id="topToFlop"
                onClick={() => setSortTopFlop("topToFlop")}
              >
                Top
              </button>

              <button
                type="button"
                class="btn btn-dark margin-16"
                id="flopToTop"
                onClick={() => setSortTopFlop("flopToTop")}
              >
                Flop
              </button>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {data
              .sort((a, b) => {
                if (sortTopFlop === "topToFlop") {
                  return b.vote_average - a.vote_average;
                } else if (sortTopFlop === "flopToTop") {
                  return a.vote_average - b.vote_average;
                } else {
                  return 0; // Valeur par défaut si sortTopFlop ne correspond à aucune condition
                }
              })
              .map((movie) => {
                return <Card key={movie.id} movie={movie} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Movie;
