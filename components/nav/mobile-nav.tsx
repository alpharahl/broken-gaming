import {Drawer, DrawerContent, DrawerTitle, DrawerTrigger} from "@/components/ui/drawer";
import {BiMenu} from "react-icons/bi";
import logo from "@/assets/BGL-Logo.svg"
import Image from "next/image";
import Link from "next/link";

export default () => {
  return <div className="flex justify-between p-2">
    <div className={"flex items-center gap-2 text-3xl"}>
    <Image src={logo.src} alt={"Broken Gaming League Logo"} height={100} width={100}/>
    <div>Broken Gaming League</div>
    </div>
    <Drawer>
      <DrawerTrigger><BiMenu size={64}/></DrawerTrigger>

      <DrawerContent className={"text-center"}>
        <DrawerTitle>
          <div className="flex justify-center mb-2">
            <Link href={"/"}>

              <Image src={logo.src} alt={"Broken Gaming League Logo"} height={100} width={100}/>
            </Link>
          </div>
        </DrawerTitle>
        <Link className=" p-3  hover:underline" href="/public">BWRL</Link>
        <Link className=" p-3  hover:underline" href="/public">BPSL</Link>
        <Link className=" p-3  hover:underline" href="/public">Schedule</Link>
        <Link className=" p-3  hover:underline" href="/public">Merch</Link>
        <Link className=" p-3  hover:underline" href="/public">Blog</Link>
      </DrawerContent>
    </Drawer>
  </div>
}