import PlayerCard from "./PlayerCard";

const AvailablePlayers = ({ players, choosePlayer }) => (
  <div className="">
    <h2 className="text-2xl font-bold mb-4 text-red-700">Available Players</h2>
    <div className="grid grid-cols-1 md:grid-cols-3">
      {players.map((p) => (
        <PlayerCard key={p.id} player={p} choosePlayer={choosePlayer} />
      ))}
    </div>
  </div>
);

export default AvailablePlayers;