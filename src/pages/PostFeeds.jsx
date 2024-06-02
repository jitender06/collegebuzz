import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import NotFound from '../components/NotFound';
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

export default function PostFeeds({ Posts, setActive }) {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
  ];

  const getRandomImages = (imgArray) => {
    const shuffled = imgArray.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  };

  const [currentImages, setCurrentImages] = useState([]);

  useEffect(() => {
    setCurrentImages(getRandomImages(images));
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-2 py-2 sm:px-6 lg:px-8">
      <Grid container spacing={2}>
        {Posts?.length > 0 ? (
          Posts.map((item, index) => {
            const image = currentImages[index % currentImages.length];
            return (
              <Grid key={index} item xs={12} md={6} lg={4} className="flex items-center justify-center">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className=''>
                    <img src={image} className='object-cover h-48 w-80' alt={`Random ${index}`} />
                  </div>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {item.description.length > 90 ? item.description.slice(0, 90) + '...' : item.description}
                    </p>
                    {/* <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a> */}
                  </div>
                </div>
              </Grid>
            );
          })
        ) : (
          <Grid item xs={12}>
            <NotFound setActive={setActive} />
          </Grid>
        )}
      </Grid>
    </div>
  );
}
