import { useRouter } from "next/router";
import requests from "../utils/requests";

function Nav() {
  const router = useRouter();
  return (
    <nav className=" relative lg:px-20">
      <div className="flex sm:px-20 mt-8 ml-10 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide ">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className=" last:pr-24 cursor-pointer transition duration-100 transform hover:scale-105 hover:text-pink-500 active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className=" absolute top-0 right-0 bg-gradient-to-r from-white  to-[#ffffff00] h-10 w-1/12" />
    </nav>
  );
}

export default Nav;
