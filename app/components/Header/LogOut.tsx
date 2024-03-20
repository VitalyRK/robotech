import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CircleUserRound,
  KeyRound,
  LogInIcon,
  LogOutIcon,
  UserPlus,
} from "lucide-react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import { AvatarProfile } from "./AvatarProfile";

function LogOut() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"}>
          <AvatarProfile />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="text-center">Профиль</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link
              href={"/profile"}
              className="w-full flex items-center justify-between cursor-pointer"
            >
              <span>Мой кабинет</span>
              <CircleUserRound className="mr-2 h-4 w-4" />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogoutLink className="w-full flex items-center justify-between">
              <span>Выйти</span>
              <LogOutIcon className="mr-2 h-4 w-4" />
            </LogoutLink>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LogOut;
