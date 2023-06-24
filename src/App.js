import "./styles/App.css";
import "./styles/Flexbox.css";
import Navigation from "./components/Navigation";
import Movie from "./components/Movie";

function App() {
  return (
    <div className="container">
      <Navigation />
      <Movie />
    </div>
  );
}

export default App;
