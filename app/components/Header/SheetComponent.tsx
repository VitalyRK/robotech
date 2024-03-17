"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SquareMenu } from "lucide-react";
import Link from "next/link";

export function SheetComponent() {
  return (
    <div className="lg:hidden">
      <Sheet key={"right"}>
        <SheetTrigger asChild>
          <Button variant="ghost">
            <SquareMenu />
          </Button>
        </SheetTrigger>
        <SheetContent side={"right"}>
          <SheetHeader>
            <SheetTitle>ROBOTECH</SheetTitle>
            <SheetDescription>Обучающая платформа</SheetDescription>
          </SheetHeader>
          <nav className="mt-44 h-full text-2xl font-medium">
            <ul className="flex flex-col gap-10 items-center h-full">
              <li>
                <SheetClose asChild>
                  <Link href="/">Главная</Link>
                </SheetClose>
              </li>
              <li>
                <SheetClose asChild>
                  <Link href="/courses">Курсы</Link>
                </SheetClose>
              </li>
              <li>
                <SheetClose asChild>
                  <Link href="/blog">Блог</Link>
                </SheetClose>
              </li>
              <li>
                <SheetClose asChild>
                  <Link href="/about">О нас</Link>
                </SheetClose>
              </li>
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
