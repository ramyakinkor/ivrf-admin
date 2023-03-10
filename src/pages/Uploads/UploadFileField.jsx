import { useRef } from "react";

export default function UploadFileField({ label, Icon,type, onChange }) {
  const inputRef = useRef(null);
  const handleOpenFile = (e) => {
    inputRef.current.click();
  };
  return (
    <div className="space-y-2">
      <label>{label}</label>
      <div
        onClick={handleOpenFile}
        className="w-full cursor-pointer h-48 border-[1px] border-gray-300 rounded-md flex justify-center items-center"
      >
        <Icon width={60} height={60} />
      </div>
      <input type="file" onChange={onChange} className="hidden" ref={inputRef} />
    </div>
  );
}
