

export default function MobileSocialNav() {
    return (
        <div className="lg:hidden bg-slate-800/75 backdrop-blur-sm py-3 fixed inset-x-0 top-0 z-[55]">
            <div className="mx-auto w-full sm:flex items-center gap-2 grid place-content-center">
                <span className='text-sm'>
                    Find me on<span className='text-rose-600'>.</span>
                </span>
               <div className="flex  gap-4">
                <a href="https://wa.me/+91-8908221784/" 
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
                </div>               
            </div>
        </div>
    )
}