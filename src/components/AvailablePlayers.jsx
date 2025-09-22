import PlayerCard from "./PlayerCard";

const AvailablePlayers = ({ players, choosePlayer }) => (
  
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      {players.map((p) => (
        <PlayerCard key={p.id} player={p} choosePlayer={choosePlayer} />
      ))}
    </div>
  
);

export default AvailablePlayers;