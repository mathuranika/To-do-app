import Link from "next/link"; 

export default function Header() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary border">
        <div className="container">
          <Link className="navbar-brand" href="/">My Todo</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link active" aria-current="page" href="/login">Login</Link>
              <Link className="nav-link" href="/about">About</Link >
              <Link className="nav-link" href="/mytodos">My Todos</Link >
            </div>
          </div>
        </div>
      </nav>
    );
  }
  