import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation } from "react-router-dom";
import { getUserList, getUsers } from "../../features/users/redux/usersSlice";
import { useEffect } from "react";


const Navbar = () => {
  const dispatch = useDispatch()
  let count = useSelector(getUserList)
  const location = useLocation();
  const pathData = location.pathname.split("/");
  const currentPath = `/${pathData[1]}`;
  // useEffect(()=>{dispatch(getUsers())},[])
  const totalPostCount =   count.users.length
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-navbar">
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
                  <Link className={`${currentPath==="/"? 'active-route': ''} nav-link active`} to='/'>
                    Create Post{" "}
                    </Link>
                  
                </li>
                <li className="nav-item">
                <Link className={`${currentPath==="/users"? 'active-route': ''} nav-link active`} to='/users'>
                    All Posts ({totalPostCount})
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
      <div className="div">
      <Outlet/>
      </div>
    </>
  );
};

export default Navbar;
