export function Header() {
  return (
    <header class="head">
      <nav className="navbar navbar-expand-lg p-0v">
        <div className="container-xxl">
          <a class="navbar-brand me-lg-5" href="https://ww2.123moviesfree.net">
            <div class="logo-nav">
              <img src="./images/logo.jpg" alt="logo"></img>
            </div>
          </a>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="#"> HOME</a>
            </li>
            <li className="nav-item">
              <a href="#"> GENRES</a>
            </li>{" "}
            <li className="nav-item">
              <a href="#"> COUNTRY</a>
            </li>{" "}
            <li className="nav-item">
              <a href="#"> MOVIES</a>
            </li>{" "}
            <li className="nav-item">
              <a href="#"> TV-SERIES</a>
            </li>{" "}
            <li className="nav-item">
              <a href="#"> TOP IMDB</a>
            </li>{" "}
          </ul>
        </div>
        <div id="search-bar" class="search">
          <span class="searcher">
            <svg class="search-icon" width="20" height="20">
              <a href="#search-icon"></a>
            </svg>
          </span>
          <input
            id="search"
            name="search"
            class="box"
            type="text"
            placeholder="Search movies or series"
            aria-label="Search"
          ></input>
        </div>
      </nav>
    </header>
  );
}
