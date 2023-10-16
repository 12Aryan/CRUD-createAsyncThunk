import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <div className="navbar-brand" href="#">
              CRUD - AsyncThunk
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to='/'>
                    Create Post{" "}
                    </Link>
                  
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to='/users'>
                    All Posts{" "}
                    </Link>
                </li>
              </ul>

              <input
                className="form-control me-2 w-25"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn  btn-outline-primary" type="submit">
                Search
              </button>
            </div>
          </div>
        </nav>
      </div>
      <Outlet/>
    </>
  );
};

export default Navbar;
