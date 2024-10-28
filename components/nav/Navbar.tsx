import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/BGL-Logo.svg"
import {FaFacebook, FaInstagram, FaTwitch, FaTwitter} from "react-icons/fa";

const Navbar =  () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white text-black px-20 py-5 flex justify-between items-center">
      <div className="flex gap-5">
        <Link className="navbar-brand hover:underline" href="/public">Home</Link>
        <Link className=" hover:underline" href="/public">BWRL</Link>
        <Link className=" hover:underline" href="/public">BPSL</Link>
        <Link className=" hover:underline" href="/public">Schedule</Link>
        <Link className=" hover:underline" href="/public">Merch</Link>
        <Link className=" hover:underline" href="/public">Blog</Link>
      </div>
      <Image src={logo.src} alt={"Broken Gaming League Logo"} height={100} width={100}/>
      <div className="flex items-center gap-5">
        <Link className="hover:underline mr-3" href="/public">Login</Link>
        <Link className="hover:underline" href="/public"><FaFacebook size={24}/></Link>
        <Link className="hover:underline" href="/public"><FaInstagram size={24}/></Link>
        <Link className="hover:underline" href="/public"><FaTwitter size={24}/></Link>
        <Link className="hover:underline" href="/public"><FaTwitch size={24}/></Link>
        <Link className="hover:underline border-2 p-3 border-black ml-6 " href="/public">Watch Live</Link>
      </div>
    </nav>
  )
}

export default Navbar;