interface InfoDetailsCardProps{
    date:string;
    University:string;
    Degree:string;
}

const InfoDetailsCard= ({date, University,Degree}:InfoDetailsCardProps )=>{
    return(
        <div>
             <div className="flex fle-row gap-[5px] justify-left items-center">
            <div className="h-30  bg-[#E1E1E1] w-[6px] rounded-lg"></div>
            <div className=" flex flex-col gap-4 pl-4">
             <p className="text-[#ADADAD] text-2xl">{date}</p>
            <p className="font-bold text-2xl">{University}</p>
            <p className="text-[#ADADAD] text-2xl"> {Degree}</p>
            </div>
        </div>
        </div>
    )
}

export default InfoDetailsCard;