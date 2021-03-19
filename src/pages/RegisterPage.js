import React from "react";
import { Link } from "react-router-dom";
import { Label, TextField } from "../components/ui/input";
import { CheckBox } from "../components/ui/selector";

export default function RegisterPage() {
  return (
    <>
      <div className="absolute top-0 left-0 bottom-0 right-0 space-y-3 bg-white">
        <header className="flex px-3 text-lg shadow h-12 items-center">
          <h1>สร้างบัญชีผู้ใช้</h1>
        </header>
        <main className="flex flex-col px-3 space-y-1">
          <Label label="อีเมล์" />
          <TextField type="text" name="password" autoFocus />
          <Label label="รหัสผ่าน" />
          <TextField type="password" name="password" />
          <Label label="ยืนยันรหัสผ่าน" />
          <TextField type="password" name="confirm_password" />
          <CheckBox
            label="ฉันยอมรับเงื่อนไขและข้อตกลงเกี่ยวกับการใช้งาน"
            onChecked={() => console.log(`checked`)}
          />
        </main>
        <footer className="flex flex-col px-3">
          <button className="btn bg-salmon text-white">ยืนยัน</button>
          <Link to="/login" className="btn">
            ยกเลิก
          </Link>
        </footer>
      </div>
    </>
  );
}
