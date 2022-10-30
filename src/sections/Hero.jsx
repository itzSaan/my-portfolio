export default function Hero() {
    return (
        <section id="Me" className="hero h-screen relative grid place-content-center" >
            <div className="mx-auto container text-center">
                <span className="text-2xl md:text-3xl">
                    <span className="bg-rose-600 text-white">
                        Hello,
                    </span> I'm
                </span>
              <h1 className="text-4xl font-bold mt-3 mb-8 sm:text-5xl md:text-6xl">
                Sangram Kishor
                </h1>  
                <p className="text-lg md:text-2xl sm:text-xl">
                UI/UX  & Frontend Developer
                </p>
                <div className="flex gap-3  justify-center mt-14">
                <a href="#Contact" className="py-3 w-36 bg-blue-600 my-btn sm:py-5 sm:w-52">
                    Hire me!
                </a>
                <a href="#Works"  className="py-3 w-36 my-btn-outline  sm:py-5 sm:w-52">
                    View Works
                </a>
                </div>
            </div>
        </section>
    )
}