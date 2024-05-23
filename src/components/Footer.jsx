import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
        <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
                <footer className="relative bg-blueGray-200 pt-8 pb-6">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap text-left lg:text-left">
                            <div className="w-full lg:w-6/12 px-4">
                                <h4 className="text-3xl fonat-semibold text-gray-800">Let's keep in touch!</h4>
                                <h5 className="text-lg mt-0 mb-2 .text-gray-600">
                                    Find us on any of these platforms
                                </h5>
                                <div className="mt-6 lg:mb-0 mb-6">
                                    <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                        <InstagramIcon/>
                                    </button>
                                    <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                        <XIcon/>
                                    </button>
                                    <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                        <FacebookIcon/>
                                    </button>

                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="flex flex-wrap items-top mb-6">
                                    <div className="w-full lg:w-4/12 px-4 ml-auto">
                                        <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                                        <ul className="list-unstyled">
                                            <li>
                                                <Link className=".text-gray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to={"#"}>About Us</Link>
                                            </li>
                                            <li>
                                                <Link className=".text-gray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to={"#"}>Blog</Link>
                                            </li>
                                            <li>
                                                <Link className=".text-gray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to={"#"}>Github</Link>
                                            </li>
                                            <li>
                                                <Link className=".text-gray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to={"#"}>Free Products</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4">
                                        <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                                        <ul className="list-unstyled">
                                            <li>
                                                <Link className=".text-gray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to={"#"}>MIT License</Link>
                                            </li>
                                            <li>
                                                <Link className=".text-gray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to={"#"}>Terms &amp; Conditions</Link>
                                            </li>
                                            <li>
                                                <Link className=".text-gray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to={"#"}>Privacy Policy</Link>
                                            </li>
                                            <li>
                                                <Link className=".text-gray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to={"#"}>Contact Us</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="my-6 border-blueGray-300" />
                        <div className="flex flex-wrap items-center md:justify-between justify-center">
                            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                                <div className="text-sm text-blueGray-500 font-semibold py-1">
                                    Copyright © <span id="get-current-year">2024</span>
                                        <a href="#" className="text-blueGray-500 hover:text-blueGray-800"> College Buzz</a>.
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
        </>
    )
}
