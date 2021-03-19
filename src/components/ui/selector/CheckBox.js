import React from "react";
import { FiCheckSquare } from "react-icons/fi";

export default function CheckBox({ label, onChecked }) {
  return (
    <>
      <div className="flex h-10 items-center">
        <div className="flex mr-3" onClick={() => onChecked()}>
          <FiCheckSquare size={20} className="text-green" />
        </div>
        <span className="text-xs">{label}</span>
      </div>
    </>
  );
}
