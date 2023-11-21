import React from "react";
import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <p className="flex flex-row items-center my-[5px] cursor-pointer mt-[5px]">
                        <RxLinkedinLogo />
                        <span className="text-[22.5] ml-[6px]">Linkedin</span>    
                    </p>
                    <p className="flex flex-row items-center my-[5px] cursor-pointer mb-[10px]">
                        <RxGithubLogo />
                        <span className="text-[22.5] ml-[6px]" >GitHub</span>    
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Santino Dev 2023 Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer