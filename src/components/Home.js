import React from "react";

function Home(props) {
  return (
    <div className="border-b border-slate-200 border-b-solid flex justify-between items-center px-10">
      <img
        className="w-56  h-56"
				alt="iphone"
        src="https://lh3.googleusercontent.com/spp/AE_ITi1UoKdR2VFO-9mk1MJiH_e90d61_3xl5-Aslh8Zc2hjC1jrVpbN7FRxEjFcxrIBQ7KQEkHO1Dg67qMxXbbu36ITjmZcxJbQ03fINm1oJCy4X6Z0HeC9TQE-ZxyFLmMq-qvmNhaKPoQUtZTy6WOXdHufWa6OZ9qWgI32qFbTh8fs-AF9RbhZYzpJu1J44tpMXydytggp=s512-rw-pd-pc0x00ffffff"
      />
      <div className="">
        Iphone 15 <br /> 1,50,000/-
      </div>
      <button
        className="border border-solid border-slate-300 rounded-md p-5 hover:bg-slate-300"
        onClick={() =>
          props.addToCartHandler({ name: "iphon15", price: "150000" })
        }
      >
        Add to cart
      </button>
      <button
        className="border border-solid border-slate-300 rounded-md p-5 hover:bg-slate-300"
        onClick={() =>
          props.removeFromCartHandler()
        }
      >
        Remove from cart
      </button>
    </div>
  );
}

export default Home;
