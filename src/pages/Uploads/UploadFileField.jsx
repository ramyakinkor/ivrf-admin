import { useEffect, useRef, useState } from "react";

export default function UploadFileField({
  label,
  Icon,
  type,
  onChange,
  files,
}) {
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);
  const videoRef = useRef(null);
 
  const OnOpenModal = () => setOpen(true);
  const OnCloseModal = () => setOpen(false);
  const handleOpenFile = (e) => {
    inputRef.current.click();
  };

  useEffect(() => {
    if (type == "video") {
      videoRef.current?.load();
    }
  }, [files]);

  return (
    <>
      <div className="relative">
        <div className="space-y-2">
          <label>{label}</label>
          <div
            onClick={handleOpenFile}
            className="w-full cursor-pointer h-72 z-1  border-[1px] border-gray-300 rounded-md flex justify-center items-center"
          >
            {files?.length >= 1 && !open ? (
              <div className="w-full flex justify-center relative items-center h-full">
                {type == "image" ? (
                  <img
                    className="max-h-full max-w-full"
                    src={URL.createObjectURL(files[0])}
                  />
                ) : (
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    className="max-h-full max-w-full"
                  >
                    <source src={URL.createObjectURL(files[0])} />
                  </video>
                )}
              </div>
            ) : (
              <Icon width={60} height={60} />
            )}
          </div>
          <input
            type="file"
            onChange={onChange}
            className="hidden"
            ref={inputRef}
          />
        </div>
        {files?.length >= 1 && (
          <span
            onClick={OnOpenModal}
            className="inline-block absolute z-10 select-none cursor-pointer p-2 bg-slate-200 bottom-0 right-0"
          >
            {/* <ExtendIcon height={30} width={30} /> */}
          </span>
        )}
      </div>

    </>
  );
}
