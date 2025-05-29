import Image from "next/image";
import InfoDetailsCard from "./info-details-card";

interface DetailsItems{
     date:string;
    University:string;
    Degree:string;
}

interface infoCardProps{
    imageSrc:string;
    className:string;
    title:string;
    details: DetailsItems[];
    
}

const InfoCard = ({imageSrc, className ="",title,details}: infoCardProps) =>{
    return(
        <div className="bg-[#F6F6F6] w-150 py-10 px-10 h-170 rounded-[30] mx-[100px]" >
            <div className="flex items-center gap-10 justify-left">
                <Image
           src={imageSrc}
            width={100}
            height={70}
            alt={`${title} icon`}
            className={`rounded-full ${className}`}
           />
           <p className="font-bold text-5xl "> {title}</p>
            </div>
           <div className="w-130 bg-[#E1E1E1] h-[3px] my-[20px]"></div>
            <div className="flex flex-col gap-10 ">
               {details.map((items, index)=>(
                <InfoDetailsCard
                  key={index}
               date={items.date}
               University={items.University}
               Degree={items.Degree}
            
                />
               ))}
             
         
            </div>
        
           

        </div>
    )
}


export default InfoCard;