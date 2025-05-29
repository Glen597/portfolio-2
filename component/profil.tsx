import Image from "next/image";
import Hello from "./hello";

const Profil = () => {
    return (
        <div className="mt-5 grid grid-cols-2 w-full gap-[2rem] justify-items-center items-center z-10">

            {/*greeting speech*/}
            <div className="flex flex-col ml-[3rem]">
                <div>
                    <Hello />
                    <p className="font-bold md:text-7xl text-3xl ">I&apos;m <span className="italic text-yellow-400 underline">Benoit Mbole Ateba,</span>
                        <br />Software Engeneer<br />Based in Germany </p>
                    <p className="mt-[3rem] text-muted-foreground">I&apos;m an entry level Software Engineer with 2+ Years experience in the field collaborating in various open source projects and building personal projects.</p>
                </div>

                <div className="flex items-center mt-[3rem]  ">
                    <div className="flex items-center bg-[#FEB33B] rounded-full w-[200] h-12 ">
                        <button className="rounded-full bg-green-900 px-3 my-6 text-white py-[10] ml-[2]">View My Portfolio</button>
                        <a className="bg-white rounded-full ml-[9] ">
                        <Image
                            src="/play-button.svg"
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

            {/*HProfil photo section*/}
            <div>
                <Image
                    src="/Profile.png"
                    alt="This is my profile photo"
                    width={700}
                    height={300}
                />
            </div>
        </div>
    )
}

export default Profil;