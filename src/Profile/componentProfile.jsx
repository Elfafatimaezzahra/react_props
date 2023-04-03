import React from 'react';
import PropTypes from "prop-types";



const Profile = ({ fullName, bio, profession, children, handleName }) => {
  return (
    <div>
      <div className='children'>{children}</div>
      <div className='fullname'>{fullName}</div>
      <div className='profession'>{profession}</div>
      <div className='bio'>{bio}</div>

      <button className='btn' onClick={() => handleName(fullName)}>
    Alert Me
      </button>
    </div>
  );
};

//types des props

Profile.propTypes = {
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    handleName: PropTypes.func.isRequired,
  };

  // data props

Profile.defaultProps = {
  fullName: "Fatima-ezzahra El Fahimi",
  bio: " Hi, how are you? I m Fatima-ezzahra Elfahimi, I m 28 years old, I m JS developper.... ",  
  profession: "JS Developer",
  handleName: (name) => alert(`Hey 👋, I called  ${name}`),
};

  export default Profile;