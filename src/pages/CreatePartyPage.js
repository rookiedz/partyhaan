import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Label, TextField } from "../components/ui/input";

export default function CreatePartyPage() {
  return (
    <>
      <div className="absolute top-0 left-0 bottom-0 right-0 space-y-3 bg-white">
        <header className="flex text-lg shadow h-12 items-center px-3">
          <Link to="/parties" className="mr-3">
            <FiArrowLeft size={20} />
          </Link>
          <h1>สร้างปาร์ตี้</h1>
        </header>
        <main className="flex flex-col px-3 py-1">
          <Label label="ชื่อปาร์ตี้" />
          <TextField type="text" name="name" autoFocus />
          <Label label="จำนวนคนที่ขาด" />
          <TextField type="number" name="total" />
        </main>
        <footer className="flex flex-col px-3">
          <button className="btn w-full rounded-md bg-salmon text-white">
            สร้างปาร์ตี้
          </button>
        </footer>
      </div>
    </>
  );
}
