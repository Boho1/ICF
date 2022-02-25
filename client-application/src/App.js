import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Link
} from 'react-router-dom';
import ReactDOM from 'react-dom';

import ArtworkList from "./components/artwork-list";
import ArtworkDetails from "./components/artwork-details";
import FavoriteArtworks from "./components/favorite-artworks";
import Layout from "./components/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ArtworkList />} />
          <Route path="artwork-details" element={<ArtworkDetails />} />
          <Route path="favorite-artworks" element={<FavoriteArtworks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
