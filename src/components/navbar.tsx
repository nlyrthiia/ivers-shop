const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg blur border-radius-sm top-0 z-index-3 shadow position-sticky py-3 start-0 end-0">
      <div className="container px-1">
        <a className="navbar-brand font-weight-bolder ms-lg-0 " href="/">
          Ivers Shop
        </a>
        <button
          className="navbar-toggler shadow-none ms-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navigation"
          aria-controls="navigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon mt-2">
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navigation">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 "
                aria-current="page"
                href="/landing/"
              >
                Landing
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 "
                aria-current="page"
                href="/product/"
              >
                Product
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 "
                aria-current="page"
                href="/shopping-cart/"
              >
                Shopping Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
