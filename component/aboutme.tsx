import Image from "next/image"

export default function AboutMe() {
    return (
        <div className=" text-white py-[8rem] px-4 md:px-8">
            {/* Conteneur principal pour la section "About Me" */}
            <div className="max-w-6xl mx-auto">
                {/* Grille pour séparer l'image de profil et le contenu */}
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[8rem] gap-8 items-center">
                    
                    {/* Image de profil */}
                    <div className="flex justify-center">
                        <div className="rounded-full bg-[#f5a623] flex items-center justify-center overflow-hidden">
                            <Image
                                src="/developerServices.png"
                                alt="Profile"
                                className="object-cover w-[350px] h-[350px] md:w-[768px] md:h-[500px]"
                                width={600}
                                height={500}
                                priority
                            />
                        </div>
                    </div>

                    {/* Contenu textuel */}
                    <div className="space-y-8">
                        {/* Section "About Me" */}
                        <div className="space-y-4">
                            {/* Titre de la section */}
                            <div className="flex items-center gap-2">
                                <span className="w-6 h-0.5 bg-[#f5a623]"></span>
                                <h2 className="text-xl">About Me</h2>
                            </div>

                            {/* Titre principal avec le nom */}
                            <h1 className="text-3xl md:text-[2.6rem] font-bold">
                                Who is <span className="text-[#f5a623] font-thin italic whitespace-nowrap">Benoit Mbole Ateba?</span>
                            </h1>

                            {/* Paragraphe descriptif */}
                            <p className="text-gray-200">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua.
                            </p>
                        </div>

                        {/* Section des statistiques */}
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <h3 className="text-3xl md:text-4xl font-bold text-[#f5a623]">8+</h3>
                                <p className="text-sm md:text-base">Project Completed</p>
                            </div>
                            <div>
                                <h3 className="text-3xl md:text-4xl font-bold text-[#f5a623]">3+</h3>
                                <p className="text-sm md:text-base">Industry Covered</p>
                            </div>
                            <div>
                                <h3 className="text-3xl md:text-4xl font-bold text-[#f5a623]">2+</h3>
                                <p className="text-sm md:text-base">Years of Experience</p>
                            </div>
                        </div>

                        {/* Bouton pour télécharger le CV */}
                        <div className="flex flex-wrap items-center gap-4 mt-8">
                            {/* Conteneur du bouton avec l'arrière-plan jaune */}
                            <div className="flex items-center bg-[#FEB33B] rounded-full w-[11rem] h-12 ">
                                {/* Bouton vert pour télécharger le CV */}
                                <button className="rounded-full bg-green-900 px-3 my-6 text-white py-[10] ml-[2] mt-[26]">Download CV</button>
                                {/* Div blanche contenant l'icône de flèche */}
                                <a className="bg-white rounded-full ml-[9] ">
                                    <Image
                                        src="/arrow.svg"
                                        alt="Play button"
                                        width={35}
                                        height={10}
                                    />
                                </a>
                            </div>
                            {/* Nom stylisé sous le bouton */}
                            <div className="m">
                                <span className="text-[#f5a623] italic text-2xl font-script">Benoit Mbole Ateba</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}