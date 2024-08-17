'use client'


import { Inter } from "next/font/google";
import Header from "@/components/homeComp./header";
import Hero from "@/components/homeComp./hero";
import Form from "@/components/homeComp./form";
import Footer from "@/components/homeComp./footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
        <Header/>
        <Hero/>
        <Form/>
        <Footer/>
    </>

  );
}
