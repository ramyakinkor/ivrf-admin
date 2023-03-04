import UploadFileField from "../../Uploads/UploadFileField";
import FolderUp from "../../../components/Icons/FolderUp/FolderUp";
import InputField from "../../Uploads/InputField";
export default function EditVideo() {
  return (
    <div className=" px-10 pt-12 pb-5 ">
      <h1 className="text-2xl font-bold">EDIT UPLOADED VIDEO</h1>
      <p className="trackig-wide text-xl mt-3 font-normal">
        All fields are mandatory
      </p>
      <form className="space-y-5 mt-5">
        <InputField
          label="ID"
          placeholder="Automatically generated ID (6-8 digit)"
        />
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className="">Category</label>
            <select className="py-3 pr-5 outline-none w-full text-xl px-3 text-black border-[1px] border-gray-300 font-light rounded-md">
              <option value="">Categories List ( Defined categories)</option>
              <option value="">one</option>
              <option value="">two</option>
            </select>
          </div>

          <InputField
            label="Tags"
            placeholder={"Upto 10 Tags Separated by Comma"}
          />
          <InputField label="Video Title" placeholder={"Title of Video"} />
          <InputField
            label="Video Description"
            placeholder={"Description of Video"}
          />
        </div>
        <InputField
          label={"Video Resolution"}
          placeholder="HD / Full HD / 4K (Admin will select the Resolution)"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <UploadFileField
            label={"Upload Thumbnail (with Watermark)"}
            Icon={FolderUp}
          />
        </div>
        <div className="flex justify-center ">
          <button className=" bg-blue-600 mt-12 py-3 px-5 text-white rounded-md font-medium">
            CONFIRM
          </button>
        </div>
      </form>
    </div>
  );
}
