import React from "react";

import './index.scss';

function Header(){

  return (
    <div>
      <ul>
        {/* <li className="item"><a  href="/transportaionList">Transportation List</a></li>
        <li  className="item"><a  href="/addTrasportaion">Add new Transportation</a></li> */}
        {/* <li className="item LoggedName"><a href="/">Hi {JSON.parse(localStorage.getItem(USER_NAME))} - Logout</a></li> */}
      </ul>
    </div>
  );
}

export default Header;