import React from "react";

const Name = () => {
  return (
    <div className="w-full h-1/5 flex flex-col justify-center sm:bg-zinc-100 sm:h-1/6">
      <div className="flex p-4 gap-4">
        <div className="sm:flex sm:flex-col sm:justify-center">
          <img
            className="rounded-full min-h-12 min-w-12"
            src="https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
          />
        </div>
        <div className="felx flex-col justify-end sm:w-full">
          <h1 className="text-3xl sm:text-lg font-bold">Hi Mike,</h1>
          <p className="text-xs">welcome back!</p>
        </div>
      </div>
    </div>
  );
};

export default Name;
