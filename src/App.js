import "./styles/App.css";
import "./styles/Flexbox.css";
import Navigation from "./Components/Navigation";
import Movie from "./Components/Movie";

function App() {
  return (
    <div className="container">
      <Navigation />
      <Movie />
    </div>
  );
}

export default App;
