"use client";

import { ethers } from "ethers";
import poolContract from "@aave/core-v3/artifacts/contracts/interfaces/IPool.sol/IPool.json";

export default function Home() {
  const usdcAddress = "0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8"; // mainnet usdc
  const referralCode = "0";
  const userAddress = "0xF0A94EC0F27203C399e17d5533A77e00F9813450";

  const poolAddress = "0x6Ae43d3271ff6888e7Fc43Fd7321a503ff738951"; // mainnet address, for other addresses: https://docs.aave.com/developers/developing-on-aave/deployed-contract-instances

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  async function getPool(e) {
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-yellow-400">Ghoul</div>
      <button
        onClick={(e) => {
          getPool(e);
        }}
      >
        Borrow
      </button>
    </main>
  );
}
