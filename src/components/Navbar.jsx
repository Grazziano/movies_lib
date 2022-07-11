import './Navbar.css';

import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';

import { Link } from 'react-router-dom';
import React from 'react';

export default function Navbar() {
  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie /> MoviesLib
        </Link>
      </h2>
      <form action="">
        <input type="text" placeholder="Busque um filme" />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
}
