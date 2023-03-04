import ChevronDoubleRight from "../Icons/ChevronDoubleRight/ChevronDoubleRight";
import ChevronDoubleLeft from "../Icons/ChevronDoubleLeft/ChevronDoubleLeft";
const avail = [1, 2, 3, 4, 5];
export default function Pagination() {
  return (
    <div className="flex gap-2 mt-10 items-center">
      <button disabled  className="opacity-40">
        <ChevronDoubleLeft height={15} />
      </button>
      {avail.map((a) => (
        <button key={a} className="border-[1px] px-[15px] py-2 border-gray-400 rounded-[4px] hover:bg-[#2563eb] hover:text-white transition-all duration-300">{a}</button>
      ))}
      <button>
        <ChevronDoubleRight width={15} />
      </button>
    </div>
  );
}
