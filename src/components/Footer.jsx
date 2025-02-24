import React from 'react'

function Footer() {
  return (
    <div className='w-full h-screen flex flex-col justify-between'>
        <div className="w-1/2 p-20">
            <div className="text-[10vw] font-bold tracking-tight leading-none">
                <h1>EYE</h1>
                <h1 className='-mt-[2vw] leading-none'>OPENING</h1>
                <div className="flex justify-around px-8 py-2  border-t-[1px]  border-zinc-800">
            <a href="https://instagram.com/">Instagram</a>
            <a href="https://linkedin.com/">LinkedIn</a>
            <a href="https://x.com/">Twitter</a>
            <a href="https://gmail.com/">Email</a>
        </div>
            </div>
        </div>
        <div className="flex justify-around px-8 py-2  border-t-[1px]  border-zinc-800">
            <a href="https://instagram.com/">Instagram</a>
            <a href="https://linkedin.com/">LinkedIn</a>
            <a href="https://x.com/">Twitter</a>
            <a href="https://gmail.com/">Email</a>
        </div>

        
    </div>
  )
}

export default Footer