import { ReactEventHandler, useState } from "react";
import DarkMode from "../dark-mode/dark-mode";

const Navbar = ({handleSidebarOpen} : {handleSidebarOpen: ReactEventHandler}) => {

    return (
        <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2">
            <div className="flex items-center space-x-2">
                <button 
                    type="button" 
                    className="text-3xl"
                    onClick={handleSidebarOpen}
                >
                <i className="bx bx-menu"></i>
                </button>
                <div>React Movie App</div>
            </div>

            <div>
                <input 
                    type="search" 
                    name="search" 
                    id="search" 
                    placeholder="Cerca.."
                />
            </div>

            <div>
                <DarkMode />
            </div>

        </header>
    )
}

export default Navbar;