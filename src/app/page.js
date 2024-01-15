"use client";

import { ethers } from "ethers";
import poolContract from "@aave/core-v3/artifacts/contracts/interfaces/IPool.sol/IPool.json";
import Navbar from "./navbar";
import Downpbar from "./downbar";
import Backdrop from "./backdrop";
import Profile from "./profile";
import Menu from "./menu";
import Subscription from "./subscription";
import { useState } from "react";
import Form from "./form";

export default function Home() {
  const usdcAddress = "0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8"; // mainnet usdc
  const ghoAddress = "0xc4bF5CbDaBE595361438F8c6a187bDc330539c60";
  const referralCode = "0";
  const userAddress = "0xF0A94EC0F27203C399e17d5533A77e00F9813450";
  const poolAddress = "0x6Ae43d3271ff6888e7Fc43Fd7321a503ff738951"; // mainnet address, for other addresses: https://docs.aave.com/developers/developing-on-aave/deployed-contract-instances

  const [overlay, setOverlay] = useState(false);
  const [slide, setSlide] = useState("");

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

  function blur(val) {
    setOverlay(val);
    if (val) {
      setSlide("-translate-y-full");
      setTimeout(() => {
        setSlide("");
      }, 50);
    }
  }

  return (
    <main
      className={`bg-purple2 flex min-h-screen flex-col items-center overflow-hidden `}
    >
      <Navbar />

      <Backdrop />

      {overlay ? <Form setBlur={blur} blur={slide}></Form> : <></>}

      <div
        className={`z-0 w-full flex flex-col top-24 items-center gap-5 mt-20 ${
          overlay ? "blur-sm" : ""
        }`}
      >
        <Profile />
        <Menu />
        <Subscription setBlur={blur} />
      </div>
      <Downpbar />
    </main>
  );
}
