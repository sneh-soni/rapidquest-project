import React from "react";
import Name from "./Name";
import Balance from "./Balance";
import RecentTransactions from "./RecentTransactions";

const Profile = () => {
  return (
    <div className="absolute top-0 p-2 w-full h-screen sm:left-12 sm:w-[22.5%] sm:bg-zinc-100">
      <Name />
      <Balance />
      <RecentTransactions />
    </div>
  );
};

export default Profile;
