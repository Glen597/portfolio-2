import Image from "next/image";
import ContactCard from "./contacts-card";
import { contactscardsData } from "@/app/lib/ContactsData";
import Form from "next/Form"
import ContactForm from "./contactForm";
const ContactMe = ()=>{
    return(
        <div className="flex justify-around items-center pt-30">
                <div className=" px-20  flex flex-col   justify-start">
                      <div className="flex  items-center">
                                      <div className="w-5 h-0.5 bg-yellow-500 mb-2"></div>
                                       <p className="ml-[2px]  text-2xl  font-sans  text-[#2A2A2A] ">Contact Us</p>
                                   </div>
                                   <div className="flex items-center justify-between ">
                                       <p className="text-6xl ">Let's Talk for<span className="text-yellow-400 italic">  Your<br></br> Next Projects</span></p>
                                   </div>  
                                     <p className="w-100 my-10 text-gray-700  text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non facere dignissimos veritatis, eum repudiandae ullam, illum ratione dolorum nam maxime reiciendis error doloremque ab? Quo amet sequi cupiditate maiores aliquam.</p>
                                   {contactscardsData.map((infoContact, index) =>(
                                    <ContactCard
                                    key={index}
                                    Imagesrc={infoContact.Imagesrc}
                                    description={infoContact.description}/>
                                  ) )}
                </div>
                <div>
                  <ContactForm/>
                 {/*   <div className="flex  items-center bg-[#FEB33B] rounded-full w-[150] h-12 ">
                                               <button className="rounded-full bg-green-900 px-6 my-6 text-white py-[10] ml-[2] mt-[26]">Submit</button>
                                               <a className="bg-white rounded-full ml-[9] ">
                                                   <Image
                                                       src="/arrow.svg"
                                                       alt="Play button"
                                                       width={35}
                                                       height={10}
                                                   />
                                               </a>
                                           </div>*/}
                </div>
        </div>
    )
}

export default ContactMe;