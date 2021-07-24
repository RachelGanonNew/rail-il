import React from "react";

import './index.scss';

function Header(){

  return (
    <div>
      <ul>
        <li className="item"><a  href="/moviesList">Movies List</a></li>
      </ul>
    </div>
  );
}

export default Header;