import Image from "next/image";

export default function Home() {
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
