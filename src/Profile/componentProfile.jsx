import React from 'react';
import PropTypes from "prop-types";
import myImg from './myImg.png';


const Profile = ({ fullName, bio, profession, children, handleName }) => {
  return (
    <div>
      {children && <img className='img' src={children} alt="profile"  />}
      {!children && <img className='img' src={myImg} alt="profile" />}
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
    children: PropTypes.string.isRequired,
    handleName: PropTypes.func.isRequired,
  };

  // data props

Profile.defaultProps = {
  fullName: "Fatima-ezzahra El Fahimi",
  bio: " Hi, how are you? I m Fatima-ezzahra Elfahimi, I m 28 years old, I m JS developper.... ",  
  profession: "JS Developer",
  children: "",
  handleName: (name) => alert(`Hey 👋, I called  ${name}`),
};

  export default Profile;