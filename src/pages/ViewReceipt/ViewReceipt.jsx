import Searchbar from "../../components/Searchbar/Searchbar";

export default function ViewReceipt() {
  return (
    <div className="px-10 pt-12 pb-5 flex flex-col flex-grow ">
      <div className="flex flex-col md:flex-row md:justify-between gap-2">
        <h1 className="text-2xl font-bold">View Receipt</h1>
        <Searchbar placeholder={"Search Order.."} />
      </div>
      <div className="lg:pl-44 gap-24 flex flex-col justify-center flex-grow ">
        <div className="space-y-5">
          <div>
            <p className="font-semibold">ORDER ID</p>
          </div>
          <div>
            <p className="font-semibold">ORDER DATE</p>
          </div>
          <div>
            <p className="font-semibold">NAME</p>
          </div>
          <div>
            <p className="font-semibold">EMAIL ID</p>
          </div>
          <div>
            <p className="font-semibold">PACKAGE DETAILS</p>
          </div>
        </div>
        <div>
          <button className="bg-[#2563eb] py-3 rounded-md px-5  text-white">
            DOWNLOAD RECEIPT
          </button>
        </div>
      </div>
    </div>
  );
}
