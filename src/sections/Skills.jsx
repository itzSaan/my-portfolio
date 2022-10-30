export default function Skills() {
    return (
        <section id="Skills" className="skills relative h-full md:h-screen">
            <div className="mx-auto py-6 container  h-full grid place-content-center text-center">               
               <h1 className="text-3xl font-bold mb-6 md:mb-10 sm:text-3xl md:text-4xl">
                Skills I have<span className="text-rose-600">.</span>
                </h1> 
              <div className="max-w-5xl lg:my-8 flex flex-wrap justify-center px-10 gap-4">
                <div className="w-20 p-3 sm:w-28 rounded-lg hover:bg-slate-800/50 hover:shadow-xl flex item-center flex-col gap-2">
                    <img src="images/html_5.svg" alt="" className="block w-full" />
                    <small>HTML:5</small>
                </div>
                <div className="w-20 p-3 sm:w-28 rounded-lg hover:bg-slate-800/50 hover:shadow-xl flex flex-col gap-2">
                    <img src="images/css_3.svg" alt="" />
                    <small>CSS3</small>
                </div>
                <div className="w-20 p-3 sm:w-28 rounded-lg hover:bg-slate-800/50 hover:shadow-xl flex item-center flex-col gap-2">
                    <img src="images/js.svg" alt="" />
                    <small>JavaScript</small>
                </div>
                <div className="w-20 p-3 sm:w-28 rounded-lg hover:bg-slate-800/50 hover:shadow-xl flex item-center flex-col gap-2">
                    <img src="images/jquery.svg" alt="" />
                    <small>jQuery</small>
                </div>
                <div className="w-20 p-3 sm:w-28 rounded-lg hover:bg-slate-800/50 hover:shadow-xl flex justify-between item-center flex-col gap-2">
                    <img src="images/bootstrap.svg" alt="" />
                    <small>Bootstrap</small>
                </div>
                <div className="w-20 p-3 sm:w-28 rounded-lg hover:bg-slate-800/50 hover:shadow-xl flex justify-between item-center flex-col gap-2">
                    <img src="images/tailwind.svg" alt="" />
                    <small>Tailwind CSS</small>
                </div>
                <div className="w-20 p-3 sm:w-28 rounded-lg hover:bg-slate-800/50 hover:shadow-xl flex item-center flex-col gap-2">
                    <img src="images/wordpress.svg" alt="" />
                    <small>WordPress</small>
                </div>
                <div className="w-20 p-3 sm:w-28 rounded-lg hover:bg-slate-800/50 hover:shadow-xl flex item-center flex-col gap-2">
                    <img src="images/react.svg" alt="" />
                    <small>React</small>
                </div>
                <div className="w-20 p-3 sm:w-28 rounded-lg hover:bg-slate-800/50 hover:shadow-xl flex item-center flex-col gap-2">
                    <img src="images/node_js.svg" alt="" />
                    <small>Node JS</small>
                </div>
                <div className="w-20 p-3 sm:w-28 rounded-lg hover:bg-slate-800/50 hover:shadow-xl flex item-center flex-col gap-2">
                    <img src="images/vs_code.svg" alt="" />
                    <small>VS Code</small>
                </div>
                <div className="w-20 p-3 sm:w-28 rounded-lg hover:bg-slate-800/50 hover:shadow-xl flex item-center flex-col gap-2">
                    <img src="images/codepen.svg" alt="" />
                    <small>Codepen</small>
                </div>
                <div className="w-20 p-3 sm:w-28 rounded-lg hover:bg-slate-800/50 hover:shadow-xl flex item-center flex-col gap-2">
                    <img src="images/photoshop.svg" alt="" />
                    <small>Photoshop</small>
                </div>
                <div className="w-20 p-3 sm:w-28 rounded-lg hover:bg-slate-800/50 hover:shadow-xl flex item-center flex-col gap-2">
                    <img src="images/coreldraw.svg" alt="" />
                    <small>CorelDRAW</small>
                </div>
                <div className="w-20 p-3 sm:w-28 rounded-lg hover:bg-slate-800/50 hover:shadow-xl justify-between flex item-center flex-col gap-2">
                    <img src="images/figma.svg" alt="" />
                    <small>Figma</small>
                </div>
                <div className="w-20 p-3 sm:w-28 rounded-lg hover:bg-slate-800/50 hover:shadow-xl justify-between flex item-center flex-col gap-2">
                    <img src="images/adobexd.svg" alt="" />
                    <small>Adobe Xd</small>
                </div>                
              </div>
                            
            </div>
        </section>
    )
}