function Card({ movie }) {
  function dateFormater(date) {
    return date.split("-").join("/");
  }
  function getGenre() {
    let genreArray = [];
    for (let genre = 0; genre < movie.genre_ids.length; genre++) {
      switch (movie.genre_ids[genre]) {
        case 28:
          genreArray.push(`Action`);
          break;
        case 12:
          genreArray.push(`Aventure`);
          break;
        case 16:
          genreArray.push(`Animation`);
          break;
        case 35:
          genreArray.push(`Comédie`);
          break;
        case 80:
          genreArray.push(`Policier`);
          break;
        case 99:
          genreArray.push(`Documentaire`);
          break;
        case 18:
          genreArray.push(`Drame`);
          break;
        case 10751:
          genreArray.push(`Famille`);
          break;
        case 14:
          genreArray.push(`Fantasy`);
          break;
        case 36:
          genreArray.push(`Histoire`);
          break;
        case 27:
          genreArray.push(`Horreur`);
          break;
        case 10402:
          genreArray.push(`Musique`);
          break;
        case 9648:
          genreArray.push(`Mystère`);
          break;
        case 10749:
          genreArray.push(`Romance`);
          break;
        case 878:
          genreArray.push(`Science-fiction`);
          break;
        case 10770:
          genreArray.push(`Téléfilm`);
          break;
        case 53:
          genreArray.push(`Thriller`);
          break;
        case 10752:
          genreArray.push(`Guerre`);
          break;
        case 37:
          genreArray.push(`Western`);
          break;
        default:
          break;
      }
    }

    return genreArray.map((genre) => (
      <div className="flex">
        <span
          key={genre}
          class="justify-content-space-between badge text-bg-dark list-style"
        >
          {genre}
        </span>
      </div>
    ));
  }

  return (
    <div className="col-lg-3 col-md-4 col-sm-12 mt-3">
      <div class="card ">
        <img
          src={
            movie.poster_path
              ? "https://image.tmdb.org/t/p/original/" + movie.poster_path
              : "/no-movie.jpg"
          }
          className="img-fluid"
          alt={movie.title}
        />
        <div class="card-body height-customize">
          <h5 class="card-title">{movie.title}</h5>
          <span>Sorti le : {dateFormater(movie.release_date)}</span>
          <h6 className="mt-1">
            {movie.vote_average} <i class="fa fa-star" aria-hidden="true"></i>
          </h6>
          <div className="flex flex-direction-row flex-wrap gap-genre mt-2">
            {movie.genre_ids ? (
              getGenre()
            ) : (
              <span class="badge badge-dark">Dark</span>
            )}
          </div>
          <h6 className="mt-2">Synopsie</h6>
          <p class="card-text text-scroll">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
