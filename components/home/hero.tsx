export default () => {
  return <div className={"bg-slate-800 text-white min-h-80 flex flex-col items-center justify-center "}>
    <div
      className=" w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        <li className={"text-5xl text-nowrap"}>Broken Gaming Leagues</li>
        <li className={"text-6xl text-nowrap tracking-[-.1em]"}>----</li>
        <li className={"text-5xl text-nowrap"}>Broken Wing Racing League</li>
        <li className={"text-6xl text-nowrap tracking-[-.1em]"}>----</li>
        <li className={"text-5xl text-nowrap"}>Broken Wing Smite League</li>
        <li className={"text-6xl text-nowrap tracking-[-.1em]"}>----</li>
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true">
        <li className={"text-5xl text-nowrap"}>Broken Gaming Leagues</li>
        <li className={"text-6xl text-nowrap tracking-[-.1em]"}>----</li>
        <li className={"text-5xl text-nowrap"}>Broken Wing Racing League</li>
        <li className={"text-6xl text-nowrap tracking-[-.1em]"}>----</li>
        <li className={"text-5xl text-nowrap"}>Broken Wing Smite League</li>
        <li className={"text-6xl text-nowrap tracking-[-.1em]"}>----</li>
      </ul>
    </div>
  </div>
}