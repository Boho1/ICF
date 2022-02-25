import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">ArtworkList</Link>
          </li>
          <li>
            <Link to="/artwork-details">ArtworkDetails</Link>
          </li>
          <li>
            <Link to="/favorite-artworks">FavoriteArtwork</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;