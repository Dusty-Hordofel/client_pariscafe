import {
  faBars,
  faSearch,
  faCartPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  const renderNavbar = () => {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="/" className="nav-link active" aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Sign in
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Register
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Cart
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  };

  console.log(
    '🚀 ~ file: Navbar.jsx ~ line 6 ~ Navbar ~ renderNavbar',
    renderNavbar()
  );
  return <div>{renderNavbar()}</div>;
};

export default Navbar;
