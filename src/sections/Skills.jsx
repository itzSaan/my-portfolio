import { skills } from "../Data";

export default function Skills() {
    
    return (
        <section id="Skills" className="skills relative h-full md:h-screen">
            <div className="mx-auto py-6 container  h-full grid place-content-center text-center">               
               <h1 className="text-3xl font-bold mb-6 md:mb-10 sm:text-3xl md:text-4xl">
                Skills I have<span className="text-rose-600">.</span>
                </h1> 
              <div className="max-w-5xl lg:my-8 flex flex-wrap justify-center px-10 gap-4">
               {skills.map( skill => (
                <div key={skill.name} className="w-24 p-3 sm:w-28 rounded-lg hover:bg-slate-800/50 hover:shadow-xl flex flex-col justify-between gap-4 ">
                    <img src={skill.image} alt="" className="block w-full" />
                    <small className="block">{skill.name}</small>
                </div>
               ))}               
              </div>                            
            </div>
        </section>
