import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../assets/logo.png'
export default function Register({ setActive }) {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: "",
        role: "",
        gender: "male",
        phone: '',
        address: ""
    })

    const [allUser, setAllUser] = useState(() => {
        const storedPost = localStorage.getItem('user');
        return storedPost ? JSON.parse(storedPost) : [];
    });

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(allUser));
        setData({
            name: "",
            email: "",
            password: "",
            cpassword: "",
            role: "",
            gender: "male",
            phone: '',
            address: ""
        });
    }, [allUser]);



    const handleChange = (key, value) => {
        setData({
            ...data,
            [key]: value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if the password and confirm password match
        if (data.password !== data.cpassword) {
            toast("Password doesn't match");
            return;
        }
        // Check if any form fields are empty
        if (!(data.email.length && data.password.length && data.cpassword.length && data.address.length && data.phone.length && data.role.length)) {
            toast("Please fill the form");
            return;
        }
        // Check if the email already exists in allUser
        const existingUser = allUser.find(user => user.email === data.email);
        if (existingUser) {
            toast("User with this email already exists!");
            return;
        }
        // Add the new user to allUser
        setAllUser(prevAllUser => [...prevAllUser, data]);
        // Save updated allUser to localStorage
        localStorage.setItem('user', JSON.stringify([...allUser, data]));
        // Show success message
        toast("Registration successful! Now you can Login");
        // Clear the form fields
        setData({
            name: "",
            email: "",
            password: "",
            cpassword: "",
            role: "",
            gender: "male",
            phone: '',
            address: ""
        });
    };
    console.log(data, "::data")
    return (
        <section className="py-5">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                <Link to={"/"} className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-16 mr-2" src={Logo} alt="logo" />
                    CollegeBuzz
                </Link>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                                <input
                                    type="name"
                                    name="name"
                                    value={data?.name}
                                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                                    id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john doe" required="" />
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={data?.email}
                                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                                    id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@xyz.com" required="" />
                            </div>

                            <div>
                                <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your role</label>
                                <select
                                    name="role"
                                    value={data.role}
                                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                                    id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Choose a Role</option>
                                    <option value="teacher">Teacher</option>
                                    <option value="visitor">Visitor</option>
                                    <option value="student">Student</option>
                                </select>
                            </div>

                            <div>
                                <h3 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</h3>
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center">
                                        <input
                                            id="default-radio-1"
                                            type="radio"
                                            name="gender"
                                            value="male"
                                            checked={data.gender === "male"}
                                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="default-radio-2"
                                            type="radio"
                                            name="gender"
                                            value="female"
                                            checked={data.gender === "female"}
                                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                                    </div>
                                </div>
                            </div>


                            <div>
                                <label htmlFor="phone-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number:</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                                            <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                                        </svg>
                                    </div>
                                    <input
                                        name='phone'
                                        value={data.phone}
                                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                                        type="number"
                                        id="phone-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
                                </div>
                                <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">Select a phone number that matches the format.</p>
                            </div>

                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                                <textarea
                                    name='address'
                                    value={data.address}
                                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                                    id="message" rows="3" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
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
                            <div>
                                <label htmlFor="cpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                <input
                                    type="cpassword"
                                    name="cpassword"
                                    value={data.cpassword}
                                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                                    id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <button onClick={(e) => handleSubmit(e)} type='submit' className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
                            <ToastContainer toastStyle={{ backgroundColor: "rgb(101 70 195)", color: "white", }} progressStyle={{ color: "blue" }} />
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link to={"/login"} onClick={() => setActive("Login")} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
