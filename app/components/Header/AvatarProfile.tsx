import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function AvatarProfile() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <Avatar>
      <AvatarImage
        src={user?.picture ?? "/public/robot.png"}
        alt="Avatar of the user"
      />
      <AvatarFallback>{user?.given_name}</AvatarFallback>
    </Avatar>
  );
}
