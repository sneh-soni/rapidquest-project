import React, { useState } from "react";
import Charts from "./Charts";

const Compare = () => {
  const [Age, SetAge] = useState("under 30");
  const [Salary, SetSalary] = useState("20K-30K");
  const [Gender, SetGender] = useState("Male");
  const [isAgesVisible, setIsAgesVisible] = useState(false);
  const [isSalaryVisible, setIsSalaryVisible] = useState(false);
  const [isGenderVisible, setIsGenderVisible] = useState(false);

  return (
    <div className="relative sm:-top-6 p-2 h-fit pb-0 -top-4">
      <div className="font-bold text-lg sm:text-sm">
        How do I Compare to my Peers?
      </div>
      <div className="text-[0.65rem] sm:text-xs text-zinc-500 ">
        These numbers represents current goal achievement
      </div>
      <div className="sm:flex h-fit">
        <div className="my-2 flex flex-col h-fit gap-2 sm:w-2/5">
          <div
            className="flex gap-2 font-semibold"
            onClick={() =>
              isAgesVisible ? setIsAgesVisible(false) : setIsAgesVisible(true)
            }
          >
            Age:
            <span className="hover:cursor-pointer font-sans sm:text-sm lg:text-base">
              {Age}
            </span>
            <svg
              className="mt-2 hover:cursor-pointer"
              viewBox="0 0 48 48"
              height="12"
              width="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#000000"
                d="M0 12.438h48L24 35.562z"
                class="fill-241f20"
              ></path>
            </svg>
          </div>
          {isAgesVisible ? (
            <div className="relative font-sans z-10 bg-zinc-50 ">
              <button
                className="w-full hover:bg-zinc-100 py-2"
                onClick={() => {
                  SetAge("under 20");
                  setIsAgesVisible(false);
                }}
              >
                under 20
              </button>
              <button
                className="w-full hover:bg-zinc-100 py-2"
                onClick={() => {
                  SetAge("under 30");
                  setIsAgesVisible(false);
                }}
              >
                under 30
              </button>
              <button
                className="w-full hover:bg-zinc-100 py-2"
                onClick={() => {
                  SetAge("under 40");
                  setIsAgesVisible(false);
                }}
              >
                under 40
              </button>
              <button
                className="w-full hover:bg-zinc-100 py-2"
                onClick={() => {
                  SetAge(">40");
                  setIsAgesVisible(false);
                }}
              >
                {">"}40
              </button>
            </div>
          ) : (
            <></>
          )}
          <div
            className="flex gap-2 font-semibold"
            onClick={() =>
              isSalaryVisible
                ? setIsSalaryVisible(false)
                : setIsSalaryVisible(true)
            }
          >
            Salary:
            <span className="hover:cursor-pointer font-sans sm:text-sm lg:text-base">
              {Salary}
            </span>
            <svg
              className="mt-2 hover:cursor-pointer"
              viewBox="0 0 48 48"
              height="12"
              width="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#000000"
                d="M0 12.438h48L24 35.562z"
                class="fill-241f20"
              ></path>
            </svg>
          </div>
          {isSalaryVisible ? (
            <div className="relative z-10 font-sans bg-zinc-50">
              <button
                className="w-full hover:bg-zinc-100 py-2"
                onClick={() => {
                  SetSalary("10K-20K");
                  setIsSalaryVisible(false);
                }}
              >
                10K-20K
              </button>
              <button
                className="w-full hover:bg-zinc-100 py-2"
                onClick={() => {
                  SetSalary("20K-30K");
                  setIsSalaryVisible(false);
                }}
              >
                20K-30K
              </button>
              <button
                className="w-full hover:bg-zinc-100 py-2"
                onClick={() => {
                  SetSalary("30K-40K");
                  setIsSalaryVisible(false);
                }}
              >
                30K-40K
              </button>
            </div>
          ) : (
            <></>
          )}
          <div
            className="flex gap-2 font-semibold"
            onClick={() =>
              isGenderVisible
                ? setIsGenderVisible(false)
                : setIsGenderVisible(true)
            }
          >
            Gender:
            <span className="hover:cursor-pointer font-sans sm:text-sm lg:text-base">
              {Gender}
            </span>
            <svg
              className="mt-2 hover:cursor-pointer"
              viewBox="0 0 48 48"
              height="12"
              width="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#000000"
                d="M0 12.438h48L24 35.562z"
                class="fill-241f20"
              ></path>
            </svg>
          </div>
          {isGenderVisible ? (
            <div className="relative z-10 font-sans bg-zinc-50 ">
              <button
                className="w-full hover:bg-zinc-100 py-2"
                onClick={() => {
                  SetGender("Male");
                  setIsGenderVisible(false);
                }}
              >
                Male
              </button>
              <button
                className="w-full hover:bg-zinc-100 py-2"
                onClick={() => {
                  SetGender("Female");
                  setIsGenderVisible(false);
                }}
              >
                Female
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
        <Charts />
      </div>
    </div>
  );
};

export default Compare;
