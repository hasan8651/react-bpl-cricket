import { useEffect, useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [savedEmail, setSavedEmail] = useState("");

  useEffect(() => {
    const userEmail = localStorage.getItem("email");
    if(userEmail) setSavedEmail(userEmail);
  }, []);

  const subscribe = () => {
    if(email.trim()){
      localStorage.setItem("email", email);
      setSavedEmail(email);
    }
  };

  return (
  <div className="max-w-6xl mx-auto bg-white/25 border-3 border-white rounded-2xl p-6 my-10 relative z-10 -mb-40">
      <div className="hero bg-[url(/src/assets/bg-shadow.png)] h-[280px] rounded-2xl">
      <div className="flex-col text-center">
        {savedEmail ? (
          <h3 className="text-4xl">Welcome back, {savedEmail} 🎉</h3>
        ) : (
          <>
            <p className="text-3xl font-bold mb-2">Subscribe to our Newsletter</p>
            <p className="text-xl font-semibold text-gray-400 mb-4">Get the latest updates and news right in your inbox!</p>
            <div className="join">
              <input 
                type="email" 
                placeholder="Enter your email" 
                onChange={(e)=>setEmail(e.target.value)}
                className="input input-bordered join-item w-120 h-15 text-2xl rounded-xl"
              />
              <button onClick={subscribe} className="btn w-40 h-15 text-xl font-semibold bg-gradient-to-r from-fuchsia-500 to-yellow-400 inset-shadow-sm inset-shadow-gray-200 ml-4 rounded-xl">
                Subscribe
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  </div>
  );
};

export default Newsletter;