import { React } from "react";
import { Outlet, Link } from "react-router-dom";
import './nav.css';

function Navbar() {
  return (
    <>
    <div class="rounded-div">
    <img src="https://arise-tech.in/wp-content/uploads/2024/08/logo_arisetech-removebg-preview-54x53.png" class="rounded-image  " alt="Cinque Terre"/>
    </div>
    <br/>
    <nav class="navbar navbar-dark bg-primary ">
  <div class="container-fluid">
   
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-primary" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">AriseTech</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/services">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">Contact Us</a>
          </li>
          
        </ul>
       
      </div>
    </div>
  </div>
</nav>
 <Outlet />
</>
  );
}

export default Navbar;