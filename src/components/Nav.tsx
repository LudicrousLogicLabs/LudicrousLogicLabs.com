import React from "react";
import useScrollPosition from "../hooks/useScroll";
const Nav: React.FC = () => {
    const scrollPosition = useScrollPosition();

    const navClasses = scrollPosition > 0 ? "bg-purple-600" : "bg-transparent";
    return (<nav className={`fixed w-full flex items-center justify-between flex-wrap ${navClasses} p-2 z-50`}>
    <div className="flex items-center flex-shrink-0 text-white mr-6">
       <img src="/images/logo.svg" className="fill-current h-16 w-16 mr-2" />
    </div>
    <div className="block lg:hidden">
      <button className="flex items-center px-3 py-2 border rounded text-purple-200 border-purple-400 hover:text-white hover:border-white">
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
  </nav>)
}

export default Nav; 