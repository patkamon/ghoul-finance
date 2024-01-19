"use client";

import Navbar from "./navbar";
import Downpbar from "./downbar";
import Backdrop from "./backdrop";
import Profile from "./profile";
import Menu from "./menu";
import Subscription from "./subscription";
import { useState } from "react";
import Form from "./form";
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { sepolia } from "wagmi/chains";

export default function Home() {
  const [overlay, setOverlay] = useState(false);
  const [slide, setSlide] = useState("");

  function blur(val) {
    setOverlay(val);
    if (val) {
      setSlide("-translate-y-full");
      setTimeout(() => {
        setSlide("");
      }, 50);
    }
  }

  const config = createConfig(
    getDefaultConfig({
      // Required API Keys
      alchemyId: process.env.ALCHEMY_ID, // or infuraId
      walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID,

      // Required
      appName: "Ghoul",
      chains: [sepolia],

      // Optional
      appDescription: "Subscription Management",
      appIcon: "ghoul.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
    })
  );

  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider theme="nouns">
        /* Your App */
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
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
