// import logo from "../../public/logo192.png";
import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../img/rick.png";
import "../css/nav-bar.css";
import { Link, Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AiOutlineHome } from "react-icons/ai";
import { GiCharacter } from "react-icons/gi";
import { MdOutlineLocalMovies } from "react-icons/md";
function NavBar() {
  return (
    <>
      <Navbar sticky="top" id="nav" collapseOnSelect expand="lg">
        <Container>
          <Link className="text-decoration-none text-white" id="colorNavLink  " to="/">
            rick and morty <span id="wiki">WIKI</span>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav >
              <Link className="enderezar text-decoration-none" id="colorNavLink" to="/">
                {" "}
                <AiOutlineHome />
                HOME
              </Link>
              <Link className="enderezar text-decoration-none"  id="colorNavLink" to="/Character">
                {" "}
                <GiCharacter />
                Characters
              </Link>
              <Link className="enderezar text-decoration-none"  id="colorNavLink" to="/EpisodeComponent">
              <MdOutlineLocalMovies/>
                Episodes
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default NavBar;
