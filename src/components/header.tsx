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
    <div>
      <div className="p-4">
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
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div
        className={
          isOpen
            ? "fixed text-white left-0 h-full top-0 w-[70%] bg-[#43998e]"
            : "hidden"
        }
      >
        <img src="/logow.png" className="w-48 mt-10 pl-8" />
        <ul className="p-4 pt-20 uppercase text-xl">
          <li className="p-4 border-b border-gray-100 hover:text-[#f7e07d]">
            <a onClick={handleNav} href="/#hero">
              Home
            </a>
          </li>
          <li className="p-4 border-b border-gray-100 hover:text-[#f7e07d]">
            <a onClick={handleNav} href="/#magic">
              Die App
            </a>
          </li>
          <li className="p-4 border-b border-gray-100 hover:text-[#f7e07d]">
            {" "}
            <a onClick={handleNav} href="/#waitinglist">
              Probier es aus
            </a>
          </li>
          <li className="p-4 border-b border-gray-100 hover:text-[#f7e07d]">
            {" "}
            <a onClick={handleNav} href="/#team">
              Das Team
            </a>
          </li>
          <li className="p-4 border-b border-gray-100 hover:text-[#f7e07d]">
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
