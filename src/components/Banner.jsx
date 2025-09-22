const Banner = ({ addCoins }) => (
  <div className="hero bg-[url(/src/assets/bg-shadow.png)] bg-black text-white flex flex-col py-12 rounded-2xl">
    <img className="mb-6" src="./src/assets/banner-main.png" alt="banner" />
    <div className="text-center">
      <h1 className="text-5xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <p className="py-4 text-2xl">Beyond Boundaries Beyond Limits</p>
      <button onClick={addCoins} className="btn bg-lime-300 text-black">
        Claim Free Credit
      </button>
    </div>
  </div>
);

export default Banner;