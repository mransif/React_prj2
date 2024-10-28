import React from 'react'

const About = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full p-20 bg-[#c1dc6a] rounded-t-3xl text-black'>
            <h1 className="font-['Neue_Montreal'] text-[4.5vw] tracking-tighter">Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
            <div className='w-full border-t-[1px] border-[#889b48] mt-12 flex'>
                <div className='w-1/2'>
                    <h1 className='text-[4vw]'>Our Product:</h1>
                    <button className='bg-zinc-900 text-white uppercase flex gap-5 items-center mt-10 rounded-full px-4 py-2'>Read more
                        <div className='w-2 h-2 bg-white rounded-full'></div>
                    </button>
                </div>
                <div className='w-1/2  bg-[#889b48] mt-10 flex items-center rounded-3xl overflow-hidden'>
                <img className='object-cover rounded-3xl' src="https://superwatchman.com/wp-content/uploads/2021/03/164530041_926421801449285_9112042092598765421_n.jpg" alt="" srcset="" />
                </div>
            </div>
        </div>
    )
}

export default About