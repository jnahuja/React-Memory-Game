import React from "react";
import { Link } from "react-router-dom";

const NavTabs = props => (
  
  <ul className="nav nav-tabs text-center">
    <li className="nav-item col-4">
      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }
      >
        Clicky Game
      </Link>
    </li>
    <li className="nav-item col-4">
      Click and Image to Begin!
    </li>
    <li className="nav-item col-4">
      Score: {props.score} | Top Score: {props.topScore}
    </li>

  </ul>
  
  
  
  // <ul className="nav nav-tabs">
  //   <li className="nav-item">
  //     <Link
  //       to="/"
  //       className={
  //         window.location.pathname === "/" ? "nav-link active" : "nav-link"
  //       }
  //     >
  //       Home
  //     </Link>
  //   </li>
  //   <li className="nav-item">
  //     <Link
  //       to="/about"
  //       className={
  //         window.location.pathname === "/about" ? "nav-link active" : "nav-link"
  //       }
  //     >
  //       About
  //     </Link>
  //   </li>
  //   <li className="nav-item">
  //     <Link
  //       to="/discover"
  //       className={
  //         window.location.pathname === "/discover" ? "nav-link active" : "nav-link"
  //       }
  //     >
  //       Discover
  //     </Link>
  //   </li>
  //   <li className="nav-item">
  //     <Link
  //       to="/search"
  //       className={
  //         window.location.pathname === "/search" ? "nav-link active" : "nav-link"
  //       }
  //     >
  //       Search
  //     </Link>
  //   </li>
  //   <li className="nav-item">
  //     <Link
  //       to="/test"
  //       className={
  //         window.location.pathname === "/test" ? "nav-link active" : "nav-link"
  //       }
  //     >
  //       Test
  //     </Link>
  //   </li>
    /* <li className="nav-item">
      <Link
        to="/contact/learn"
        className={
          window.location.pathname === "/contact/learn" ? "nav-link active" : "nav-link"
        }
      >
        Learn
      </Link>
    </li> */
  // </ul>
);

export default NavTabs;
