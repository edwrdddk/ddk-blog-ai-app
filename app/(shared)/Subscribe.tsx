import React from "react";

const Subscribe = () => {
  return (
    <div className="text-center bg-wh-10 px-5 py-10">
      <h4 className="font-semibold text-base">Subscribe to out Newsletter</h4>
      <p className="text-wh-500 my-3 w-5/6 mx-auto">
        Enter your email adress to get latest news and updates.
      </p>
      <input
        className="text-center w-5/6 min-w-[100px] px-5 py-2 border-2"
        placeholder="Enter email adress"
      />
      <button>SUBSCRIBE</button>
    </div>
  );
};

export default Subscribe;
