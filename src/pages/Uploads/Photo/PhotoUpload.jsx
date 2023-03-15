import React from "react";
import FolderUp from "../../../components/Icons/FolderUp/FolderUp";
import { useFormFile } from "../../../hooks/fileField";
import { useFormField } from "../../../hooks/formField";
import { useProduct } from "../../../hooks/product";
import InputField from "../InputField";
import UploadFileField from "../UploadFileField";

export default function PhotoUpload() {
  const tags = useFormField('');
  const title = useFormField('');
  const desc = useFormField('');
  const category = useFormField('');
  const thumbnailFile = useFormFile('');
  const originalFile = useFormFile('');
  const product = useProduct();



  function submit(event) {
    event.preventDefault();
    const form = new FormData()
    form.append('private_assets', originalFile.files[0], originalFile.files[0].name);
    form.append('public_assets', thumbnailFile.files[0], thumbnailFile.files[0].name);
    form.append('title', title.value);
    form.append('tags', tags.value);
    form.append('category', category.value);
    form.append('description', desc.value);
    product.addImage(form).then(res => {
      tags.reset();
      title.reset();
      desc.reset();
      category.reset();
      thumbnailFile.reset();
      originalFile.reset();
    });
  }
  return (
    <div className=" px-10 pt-12 pb-5 ">
      <h1 className="text-2xl font-bold">UPLOAD NEW PHOTO</h1>
      <p className="trackig-wide text-xl mt-3 font-normal">
        All fields are mandatory
      </p>
      <form className="space-y-5 mt-5" onSubmit={submit}>
        {/* <InputField
          label="ID"
          placeholder="Automatically generated ID (6-8 digit)"
        /> */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="flex flex-col gap-2">
            <InputField label="Category" placeholder={"Category of Photo"}  {...category}/>
          </div>

          <InputField
            label="Tags"
            placeholder={"Upto 10 Tags Separated by Comma"}
            {...tags}
          />
          <InputField label="Photo Title" placeholder={"Title of Photo"}  {...title}/>
          <InputField
            {...desc}
            label="Photo Description"
            placeholder={"Description of Photo"}
          />
        </div>
        {/* <InputField
          label={"Photo Resolution"}
          placeholder="1280 X 1920 (Admin will Type the Resolution)"
        /> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <UploadFileField {...thumbnailFile}
            label={"Upload Thumbnail (with Watermark)"}
            Icon={FolderUp}
          />
          <UploadFileField {...originalFile}
            label={"Upload Photo (without Watermark)"}
            Icon={FolderUp}
          />
        </div>
        <div className="flex justify-center ">
          <button type="submit" className=" bg-blue-600 mt-12 py-3 px-5 text-white rounded-md font-medium">
            UPLOAD
          </button>
        </div>
      </form>
    </div>
  );
}
