"use client"

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ToggleText from "./toggleText";

interface ServiceCardProps {
    title: string;
    description: string;
    imageSrc: string;
    allText: string;
}
const ServiceCard = ({ title, description, imageSrc, allText}: ServiceCardProps) => {
    const [expanded, setExpanded] = useState(false);
    const [height, setHeight] = useState('10px'); // Hauteur fermée
    const contentRef = useRef<HTMLParagraphElement>(null);
    useEffect(() => {
        if (contentRef.current) {
            const fullHeight = contentRef.current.scrollHeight;
            setHeight(expanded ? `${fullHeight}px` : '110px');
        }
    }, [expanded]);
    return ( 
        <div
            className={` transition-all duration-500 ease-in-out rounded-xl flex flex-col  bg-stone-200 w-[380px] transform ${expanded ? 'h-[540px] translate-y-[-20px] ' : ' h-[370px] '}`}>
            <Image className="rounded-full relative my-[30px]  mx-[30px]"
                src={imageSrc}
                alt={allText}
                width={80}
                height={60} />
            <p className="font-bold text-[#3C3C3C] text-2xl mx-[20px] mb-[20px]">{title}</p>
            <p
                ref={contentRef}
                style={{ maxHeight: height }}
                className=" transition-all duration-500 ease-in-out mx-[20px] text-xl font-sans overflow-hidden  leading-relaxed ">{description}</p>
            <ToggleText expanded={expanded} onToggle={() => setExpanded(!expanded)} />

        </div>
     );
}
 
export default ServiceCard;