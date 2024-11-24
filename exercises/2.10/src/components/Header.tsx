import { useNavigate } from "react-router-dom";
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="header-content">
        <div className="title"><button onClick={() => navigate("/")}>iMovies</button></div>
        <nav className="nav-bar">
          <button onClick={() => navigate("/cinema")}>Cinema</button>
          <button onClick={() => navigate("/movie-list")}>Movie List</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
