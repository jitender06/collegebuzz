import React from 'react'
import { Link } from 'react-router-dom'
import HomeVideo from '../assets/home.mp4'
import Faq from './Faq'
import Contact from './Contact/Contact'
import Logo from '../assets/logo.png'
import Team from './Team'

export default function Home({setActive, isLogin}) {
    return (
        <>
            {/* <!-- Hero --> */}
            <div className="relative flex items-center justify-center h-screen overflow-hidden">
                <div className="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-65 rounded-xl">
                
                    {/* <!-- Announcement Banner --> */}
                    <div className="flex justify-center px-56">
                        <Link to={"/login"} className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:border-neutral-600 dark:text-neutral-200" >
                            PRO release - Join the community
                            <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-neutral-700 dark:text-neutral-400">
                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </span>
                        </Link>
                    </div>
                    {/* <!-- End Announcement Banner --> */}

                    {/* <!-- Title --> */}
                    <div className="mt-5 max-w-2xl text-center mx-auto">
                        <h1 className="block font-bold text-gray-800 text-4xl md:text-3xl lg:text-4xl dark:text-neutral-200">
                            <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">College Buzz: </span>
                        Your Campus, Your Connection, Your Voice 
                        </h1>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img
                            className="h-36 w-auto"
                            src={Logo}
                            alt="Your Company"
                        />
                    </div>
                    {/* <!-- End Title --> */}

                    <div className="mt-5 max-w-3xl text-center mx-auto">
                        <p className="text-lg text-gray-800 dark:text-neutral-400"><span className='font-semibold'>College Buzz: </span> Your campus compass, pointing you to the fun. Don't miss a beat! College Buzz buzzes with the latest events, news, and insider tips for rocking your college experience. </p>
                    </div>

                    {/* <!-- Buttons --> */}
                    <div className="mt-8 gap-3 flex justify-center">
                        {
                            isLogin ? <>
                                <Link to={"/create-post"} onClick={() => setActive("Create Post")} className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800" >
                                    Create Post
                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                </Link>
                            </>:
                            <>
                                <Link to={"/login"} onClick={() => setActive("Login")} className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800" >
                                    Login
                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                </Link>
                                <Link to={"/register"} onClick={() => setActive("Signup")} className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800" >
                                    SignUp
                                    {/* <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg> */}
                                </Link>
                            </>
                        }
                    </div>
                    {/* <!-- End Buttons --> */}
                </div>
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
                >
                    <source
                        src={HomeVideo}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
            <Faq/>
            <Contact/>
            <Team/>
            {/* <!-- End Hero --> */}
        </>
    )
}
