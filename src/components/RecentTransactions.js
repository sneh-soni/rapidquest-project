import React from "react";

const RecentTransactions = () => {
  return (
    <div className="mt-6 h-1/5">
      <div className="bg-zinc-100 rounded-xl h-full p-4">
        <div className="font-semibold sm:text-xs">Recent Transactions</div>
        <div className="my-2 py-4 flex flex-col sm:m-0 gap-1">
          <p className="text-xs text-zinc-500">2020-08-07</p>
          <p className="text-xs underline underline-offset-8">
            Withdrawl Transfer to Bank-XX11
          </p>
        </div>
        <div className="my-2 py-4 flex flex-col sm:m-0 gap-1 hidden sm:block">
          <p className="text-xs text-zinc-500">2020-08-07</p>
          <p className="text-xs underline underline-offset-8">
            Withdrawl Transfer to Bank-XX11
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
