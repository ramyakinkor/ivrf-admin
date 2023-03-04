import Search from "../Icons/Search/Search";

export default function Searchbar({ placeholder, name, handleSeearch }) {
  return (
    <div className="flex items-center justify-between px-2  border-gray-300 text-black border-[1px] rounded-md">
      <input
        className="py-3 outline-none  w-96 placeholder:text-gray-700 placeholder:font-semibold  "
        placeholder={placeholder}
        ttype="text"
        name={name}
      />
      <span className="cursor-pointer">
        <Search width={25} height={25} />
      </span>
    </div>
  );
}
