import React from "react";

const Profile = ({ isLoggedin }) => {
  return <div>{isLoggedin ? <p>icon</p> : <p></p>}</div>;
};
export default Profile;
