import React from "react";

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

    return (
        <section id="Contact" className="about h-full md:h-screen relative">
            <div className="mx-auto h-full container grid place-content-center">
                <h1 className="text-3xl mt-8 sm:mt-auto text-center font-bold mb-6 md:mb-12 sm:text-3xl md:text-4xl">
                Get in touch with me<span className="text-rose-600">.</span>
                </h1> 
                <div className=" p-6 flex flex-col md:flex-row justify-center gap-6 md:gap-10 items-center">
                <div className="w-96 px-6 md:px-0">
                <img src="./images/bar-chart.png"  className="block w-full" />
                <p className="w-72 pr-6 text-2xl leading-relaxed font-bold">
                Drop me a message,
                I would like to
                hear from you<span className="text-rose-600">.</span>
                </p>
            </div>

               <div className="w-auto px-6 md:px-0">                 
                 <form 
                    netlify
                    name="contact"
                    onSubmit={handleSubmit}
                 >
                    <p className="mb-5 text-xl md:text-2xl font-bold">Send me a Message
                    <span className="text-rose-600">.</span></p>
                <input type="text" 
                className="h-12 w-full block mb-4 px-3 bg-slate-800/50 shadow rounded hover:border-blue-500" 
                placeholder="Fullname"
                name="name"
                onChange={e => setName(e.target.value)}
                required
                 />    
                <input type="text" 
                className="h-12 w-full block mb-4 px-3 bg-slate-800/50 shadow rounded hover:border-blue-500" 
                placeholder="Email" 
                name="email"
                onChange={e => setEmail(e.target.value)}
                required
                /> 
                <textarea
                         cols="30"
                         rows="10"
                         className="mb-4 p-3 h-36 w-full bg-slate-800/50 shadow rounded hover:border-blue-500"
                         placeholder="Message.."
                         id="message"
                         name="message"
                         onChange={e => setMessage(e.target.value)}
                         required 
                         />   
                <button className="h-12 w-full bg-blue-500 text-white rounded" type="submit">
                    Send Message
                    </button>                  
                </form>  
                </div>
               </div>
            </div>
        </section>
    )
}
