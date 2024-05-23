import { Grid } from '@mui/material'
import React from 'react'
import NotFound from '../components/NotFound'
export default function PostFeeds({Posts, setActive}) {
    console.log(Posts,"::Posts")
    return (
        <div className="mx-auto max-w-7xl px-2 py-2 sm:px-6 lg:px-8">
            <Grid container spacing={2}>
                {
                    Posts?.length >0 ? 
                    Posts?.map((item, index) => {
                        return <Grid key={index} item xs={12} md={6} lg={4} className='flex items-center justify-center'>
                                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                                    </a>
                                    <div className="p-5">
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                                        </a>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description.length > 90 ? item.description.slice(0,90) + "..." : item.description}</p>
                                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Read more
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </Grid>
                    }):
                    <Grid xs={12}>
                        <NotFound setActive={setActive}/>
                    </Grid>

                }
            </Grid>
        </div>
    )
}