import React from "react";
import Main from "./Main.js";
import Header from "./Header";
import Down from "./down.js";
import Maindown from "./Maindown.js";

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Maindown />
      <Down />
    </div>
  );
}
