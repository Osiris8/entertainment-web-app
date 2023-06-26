import "./styles/App.css";
import "./styles/Flexbox.css";
import Navigation from "./components/Navigation";
import Movie from "./components/Movie";
function App() {
  return (
    <div className="container">
      <div className="row">
        <Navigation />
        <Movie />
      </div>
    </div>
  );
}

export default App;
