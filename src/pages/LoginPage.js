import React from "react";
import { Link } from "react-router-dom";
import { Label, TextField } from "../components/ui/input";

export default function LoginPage() {
  return (
    <>
      <div className="absolute top-0 left-0 bottom-0 right-0 space-y-3 bg-white">
        <header className="flex items-center justify-center my-12">
          <div className="min-w-image max-w-image">
            <img
              src="https://www.partyhaan.com/static/media/logo.86d3c377.png"
              alt="logo"
            />
          </div>
        </header>
        <main className="flex flex-col space-y-1 px-3">
          <Label label="อีเมล์" />
          <TextField type="text" name="email" autoFocus />
          <Label label="รหัสผ่าน" />
          <TextField type="password" name="password" />
        </main>
        <footer className="flex flex-col px-3">
          <button className="btn w-full rounded-md bg-salmon text-white">
            เข้าสู่ระบบ
          </button>
          <Link to="/register" className="btn hover:text-salmon">
            สร้างบัญชีผู้ใช้
          </Link>
        </footer>
      </div>
    </>
  );
}
