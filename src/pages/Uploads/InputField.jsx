export default function InputField({label,placeholder}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="">{label}</label>
      <input
        className="py-3 outline-none w-full text-xl px-3 text-black border-[1px] border-gray-300 placeholder:text-gray-600 placeholder:font-light rounded-md"
        placeholder={placeholder}
      />
    </div>
  );
}
