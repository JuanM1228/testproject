"use client";
import React, { useState } from "react";
import Users from "@/components/Users";

const HomePage = () => {
  const [first, setfirst] = useState("");
  return (
    <section>
      <h1>Home</h1>
      <Users />
    </section>
  );
};

export default HomePage;
