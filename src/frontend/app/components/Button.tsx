"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export function WriteButton() {
    const actualPath = usePathname();
    const path = "/dashboard/write";
    return(
        <Link href={path}>
            <button className={clsx("h-10 w-[100px] bg-[#3F434D] rounded-3xl border cursor-pointer",{"h-10 w-[100px] bg-amber-600 border-black":actualPath == path})}>
                Redigir
            </button>
        </Link>
    );
}

export function FileButton() {
    const actualPath = usePathname();
    const path = "/dashboard/file";
    return(
        <Link href={path}>
            <button className={clsx("h-10 w-[100px] bg-[#3F434D] rounded-3xl border cursor-pointer",{"h-10 w-[100px] bg-amber-600 border-black":actualPath == path})}>
                Arquivo
            </button>
        </Link>
    );
}

export function AnalysisButton() {
    return(
        <button className="h-10 w-[145px] bg-amber-600 rounded-3xl transition hover:scale-105 cursor-pointer">
            Analisar Email
        </button>
    );
}

export function CopyButton() {
        return(
        <button className="h-[35px] w-[100px] bg-amber-600 rounded-3xl transition hover:scale-105 cursor-pointer">
            Copiar
        </button>
    );
}

export function NewAnalysisButton() {
    return(
        <button className="h-10 w-full bg-amber-600 rounded-3xl transition hover:scale-105 cursor-pointer">
            Realizar Nova Análise
        </button>
    );
}

type TypeFileButtonProps = {
    name: string;
    select: boolean;
    handleClick: () => void;
}

export function TypeFileButton( {name, select, handleClick}: TypeFileButtonProps) {
    return(
        <button onClick={handleClick} className={clsx("h-10 w-[100px] bg-[#3F434D] rounded-3xl border cursor-pointer",{"h-10 w-[100px] bg-amber-600 border-none":select})}>
                {name}
        </button>
    );
}