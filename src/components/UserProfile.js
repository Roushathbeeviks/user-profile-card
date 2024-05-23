import React from 'react'
const UserProfile = ({ user, render }) => {
    console.log("user",user)
    return <>{render(user)}</>;
  };
export default UserProfile
