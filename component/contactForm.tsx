"use client";


import { useState } from "react";
import { useForm } from "react-hook-form";
const ContactForm = ()=>{

    const {register, reset, handleSubmit} = useForm();
    const [msg, setMsg] = useState<string>();

    const dataSubmit = (data: any)=>{
            if(data){
                setMsg("Thank You For Contacting Me!")
                reset()
            }
    };
    return(
        <div>
              <form onSubmit={handleSubmit(dataSubmit)}>
                        <div className="flex gap-6 my-3">
                             <div className="w-1/2">
                        <input type="text" 
                        placeholder="First Name"  
                        className="w-full text-lg px-4 py-0.5 rounded shadow-md outline-none"
                        {...register("firstName", {required: true})}
                        />
                        </div>
                          <div className="w-1/2">
                        <input type="text" 
                        placeholder="Last Name"  
                        className="w-full text-lg px-4 py-0.5 rounded shadow-md outline-none"
                        {...register("lastName", {required: true})}
                        />
                        </div>
                        </div>
                           <div className="flex gap-6 my-3">
                             <div className="w-1/2">
                        <input type="email" 
                        placeholder="E-mail"  
                        className="w-full text-lg px-4 py-0.5 rounded shadow-md outline-none"
                        {...register("e-mail", {required: true})}
                        />
                        </div>
                          <div className="w-1/2">
                        <input type="tel" 
                        placeholder="Phone number"    
                        className="w-full text-lg px-4 py-0.5 rounded shadow-md outline-none"
                        {...register("phonenumber",)}
                        />
                        </div>
                        </div>
                        <div className="my-3">
                            <textarea  
                            className="w-full text-lg px-4 py-0.5 rounded shadow-md outline-none min-h-32"
                             {...register("message")}
                             placeholder="Message"
                            ></textarea>
                        </div>
                        <div className="flex justify-end mt-6">
                            <p className="text-yellow-400 font-medium text-lg mr-4">{msg}</p> 
                             <div className="flex  items-center bg-[#FEB33B] rounded-full w-[155px] h-12 justify-center">
                                               <button type="submit" className="rounded-full bg-green-900 px-5 my-6 text-white py-[10] mt-[26]">Send Message</button>
                                           </div>
                        </div>
                    </form>
        </div>
    )
}

export default ContactForm;