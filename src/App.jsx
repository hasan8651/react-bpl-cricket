import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import AvailablePlayers from "./components/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import playersData from "../public/players.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [coins, setCoins] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [showSelected, setShowSelected] = useState(false);

  const addCoins = () => {
    setCoins(coins + 5000000);
    toast.success("Credit Added!");
  };

  const choosePlayer = (player) => {
    if(selectedPlayers.find(p => p.id === player.id)){
      toast.error("Player already selected!");
      return;
    }
    if(selectedPlayers.length >= 6){
      toast.error("You can select max 6 players!");
      return;
    }
    if(coins < player.price){
      toast.error("Not enough coins!");
      return;
    }
    setSelectedPlayers([...selectedPlayers, player]);
    setCoins(coins - player.price);
    toast.success(`${player.name} Selected!`);
  };

  const removePlayer = (player) => {
    setSelectedPlayers(selectedPlayers.filter(p => p.id !== player.id));
    setCoins(coins + player.price);
    toast.info(`${player.name} removed`);
  };

  return (
    <>
      <Navbar coins={coins} />
      <Banner addCoins={addCoins} />



 <div className="max-w-7xl mx-auto flex justify-between items-center mb-4">
          <h1 className="font-bold text-2xl">{
            showSelected===false?"Available Players":`Selected Player (${selectedPlayers.length}/6)`
            }</h1>



      <div className="flex justify-end">
        <button className={`  px-10 border-1 border-gray-400 rounded-l-2xl border-r-0 ${
          showSelected ? "btn ":"bg-[#E7FE29] "}`} onClick={()=>setShowSelected(false)}>Available</button>
        <button className={` px-8 border-1 border-gray-400 rounded-r-2xl border-l-0 ${
          !showSelected ? "btn":"bg-[#E7FE29] "}`} onClick={()=>setShowSelected(true)}>
          Selected ({selectedPlayers.length})
        </button>

          

      </div>
     </div>

      {showSelected ? (
        <SelectedPlayers 
          selectedPlayers={selectedPlayers}
          removePlayer={removePlayer}
          toggleAvailable={()=>setShowSelected(false)} 
        />
      ) : (
        <AvailablePlayers 
          players={playersData} 
          choosePlayer={choosePlayer} 
        />
      )}

      <Newsletter />
      <Footer />
      <ToastContainer position="top-center" />
    </>
  );
};

export default App;