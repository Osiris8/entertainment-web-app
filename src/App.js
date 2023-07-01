import "./styles/App.css";
import "./styles/Flexbox.css";
import Movie from "./components/Movie";
function App() {
  return (
    <div className="container">
      <div className="row">
        <Movie />
      </div>
    </div>
  );
}

export default App;
