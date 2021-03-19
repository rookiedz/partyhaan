import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import PartyList from "../components/party/PartyList";

export default function PartyListingPage() {
  const [parties, setParties] = useState([
    {
      name:
        "แปรงล้างจานอเนกประสงค์ เปลี่ยนหัวได้ (แถมฟองน้ำ 3 ชิ้น) พร้อมส่งในไทย",
      image:
        "https://firebasestorage.googleapis.com/v0/b/selling-agent.appspot.com/o/2lSUg5Ehu7NatE99paJu%2Fproducts%2F51_1609959366103.jpg?alt=media&token=f20bdc81-3c46-4731-a9ab-1825cfabf06c",
      join: 1,
      total: 5,
    },
    {
      name:
        "แปรงล้างจานอเนกประสงค์ เปลี่ยนหัวได้ (แถมฟองน้ำ 3 ชิ้น) พร้อมส่งในไทย",
      image:
        "https://firebasestorage.googleapis.com/v0/b/selling-agent.appspot.com/o/2lSUg5Ehu7NatE99paJu%2Fproducts%2F51_1609959366103.jpg?alt=media&token=f20bdc81-3c46-4731-a9ab-1825cfabf06c",
      join: 1,
      total: 5,
    },
    {
      name:
        "แปรงล้างจานอเนกประสงค์ เปลี่ยนหัวได้ (แถมฟองน้ำ 3 ชิ้น) พร้อมส่งในไทย",
      image:
        "https://firebasestorage.googleapis.com/v0/b/selling-agent.appspot.com/o/2lSUg5Ehu7NatE99paJu%2Fproducts%2F51_1609959366103.jpg?alt=media&token=f20bdc81-3c46-4731-a9ab-1825cfabf06c",
      join: 1,
      total: 5,
    },
    {
      name:
        "แปรงล้างจานอเนกประสงค์ เปลี่ยนหัวได้ (แถมฟองน้ำ 3 ชิ้น) พร้อมส่งในไทย",
      image:
        "https://firebasestorage.googleapis.com/v0/b/selling-agent.appspot.com/o/2lSUg5Ehu7NatE99paJu%2Fproducts%2F51_1609959366103.jpg?alt=media&token=f20bdc81-3c46-4731-a9ab-1825cfabf06c",
      join: 1,
      total: 5,
    },
    {
      name:
        "แปรงล้างจานอเนกประสงค์ เปลี่ยนหัวได้ (แถมฟองน้ำ 3 ชิ้น) พร้อมส่งในไทย",
      image:
        "https://firebasestorage.googleapis.com/v0/b/selling-agent.appspot.com/o/2lSUg5Ehu7NatE99paJu%2Fproducts%2F51_1609959366103.jpg?alt=media&token=f20bdc81-3c46-4731-a9ab-1825cfabf06c",
      join: 1,
      total: 5,
    },
    {
      name:
        "แปรงล้างจานอเนกประสงค์ เปลี่ยนหัวได้ (แถมฟองน้ำ 3 ชิ้น) พร้อมส่งในไทย",
      image:
        "https://firebasestorage.googleapis.com/v0/b/selling-agent.appspot.com/o/2lSUg5Ehu7NatE99paJu%2Fproducts%2F51_1609959366103.jpg?alt=media&token=f20bdc81-3c46-4731-a9ab-1825cfabf06c",
      join: 1,
      total: 5,
    },
    {
      name:
        "แปรงล้างจานอเนกประสงค์ เปลี่ยนหัวได้ (แถมฟองน้ำ 3 ชิ้น) พร้อมส่งในไทย",
      image:
        "https://firebasestorage.googleapis.com/v0/b/selling-agent.appspot.com/o/2lSUg5Ehu7NatE99paJu%2Fproducts%2F51_1609959366103.jpg?alt=media&token=f20bdc81-3c46-4731-a9ab-1825cfabf06c",
      join: 1,
      total: 5,
    },
    {
      name:
        "แปรงล้างจานอเนกประสงค์ เปลี่ยนหัวได้ (แถมฟองน้ำ 3 ชิ้น) พร้อมส่งในไทย",
      image:
        "https://firebasestorage.googleapis.com/v0/b/selling-agent.appspot.com/o/2lSUg5Ehu7NatE99paJu%2Fproducts%2F51_1609959366103.jpg?alt=media&token=f20bdc81-3c46-4731-a9ab-1825cfabf06c",
      join: 1,
      total: 5,
    },
  ]);
  return (
    <>
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-white">
        <header className="flex px-3 text-lg shadow h-12 items-center">
          <h1 className="flex flex-grow">ปาร์ตี้ทั้งหมด</h1>
          <Link to="/parties/create" className="flex hover:text-salmon">
            <FiPlus size={20} />
          </Link>
        </header>
        <main className="fixed flex flex-grow flex-col overflow-y-auto">
          <PartyList parties={parties} />
          <div className="flex h-12"></div>
          <div className="flex h-12"></div>
          <div className="flex h-12"></div>
          <div className="flex h-12"></div>
        </main>
        <footer className="fixed right-0 bottom-0 left-0 px-3 py-2">
          <button className="btn w-full rounded-md bg-green text-white">
            เพิ่มเติม
          </button>
        </footer>
      </div>
    </>
  );
}
