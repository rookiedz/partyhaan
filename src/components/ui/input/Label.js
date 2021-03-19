import React from "react";

export default function Label({ label }) {
  return (
    <>
      <label className="flex py-2 text-xs text-gray-500">{label}</label>
    </>
  );
}
