import { useState } from "react";

const links = [
  { href: "/#hero", label: "Home" },
  { href: "/#magic", label: "So funktoniert es" },
  { href: "/#waitinglist", label: "Probier es aus" },
  { href: "/#team", label: "Team" },
  { href: "/#footer", label: "Kontakt" },
];

export const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-row items-center">
       <a href="https://ea418805fd79c84b.gradio.app/" className="hover:text-[#fbf8be] border-[#fbf8be] border-2 rounded-lg px-4 py-2 ">Demo</a>
      <div className="my-2 px-2">
        <button onClick={handleNav}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.75"
            stroke="currentColor"
            className="h-8 hover:text-[#f7e07d]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div
        className={
          isOpen
            ? "fixed text-white left-0 h-full top-0 w-[70%] bg-[#234e70]"
            : "hidden"
        }
      >
        <img src="/logow.png" className="w-48 mt-10 pl-8" />
        <ul className="p-4 pt-20 uppercase text-xl">
          <li className="p-4 border-b border-gray-100 hover:text-[#fbf8be]">
            <a onClick={handleNav} href="/#hero">
              Home
            </a>
          </li>
          <li className="p-4 border-b border-gray-100 hover:text-[#fbf8be]">
            <a onClick={handleNav} href="/#magic">
              Die App
            </a>
          </li>
          <li className="p-4 border-b border-gray-100 hover:text-[#fbf8be]">
            {" "}
            <a onClick={handleNav} href="/#waitinglist">
              Probier es aus
            </a>
          </li>
          <li className="p-4 border-b border-gray-100 hover:text-[#fbf8be]">
            {" "}
            <a onClick={handleNav} href="/#team">
              Das Team
            </a>
          </li>
          <li className="p-4 border-b border-gray-100 hover:text-[#fbf8be]">
            {" "}
            <a onClick={handleNav} href="/#footer">
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
