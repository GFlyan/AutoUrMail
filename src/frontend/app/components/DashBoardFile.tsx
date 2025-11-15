"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { AnalysisButton, CopyButton, NewAnalysisButton, PDFFileButton, TXTFileButton } from "@/app/components/Button";
import { EmailStatus } from "@/app/components/Status";
import { FileUploadSection } from "@/app/components/FileUpload";
import Spinner from "@/app/components/Spinner";

type Analysis = {
    status: boolean,
    message: string;
}

export default function ClientDashboardFile() {
    const searchParams = useSearchParams();
    const option = searchParams.get('option') ?? 'pdf';
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [data, setData] = useState<Analysis | null>(null);
    const [complete, setComplete] = useState(false);
    const [result, setResult] = useState(false);
    const [send, setSend] = useState(false);

    const handleFileSelect = (file: File | null) => {
        setSelectedFile(file);
    };

    useEffect(()=>{
        if(selectedFile) setComplete(true);
        else setComplete(false);
    }, [selectedFile])

    const handleSubmit = () => {
        setSend(true);
        const getData = async () => {
            const formData = new FormData();
            formData.append("file", selectedFile!);
            try {
                let response;   
                if(option === "pdf") {
                    response = await fetch("https://autourmail.onrender.com/pdf-file", {
                        method: "POST",
                        body: formData, // não precisa setar Content-Type, o fetch faz isso automaticamente
                    });
                }
                else {
                    response = await fetch("https://autourmail.onrender.com/txt-file", {
                        method: "POST",
                        body: formData, // fetch detecta multipart automaticamente
                    })
                }
                const resultData: Analysis  = await response.json();
                console.log(resultData);
                setData(resultData);
                setResult(true);
            } catch(error) {
                console.error("Erro ao enviar arquivo:", error);
                setResult(false);
                setSend(false);
            }
        }
        getData();
    }
   
    return(
        <div className="h-full w-full flex flex-col xl:flex-row gap-2.5">
            <div className="flex flex-col w-full">
                <p>Tipo de Arquivo:</p>
                <div className=" flex gap-2">
                    <PDFFileButton option={option}/>
                    <TXTFileButton option={option}/>
                </div>
                <div className="h-2.5"/>
                <p>Arquivo Selecionado:</p>
                <FileUploadSection option={option} onFileSelect={handleFileSelect}/>
            </div>
            {send ? (
            <>
                {data && result ? (
                <div className="w-full flex flex-col gap-2.5">
                    <div>
                        <p>Status:</p>
                        <EmailStatus result={data.status}/>
                    </div>
                    <div>
                        <p>Resposta Gerada:</p>
                        <div className="h-40 min-[380px]:h-60 min-[420px]:h-[280px] md:h-[330px] 2xl:h-[490px] border rounded-3xl bg-[#5c5e65] mt-0.5">
                            <div className="h-[100px] min-[380px]:h-[180px] min-[420px]:h-[220px] md:h-[260px] 2xl:h-[425px] px-5 py-2 overflow-y-auto scrollbar-custom">
                                {data.message}  
                            </div>
                            <div className="h-px border"/>
                            <div className="flex justify-center items-center pt-2.5">
                                <CopyButton text={data.message}/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-1">
                        <NewAnalysisButton option={option}/>
                    </div>
                </div>
                ):(
                <div className="w-full h-full flex justify-center items-center">
                    <Spinner/>
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
                        <AnalysisButton handleSubmit={handleSubmit}/>
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