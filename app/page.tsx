import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./components/Header/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grow bg-[url('/bg-min.jpg')] bg-center bg-cover">
      <section className="px-5 py-5 lg:px-64 flex flex-col items-center justify-center gap-6 text-center bg-black h-full w-full bg-opacity-60 text-white">
        <h2 className="text-xl sm:text-2xl lg:text-4xl">
          Тебя интересует робототехника?
          <br />
          Хочешь создавать роботов, которые двигаются, чувствуют и думают?
        </h2>
        <p className="text-sm sm:text-base">
          Замечательно! Тогда наша образовательная онлайн-платформа для тебя! Мы
          не предлагаем погружаться в теорию или изучать алгоритмы. Вместо этого
          мы начнем с практики. Практика — это весело, и в конце концов тебе
          будет что показать! Таким образом, занимаясь крутыми проектами, ты как
          побочный продукт получишь знания! Давай начнем наше учебное
          путешествие!
        </p>
        <Link href={"/about"}>
          <Button size={"lg"}>Больше информации</Button>
        </Link>
        <Link href={"/courses"}>
          <Button size={"lg"}>Каталог курсов</Button>
        </Link>
      </section>
    </main>
  );
}
