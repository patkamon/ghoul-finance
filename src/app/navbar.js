import { ConnectKitButton } from "connectkit";
import Connectkit from "./connectkit";

export default function Navbar() {
  return (
    <div className="bg-purple1 fixed top-0 z-10 flex py-2 justify-between w-full border">
      <div className="text-white"> Ghoul</div>
      <h1>
        <Connectkit />
      </h1>
      <ConnectKitButton />
    </div>
  );
}
