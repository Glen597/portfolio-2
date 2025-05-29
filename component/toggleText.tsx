'use client'

import React from 'react';


interface ToggleProps{
  expanded: boolean;
  onToggle: ()=> void
}

  const ToggleText: React.FC<ToggleProps>= ({expanded, onToggle}) =>{
  
    return(
        <div>
            <button className={`text-[#485E4C] font-bold text-xl flex ml-[20px] mt-[20px] ${expanded ? "text-green-700 pb-[10px]" : "text-[#485E4C]"}`}
onClick ={onToggle}>{expanded ? "Learn less" : "Learn more"} </button>
        </div>
    )
  }
  export default ToggleText;