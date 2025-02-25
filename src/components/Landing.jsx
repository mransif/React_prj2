import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


const Landing = () => {

  return (
    <div data-scroll data-scroll-speed="-.5" className='w-full h-screen bg-zinc-900 pt-1'>
      <div className="textLeft mt-32 px-20">
        {["WE create", "eye opening", "presentations"].map((item, index) => {
          return <div key={index} className="masker">
            <div className='w-fit flex overflow-hidden'>
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "13vw"}}
                  transition={{ease: [0.76, 0, 0.24, 1], duration: 1}}
                  className='w-[9vw] h-[6vw] relative top-[0.51vw] rounded-lg '>
                    <img src="https://c4.wallpaperflare.com/wallpaper/868/233/117/yggdrasil-loki-mcu-comics-nine-realms-hd-wallpaper-preview.jpg" alt="" />
                  </motion.div>
              )}
              <h1 className="uppercase text-[8vw] font-bold tracking-tighter h-full font-['Roboto'] leading-[7vw] ">{item}</h1>
            </div>
          </div>
        })}

      </div>
      <div className='border-t-[1px] uppercase text-sm border-zinc-800 mt-[5.0px] flex items-center justify-between py-2 px-14'>
        {["For public and Private", "From the first"].map((item, index) => {
          return <p key={index}>{item}</p>
        })}
        <div className='start flex items-center gap-1'>
          <div className='px-3 py-1 border-[1px] border-zinc-500 rounded-full'>Start Project</div>
          <div className='w-7 h-7 border-[1px] flex items-center justify-center border-zinc-500 rounded-full'>
            <span className='-rotate-45'>
              <FaArrowRightLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing