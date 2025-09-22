const PlayerCard = ({ player, choosePlayer }) => {
  return (
    <div className="card bg-base-100 w-40 shadow-xl">
      <figure><img className="border-2 w-[140px] h-[180]" src={player.image} alt={player.name} /></figure>
      <div className="card-body">
        <h2 className="card-title">{player.name}</h2>
        <p>🌐 {player.country}</p>
        <p>🎭 {player.role}</p>
        <p>Batting: {player.battingStyle}</p>
        <p>Bowling: {player.bowlingStyle}</p>
        <p className="font-bold">💲 {player.price}</p>
        <div className="card-actions justify-end">
          <button 
            className="btn btn-primary"
            onClick={() => choosePlayer(player)}
          >
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;