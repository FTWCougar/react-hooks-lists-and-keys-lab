import React from "react";

function NavBar() {
  const linkList = ["home", "about", "projects"];
  const links = linkList.map (link => {
    return <a key={link} href={"#" + link}>{link}</a>
  })
  return (
  <nav>
    {links}
  </nav>
  );
}

export default NavBar;
