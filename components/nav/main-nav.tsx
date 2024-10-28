'use client';
import {useMediaQuery} from "@/hooks/use-media-query";
import Navbar from "@/components/nav/Navbar";
import MobileNav from "@/components/nav/mobile-nav";

export default () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  if (isDesktop){
    return <Navbar/>
  } else {
    return <MobileNav/>
  }
}