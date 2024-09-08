import { MapPin, Search } from "lucide-react";
import { ComboboxDemo } from "./search_bar_shadcn";
import Link from "next/link";

export default function Home_Page_Search() {
  return (
    <div className="home-text-box bg-white border-black border-2 h-[75px] flex justify-start items-center pl-5 py-2 max-w-[900px] rounded mx-20">
      <div className="relative w-[40%]">
        {/* 
      <input
        placeholder="Subject, tutor, class..."
        className="tutor-location disabled:bg-gray-200 w-full h-[50px] border-r-2 border-gray-200 pl-10 ml-2 outline-none text-[17px] pr-3"
      /> */}
        <Search className="absolute top-1/2 transform -translate-y-1/2 text-gray-500" />
        <ComboboxDemo></ComboboxDemo>
      </div>
      <div className="relative w-[45%] ml-3">
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input
          placeholder="City, state, or zip code"
          className="tutor-location disabled:bg-gray-200 w-full h-[50px]  pl-10 ml-2 text-[17px] pr-3"
        />
      </div>
      <Link
        href="/tutor_search_page"
        className="search-button bg-black h-[75px] w-[8%] flex items-center justify-center rounded ml-auto"
      >
        <Search className="text-white h-[50%] w-[50%]" />
      </Link>
    </div>
  );
}
