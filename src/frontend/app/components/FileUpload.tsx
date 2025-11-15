  "use client";

  import { useState, useEffect } from "react";
  import { PiCloudArrowUp, PiFilePdf, PiFileTxt } from "react-icons/pi";

  type FileUploadSectionProps = {
    option: string; 
    onFileSelect?: (file: File | null) => void;
  };

  export function FileUploadSection({ option, onFileSelect }: FileUploadSectionProps) {
    const [fileSelected, setFileSelected] = useState<File | null>(null);

    useEffect(() => {
      setFileSelected(null);
      if (onFileSelect) onFileSelect(null);
    }, [option]);

    let pdf = false;
    let txt = false; 
    
    if(option === "pdf") {
      pdf = true;
      txt = false;
    } else {
      pdf = false;
      txt = true;
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] || null;
      setFileSelected(file);
      if (onFileSelect) onFileSelect(file);
    };

    const getIcon = () => {
      if (!fileSelected) return <PiCloudArrowUp className="h-[200px] w-[400px] text-gray-300" />;
      if (pdf) return <PiFilePdf className="h-[200px] w-[400px] text-gray-300" />;
      if (txt) return <PiFileTxt className="h-[200px] w-[400px] text-gray-300" />;
    };

    return (
      <>
        {pdf && (
          <label
            className={`flex flex-col justify-center items-center bg-[#5c5e65] h-[100px] min-[380px]:h-[180px] min-[420px]:h-[220px] md:h-[260px] xl:h-[380px] 2xl:h-[545px] border rounded-3xl px-5 py-2 cursor-pointer transition-colors ${
              fileSelected ? "cursor-default" : "hover:bg-[#4a4c52]"
            }`}
          >
            {getIcon()}
            <span className="text-gray-300 text-center">
              {fileSelected ? fileSelected.name : "Nenhum Arquivo Selecionado"}
            </span>
            {!fileSelected && (
              <input type="file" accept="application/pdf" className="hidden" onChange={handleFileChange} />
            )}
          </label>
        )}

        {txt && (
          <label
            className={`flex flex-col justify-center items-center bg-[#5c5e65] h-[100px] min-[380px]:h-[180px] min-[420px]:h-[220px] md:h-[260px] xl:h-[380px] 2xl:h-[545px] border rounded-3xl px-5 py-2 cursor-pointer transition-colors ${
              fileSelected ? "cursor-default" : "hover:bg-[#4a4c52]"
            }`}
          >
            {getIcon()}
            <span className="text-gray-300 text-center">
              {fileSelected ? fileSelected.name : "Nenhum Arquivo Selecionado"}
            </span>
            {!fileSelected && (
              <input type="file" accept=".txt,text/plain" className="hidden" onChange={handleFileChange} />
            )}
          </label>
        )}
      </>
    );
  }
