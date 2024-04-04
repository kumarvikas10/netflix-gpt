import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useDispatch } from 'react-redux';
import {addUser} from '../utils/userSlice';
import userAvatar from '../images/userIcon.jpg';
import {Background_IMG} from '../utils/constants';

const Login = () => {
    const dispatch = useDispatch();
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonCLick = () => {
        // Validate Form Data 

        console.log(email.current.value, password.current.value);
        const message = checkValidateData(email.current.value, password.current.value);
        setErrorMessage(message);
        console.log(message)

        if (message) return;

        if (!isSignInForm) {
            //sign up 
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value, photoURL: {userAvatar}
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                    }).catch((error) => {
                        setErrorMessage(error.message);
                    });
                    console.log(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + ":" + errorMessage)
                });
        } else {

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + ":" + errorMessage)
                });
        }
    }

    return (
        <div className='relative min-h-screen overflow-hidden'>
            <div className="absolute -z-10">
                <img src={Background_IMG} alt="netlix-background" />
            </div>
            <Header />
            <div className='max-w-[700px] grow mt-20 my-0 mx-auto py-0 px-[5%]'>
                <div className='min-h-[600px] p-[50px] flex flex-col w-full rounded-lg bg-black/70'>
                    <h1 className='mb-5 text-white text-4xl font-semibold p-2'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                    <form onSubmit={(e) => e.preventDefault()} className='flex flex-col gap-4'>
                        {!isSignInForm && <input ref={name} type="text" placeholder='Full Name' className='p-2 m-2 border-[1px] border-white rounded-md text-white bg-transparent' />}
                        <input ref={email} type="text" placeholder='Email or Phone Number' className='p-2 m-2 border-[1px] border-white rounded-md text-white bg-transparent' />
                        <input ref={password} type="password" placeholder='Password' className='p-2 m-2 border-[1px] border-white rounded-md text-white bg-transparent' />
                        <p className='text-red-500 font-light text-1xl p-2 py-0'>{errorMessage}</p>
                        <button className='text-center p-2 m-2 rounded-md bg-red-600 text-white' onClick={handleButtonCLick}>{isSignInForm ? "Sign In" : "Register"}</button>
                        <p className='text-1xl font-medium mt-5 text-white p-2 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up now" : "Already Registered? Sign In now"}</p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login