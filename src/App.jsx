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

   
    

      <div className="gap-1 flex justify-end">
        <button className={`btn ${!showSelected && "btn-active"}`} onClick={()=>setShowSelected(false)}>Available</button>
        <button className={`btn ${showSelected && "btn-active"}`} onClick={()=>setShowSelected(true)}>
          Selected ({selectedPlayers.length})
        </button>
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