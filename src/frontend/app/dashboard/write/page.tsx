"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnalysisButton, CopyButton, NewAnalysisButton } from "@/app/components/Button";
import { EmailStatus } from "@/app/components/Status";
import Spinner from "@/app/components/Spinner";


type Email = {
    sender: string,
    subject: string,
    message: string;
}

type Analysis = {
    status: boolean,
    message: string;
}

export default function Page() {
    const [sender, setSender] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [data, setData] = useState<Analysis | null>(null);
    
    const [complete, setComplete] = useState(false);
    const [result, setResult] = useState(false);
    const [send, setSend] = useState(false);

    useEffect(() => {
        if(sender !== "" && subject !== "" &&  message !== "" ) setComplete(true);            
        else setComplete(false);
    }, [sender, subject, message])

    const handleSubmit = () => {
        const email: Email = {
            sender: sender,
            subject: subject,
            message: message
        }
        setSend(true);
        const getData = async ()  => {
                try {
                    const response = await fetch("https://autourmail.onrender.com/email", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(email),
                    });

                    const resultData: Analysis  = await response.json();
                    console.log(resultData);
                    setData(resultData);
                    setResult(true);
                } catch (error) {
                    console.error("Erro ao enviar email:", error);
                    setResult(false);
                    setSend(false);
                }
        }
        getData();
    }

    return(
        <div className="h-full w-full flex flex-col xl:flex-row gap-2.5">
            <div className="flex flex-col w-full">
                <p>Remetente:</p>
                <input placeholder="Quem é o remetente?" type="text" value={sender} onChange={(e) => setSender(e.target.value)} className="bg-[#5c5e65] h-[35px] border rounded-3xl pl-5 focus:outline-none"/>
                <div className="h-2.5"/>
                <p>Assunto:</p>
                <input placeholder="Qual é o assunto?" type="text" value={subject} onChange={(e) => setSubject(e.target.value)} className="bg-[#5c5e65] h-[35px] border rounded-3xl pl-5 focus:outline-none"/>
                <div className="h-2.5"/>
                <p>Email:</p>
                <textarea placeholder="Digite o email..." value={message} onChange={(e) => setMessage(e.target.value)} className="bg-[#5c5e65] h-[100px] min-[380px]:h-[150px] min-[420px]:h-[190px] md:h-60 xl:h-[300px] 2xl:h-[475px] border rounded-3xl px-5 py-2 focus:outline-none resize-none"></textarea>
            </div>
            {send ? (
            <>
                {result && data ? (
                <div className="w-full flex flex-col gap-2.5">
                    <div>
                        <p>Status:</p>
                        <EmailStatus result={data.status}/>
                    </div>
                    <div>
                        <p>Resposta Gerada:</p>
                        <div className="h-40 min-[380px]:h-[210px] min-[420px]:h-[250px] md:h-[310px] 2xl:h-[490px] border rounded-3xl bg-[#5c5e65] mt-0.5">
                            <div className="h-[100px] min-[380px]:h-[150px] min-[420px]:h-[190px] md:h-60 2xl:h-[425px] px-5 py-2 overflow-y-auto">
                                {data.message}
                            </div>
                            <div className="h-px border"/>
                            <div className="flex justify-center items-center pt-2.5">
                                <CopyButton text={data.message}/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-1">
                        <NewAnalysisButton/>
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
                            <p> O email fornecido já está pronto para  ser analisado!</p>
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
                        <div className="bg-[#5c5e65] h-[70px] w-[180px] md:w-[360px] text-[11px] md:text-[16px] border rounded-2xl md:rounded-3xl px-5 md:px-10 py-2">
                            <p> Preencha todos os campos para que seja possível realizar a análise do email.</p>
                        </div>
                    </div>)}
            </>)}

        </div>
    );
}