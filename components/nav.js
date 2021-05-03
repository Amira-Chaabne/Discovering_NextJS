import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light " width={100}>
      <Link href="/">
        <a className="navbar-brand ">Elif Shafak</a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/otherStuff/About">
              <a className="nav-link">About the author</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/otherStuff/books">
              <a className="nav-link">Books</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}