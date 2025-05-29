import Image from "next/image";
import DesignCategories from "./design-section";

interface contactscardsProps{
    Imagesrc:string;
    description:string;
}

const ContactCard =({Imagesrc,description}:contactscardsProps)=>{
    return(
        
        <div className="flex my-[10px] items-center text-gray-700 text-2xl font-sans ">
            <Image
            src={Imagesrc}
            alt={`${Imagesrc} icon`}
            width={50}
            height={50}
            className="rounded-full mr-[10px] bg-[#004d26]"
            />
            <p>{description}</p>
        </div>
    )
}


export default ContactCard;