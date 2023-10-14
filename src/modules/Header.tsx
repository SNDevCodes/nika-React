export function Header() {
  return (
    <div className=" container-fluid">
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark container-fluid py-4">
        <div className="container">
          <img
            src="https://a0.muscache.com/airbnb/static/logotype_favicon-21cc8e6c6a2cca43f061d2dcabdf6e58.ico"
            alt="Airbnb"
          />

          {/* Toggle Button */}
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="navbar-collapse collapse justify-content-end"
            id="navbarCollapse"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
