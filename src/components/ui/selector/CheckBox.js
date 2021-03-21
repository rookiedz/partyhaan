import React from "react";
import { FiCheckSquare, FiSquare } from "react-icons/fi";

export default function CheckBox({ label, checked, onChecked }) {
  return (
    <>
      <div className="flex h-10 items-center">
        <div className="flex mr-3 cursor-pointer" onClick={() => onChecked()}>
          {checked ? (
            <FiCheckSquare size={20} className="text-green" />
          ) : (
            <FiSquare size={20} />
          )}
        </div>
        <span className="text-xs">{label}</span>
      </div>
    </>
  );
}
