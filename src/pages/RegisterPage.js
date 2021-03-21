import produce from "immer";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Label, TextField } from "../components/ui/input";
import { CheckBox } from "../components/ui/selector";
import { register } from "../services";

export default function RegisterPage() {
  const form = useForm();
  const [accept, setAccept] = useState(false);

  function handleSubmit(data) {
    const handleRegister = async (data) => {
      const response = await register(data);
      console.log(response);
    };
    handleRegister(data);
  }
  return (
    <>
      <div className="absolute top-0 left-0 bottom-0 right-0 space-y-3 bg-white">
        <header className="flex px-3 text-lg shadow h-12 items-center">
          <h1>สร้างบัญชีผู้ใช้</h1>
        </header>
        <main className="flex flex-col px-3 space-y-1">
          <Label label="อีเมล์" />
          <TextField type="text" name="email" form={form} autoFocus />
          <Label label="รหัสผ่าน" />
          <TextField type="password" name="password" form={form} />
          <Label label="ยืนยันรหัสผ่าน" />
          <TextField type="password" name="confirm_password" form={form} />
          <CheckBox
            label="ฉันยอมรับเงื่อนไขและข้อตกลงเกี่ยวกับการใช้งาน"
            checked={accept}
            onChecked={() =>
              setAccept((prevState) => {
                return !prevState;
              })
            }
          />
        </main>
        <footer className="flex flex-col px-3">
          <button
            className="btn bg-salmon text-white"
            onClick={form.handleSubmit(handleSubmit)}
          >
            ยืนยัน
          </button>
          <Link to="/login" className="btn">
            ยกเลิก
          </Link>
        </footer>
      </div>
    </>
  );
}
