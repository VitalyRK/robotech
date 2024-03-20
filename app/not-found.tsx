import { Button } from "@/components/ui/button";
import Link from "next/link";

function NotFound() {
  return (
    <div className="grow bg-[url('/not-found.jpg')] bg-center bg-cover">
      <div className="px-5 py-5 lg:px-64 flex flex-col items-center justify-center gap-6 text-center bg-black h-full w-full bg-opacity-70 text-white">
        <h1 className="text-4xl font-semibold">
          Запрашиваемая страница в разработке либо не существует
        </h1>
        <Link href="/">
          <Button size="lg">На главную</Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
