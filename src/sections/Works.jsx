import { projects } from '../Data'

export default function Works() {
    return (
        <section id="Works" className="work relative h-full">
            <div className="mx-auto py-6 container h-auto grid place-content-center text-center">               
               <h1 className="text-3xl  font-bold mb-8 sm:text-3xl md:text-4xl">
                Some of my Works<span className="text-rose-600">.</span>
                </h1> 
              <div className="max-w-5xl my-2 p-2 grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-5">
                {projects.map(project => (
                  <a 
                  href={project.link}
                  target="_blank"
                  key={project.img}>
                  <div className="w-auto flex flex-col p-2 bg-slate-800/50 rounded-xl hover:scale-105 hover:shadow-lg">
                  <img src={project.image} alt="" className="block w-full rounded-xl"/> 
                  <p className="mt-3">{project.title}</p>   
                  </div> 
                  </a>
                ))}               
              </div>
              <div className="text-center mt-3">
               <a href="https://codepen.io/itz_saan/" target="_blank" className="px-12 py-4 bg-blue-500 text-white rounded">See all Works</a>
              </div>                            
            </div>
        </section>
    )
}
