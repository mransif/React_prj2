import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
    
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full py-10  bg-[#004C42] rounded-t-3xl'>
            <div className=' border-t-2 border-b-2 border-zinc-300 tracking-tighter overflow-hidden text-[17vw] pb-[2vw] leading-none font-bold flex whitespace-nowrap'>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 5 }}>WE ARE OCHI.</motion.h1>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 5 }}>WE ARE OCHI.</motion.h1>
            </div>
        </div>
    )
}

export default Marquee