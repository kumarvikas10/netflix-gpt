import React from 'react';
import logoSVG from '../images/logo.svg';
import crossButton from '../images/crossButton.svg';
// import userIcon from '../images/userIcon.jpg'
import { auth } from '../utils/Firebase'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  }

  return (
    <div className='px-8 py-4 bg-gradient-to-b from-black flex justify-between'>
      <div>
        <img src={logoSVG} alt="svg-logo" />
      </div>
      {
        user && (
          <div className='flex items-center'>
            <img className="w-[30px] mr-2" src={user.photoURL} alt="User's Profile" />
            <button onClick={handleSignOut} ><img className='w-[25px] p-1' src={crossButton} alt="cross-button-icon" /></button>
          </div>
        )
      }
    </div>
  );
}

export default Header;
