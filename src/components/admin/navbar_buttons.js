import React from "react";

import * as userStorage from "../../utils/user_storage";

const NavbarButtons = () => {
  const handleLogout = () => {
    alert("logout");
    // userStorage.clearFromStorage();
  };

  return (
    <div className="right-corner">
      <span>
        <img className="user3" src="/assets/images/user.png" width="40px" />
      </span>
      <span className="name">Nome Admin</span>

      <span>
        <img
          src="/assets/images/power.png"
          width="25px"
          onClick={handleLogout}
        />
      </span>
    </div>
  );
};

export default NavbarButtons;
