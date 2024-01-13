export default function Subscription() {
  return (
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
          className="w-10 h-10 mx-auto z-0 -my-2 animate-bounce hover:cursor-pointer"
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
          className="w-10 h-10 mx-auto z-0 -my-2 animate-bounce hover:cursor-pointer"
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
          className="w-10 h-10 mx-auto z-0 -my-2 animate-bounce hover:cursor-pointer"
        ></img>
      </div>
    </div>
  );
}
