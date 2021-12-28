import React, { useState } from "react";
import Headerpricing from "./Headerpricing.js";
import Mianpricing from "./Mianpricing.js";
import Footerpricing from "./Footerpricing.js";
import "./Btnpricing.css";

export default function Btnpricing() {
  return (
    <>
      <div className="container-pricing">
        <Headerpricing />
        <Mianpricing />
        <hr className="hr-footer" />
        <Footerpricing />
      </div>
    </>
  );
}
