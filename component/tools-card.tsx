import Image from "next/image";


interface ToolsCardProps{
    imageSrc: string;
    Text: string;
    className: string;
}

const ToolsCard = ({imageSrc, Text, className = ""}: ToolsCardProps) =>{
    return(
        <div className="flex flex-col gap-10 font-bold text-3xl bg-[#F6F6F6] rounded-full h-70 w-50 justify-center items-center">
<Image 
src={imageSrc}
alt="Tools Image"
width={100}
height={70}
className={`rounded-full ${className}`}
/>
<p>{Text}</p>
        </div>
    )
}

export default ToolsCard