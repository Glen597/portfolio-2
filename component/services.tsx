'use client'
import Image from "next/image";
import ServiceCard from "./service-card";
import { Button } from "@/components/ui/button";
import {useRouter} from 'next/navigation'


const ServicesPage = () => {

  const router = useRouter();
  const handleClick = () =>{
    router.push('/services')
  }
    return (
        <div className="mt-[100px] flex flex-col">
            <div className="flex  items-center ml-[117]">
               <div className="w-5 h-0.5 bg-yellow-500 mb-2"></div>
                <p className="ml-[2px]  text-2xl  font-sans  text-[#2A2A2A] ">Services</p>
            </div>
            <div className="ml-[130px] flex items-center justify-between ">
                <p className="text-6xl "><span className="text-yellow-400 italic">Services</span> I Provide</p>
                <div className="flex items-center mr-[130px]  ">
                    <div className="flex items-center bg-[#FEB33B] rounded-full w-[200] h-12 ">
                        <button className="rounded-full bg-green-900 px-3 my-6 text-white py-[10] ml-[2] mt-[26]">View All Services</button>
                        <a className="bg-white rounded-full ml-[9] ">
                            <Image
                                src="/arrow.svg"
                                alt="Play button"
                                width={35}
                                height={10}
                            />
                        </a>
                    </div>
                    <div className="pl-5 ">
                        <button className=" border rounded-full border-solid border-green-900 px-[20] py-[10] text-green-900 font-medium ">Hire me</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-[160px] mx-[130px]">
               <ServiceCard 
                    title={"Web Developer"} 
                    description={"Building responsive and user-friendly websites using modern technologies."} 
                    imageSrc={"/web-developer.png"} 
                    allText={""}
                />   
                 <ServiceCard 
                    title={"Data Analyst"} 
                    description={"Analyzing data to provide insights and support decision-making."} 
                    imageSrc={"/Data-analyst.png"} 
                    allText={""}
                />   
                 <ServiceCard 
                    title={"Discord Bot Developer"} 
                    description={"Building custom Discord bots to enhance server functionality."} 
                    imageSrc={"/Bot-Discord.png"} 
                    allText={""}
                />   
                 <ServiceCard 
                    title={"Webscrapping"} 
                    description={"Working with webscrapping tools to extract data from websites."} 
                    imageSrc={"/Web-scraping.png"} 
                    allText={""}
                />   
            </div>
            <div className="flex justify-center mt-[100px] mb-[100px]">
                <Button className="bg-[#FEB33B] text-green-900 font-medium rounded-xl py-4 border hover:bg-white hover:border-yellow-500"
                onClick={handleClick}>See All Services</Button>
            </div>
        </div>

    );
}

export default ServicesPage;