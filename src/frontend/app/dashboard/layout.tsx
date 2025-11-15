import { WriteButton, FileButton} from "../components/Button";
import Image from "next/image";

export default function Layout({children}: Readonly<{children: React.ReactNode;}>) {

  return (
    <div className="w-full h-screen flex flex-col py-5 px-7 xl:py-15 xl:px-30">
        <p>Como deseja analisar o email?</p>
        <div className="flex py-2 justify-between">
            <div className="flex gap-2">
                <WriteButton/>
                <FileButton/>
            </div>
            <Image
                src="/logo.png"
                alt="Logo AutoUrMail"
                width={100}
                height={30}
                className="pt-5"
            />
        </div>
        <div className="flex-1 w-full bg-[#3F434D] border rounded-3xl p-5">
            {children}
        </div>
    </div>
  );
}