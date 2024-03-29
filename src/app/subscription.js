import { useState } from "react";
import Transaction from "./transaction";
import Pay from "./pay";

export default function Subscription(props) {
  const [click, setClick] = useState(false);

  return (
    <div className="bg-white w-3/5 flex pb-6 flex-col rounded-xl">
      <div className="grid grid-cols-3">
        <div className="col-start-3 flex gap-2 justify-center py-4">
          <button
            onClick={() => {
              props.setBlur(true);
            }}
            className="bg-purple2 text-[#897E7E] font-bold px-8 rounded-xl text-xl hover:bg-blue"
          >
            +
          </button>
          <button className="bg-purple2 text-[#897E7E] font-bold px-8 rounded-xl text-xl hover:bg-blue">
            -
          </button>
        </div>
      </div>

      <div className="border mx-16 rounded-xl flex flex-col mb-4">
        <div className="grid grid-cols-3 align-middle">
          <img src="netflix.png" className=" w-40 h-40 pt-4 mx-auto"></img>
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
        <div className="animate-bounce">
          <img
            src="dropdown.png"
            className={`w-10 h-10 mx-auto z-0 -my-2 hover:cursor-pointer ${
              click ? "rotate-180" : "animate-bounce"
            } `}
            onClick={() => setClick(!click)}
          ></img>
        </div>

        <div className={click ? "" : "hidden"}>
          <Transaction />
          <Transaction />
          <Transaction />
          <Pay />
        </div>
      </div>

      <div className="border mx-16 rounded-xl flex flex-col mb-4 ">
        <div className="grid grid-cols-3 align-middle">
          <img src="youtube.webp" className="pt-4 w-40 h-40  mx-auto"></img>
          <div className="col-span-2  grid grid-cols-3 ">
            <div className="m-auto text-center">
              Youtube Premium<br></br>10$/month
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
          <img src="superfluid.png" className="pt-4 w-40 h-40  mx-auto"></img>
          <div className="col-span-2  grid grid-cols-3 ">
            <div className="m-auto text-center">
              Superfluid<br></br>10$/month
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
