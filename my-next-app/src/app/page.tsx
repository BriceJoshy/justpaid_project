import "./globals.css";
import NavBar from "./HomePageStuff/navbar";
import Home_Page_Search from "./HomePageStuff/HomePage-Search";
import Top_Subject_page_part from "./HomePageStuff/Top-Sub-page_part";
import Top_Searched_component from "./HomePageStuff/Top-searched-component";
// import TutorList from "./tutor_search_page/test";

export default function Home() {
  return (
    // <TutorList />
    <div className="font-poppins font-medium">
      <div className="bg-[#ecfeff] h-[500px]">
        <NavBar />
        <div className="TitlePosition text-[47px] flex justify-between items-center p-8 max-w-[1440px] mx-auto mt-12 tracking-tight">
          <div className="titleText w-[460px] leading-tight">
            Book local tutors who fit your needs
          </div>
        </div>
        <Home_Page_Search />
      </div>
      <Top_Subject_page_part />
      <div className="text-[47px] flex flex-col items-center justify-center   mt-12 tracking-tight w-full bg-[#ecfeff] ">
        <div className="tutor-need-box text-2xl leading-relaxed font-semibold mt-20">
          Get matched with a tutor who truly gets you.
        </div>
        <div className="tutor-match-box flex flex-row justify-between items-center p-8 max-w-[1440px] mx-auto mt-14 tracking-tight">
          <Top_Searched_component
            Image_src="/images/calculator.png"
            Image_name="Mathematics"
          />
          <Top_Searched_component
            Image_src="/images/calculator.png"
            Image_name="Mathematics"
          />
          <Top_Searched_component
            Image_src="/images/calculator.png"
            Image_name="Mathematics"
          />
        </div>
      </div>
    </div>
  );
}
