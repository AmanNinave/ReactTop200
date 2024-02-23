// UserProfile.js
import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  // Use the useParams hook to access the route parameters
  const { username } = useParams();

  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {username}</p>
    </div>
  );
};

export default UserProfile;
