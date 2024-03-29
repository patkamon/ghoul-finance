import { ethers } from "ethers";
import poolContract from "@aave/core-v3/artifacts/contracts/interfaces/IPool.sol/IPool.json";

export default function Pay() {
  const usdcAddress = "0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8"; // mainnet usdc
  const ghoAddress = "0xc4bF5CbDaBE595361438F8c6a187bDc330539c60";
  const referralCode = "0";
  const userAddress = "0xF0A94EC0F27203C399e17d5533A77e00F9813450";
  const poolAddress = "0x6Ae43d3271ff6888e7Fc43Fd7321a503ff738951"; // mainnet address, for other addresses: https://docs.aave.com/developers/developing-on-aave/deployed-contract-instances

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  async function withdraw(e, amount) {
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
        contract.withdraw(usdcAddress, amount, userAddress);
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  }

  async function borrow(e, amount) {
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
        contract.borrow(ghoAddress, amount, "2", "0", userAddress);
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  }

  async function repayDebt(e, amount) {
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
        contract.repay(ghoAddress, amount, "2", userAddress);
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  }

  async function repay(e) {
    e.preventDefault();
    // 1. find interest from starting money
    let amount = 0;
    // 2. withdraw that
    withdraw(e, amount);
    // 3. swap to target asset
    // swap()
    // 3. repay using that
    repayDebt(e, amount);
    // borrow
    borrow(e, amount);
    // send
    send();
  }

  return (
    <div className="flex">
      <button
        className="m-auto bg-green px-8 rounded py-2 mb-2 hover:bg-blue"
        onClick={(e) => repay(e)}
      >
        REPAY
      </button>
    </div>
  );
}
