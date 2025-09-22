const SelectedPlayers = ({ selectedPlayers, removePlayer, toggleAvailable }) => {
  return (
    <div className="p-6">
      <div className="space-y-4">
        {selectedPlayers.map((p) => (
          <div 
            key={p.id} 
            className="card card-side bg-amber-50 shadow flex justify-between items-center p-6"
          >
            <div className="flex gap-4 items-center">
              <img src={p.image} className="w-20 h-20 rounded" alt={p.name} />
              <div>
                <h3 className="text-3xl font-bold">{p.name}</h3>
                <h4 className="text-gray-400">{p.battingStyle}</h4>
              </div>
            </div>
            <button 
              className="btn  btn-md"
              onClick={() => removePlayer(p)}
            >
              ❌ Remove
            </button>
          </div>
        ))}
      </div>
      <button onClick={toggleAvailable} className="btn btn-accent mt-4">
        ➕ Add More Player
      </button>
    </div>
  );
};

export default SelectedPlayers;