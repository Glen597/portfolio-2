import InfoCard from "./info-Card";
import { cardsData } from "@/app/lib/cardsData";


const Education = ()=>{
    return(
        <div className="flex flex-col gap-20">
            <div>
                  <div className=" flex flex-col justify-center items-center mt-30 gap-3">
            <div className="flex items-center text-3xl mb-5 ">
                <div className="w-3 h-0.5 bg-[#f5a623] mr-2"></div>
                <p>Education & Work</p>
                </div>
                <p className="italic   text-5xl">My <span className="text-[#f5a623]">Academic and</span> </p>
                <p className=" text-5xl"><span className=" text-[#f5a623] italic">Professional</span> <span className="font-bold">Journey</span></p>
           </div>
            </div>
            <div className="flex fle-row items-center justify-center">
                {cardsData.map((card, index)=>(
                    <InfoCard
                    key={index}
                    imageSrc={card.imageSrc}
                    className=""
                    title={card.title}
                    details={card.details}
                    />
                ))}

            </div>

        </div>
    )
}
export default Education;