import React from "react";

const NavBarComponent = () => {
  return (
    <nav class="sidebar">
      <div class="container sidebar-sticky">
        <div class="sidebar-about">
          <a class="nav-link active" aria-current="page" href="#">Active</a>
          <a class="nav-link" href="#">Link</a>
          <a class="nav-link" href="#">Link</a>
          <a class="nav-link disabled">Disabled</a>
        </div>
      </div>
    </nav>
  )
}

export default NavBarComponent;