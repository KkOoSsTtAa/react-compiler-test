"use client";

import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex justify-center items-center h-screen flex-col gap-10">
      <button
        onClick={() => setCounter((prev) => prev + 1)}
        className="border border-white p-4 rounded-lg"
      >
        {counter}
      </button>
      <OtherComponent />
    </div>
  );
}

const OtherComponent = () => {
  console.log("OtherComponent rendered");

  return <p>Other component</p>;
};
