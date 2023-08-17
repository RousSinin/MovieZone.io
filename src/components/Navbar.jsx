import React from "react";

const Navbar = () => {
  const menu = [
    { name: "Home" },
    { name: "New" },
    { name: "Movies" },
    { name: "TV Shows" },
    { name: "Populor" },
  ];
  return (
    <div className="w-[100%] h-[60px] bg-black flex items-center justify-between text-center">
      <h1 className="lg:ml-[30px] ml-[15px] text-white font-bold text-xl">
        Movie
        <span className="text-black bg-orange-500 w-[60px] h-[30px] text-xl">Zone</span>
      </h1>
      <ul className="lg:flex gap-[50px] md:hidden hidden text-white font-bold text-xl">
        {menu.map((res, index) => {
          return <li>{res.name}</li>;
        })}
      </ul>
      <div className="flex">
        <div className="flex  mr-[20px] items-center">
          <div className="lg:flex items-center mr-[50px] md:hidden hidden">
            <input
              placeholder="   Search for movies or TV shows"
              type="text"
              className="border-[2px] py-[2px]  border-black rounded-[10px] placeholder:text-black outline-none w-[310px]"
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-[-30px] text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <button className="text-black w-[80px] lg:ml-[10px] lg:hidden block h-[27px] bg-slate-100 rounded-[5px] pr-[20px]">
            Search
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-[60px] mt-[-19px] text-black pt-[-10px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>

          <div className="flex gap-3 mr-5 items-center">
            <button className="w-[60px] h-[27px] bg-slate-100 rounded-[5px] ml-[15px]">
              Sign In
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
