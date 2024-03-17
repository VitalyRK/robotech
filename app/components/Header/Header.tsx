import { ModeToggle } from "../ToggleTheme";
import LogIn from "./LogIn";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { SheetComponent } from "./SheetComponent";

function Header() {
  return (
    <div className="py-1 px-3 sm:px-8 md:px-12 lg:px-24 w-full flex items-center justify-center sm:justify-between">
      <Logo />
      <div className="w-max flex items-center justify-end gap-2 lg:gap-8">
        <Navbar />
        <SheetComponent />
        <LogIn />
        <ModeToggle />
      </div>
    </div>
  );
}

export default Header;
