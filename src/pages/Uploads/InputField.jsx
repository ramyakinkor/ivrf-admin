export default function InputField({label,placeholder, value, onChange, register}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="">{label}</label>
      <input 
        value={value}
        onChange={onChange}
        className="py-3 outline-none w-full text-xl px-3 text-black border-[1px] border-gray-300 placeholder:text-gray-600 placeholder:font-light rounded-md"
        placeholder={placeholder}
        {...register}
      />
    </div>
  );
}
