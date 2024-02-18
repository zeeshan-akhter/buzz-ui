import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { componentRoutes } from "./../../App";
import { GitHubIcon } from "./../../icons";
import "./Home.css";

const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const inputHandler = (e) => setSearch(e.target.value);

  const buttonHandler = () => {
    setSearch("");
    const searchedRoute = componentRoutes.find(({ name }) =>
      name.toLowerCase().includes(search.toLowerCase())
    );
    if (searchedRoute) {
      navigate(searchedRoute.path);
    } else {
      toast.error("Component not found!");
    }
  };

  return (
    <div className="header">
      <NavLink to="/" className="link heading" title="CSS Library">
      <h3
          className="center-text"
          style={{
            fontSize: "2rem",
            color: "black"
          }}
        >
          <span style={{ color: "#00A9FF" }}>BUZZ </span>
          UI.
        </h3>
      </NavLink>
      <div className="navlink">
        <NavLink to="/" className="link" title="Home">
          Home
        </NavLink>
        <NavLink to="/components" className="link" title="Components">
          Components
        </NavLink>

        <NavLink
          to="https://github.com/zeeshan-akhter/buzz-ui/"
          target="_blank"
          className="link"
          title="GitHub"
        >
          <GitHubIcon />
        </NavLink>
      </div>
      <div className="search">
        <input
          placeholder="Search for components..."
          value={search}
          onChange={inputHandler}
          onKeyDown={(e) => e.key === "Enter" && buttonHandler()}
        />
        <button title="Search" onClick={buttonHandler}>
          Search
        </button>
      </div>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home_wrapper">
      <div className="title">
        <h1
          className="center-text"
          style={{
            fontSize: "4rem",
          }}
        >
          <span style={{ color: "#00A9FF" }}>BUZZ </span>
          UI.
        </h1>
      </div>
      <div className="description">
        The Component Library – where every pixel resonates, every
        interaction sparks, and your user interface sings.
      </div>
      <button title="Get Started" onClick={() => navigate("/components")}>
        Get Started
      </button>
    </div>
  );
};

export { Header, Home };
