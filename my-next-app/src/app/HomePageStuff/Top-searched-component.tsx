import React, { FC } from "react";

interface ImageProps {
  Image_src: string;
  Image_name: string;
}

const Top_Searched_component: FC<ImageProps> = ({ Image_src, Image_name }) => {
  return (
    <div className="flex items-center flex-col justify-center bg-[#fff0bb] rounded-[4px] border border-[rgba(58,47,31,0.1)] transition-shadow duration-100 pt-[23px] pb-[13px] h-[200px]">
      <img src={Image_src} alt={"img"} className="h-24" />
      <span>{Image_name}</span>
    </div>
  );
};
export default Top_Searched_component;
