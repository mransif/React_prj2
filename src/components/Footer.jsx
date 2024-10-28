import React from 'react'

function Footer() {
  return (
    <div className='w-full h-screen flex flex-col justify-between'>
        <div className="w-1/2 p-20">
            <div className="text-[10vw] font-bold tracking-tight leading-none">
                <h1>EYE</h1>
                <h1 className='-mt-[2vw] leading-none'>OPENING</h1>
            </div>
        </div>
        <div className="flex justify-between px-5 py-2 border-t-[1px] border-zinc-500">
            <a href="">Instagram</a>
            <a href="">LinkedIn</a>
            <a href="">Twitter</a>
            <a href="">Email</a>
        </div>
    </div>
  )
}

export default Footer