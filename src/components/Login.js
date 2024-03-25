import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div className='relative z-0 min-h-screen overflow-hidden'>
            <div className="absolute -z-10">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="netlix-background" />
            </div>
            <Header />
            <div className='max-w-[700px] grow my-0 mx-auto py-0 px-[5%]'>
                <div className='min-h-[600px] p-[50px] flex flex-col w-full rounded-lg bg-black/70'>
                    <h1 className='mb-5 text-white text-4xl font-semibold p-2'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                    <form className='flex flex-col gap-4'>
                        {!isSignInForm && <input type="text" placeholder='Full Name' className='p-2 m-2 border-[1px] border-white rounded-md text-white bg-transparent' />}
                        <input type="text" placeholder='Email or Phone Number' className='p-2 m-2 border-[1px] border-white rounded-md text-white bg-transparent' />
                        <input type="text" placeholder='Password' className='p-2 m-2 border-[1px] border-white rounded-md text-white bg-transparent' />
                        <button className='text-center p-2 m-2 rounded-md bg-red-600 text-white'>{isSignInForm ? "Sign In" : "Register"}</button>
                        <p className='text-1xl font-medium mt-5 text-white p-2 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up now" : "Already Registered? Sign In now"}</p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login