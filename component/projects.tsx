import Image from "next/image";
import ProjectCard from "./project-card";
import { ProjectsCardData } from "@/app/lib/projectsData";

const Projects = () => {
    return (
        <div className="mt-[100px] flex flex-col">
            <div className="flex  items-center ml-[117]">
                <div className="w-5 h-0.5 bg-yellow-500 mb-2"></div>
                <p className="ml-[2px]  text-2xl  font-sans  text-[#2A2A2A] ">My Portfolio</p>
            </div>
            <div className="ml-[130px] flex items-center justify-between ">
                <p className="text-6xl ">My Latest<span className="text-yellow-400 italic">  Projects</span></p>
                <div className="flex items-center mr-[130px]  ">
                    <div className="flex items-center bg-[#FEB33B] rounded-full w-[200] h-12 ">
                        <button className="rounded-full bg-green-900 px-3 my-6 text-white py-[10] ml-[2] mt-[26]">View All Projects</button>
                        <a className="bg-white rounded-full ml-[9] ">
                            <Image
                                src="/arrow.svg"
                                alt="Play button"
                                width={35}
                                height={10}
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="mx-[30px] my-[30px] flex gap-10 py-[20px] ">
                {ProjectsCardData.map((Projects, index) => (
                    <ProjectCard
                        key={index}
                        imageSrc={Projects.imageSrc}
                        Description={Projects.Description}
                        className={Projects.className}
                        tools_1={Projects.tools_1}
                        tools_2={Projects.tools_2}
                        tools_3={Projects.tools_3}
                        tools_4={Projects.tools_4}
                    />
                ))}
            </div>

        </div>
    )
}

export default Projects;