export default function Profile() {
  return (
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
  );
}
