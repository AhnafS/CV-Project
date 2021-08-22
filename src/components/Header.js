import React from 'react';
import cvIcon from "../assets/curriculum-vitae.png";

function Header(){
    return (
      <header className="flex object-contain h-20 justify-center content-center items-center text-3xl border-b-4 py-14 bg-gray-200">
        <img src={cvIcon} className="h-20 m-r-20 mr-4"></img>
        <h1>CV Creator</h1>
      </header>
    );
}

export default Header;