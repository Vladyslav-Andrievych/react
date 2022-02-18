import React from 'react';
import formatDate from './formatDate.js';

const Profile = (props) => {
  return (
    <div className="profile">
      <span className="profile__name">{`${props.userData.firstName} ${props.userData.lastName}`}</span>
      <span className="profile__birth">{`Was born ${formatDate(
        props.userData.birthDate
      )} in ${props.userData.birthPlace}`}</span>
    </div>
  );
};

export default Profile;
