import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';
import logo from '../../../assets/images/dosa.jpg';

const Navbar = () => {
  const renderNavbar = () => {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        {/*container-fluid*/}
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="logo" className="logo" />
            <label style={{ fontSize: '14px', fontWeight: 'bold' }}>
              pari<span className="logo-label">sC</span>af&egrave;
              {/* &egrave is used to indicate*/}
            </label>
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
                <a
                  href="/catalog"
                  className="nav-link active"
                  aria-current="page"
                >
                  Browse
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
              <div className="input-group">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  size="40"
                />
                {/*<div className="input-group-append">*/}
                <button
                  className="btn btn-outline-var(--primary-navy)"
                  type="submit"
                  style={{
                    background: 'var(--primary-navy)',
                    color: 'var(--primary-white)',
                  }}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
                {/*</div>*/}
              </div>
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
