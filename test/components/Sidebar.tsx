"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Logo from "./Logo";
import { DarkMode } from "./DarkMode";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col w-60 h-screen backdrop-blur-md border-r border-border p-4">
        <div className="flex justify-between mb-6">
          <Logo />
          <DarkMode />
        </div>
        <nav className="flex flex-col gap-3">
          <Link href="/" className="hover:underline">
            1
          </Link>
          <Link href="/about" className="hover:underline">
            2
          </Link>
          <Link href="/contact" className="hover:underline">
            3
          </Link>
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden p-2">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetHeader>
            <VisuallyHidden>
              <SheetTitle>เมนู</SheetTitle>
            </VisuallyHidden>
          </SheetHeader>
          <SheetContent side="left" className="w-60">
            <div className="flex justify-between m-4 pr-8">
              <Logo />
              <DarkMode />
            </div>
            <div>
              <nav className="flex flex-col gap-3 ml-4">
                <Link href="/" onClick={() => setOpen(false)}>
                  1
                </Link>
                <Link href="/about" onClick={() => setOpen(false)}>
                  2
                </Link>
                <Link href="/contact" onClick={() => setOpen(false)}>
                  3
                </Link>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Sidebar;
