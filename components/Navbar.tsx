import { checkUser } from "@/lib/checkUser";
import React from "react";

export default function Navbar() {
  checkUser();
  return <div>Navbar</div>;
}
