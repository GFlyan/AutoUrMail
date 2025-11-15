import { PiCheck, PiX } from "react-icons/pi";

type EmailStatusProps = {
    result: boolean;
}

export function EmailStatus( { result }: EmailStatusProps ) {
    return(
        <div className=" h-[35px] w-[140px] bg-[#5c5e65] rounded-3xl border flex justify-center items-center">
            {result ? (
            <>
                <PiCheck className="text-green-500"/>
                <p>Produtivo</p>
            </>):(
            <>
                <PiX className="text-red-500"/>
                <p>Improdutivo</p>
            </>)}

        </div>
    );
}