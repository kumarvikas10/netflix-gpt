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
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANG } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  }

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

  const handleLanguageChange = (e) => {
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className='top-0 absolute z-[1000] w-full px-8 py-4 bg-gradient-to-b from-black flex justify-between'>
      <div>
        <img src={logoSVG} alt="svg-logo" />
      </div>
      {
        user && (
          <div className='flex items-center'>
            {showGptSearch && (
              <select className='mr-4 rounded-md px-3 p-2 outline outline-offset-0' onClick={handleLanguageChange}>
                {SUPPORTED_LANG.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
              </select>
            )}
            <button className='text-white font-medium mr-4 border-2 border-white rounded-lg p-2 hover:bg-white hover:text-black' onClick={handleGptSearch}>{showGptSearch ? "Homepage" : "Gpt Search"}</button>
            <img className="w-[30px] mr-2" src={userAvatar} alt="User's Profile" />
            <button onClick={handleSignOut} ><img className='w-[25px] p-1' src={crossButton} alt="cross-button-icon" /></button>
          </div>
        )
      }
    </div>
  );
}

export default Header;
