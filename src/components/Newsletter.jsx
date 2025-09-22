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
    <div className="hero bg-base-200 mt-10">
      <div className="hero-content flex-col text-center">
        {savedEmail ? (
          <h3 className="text-xl">Welcome back, {savedEmail} 🎉</h3>
        ) : (
          <>
            <h3 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h3>
            <div className="join">
              <input 
                type="email" 
                placeholder="Enter your email" 
                onChange={(e)=>setEmail(e.target.value)}
                className="input input-bordered join-item w-72"
              />
              <button onClick={subscribe} className="btn btn-primary join-item">
                Subscribe
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Newsletter;