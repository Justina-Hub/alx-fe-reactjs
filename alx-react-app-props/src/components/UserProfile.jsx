import React, { useContext } from 'react';
import UserContext from '../UserContext';


function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div style={{
      border: '1px solid gray',
      borderRadius: '8px',
      padding: '12px',
      margin: '12px'
    }}>
      <h2 style={{ color: 'blue', marginBottom: '8px' }}>
        {userData?.name ?? 'No Name'}
      </h2>
      <p>Email: {userData?.email ?? 'No Email'}</p>
    </div>
  );
}

export default UserProfile;
