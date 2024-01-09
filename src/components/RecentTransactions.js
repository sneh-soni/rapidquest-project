import React from "react";

const RecentTransactions = () => {
  return (
    <div className="mt-6 h-[35%] sm:h-[28%]">
      <div className="bg-zinc-100 rounded-xl h-full p-4 sm:overflow-hidden ">
        <div className="font-semibold sm:text-xs">Recent Transactions</div>
        <div className="py-2 flex flex-col sm:m-0 gap-1">
          <p className="text-xs text-zinc-500">2020-08-07</p>
          <p className="hover:cursor-pointer text-xs underline underline-offset-2">
            Withdrawl Transfer to Bank-XX11
          </p>
        </div>
        <div className=" py-2 flex flex-col sm:m-0 gap-1">
          <p className="text-xs text-zinc-500">2020-08-07</p>
          <p className="hover:cursor-pointer  text-xs underline underline-offset-2">
            Withdrawl Transfer to Bank-XX11
          </p>
        </div>
        <div className=" py-2 flex flex-col sm:m-0 gap-1">
          <p className="text-xs text-zinc-500">2020-08-07</p>
          <p className="hover:cursor-pointer  text-xs underline underline-offset-2">
            Withdrawl Transfer to Bank-XX11
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
