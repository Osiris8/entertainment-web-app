import Card from "./Card";
import { useState, useEffect } from "react";
import axios from "axios";
function Movie() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
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
    <div className="col-lg-10 padding-32">
      <input
        class="form-control"
        type="text"
        placeholder="Search for movies and TV series"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="container">
        <div className="row">
          {data.map((movie) => {
            return <Card key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
}
export default Movie;
