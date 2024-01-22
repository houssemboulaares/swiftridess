"use client"
import React, { useState, useEffect } from 'react';
import fadeIn from '../AboutUs/fadeIn';
import { motion } from 'framer-motion';

const Add=() => {
  const [chnageImage, setChangeImage] = useState<number>(0);

  const images: string[] = [
      "https://cdn.discordapp.com/attachments/1113064451806076990/1194582998566326302/navigation_1.png?ex=65ba1b9d&is=65a7a69d&hm=598fc236bd4ccf31df2ea097c6b8edc440607cf677cd04677cf2bacffef090f1& "
  ];
  const changeImage = () => {
    setChangeImage((pr) => (pr + 1) % images.length);
  };
  useEffect(() => {
    const interval = setInterval(changeImage, 5000); 
    return () => clearInterval(interval); 
  }, []);


  return (
    <div className="flex items-center justify-center mt-28 bg-gray-600">
      <div className="flex">
        <motion.div
          className="flex flex-col justify-center p-4 gap-2 "
          variants={fadeIn('right', 0.4)}
          initial="hidden"
          animate="show"
        >
          <h1 className="text-4xl font-bold">CHOOSE YOUR CAR</h1>
          <h1 className="text-gray-400 text-4xl font-bold">ANYWHERE, ANYTIME</h1>
          <h1 className="text-4xl font-bold">AND ENJOY THE RIDE</h1>
          <button className="rounded w-40 h-[50px] flex justify-center ml-[90px] mt-5 items-center bg-gray-400">
            Explore Now
          </button>
        </motion.div>
        <motion.div
          className="ml-72 max-w-xl absolute-left"
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
        >
          <img className="imgs"src={images[chnageImage]} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Add;

