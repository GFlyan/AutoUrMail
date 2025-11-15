"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function WriteButton() {
    const actualPath = usePathname();
    const path = "/dashboard/write";
    return(
        <Link href={path}>
            <button className={clsx("h-10 w-[100px] bg-[#3F434D] rounded-3xl border cursor-pointer",{"h-10 w-[100px] bg-linear-to-r from-[#F26416] to-[#F28C20] border-black":actualPath == path})}>
                Redigir
            </button>
        </Link>
    );
}

export function FileButton() {
    const actualPath = usePathname();
    const redirectPath = "/dashboard/file?option=pdf";
    const path = "/dashboard/file"
    return(
        <Link href={redirectPath}>
            <button className={clsx("h-10 w-[100px] bg-[#3F434D] rounded-3xl border cursor-pointer",{"h-10 w-[100px] bg-linear-to-r from-[#F26416] to-[#F28C20] border-black":actualPath == path})}>
                Arquivo
            </button>
        </Link>
    );
}

type AnalysisButtonProps = {
    handleSubmit: () => void;
}

export function AnalysisButton({handleSubmit}: AnalysisButtonProps) {
    return(
        <button onClick={handleSubmit} className="h-10 w-[145px] bg-linear-to-r from-[#F26416] to-[#F28C20] rounded-3xl transition hover:scale-105 cursor-pointer shadow-xl">
            Analisar Email
        </button>
    );
}

type CopyButtonProps = {
    text: string;
}

export function CopyButton({text}: CopyButtonProps) {
    if(!text) text = ""
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        const copy = async () => {
            try {
                await navigator.clipboard.writeText(text);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // reseta o estado depois de 2s
            } catch (err) {
                console.error("Falha ao copiar:", err);
            }
        }
        copy()
    }
        return(
        <button onClick={handleCopy} className="h-[35px] w-[100px] bg-linear-to-r from-[#F26416] to-[#F28C20] rounded-3xl transition hover:scale-105 cursor-pointer shadow-xl">
            {copied ? "Copiado" : "Copiar"}
        </button>
    );
}

type NewAnalysisButtonProps = {
    option?: string;
}

export function NewAnalysisButton({option}: NewAnalysisButtonProps) {
    let path = usePathname();
    if(option) path += "?option=" + option;
    return(
        <a href={path}>
            <button className="h-10 w-full bg-linear-to-r from-[#F26416] to-[#F28C20] rounded-3xl transition hover:scale-102 cursor-pointer shadow-xl">
                Realizar Nova Análise
            </button>
        </a>
    );
}

type TypeFileButtonProps = {
    option: string;
}

export function PDFFileButton({option}: TypeFileButtonProps) {
    let actualPath = usePathname();
    actualPath += "?option=" + option;
    const path = "/dashboard/file?option=pdf";
    return(
        <a href={path}>
            <button  className={clsx("h-10 w-[100px] bg-[#3F434D] rounded-3xl border cursor-pointer",{"h-10 w-[100px] bg-linear-to-r from-[#F26416] to-[#F28C20] border-none": path === actualPath})}>
                    PDF
            </button>
        </a>
    );
}

export function TXTFileButton({option}: TypeFileButtonProps) {
    let actualPath = usePathname();
    actualPath += "?option=" + option;
    const path = "/dashboard/file?option=txt";
    return(
        
        <a href={path}>
            <button className={clsx("h-10 w-[100px] bg-[#3F434D] rounded-3xl border cursor-pointer",{"h-10 w-[100px] bg-linear-to-r from-[#F26416] to-[#F28C20] border-none":path === actualPath})}>
                    TXT
            </button>
        </a>
    );
}