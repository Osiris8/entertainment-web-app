function Movie() {
  return (
    <div className="col-lg-10 padding-32">
      <div className="col-12">
        <input
          class="form-control"
          type="text"
          placeholder="Search for movies and TV series"
        />
      </div>
      <div className="col-2 mt-3">
        <div class="card card-size">
          <img
            src="https://image.tmdb.org/t/p/original//fJbw16AwM59dEhSiCIAfFGgIgOP.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Avengers : Infinity Wars</h5>
            <span>Sorti le : 25/04/2018</span>
            <h6 className="mt-1">
              8/10 <i class="fa fa-star" aria-hidden="true"></i>
            </h6>
            <div className="flex flex-direction-row gap-genre mt-2">
              <span class="badge text-bg-dark">Dark</span>
              <span class="badge text-bg-dark">Dark</span>
              <span class="badge text-bg-dark">Dark</span>
            </div>
            <h6 className="mt-2">Synopsie</h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <img
              className="flex center"
              width="25"
              height="25"
              src="https://img.icons8.com/ios/50/like--v1.png"
              alt="like--v1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Movie;
