const PlayerCard = ({ player, choosePlayer }) => {
  return (
    <div className="card bg-amber-50  shadow-sm p-4">
      <figure><img className="border-2 border-lime-100 rounded-2xl w-full h-80" src={player.image} alt={player.name} /></figure>
      <div className="card-body">
       
       <div className="flex gap-2">
         <img className="w-6" src="/src/assets/user.png" alt="User" />
        <h2 className="card-title text-2xl">{player.name}</h2>
       
       </div>

<div className="flex items-center text-lg text-gray-400 border-b-1 border-gray-200">
          <p>🏴󠁧󠁢󠁳󠁣󠁴󠁿 {player.country}
</p>
        <button className="btn mb-2"> {player.role}</button>

</div>
<p className="text-lg font-bold">Rating: {player.rating}</p>

<div className="flex gap-25">
          <p className="text-md font-bold">{player.battingStyle}</p>
        <p className="text-md font-bold text-gray-400">{player.bowlingStyle}</p>

</div>

<div className="flex items-center ">
          <p className="font-bold text-lg">Price: ${player.price}</p>
        <div className="card-actions justify-end">
          <button 
          // disabled=[isSelected]
            className="btn bg-white"
            onClick={() => choosePlayer(player)}
          >
                Choose Player
          </button>

</div>

        </div>
      </div>
    </div>
  );
};

export default PlayerCard;