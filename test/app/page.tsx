"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import Logo from "@/components/ui/Logo";
import { DarkMode } from "@/components/navbar/DarkMode";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "หน้าแรก", href: "/" },
    { label: "ตัวละคร", href: "/characters" },
    { label: "ข่าวสาร", href: "/news" },
    { label: "เกี่ยวกับ", href: "/about" },
  ];

  return (
    <div className="flex">
      {/* Sidebar - Desktop */}
      <div
        className="hidden md:flex flex-col w-60 h-screen backdrop-blur-md border-r border-border p-4">
        <div className="ml-2 mb-6 flex justify-between">
          <Logo />
          <DarkMode />
        </div>
        <nav className="flex flex-col gap-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 rounded-lg"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Topbar */}
      <div className="md:hidden fixed top-0 left-0 w-full flex items-center justify-between backdrop-blur-md border-b px-4 py-3 z-50">
        <div>
          <Logo />
        </div>
        <div className="flex gap-4">
          <DarkMode />
          <button onClick={() => setIsOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Modal */}
      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-sm z-50 flex">
          <div className="backdrop-blur-md w-64 h-full p-4 border-r">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-lg font-bold">
                <Logo />
              </h1>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          {/* Overlay Click Close */}
          <div className="flex-1" onClick={() => setIsOpen(false)} />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 p-6 md:ml-60 mt-12 md:mt-0">
        <h2 className="text-2xl font-bold">ยินดีต้อนรับ</h2>
        <p className="mt-2">นี่คือพื้นที่เนื้อหาหลักของเว็บไซต์</p>
      </div>
    </div>
  );
};

export default Sidebar;
