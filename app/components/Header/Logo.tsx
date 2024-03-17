import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <div className="hidden sm:block">
      <Link
        href={"/"}
        className="flex gap-3 items-center justify-between leading-6 w-max"
      >
        <Image width={80} height={80} src="/robot.png" alt="Logo" />
        <hgroup>
          <h1 className="font-semibold text-[2rem] tracking-wider font-anta">
            ROBOTECH
          </h1>
          <p className="text-rk-brandlight font-semibold">ENGINEERING</p>
        </hgroup>
      </Link>
    </div>
  );
}

export default Logo;
