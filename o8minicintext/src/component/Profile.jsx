import React, { useContext } from "react";
import UserContext from "../Context/UserContext.jsx";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <h2>Please login first</h2>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {user.username}</p>
      <p>Password: {user.password}</p>
    </div>
  );
}

export default Profile;
