import { useState } from "react"; 
import ListContact from "./ListContact";

function Contact() {
  const [btnSend, setBtnSend] = useState("Send");
  const [inputName, setInputName] = useState("");

  const ShowValue = (event) => {
    setInputName(event.target.value);
  };

  console.log(inputName);
  function sendMail(e) {
    e.preventDefault();
  }

  return (
    <div className="flex flex-col gap-20 pb-10 pt-10 md:flex-row md:items-center md:justify-around md:px-10" id="footer">
      <form className="flex flex-col justify-center gap-5 px-5 w-[25rem] mt-10 md:w-[40rem]">
      <h2 className="text-center text-cyan text-4xl font-semibold pt-10 border-b-2 flex justify-center m-auto max-w-[300px] pb-2 md:text-5xl">
        Contact Me
      </h2>
        <input
          onChange={ShowValue}
          value={inputName}
          id="name"
          className="bg-[] py-1 px-2 outline-none text-gray-700 rounded-lg border border-gray-700"
          type="text"
          placeholder="Name"
        />
        <input
          id="email"
          className="bg-[] py-1 px-2 outline-none text-gray-700 rounded-lg border border-gray-700"
          type="text"
          name="email"
          placeholder="Email"
          onChange={ShowValue}
          value={inputName}
        />
        <textarea
          className="rounded-lg p-2 outline-none"
          name="message"
          id="message"
          cols="30"
          rows="5"
        ></textarea>
        <button className="text-black bg-[#2acfcf] flex w-40 justify-center items-center py-2 font-bold rounded-md hover:opacity-60 transition-all">
          {btnSend}
        </button>
      </form> 
      <div className="flex flex-col gap-10 px-10">
        <img className="w-[150px] rounded-full" src="/src/images/2.png" alt="" /> 
        <div className="flex flex-col gap-2">
          <h2 className="text-white text-4xl font-bold">Redes</h2> 
          <ul className="flex flex-col gap-2">
            <ListContact title=" brian.elmo_" style="text-white text-xl" icon="fa-brands fa-instagram" link="https://www.instagram.com/brian.elmo_"/>
            <ListContact title=" Brian Nicolas Elmo" style="text-white text-xl" icon="fa-brands fa-linkedin" link="https://www.linkedin.com/in/nicolas-elmo/"/>
            <ListContact title=" Portfolio" style="text-white text-xl" icon="fa-solid fa-briefcase" link="https://brianelmo.github.io/Portfolio-Brian-Elmo/"/>

          </ul>
        </div> 
      </div>
    </div>
  );
}

export default Contact;
