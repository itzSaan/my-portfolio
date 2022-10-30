export default function About() {
    return (
        <section id="About" className="about h-full md:h-screen relative bg-s-900">
            <div className="mx-auto max-w-7xl h-full container grid place-content-center">
                <h1 className="text-2xl text-center font-bold mb-6 md:mb-12 sm:text-3xl md:text-4xl">
                About me<span className="text-rose-600">.</span>
                </h1> 
                <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-16 items-center">
                <div className="w-auto rounded-2xl overflow-hidden p-2 bg-slate-800/50">
                    <img src="./images/sangram.png" className="block rounded-2xl w-full" />
                </div>

                <div className="max-w-96 flex flex-col justify-between gap-6 md:w-auto">             
                    
                    <div className="flex justify-center mb-5 text-sm md:text-base">
                        <div className="w-36  grid gap-4 sm:gap-8">
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
                        <p className="">Madhuban, Paradip, Odisha</p>
                        <p className="">754142</p>
                        <p className="">sangramm7@gmail.com</p>
                        <p className="">8908221784, 8480310320</p>
                        </div>
                    </div>  
                <div className="text-center mt-5 md:mt-0 md:text-left md:mb-0">
                    <a href="Sangram Kishor.pdf" target="_blank" className="px-16 py-4  md:w-44 bg-blue-500 text-white rounded">Download CV</a>                  
                </div>             
                </div>
               </div>
            </div>
        </section>
    )
}
