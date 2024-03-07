"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function ScrollToTop() {
  return (
    <Button
      className="bg-transparent font-normal text-base px-0"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      back to top &nbsp;
      <FaArrowUp />
    </Button>
  );
}
