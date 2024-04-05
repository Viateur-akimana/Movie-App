import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Movies from "./pages/Movies";
import Bookmark from "./pages/Bookmark";
import TvSeries from "./pages/TvSeries";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/bookmarks" element={<Bookmark />} />
        <Route path="/tv-series" element={<TvSeries />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;