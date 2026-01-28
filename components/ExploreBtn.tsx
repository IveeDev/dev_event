"use client";

import Image from "next/image";
import Link from "next/link";

const ExploreBtn = () => {
  return (
    <button
      type="button"
      id="explore-btn"
      className="mt-7 mx-auto"
      onClick={() => console.log("hello")}
    >
      <a href="#event">
        Explore Events
        <Image
          src="/icons/arrow-down.svg"
          alt="arow-down"
          width={"24"}
          height={"24"}
        />
      </a>
    </button>
  );
};

export default ExploreBtn;
