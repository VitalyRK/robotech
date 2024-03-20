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
import { KeyRound, LogInIcon, UserPlus } from "lucide-react";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

function LogIn() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"}>
          <LogInIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="text-center">Войти</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <LoginLink className="w-full flex items-center justify-between">
              <span>Авторизоваться</span>
              <KeyRound className="mr-2 h-4 w-4" />
            </LoginLink>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <RegisterLink className="w-full flex items-center justify-between">
              <span>Регистрация</span>
              <UserPlus className="mr-2 h-4 w-4" />
            </RegisterLink>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LogIn;
