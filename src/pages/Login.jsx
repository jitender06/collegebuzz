import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png' 

export default function Login({allUsersData, isLogin, setIsLogin, setActive, setCurrentLogin}) {
    const navigate = useNavigate();
    useEffect(() => {
        const loggedIn = localStorage.getItem('isLogin');
        setIsLogin(loggedIn === 'true');
    }, []);

    const [data, setData] = useState({
        email:"",
        password:""
    })
    const handleChange = (key, value) => {
        setData({
            ...data,
            [key]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const check = allUsersData.find((item) => item.email === data.email && item.password === data.password)
        setCurrentLogin(check)
        console.log(check,"::data check")
        if(check){
            toast("Login successful!");
            setData({
                email: "",
                password: "",
            });
            setIsLogin(true);
            localStorage.setItem('isLogin', 'true');
            setActive("Profile")
            navigate('/chat');
        }else{
            toast("Email or password is wrong ");
        }
    }
    return (
        <section className="">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Link to={"/"} className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-16 mr-2" src={Logo} alt="logo" />
                    College Buzz
                </Link>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={data.email}
                                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                                    id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@xyz.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    value={data.password}
                                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                                    id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <Link to={"/login"} className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
                            </div>
                            <button onClick={(e) => handleSubmit(e) } type='submit' className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
                            <ToastContainer toastStyle={{ backgroundColor: "rgb(101 70 195)", color:"white",}} progressStyle={{color:"blue"}}/>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <Link to={"/register"} onClick={() => setActive("Signup")} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
