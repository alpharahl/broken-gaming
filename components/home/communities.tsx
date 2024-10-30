import racingLogo from "@/assets/BWRL_Main.png";
import Link from "next/link";
import Image from "next/image";

const Communities = () => {
  return (
    <div className="max-w-2xl mx-auto flex items-center gap-5 flex-col">
      <h2 className={"font-bold text-2xl mx-auto"}>Leagues & Communities</h2>
      <div className="flex w-full justify-around">
        <div>
          <Link href={"/bwrl"}>
            <Image src={racingLogo.src}
                   alt={"Broken Wing Racing League"}
                   width={200}
                   height={200}
            />
          </Link>
        </div>
        <div>
          <Link href={"/bwsl"}>
            <Image src={racingLogo.src}
                   alt={"Broken Wing Racing League"}
                   width={200}
                   height={200}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Communities;