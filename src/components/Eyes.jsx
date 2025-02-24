import React, { useEffect, useState } from 'react'

const Eyes = () => {
    const [rotate, setrotate] = useState(0)

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX
            let mouseY = e.clientY


            let deltaX = mouseX - window.innerWidth / 2
            let deltaY = mouseY - window.innerHeight / 2

            var angle = Math.atan2(deltaY, deltaX) * (57.29)
            setrotate(angle - 180)

        })
    })

    return (
        <div className='w-full flex items-center justify-center  py-6'>
            <div className='relative w-full h-10 mx-[100%] '>
                <div className='bg-white absolute w-[10vw] h-[10vw] rounded-full top-1/2 left-[6vw] -translate-x-[50%] -translate-y-[50%]'>
                    <div className='bg-black absolute w-[6vw] h-[6vw] rounded-full top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                        <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                            className=' absolute w-[6vw] h-[1vw] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                            <div className='bg-white absolute w-[1vw] h-[1vw] rounded-full top-1/2 left-1 -translate-x-[50%] -translate-y-[50%]'></div>
                        </div>
                    </div>
                </div>
                <div className='bg-white absolute w-[10vw] h-[10vw] rounded-full top-1/2 -left-[6vw] -translate-x-[50%] -translate-y-[50%]'>
                    <div className='bg-black absolute w-[6vw] h-[6vw] rounded-full top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                        <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                            className=' absolute w-[6vw] h-[1vw] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                            <div className='bg-white absolute w-[1vw] h-[1vw] rounded-full top-1/2 left-1 -translate-x-[50%] -translate-y-[50%]'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes