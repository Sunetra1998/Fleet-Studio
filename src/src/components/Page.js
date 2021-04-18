import React from "react";
import { Link } from "react-router-dom";
import Color from "./Color";
import { RiSearchLine } from "react-icons/ri";

export default function Page() {
  return (
    <div className="home">
      <div className="home">
        COLOR
        <div>
          <b>WORD</b>
        </div>
      </div>
      <input type="text" className="search" placeholder="search the color"  />
      <Link to="color">
        <button type="btn" className="btn-primary">
          <RiSearchLine />
        </button>
      </Link>
    </div>
     
  );
}
