import Top_Searched_component from "./Top-searched-component";

export default function Top_Subject_page_part() {
  return (
    <div>
      <div className="text-[24px] flex flex-col justify-between items-start p-8 max-w-[1440px] mx-auto mt-10 tracking-normal font-semibold">
        <div>Top-searched specialties</div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 p-8 max-w-[1440px] mx-auto">
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
  );
}
