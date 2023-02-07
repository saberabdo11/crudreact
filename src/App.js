import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Skillsindex from "./Components/skills/Skillsindex";
import Skillsedit from "./Components/skills/Skillsedit";
import Skillscreate from "./Components/skills/Skillscreate";
function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills">
                Skills
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skillsindex />} />
        <Route path="/skills/create" element={<Skillscreate />} />
        <Route path="/skills/:id/edit" element={<Skillsedit />} />
      </Routes>
    </div>
  );
}

export default App;
