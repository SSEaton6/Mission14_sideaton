import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

//This is the navbar so that the user can switch between pages.
function Navbar() {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <ul className="nav navbar-nav d-flex flex-row gap-5">
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Podcasts">Podcasts</Link>
          </li>
          <li>
            <Link to="/movies">MovieList</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
