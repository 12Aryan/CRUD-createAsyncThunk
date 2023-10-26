
const Pagination = () => {
  return (
    <div className="d-flex justify-content-end align-items-end">
      <nav aria-label="Page navigation example bg-dark ">
        <ul className="pagination justify-content-center  ">
          <li className="page-item disabled     ">
            <a className="page-link bg-dark  bg-dark" href="#">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link bg-dark" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link bg-dark" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link bg-dark" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link bg-dark" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
