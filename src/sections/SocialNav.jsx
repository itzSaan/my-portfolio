

export default function SocialNav() {
    return (
        <div className="hidden lg:block social-navbar fixed lg:inset-y-0 lg:right-10 z-50">
            <div className="mx-auto container h-full grid place-content-center text-center">
               <div className="flex flex-row lg:flex-col  gap-3">
                <a href="https://web.whatsapp.com/" 
                className='p-1 rounded-full hover:scale-125 hover:bg-slate-300/25'>
                <img src="./icons/whatsapp.png" />               
                </a>
                <a href="https://facebook.com/sangramm7" 
                className='p-1 rounded-full hover:scale-125 hover:bg-slate-300/25'>
                <img src="./icons/facebook.png" />               
                </a>
                <a href="https://twitter.com/saansangram" 
                className='p-1 rounded-full hover:scale-125 hover:bg-slate-300/25'>
                <img src="./icons/twitter.png" />               
                </a>
                <a href="https://github.com/itzSaan" 
                className='p-1 rounded-full hover:scale-125 hover:bg-slate-300/25'>
                <img src="./icons/github.png" />               
                </a>
                <a href="https://www.linkedin.com/in/sangramm7/" 
                className='p-1 rounded-full hover:scale-125 hover:bg-slate-300/25'>
                <img src="./icons/linkedin.png" />               
                </a>
                <a href="https://www.instagram.com/btw_its_saan/" 
                className='p-1 rounded-full hover:scale-125 hover:bg-slate-300/25'>
                <img src="./icons/instagram.png" />               
                </a>
                <a href="https://codepen.io/itz_saan/" 
                className='p-1 rounded-full hover:scale-125 hover:bg-slate-300/25'>
                <img src="./icons/codepen.png" />  
                </a>
                <span className=' hidden lg:block font-bold text-vertical'>
                    Find me on<span className='text-rose-600'>.</span>
                </span>
                </div>               
            </div>
        </div>
    )
}