import Header from "./components/Header";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import WatchList from "./components/WatchList";
import Watched from "./components/Watched";
import Add from "./components/Add";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/add" element={<Add />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/watched" element={<Watched />} />
      </Routes>
    </Router>
  );
}

export default App;
