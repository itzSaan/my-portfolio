export default function About() {
    return (
        <section id="About" className="about h-full md:h-screen relative bg-s-900">
            <div className="mx-auto h-full container grid place-content-center">
                <div className="flex px-12 flex-col md:flex-row justify-center gap-6 md:gap-16 items-center">
                
               <div className="w-auto rounded-2xl overflow-hidden p-2 bg-slate-800/50">
                <img src="./images/sangram.png" className="block rounded-2xl w-full" />
               </div>

               <div className="max-w-96 md:w-auto">                
                <h1 className="text-2xl font-bold mb-6 md:mb-12 sm:text-3xl md:text-4xl">
                About me<span className="text-rose-600">.</span>
                </h1> 
                <div className="flex justify-center mb-10 text-sm">
                    <div className="w-36  grid gap-4 sm:gap-6">
                    <p className="font-bold">Name:</p>
                    <p className="font-bold">Date of Birth:</p>
                    <p className="font-bold">Address:</p>
                    <p className="font-bold">Zip-code:</p>
                    <p className="font-bold">Email:</p>
                    <p className="font-bold">Phone: </p>
                    </div>
                    <div className="grid gap-4 sm:gap-6">
                    <p className="">Sangram Kishor Moharana</p>
                    <p className="">22nd March 1994</p>
                    <p className="">Paradip, Odisha</p>
                    <p className="">754142</p>
                    <p className="">sangramm7@gmail.com</p>
                    <p className="">8908221784, 8480310320</p>
                    </div>
                </div>  
                <div className="text-center md:text-left mb-8 md:mb-0">
                    <a href="Sangram Kishor.pdf" target="_blank" className="px-16 py-4  md:w-44 bg-blue-500 text-white rounded">Download CV</a>                  
                </div>             
                </div>
               </div>
            </div>
        </section>
    )
}
