"use client";
import { useState } from "react";

import Login from "@/components/Login";
import Main from "@/components/Main";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [show, setShow] = useState(false);

  console.log(show);

  return <>{show ? <Main setShow={setShow} /> : <Login setShow={setShow} />}</>;
}
