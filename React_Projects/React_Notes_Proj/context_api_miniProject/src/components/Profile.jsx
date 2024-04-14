import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const {user} =useContext(UserContext);

  return ((!user)?<h2>Please login :/</h2>:<h2>Welcome {user.username}</h2>);
}

export default Profile;
