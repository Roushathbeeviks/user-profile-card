import React from 'react'
const UserProfile = ({ user, render }) => {
    return <>{render(user)}</>;
  };
export default UserProfile
