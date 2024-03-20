import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

async function Profile() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="flex flex-col text-3xl font-semibold h-full items-center justify-center">
      <span>{user?.given_name}</span>
      <span>{user?.family_name}</span>
      <span>{user?.email}</span>
    </div>
  );
}

export default Profile;
