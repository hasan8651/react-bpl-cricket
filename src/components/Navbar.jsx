import React from "react";

const Navbar = ({ coins }) => {
  return (
    <div className="max-w-7xl mx-auto  py-3 flex justify-around items-center">
      <div className="flex-1">
        <a className="text-xl font-bold flex items-center"> <img className="w-12" src="./src/assets/logo.png" alt="logo" /> Dream 11</a>
      </div>
      <div className="flex gap-3">
        <ul className="text-gray-400 text-md flex items-center gap-4 ">
          <a>Home</a>
          <a>Fixture</a>
          <a>Teams</a>
          <a>Schedules</a>
        </ul>
        <button className="btn ">
           {coins} Coin 💰
        </button>
      </div>
    </div>
  );
};

export default Navbar;