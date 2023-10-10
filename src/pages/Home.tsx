import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/frame123486">Frame123486</Link>
        </li>
        <li>
          <Link to="/frame123487">Frame123487</Link>
        </li>
        <li>
          <Link to="/frame123488">Frame123488</Link>
        </li>
        <li>
          <Link to="/frame123489">Frame123489</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;