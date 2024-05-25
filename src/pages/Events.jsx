import { Grid } from '@mui/material'
import React from 'react'
import img1 from './assets/1.jpeg'
import img2 from './assets/2.jpeg'
import img3 from './assets/3.jpeg'
import img4 from './assets/4.jpeg'
import img5 from './assets/5.jpeg'
import img6 from './assets/6.jpeg'
import img7 from './assets/7.jpeg'
import img8 from './assets/8.jpeg'
import img9 from './assets/9.jpeg'
import img10 from './assets/10.jpeg'
import img11 from './assets/11.jpeg'
import img12 from './assets/12.jpeg'
import img13 from './assets/13.jpeg'
import img14 from './assets/14.jpeg'
import img15 from './assets/15.jpeg'
import img16 from './assets/16.jpeg'
import img17 from './assets/17.jpeg'
import img18 from './assets/18.jpeg'
import img19 from './assets/18.jpeg'
import img20 from './assets/18.jpeg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom'
const userData = [
    {
        name: "Aarav",
        img: img1
    },
    {
        name: "Arjun",
        img: img3
    },
    {
        name: "Aditi",
        img: img4
    },
    {
        name: "Rohan",
        img: img5
    },
    {
        name: "Priya",
        img: img6
    },
    {
        name: "Vikram",
        img: img7
    },
    {
        name: "Kavya",
        img: img8
    },
    {
        name: "Siddharth",
        img: img9
    },
    {
        name: "Meera",
        img: img10
    },
    {
        name: "Aniket",
        img: img11
    },
    {
        name: "Nisha",
        img: img12
    },
    {
        name: "Amit",
        img: img13
    },
    {
        name: "Divya",
        img: img14
    },
    {
        name: "Rajesh",
        img: img15
    },
    {
        name: "Sneha",
        img: img16
    },
    {
        name: "Kunal",
        img: img17
    },
    {
        name: "Manoj",
        img: img18
    },
]

export default function Events({ setIsLogin, setActive }) {
    return (
        // <div className="mx-auto max-w-7xl px-2 py-5 sm:px-6 lg:px-8">
        //     <Grid container spacing={2}>
        //         {
        //             userData.map((item, index) => {
        //                 return <Grid key={index} item xs={12} md={6} lg={4} className='flex items-center justify-center'>
        //                     <div className="bg-white shadow rounded-lg mb-6">
        //                         <div className="flex flex-row px-2 py-3 mx-3">
        //                             <div className="w-auto h-auto rounded-full">
        //                                 {/* <img className="w-12 h-12 object-cover rounded-full shadow cursor-pointer" alt="User avatar" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" /> */}
        //                             <AccountCircleIcon sx={{fontSize:40}}/>
        //                             </div>
        //                             <div className="flex flex-col mb-2 ml-4 mt-1">
        //                                 <div className="text-gray-600 text-sm font-semibold">{item.name}</div>
        //                                 <div className="flex w-full mt-1">
        //                                     <div className="text-blue-700 font-base text-xs mr-1 cursor-pointer">
        //                                         SEO
        //                                     </div>
        //                                     <div className="text-gray-400 font-thin text-xs">
        //                                         • 30 seconds ago
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="border-b border-gray-100"></div>
        //                         <div className="h-80">
        //                             {/* <div className="grid grid-cols-6 col-span-2   gap-2  "> */}
        //                             {/* <div className=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]"> */}
        //                             <img className="h-full w-full object-cover " src={item.img} alt="" />
        //                             {/* </div> */}
        //                             {/* <div className=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
        //                                     <img className="h-full w-full object-cover  " src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1399&amp;q=80" alt="" />
        //                                 </div>
        //                                 <div className=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
        //                                     <img className="h-full w-full object-cover " src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80" alt="" />
        //                                 </div>
        //                                 <div className=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
        //                                     <img className="h-full w-full object-cover " src="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80" alt="" />
        //                                 </div> */}
        //                             {/* <div className="relative overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
        //                                     <div className="text-white text-xl absolute inset-0  bg-slate-900/80 flex justify-center items-center">
        //                                         + 23
        //                                     </div>
        //                                     <img className="h-full w-full object-cover " src="https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=765&amp;q=80" alt="" />
        //                                 </div> */}
        //                             {/* </div> */}
        //                         </div>
        //                         {/* <div className="text-gray-500 text-sm mb-6 mx-3 px-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</div> */}
        //                         <div className="flex justify-start mb-4 border-t border-gray-100">
        //                             <div className="flex w-full mt-1 pt-2 pl-5">
        //                                 <span className="bg-white transition ease-out duration-300 hover:text-red-500 border w-8 h-8 px-2 pt-2 text-center rounded-full text-gray-400 cursor-pointer mr-2">
        //                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="14px" viewBox="0 0 24 24" stroke="currentColor">
        //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
        //                                     </svg>
        //                                 </span>
        //                                 <img className="inline-block object-cover w-8 h-8 text-white border-2 border-white rounded-full shadow-sm cursor-pointer" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
        //                                 <img className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
        //                                 <img className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80" alt="" />
        //                                 <img className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.25&amp;w=256&amp;h=256&amp;q=80" alt="" />
        //                             </div>
        //                             <div className="flex justify-end w-full mt-1 pt-2 pr-5">
        //                                 <span className="transition ease-out duration-300 hover:bg-blue-50 bg-blue-100 w-8 h-8 px-2 py-2 text-center rounded-full text-blue-400 cursor-pointer mr-2">
        //                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="14px" viewBox="0 0 24 24" stroke="currentColor">
        //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
        //                                     </svg>
        //                                 </span>
        //                                 <span className="transition ease-out duration-300 hover:bg-gray-50 bg-gray-100 h-8 px-2 py-2 text-center rounded-full text-gray-100 cursor-pointer">
        //                                     <svg className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        //                                         <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
        //                                     </svg>
        //                                 </span>
        //                             </div>
        //                         </div>
        //                         <div className="flex w-full border-t border-gray-100">
        //                             <div className="mt-3 mx-5 flex flex-row text-xs">
        //                                 <div className="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">Comments:<div className="ml-1 text-gray-400 text-ms"> 30</div></div>
        //                                 <div className="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">Views: <div className="ml-1 text-gray-400 text-ms"> 60k</div></div>
        //                             </div>
        //                             <div className="mt-3 mx-5 w-full flex justify-end text-xs">
        //                                 <div className="flex text-gray-700  rounded-md mb-2 mr-4 items-center">Likes: <div className="ml-1 text-gray-400  text-ms"> 120k</div></div>
        //                             </div>
        //                         </div>
        //                         {/* <div className="text-black p-4 antialiased flex">
        //                             <img className="rounded-full h-8 w-8 mr-2 mt-1 " src="https://picsum.photos/id/1027/200/200" />
        //                             <div>
        //                                 <div className="bg-gray-100 rounded-lg px-4 pt-2 pb-2.5">
        //                                     <div className="font-semibold text-sm leading-relaxed">Sara Lauren</div>
        //                                     <div className="text-xs leading-snug md:leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        //                                 </div>
        //                                 <div className="text-xs  mt-0.5 text-gray-500">14 w</div>
        //                                 <div className="bg-white border border-white rounded-full float-right -mt-8 mr-0.5 flex shadow items-center ">
        //                                     <svg className="p-0.5 h-5 w-5 rounded-full z-20 bg-white" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><defs><linearGradient id="a1" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stopColor="#18AFFF"></stop><stop offset="100%" stopColor="#0062DF"></stop></linearGradient><filter id="c1" width="118.8%" height="118.8%" x="-9.4%" y="-9.4%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="1"></feGaussianBlur><feOffset dy="-1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"></feComposite><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0"></feColorMatrix></filter><path id="b1" d="M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z"></path></defs><g fill="none"><use fill="url(#a1)" xlinkHref="#b1"></use><use fill="black" filter="url(#c1)" xlinkHref="#b1"></use><path fill="white" d="M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z"></path></g></svg>
        //                                     <svg className="p-0.5 h-5 w-5 rounded-full -ml-1.5 bg-white" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><defs><linearGradient id="a2" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stopColor="#FF6680"></stop><stop offset="100%" stopColor="#E61739"></stop></linearGradient><filter id="c2" width="118.8%" height="118.8%" x="-9.4%" y="-9.4%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="1"></feGaussianBlur><feOffset dy="-1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"></feComposite><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0"></feColorMatrix></filter><path id="b2" d="M8 0a8 8 0 100 16A8 8 0 008 0z"></path></defs><g fill="none"><use fill="url(#a2)" xlinkHref="#b2"></use><use fill="black" filter="url(#c2)" xlinkHref="#b2"></use><path fill="white" d="M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41"></path></g></svg>
        //                                     <span className="text-sm ml-1 pr-1.5 text-gray-500">3</span>
        //                                 </div>
        //                             </div>
        //                         </div> */}
        //                         <div className="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
        //                             <img className="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer" alt="User avatar" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" />
        //                             <span className="absolute inset-y-0 right-0 flex items-center pr-6">
        //                                 <button type="submit" className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500">
        //                                     <svg className="w-6 h-6 transition ease-out duration-300 hover:text-blue-500 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        //                                     </svg>

        //                                 </button>
        //                             </span>
        //                             <input type="search" className="w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400" style={{ borderRadius: "25px" }} placeholder="Post a comment..." autoComplete="off" />
        //                         </div>
        //                     </div>
        //                 </Grid>
        //             })
        //         }
        //     </Grid>
        // </div>

        <div className="min-h-screen bg-gray-50/50 flex">
            <aside className="bg-gradient-to-br from-gray-800 to-gray-900 -translate-x-80 inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0">
                <div className="relative border-b border-white/20">
                    <a className="flex items-center gap-4 py-6 px-8" href="#/">
                        <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">College Events</h6>
                    </a>
                    <button className="middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden" type="button">
                        <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" aria-hidden="true" className="h-5 w-5 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </span>
                    </button>
                </div>
                <div className="m-4">
                    <ul className="mb-4 flex flex-col gap-1">
                        <li>
                            <a aria-current="page" className="active" href="#">
                                <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
                                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
                                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
                                    </svg>
                                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Events</p>
                                </button>
                            </a>
                        </li>
                        <li>
                            <Link to={"/chat"}>
                                <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
                                        <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Profile</p>
                                </button>
                            </Link>
                        </li>
                        <li>
                        <Link to={"/message"}>
                                <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
                                        <path fill-rule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375A.375.375 0 0020.625 9h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zM10.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5zM3.375 15h7.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h7.5a.375.375 0 00.375-.375v-1.5A.375.375 0 0010.875 9h-7.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375z" clip-rule="evenodd"></path>
                                    </svg>
                                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Message</p>
                                </button>
                            </Link>
                        </li>
                        <li>
                            <a className="" href="#">
                                <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
                                        <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">notifactions</p>
                                </button>
                            </a>
                        </li>
                    </ul>
                    <ul className="mb-4 flex flex-col gap-1">
                        <li className="mx-3.5 mt-4 mb-2">
                            <p className="block antialiased font-sans text-sm leading-normal text-white font-black uppercase opacity-75">auth pages</p>
                        </li>
                        <li>
                            <Link
                                onClick={() => { localStorage.setItem('isLogin', 'false'); setIsLogin(false); setActive("Home") }}
                                to={"/"}
                            >
                                <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
                                        <path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z" clip-rule="evenodd"></path>
                                    </svg>
                                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">sign out</p>
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
            <div className="p-4 xl:ml-8">
                <nav className="block w-full max-w-full bg-transparent text-white shadow-none rounded-xl transition-all px-0 py-1">
                    <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
                        <div className="capitalize">
                            <nav aria-label="breadcrumb" className="w-max">
                                <ol className="flex flex-wrap items-center w-full bg-opacity-60 rounded-md bg-transparent p-0 transition-all">
                                    <li className="flex items-center text-blue-gray-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-light-blue-500">
                                        <a href="#">
                                            <p className="block antialiased font-sans text-sm leading-normal text-blue-900 font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100">dashboard</p>
                                        </a>
                                        <span className="text-gray-500 text-sm antialiased font-sans font-normal leading-normal mx-2 pointer-events-none select-none">/</span>
                                    </li>
                                    <li className="flex items-center text-blue-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-blue-500">
                                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">event</p>
                                    </li>
                                </ol>
                            </nav>
                            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-gray-900">event</h6>
                        </div>
                        <div className="flex items-center">
                            <div className="mr-auto md:mr-4 md:w-56">
                                <div className="relative w-full min-w-[200px] h-10">
                                    <input className="peer w-full h-full bg-transparent text-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500" placeholder=" " />
                                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:border-blue-500 after:border-blue-gray-200 peer-focus:after:border-blue-500">Type here</label>
                                </div>
                            </div>
                            <button className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 grid xl:hidden" type="button">
                                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" stroke-width="3" className="h-6 w-6 text-blue-gray-500">
                                        <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </nav>
                <div className="mt-12">
                    <div className="mx-auto max-w-7xl px-2 py-5 sm:px-6 lg:px-8">
                        <Grid container spacing={2}>
                            {
                                userData.map((item, index) => {
                                    return <Grid key={index} item xs={12} md={6} lg={4} className='flex items-center justify-center'>
                                        <div className="bg-white shadow rounded-lg mb-6">
                                            <div className="flex flex-row px-2 py-3 mx-3">
                                                <div className="w-auto h-auto rounded-full">
                                                    {/* <img className="w-12 h-12 object-cover rounded-full shadow cursor-pointer" alt="User avatar" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" /> */}
                                                    <AccountCircleIcon sx={{ fontSize: 40 }} />
                                                </div>
                                                <div className="flex flex-col mb-2 ml-4 mt-1">
                                                    <div className="text-gray-600 text-sm font-semibold">{item.name}</div>
                                                    <div className="flex w-full mt-1">
                                                        <div className="text-blue-700 font-base text-xs mr-1 cursor-pointer">
                                                            SEO
                                                        </div>
                                                        <div className="text-gray-400 font-thin text-xs">
                                                            • 30 seconds ago
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="border-b border-gray-100"></div>
                                            <div className="h-80">
                                                <img className="h-full w-full object-cover " src={item.img} alt="" />
                                            </div>
                                            <div className="flex justify-start mb-4 border-t border-gray-100">
                                                <div className="flex w-full mt-1 pt-2 pl-5">
                                                    <span className="bg-white transition ease-out duration-300 hover:text-red-500 border w-8 h-8 px-2 pt-2 text-center rounded-full text-gray-400 cursor-pointer mr-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="14px" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                                                        </svg>
                                                    </span>
                                                    <img className="inline-block object-cover w-8 h-8 text-white border-2 border-white rounded-full shadow-sm cursor-pointer" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                                                    <img className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                                                    <img className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80" alt="" />
                                                    <img className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.25&amp;w=256&amp;h=256&amp;q=80" alt="" />
                                                </div>
                                                <div className="flex justify-end w-full mt-1 pt-2 pr-5">
                                                    <span className="transition ease-out duration-300 hover:bg-blue-50 bg-blue-100 w-8 h-8 px-2 py-2 text-center rounded-full text-blue-400 cursor-pointer mr-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="14px" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                                                        </svg>
                                                    </span>
                                                    <span className="transition ease-out duration-300 hover:bg-gray-50 bg-gray-100 h-8 px-2 py-2 text-center rounded-full text-gray-100 cursor-pointer">
                                                        <svg className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex w-full border-t border-gray-100">
                                                <div className="mt-3 mx-5 flex flex-row text-xs">
                                                    <div className="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">Comments:<div className="ml-1 text-gray-400 text-ms"> 30</div></div>
                                                    <div className="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">Views: <div className="ml-1 text-gray-400 text-ms"> 60k</div></div>
                                                </div>
                                                <div className="mt-3 mx-5 w-full flex justify-end text-xs">
                                                    <div className="flex text-gray-700  rounded-md mb-2 mr-4 items-center">Likes: <div className="ml-1 text-gray-400  text-ms"> 120k</div></div>
                                                </div>
                                            </div>
                                            <div className="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
                                                <img className="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer" alt="User avatar" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" />
                                                <span className="absolute inset-y-0 right-0 flex items-center pr-6">
                                                    <button type="submit" className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500">
                                                        <svg className="w-6 h-6 transition ease-out duration-300 hover:text-blue-500 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                        </svg>

                                                    </button>
                                                </span>
                                                <input type="search" className="w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400" style={{ borderRadius: "25px" }} placeholder="Post a comment..." autoComplete="off" />
                                            </div>
                                        </div>
                                    </Grid>
                                })
                            }
                        </Grid>
                    </div>
                </div>

            </div>
        </div>
    )
}
