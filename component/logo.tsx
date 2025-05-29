import Image from "next/image";

const Logo = () => {
    return ( 
        <div className="flex items-center justify-center ">
            <Image
                src={"/logo.png"}
                alt="Benoit Mbole Ateba"
                width={50}
                height={50}
            />
            <span className="text-2xl font-semibold text-white">Benoit</span>
            <span className="text-2xl font-semibold text-yellow-500"> .</span>
        </div>
     );
}
 
export default Logo;