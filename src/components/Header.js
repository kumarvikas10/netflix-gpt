import React from 'react';
import logoSVG from '../images/logo.svg';
import crossButton from '../images/crossButton.svg';
import userAvatar from '../images/userIcon.jpg'
import { auth } from '../utils/Firebase'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const { uid, email, displayName, photoURL } = user;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
            navigate('/browse')
        } else {
            dispatch(removeUser());
            navigate('/')
        }
    });

    return () => unsubscribe; //unsubscribe when components unmount
}, [])

  const handleSignOut = () => {
    signOut(auth).then(() => {

    }).catch((error) => {
      navigate("/error")
    });
  }

  return (
    <div className='absolute z-[1000] w-full px-8 py-4 bg-gradient-to-b from-black flex justify-between'>
      <div>
        <img src={logoSVG} alt="svg-logo" />
      </div>
      {
        user && (
          <div className='flex items-center'>
            <img className="w-[30px] mr-2" src={userAvatar} alt="User's Profile" />
            <button onClick={handleSignOut} ><img className='w-[25px] p-1' src={crossButton} alt="cross-button-icon" /></button>
          </div>
        )
      }
    </div>
  );
}

export default Header;
