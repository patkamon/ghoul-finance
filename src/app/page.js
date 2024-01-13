"use client";

import { ethers } from "ethers";
import poolContract from "@aave/core-v3/artifacts/contracts/interfaces/IPool.sol/IPool.json";
import Navbar from "./navbar";
import Downpbar from "./downbar";

export default function Home() {
  const usdcAddress = "0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8"; // mainnet usdc
  const ghoAddress = "0xc4bF5CbDaBE595361438F8c6a187bDc330539c60";
  const referralCode = "0";
  const userAddress = "0xF0A94EC0F27203C399e17d5533A77e00F9813450";
  const poolAddress = "0x6Ae43d3271ff6888e7Fc43Fd7321a503ff738951"; // mainnet address, for other addresses: https://docs.aave.com/developers/developing-on-aave/deployed-contract-instances

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  async function supply(e) {
    e.preventDefault();
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        poolAddress,
        poolContract.abi,
        signer
      );
      try {
        contract.supply(usdcAddress, "10000000", userAddress, referralCode);
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  }

  async function withdraw(e) {
    e.preventDefault();
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        poolAddress,
        poolContract.abi,
        signer
      );
      try {
        contract.withdraw(usdcAddress, "10000000", userAddress);
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  }

  async function borrow(e) {
    e.preventDefault();
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        poolAddress,
        poolContract.abi,
        signer
      );
      try {
        contract.borrow(ghoAddress, "10000000000000000", "2", "0", userAddress);
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  }

  return (
    <main className="bg-purple2 flex min-h-screen flex-col items-center overflow-hidden">
      <Navbar />

      <div className="bg-purple1 py-24  w-full top-10 fixed"></div>

      <div className="z-0 w-full flex flex-col top-24 items-center gap-5 mt-10">
        <div className="bg-white py-8  w-3/5  grid grid-cols-3 gap-4 rounded-xl">
          <div className="mx-auto w-full flex flex-col ml-10 -mb-4">
            <img src="ghoul.png" className="mx-auto -mt-8"></img>
            <div className="mx-auto -mt-4 font-medium">TIER: 1</div>
            <button className="bg-purple1 rounded-xl w-1/2 mx-auto text-white text-xl">
              UPGRADE
            </button>
          </div>

          <div className="flex flex-col space-y-4 col-span-2 justify-center">
            <div className="mx-auto text-2xl font-medium">
              STAKED: 102 BORROW: 40
            </div>
            <div
              id="myProgress"
              className="w-3/4 m-auto rounded-lg  flex bg-[#D9D9D9]"
            >
              <div id="myBar" className="bg-green h-8 w-[61%] rounded-lg"></div>
              <div className="ml-auto mr-2 mt-1">61%</div>
            </div>
            <div className="z-0 flex gap-4 justify-center">
              <button
                className="bg-purple2 hover:bg-blue-700 text-[#897E7E] font-bold py-2 px-4 rounded-xl"
                onClick={(e) => {
                  supply(e);
                }}
              >
                Supply
              </button>
              <button
                className="bg-purple2 hover:bg-blue-700 text-[#897E7E] font-bold py-2 px-4 rounded-xl"
                onClick={(e) => {
                  withdraw(e);
                }}
              >
                Withdraw
              </button>
              <button
                className="bg-purple2 hover:bg-blue-700 text-[#897E7E] font-bold py-2 px-4 rounded-xl"
                onClick={(e) => {
                  borrow(e);
                }}
              >
                Borrow
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white w-3/5 grid grid-cols-3 rounded-xl">
          <div className="bg-purple1 w-full py-1 rounded-l-xl flex ">
            <h1 className="text-white mx-auto text-xl"> Subscriptions</h1>
          </div>

          <div className="bg-white w-full py-1 flex ">
            <h1 className="t mx-auto text-xl"> Revenue</h1>
          </div>

          <div className="bg-purple1 w-full py-1 rounded-r-xl flex ">
            <h1 className="text-white mx-auto text-xl"> Setting</h1>
          </div>
        </div>
        <div className="bg-white w-3/5 flex pb-6 flex-col rounded-xl ">
          <div className="grid grid-cols-3">
            <div className="col-start-3 flex gap-2 justify-center py-4">
              <button className="bg-purple2 hover:bg-blue-700 text-[#897E7E] font-bold px-8 rounded-xl text-xl border-2 border-[#000]">
                +
              </button>
              <button className="bg-purple2 hover:bg-blue-700 text-[#897E7E] font-bold px-8 rounded-xl text-xl border-2 border-[#000]">
                -
              </button>
            </div>
          </div>

          <div className="border mx-16 rounded-xl flex flex-col mb-4">
            <div className="grid grid-cols-3 align-middle">
              <img src="ghoul.png" className=" w-40 h-40  mx-auto"></img>
              <div className="col-span-2  grid grid-cols-3 ">
                <div className="m-auto text-center">
                  NETFLIX<br></br>15$/month
                </div>
                <div className="m-auto text-center">
                  LATEST PAYMENT<br></br>1/1/2024
                </div>
                <div className="m-auto text-center">
                  NEXT PAYMENT<br></br>1/2/2024
                </div>
              </div>
            </div>
            <img
              src="dropdown.png"
              className="w-10 h-10 mx-auto z-0 -my-2 hover:translate-y-1"
            ></img>
          </div>

          <div className="border mx-16 rounded-xl flex flex-col mb-4 ">
            <div className="grid grid-cols-3 align-middle">
              <img src="ghoul.png" className=" w-40 h-40  mx-auto"></img>
              <div className="col-span-2  grid grid-cols-3 ">
                <div className="m-auto text-center">
                  NETFLIX<br></br>15$/month
                </div>
                <div className="m-auto text-center">
                  LATEST PAYMENT<br></br>1/1/2024
                </div>
                <div className="m-auto text-center">
                  NEXT PAYMENT<br></br>1/2/2024
                </div>
              </div>
            </div>
            <img
              src="dropdown.png"
              className="w-10 h-10 mx-auto z-0 -my-2 hover:translate-y-1"
            ></img>
          </div>

          <div className="border mx-16 rounded-xl flex flex-col mb-4 ">
            <div className="grid grid-cols-3 align-middle">
              <img src="ghoul.png" className=" w-40 h-40  mx-auto"></img>
              <div className="col-span-2  grid grid-cols-3 ">
                <div className="m-auto text-center">
                  NETFLIX<br></br>15$/month
                </div>
                <div className="m-auto text-center">
                  LATEST PAYMENT<br></br>1/1/2024
                </div>
                <div className="m-auto text-center">
                  NEXT PAYMENT<br></br>1/2/2024
                </div>
              </div>
            </div>
            <img
              src="dropdown.png"
              className="w-10 h-10 mx-auto z-0 -my-2 hover:translate-y-1"
            ></img>
          </div>
        </div>{" "}
      </div>
      <Downpbar />
    </main>
  );
}
