const SelectedPlayers = ({ selectedPlayers, removePlayer, toggleAvailable }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        Selected Players ({selectedPlayers.length}/6)
      </h2>
      <div className="space-y-4">
        {selectedPlayers.map((p) => (
          <div 
            key={p.id} 
            className="card card-side bg-base-100 shadow flex justify-between items-center p-6"
          >
            <div className="flex gap-4 items-center">
              <img src={p.image} className="w-20 h-20 rounded" alt={p.name} />
              <div>
                <h3 className="font-bold">{p.name}</h3>
                <p>{p.role}</p>
                <p className="text-sm">💲 {p.price}</p>
              </div>
            </div>
            <button 
              className="btn btn-error btn-sm"
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