"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/dashboard/write"); 
    }, 1500); 

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="w-screen h-screen bg-[#11182] flex justify-center items-center">
      <Image
      width={1920}
      height={480}
      src="/logo.png"
      alt="Presenting AutoUrMail"
      />
    </div>
  );
}
