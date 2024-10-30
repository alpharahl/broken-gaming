import Hero from "@/components/home/hero";
import Communities from "@/components/home/communities";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <p className={"max-w-xl mx-auto text-center my-10 text-lg"}>
        <span className="font-bold">Broken Gaming Leagues</span> aims to provide all gamers a space to improve their craft, compete with others, and talk about their favourite game in a helpful beginner-friendly community.
      </p>
      <Communities/>
    </div>
  );
}
