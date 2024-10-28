import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Power4 } from 'gsap'

function Features() {
    const [isHovering, setHovering] = useState(false)
    const [isHovering2, setisHovering2] = useState(false)

    return (
        <div className='w-full py-10'>
            <div className='w-full px-10 border-b-[1px] border-zinc-600 pb-10'>
                <h1 className='text-[6vw] tracking-tight'>Featured project</h1>
            </div>
            <div className="cards w-full p-10 flex gap-10">
                <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} className="cardContainer w-1/2 h-[80vh] relative">
                    <div className="absolute flex overflow-hidden z-10 text-[8vw] text-[#688BFC] left-full -translate-x-1/2 -translate-y-1/2 top-1/2 font-semibold  leading-none font-['Neue_Montreal']">
                        {"FYDE".split('').map((item, index) =>
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={isHovering ? ({ y: "0" }) : ({ y: "100%" })}
                                transition={{ ease: Power4.easeInOut, delay: index * .06 }}
                                className='inline-block'
                            >{item}</motion.span>
                        )}
                    </div>
                    <div className='w-full h-full rounded-lg overflow-hidden bg-[#CCCCCD]'>
                        <img className='' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>
                </div>
                <div onMouseEnter={() => setisHovering2(true)} onMouseLeave={() => setisHovering2(false)} className="cardContainer w-1/2 h-[80vh] relative">
                    <div className="absolute flex overflow-hidden z-10 text-[8vw] text-[#688BFC] right-full translate-x-1/2 -translate-y-1/2 top-1/2 font-semibold leading-none font-['Neue_Montreal']">
                        {"VISE".split('').map((item, index) =>
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={isHovering2 ? ({ y: "0" }) : ({ y: "-10vw" })}
                                transition={{ ease: Power4.easeInOut, delay: index * .06 }}
                                className='inline-block'
                            >{item}</motion.span>
                        )}
                    </div>
                    <div className='w-full h-full rounded-lg overflow-hidden bg-[#19181E]'>
                        <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features