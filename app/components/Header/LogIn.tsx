import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";
import Link from "next/link";

function LogIn() {
  return (
    <Button variant={"ghost"}>
      <Link href={"/login"}>
        <LogInIcon />
      </Link>
    </Button>
  );
}

export default LogIn;
