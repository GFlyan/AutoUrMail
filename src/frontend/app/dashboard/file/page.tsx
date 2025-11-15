"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnalysisButton, CopyButton, NewAnalysisButton, TypeFileButton } from "@/app/components/Button";
import { EmailStatus } from "@/app/components/Status";

export default function Page() {
    const [complete, setComplete] = useState(true);
    const [result, setResult] = useState(true);
    const [send, setSend] = useState(true);

    const [pdf, setPdf] = useState(true);
    const [txt, seTxt] = useState(false);
    const handleClickPDF = () => {
        if(!pdf) {
        setPdf(!pdf);
        seTxt(!txt);
    }
    }
    
    const handleClickTXT = () => {
        if(!txt) {
        seTxt(!txt);
        setPdf(!pdf);
    }
    }
    return(
        <div className="h-full w-full flex flex-col xl:flex-row gap-2.5">
            <div className="flex flex-col w-full">
                <p>Tipo de Arquivo:</p>
                <div className=" flex gap-2">
                    <TypeFileButton name="PDF" select={pdf} handleClick={handleClickPDF} />
                    <TypeFileButton name="TXT" select={txt} handleClick={handleClickTXT} />
                </div>
                <div className="h-2.5"/>
                <p>Arquivo Selecionado:</p>
                {pdf && (<input type="file" accept="application/pdf" className="bg-[#5c5e65] h-[100px] min-[380px]:h-[180px] min-[420px]:h-[220px] md:h-[260px] xl:h-[380px] 2xl:h-[545px] border rounded-3xl px-5 py-2 focus:outline-none resize-none cursor-pointer"/>)}
                {txt && (<input type="file" accept="application/plain" className="bg-[#5c5e65] h-[100px] min-[380px]:h-[180px] min-[420px]:h-[220px] md:h-[260px] xl:h-[380px] 2xl:h-[545px] border rounded-3xl px-5 py-2 focus:outline-none resize-none cursor-pointer"/>)}
            </div>
            {send ? (
            <>
                {result ? (
                <div className="w-full flex flex-col gap-2.5">
                    <div>
                        <p>Status:</p>
                        <EmailStatus result={true}/>
                    </div>
                    <div>
                        <p>Resposta Gerada:</p>
                        <div className="h-40 min-[380px]:h-[240px] min-[420px]:h-[280px] md:h-[330px] 2xl:h-[490px] border rounded-3xl bg-[#5c5e65] mt-0.5">
                            <div className="h-[100px] min-[380px]:h-[180px] min-[420px]:h-[220px] md:h-[260px] 2xl:h-[425px] px-5 py-2 overflow-y-auto">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sunt officiis totam eius, enim fuga sequi quia aliquam voluptate provident, tenetur obcaecati harum sapiente veritatis! Cum beatae molestias provident rem?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sunt officiis totam eius, enim fuga sequi quia aliquam voluptate provident, tenetur obcaecati harum sapiente veritatis! Cum beatae molestias provident rem?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sunt officiis totam eius, enim fuga sequi quia aliquam voluptate provident, tenetur obcaecati harum sapiente veritatis! Cum beatae molestias provident rem?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sunt officiis totam eius, enim fuga sequi quia aliquam voluptate provident, tenetur obcaecati harum sapiente veritatis! Cum beatae molestias provident rem?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sunt officiis totam eius, enim fuga sequi quia aliquam voluptate provident, tenetur obcaecati harum sapiente veritatis! Cum beatae molestias provident rem?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sunt officiis totam eius, enim fuga sequi quia aliquam voluptate provident, tenetur obcaecati harum sapiente veritatis! Cum beatae molestias provident rem?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sunt officiis totam eius, enim fuga sequi quia aliquam voluptate provident, tenetur obcaecati harum sapiente veritatis! Cum beatae molestias provident rem?

                            </div>
                            <div className="h-px border"/>
                            <div className="flex justify-center items-center pt-2.5">
                                <CopyButton/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-1">
                        <NewAnalysisButton/>
                    </div>
                </div>
                ):(
                <div className="w-full h-full flex justify-center items-center">
                    <div className="w-16 md:w-20 h-16 md:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
                </div>)}    
            </>
            ):(
            <>
                {complete ? (
                    <div className="w-full h-full flex flex-col justify-center items-center">
                        <Image
                            src="/fav-icon.png"
                            alt="Fav Icon AutoUrMail"
                            width={100}
                            height={70}
                            className="md:hidden"
                        />
                        <Image
                            src="/fav-icon.png"
                            alt="Fav Icon AutoUrMail"
                            width={200}
                            height={140}
                            className="hidden md:block"
                        />
                        <div className="bg-[#5c5e65] h-[54px] w-[180px] md:h-[70px] md:w-[360px] text-[11px] md:text-[16px] border rounded-2xl md:rounded-3xl px-5 md:px-10 py-2">
                            <p> O arquivo fornecido já está pronto para  ser analisado!</p>
                        </div>
                        <div className="h-5"/>
                        <AnalysisButton/>
                    </div>):(
                    <div className="w-full h-full flex flex-col justify-center items-center">
                        <Image
                            src="/fav-icon.png"
                            alt="Fav Icon AutoUrMail"
                            width={100}
                            height={72}
                            className="md:hidden"
                        />
                        <Image
                            src="/fav-icon.png"
                            alt="Fav Icon AutoUrMail"
                            width={200}
                            height={140}
                            className="hidden md:block"
                        />
                        <div className="bg-[#5c5e65] h-[70px] w-[180px] md:w-[390px] text-[11px] md:text-[16px] border rounded-2xl md:rounded-3xl px-5 md:px-10 py-2">
                            <p> Preencha todos os campos para que seja possível realizar a análise do arquivo.</p>
                        </div>
                    </div>)}
            </>)}

        </div>
    );
}