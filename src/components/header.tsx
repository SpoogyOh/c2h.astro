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

  return (
    <div className="fixed text-white left-0 h-full top-0 w-[70%] bg-[#43998e]">
      <img src="/logow.png" className="w-48 mt-10 pl-8" />
      <ul className="p-4 pt-20 uppercase text-xl">
        <li className="p-4 border-b border-gray-100" >Home</li>
        <li className="p-4 border-b border-gray-100">So funktoniert es</li>
        <li className="p-4 border-b border-gray-100">Probier es aus</li>
        <li className="p-4 border-b border-gray-100">Das Team</li>
        <li className="p-4 border-b border-gray-100">Kontakt</li>
      </ul>
    </div>
  );
};
