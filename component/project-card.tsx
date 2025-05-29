import Image from "next/image";

interface ProjectCardProps {
    imageSrc: string;
    Description: string;
    className: string;
    tools_1: string
    tools_2: string
    tools_3: string
    tools_4: string
}

const ProjectCard = ({ imageSrc, Description, className = "", tools_1, tools_2, tools_3, tools_4 }: ProjectCardProps) => {
    return (
        <div className="bg-white h-190 w-200 px-[10px] py-[10px] flex flex-col rounded-[40px]">
            <div className="flex items-center justify-center">
                <Image
                    src={imageSrc}
                    alt={`${imageSrc} icon`}
                    width={600}
                    height={600}
                    className={className}
                />
            </div>
            <div className="flex gap-10 my-[15px] font-bold  font-sans">
                <div className="bg-[#FEB33B] w-[100px] h-[40px] flex justify-center items-center rounded-[50px]">{tools_1}</div>
                <div className="bg-[#FEB33B] w-[100px] h-[40px] flex justify-center items-center rounded-[50px]">{tools_2}</div>
                <div className="bg-[#FEB33B] w-[120px] h-[40px] flex justify-center items-center rounded-[50px]">{tools_3}</div>
                <div className="bg-[#FEB33B] w-[110px] h-[40px] flex justify-center items-center rounded-[50px]">{tools_4}</div>
            </div>

            <div>

            </div>
            <div className="flex items-center justify-around">
                <p className="font-bold text-sans text-2xl w-100">{Description}</p>
                <button>
                    <Image
                        src="/arrow.svg"
                        alt="arrow image"
                        height={50}
                        width={50}
                        className="mx-[20px] bg-[#2D3F40] rounded-full"
                    />
                </button>
            </div>

        </div>
    )
}

export default ProjectCard;