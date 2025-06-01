import ToolsCard from "./tools-card";

const Tools = () => {
  return (
    <div className="flex flex-col  gap-20">
      <div className=" flex flex-col justify-center items-center mt-30 gap-3">
        <div className="flex items-center text-3xl mb-5 ">
          <div className="w-3 h-0.5 bg-[#f5a623] mr-2"></div>
          <p>My Favorite Tools</p>
        </div>
        <p className="italic text text-[#f5a623]  text-5xl">
          Exploring The tools
        </p>
        <p className="font-bold text-5xl text-[#252525]">Behind My Code</p>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-between mx-20 gap-30">
        <ToolsCard imageSrc={"/react.svg"} Text={"60%"} className="" />
        <ToolsCard
          imageSrc={"/axios.svg"}
          Text={"98%"}
          className="my-10 scale-125"
        />
        <ToolsCard imageSrc={"/express.svg"} Text={"50%"} className="" />
        <ToolsCard imageSrc={"/nextjs.svg"} Text={"40%"} className="" />
        <ToolsCard imageSrc={"/vscode.svg"} Text={"98%"} className="" />
        <ToolsCard imageSrc={"/Web3.svg"} Text={"50%"} className="" />
      </div>
    </div>
  );
};

export default Tools;
