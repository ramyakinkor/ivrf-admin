import FolderUp from "../../../components/Icons/FolderUp/FolderUp";
import InputField from "../InputField";
import UploadFileField from "../UploadFileField";
import { useFormFile } from "../../../hooks/fileField";
import { useFormField } from "../../../hooks/formField";
import { useProduct } from "../../../hooks/product";
import { useForm } from "react-hook-form";
export default function UploadVideo() {
  const product = useProduct();
  const {register, handleSubmit, control, setValue, reset, getValues,formState: {errors}} = useForm();
     
  function onSubmit(data, e) {
    console.log(data, e)
    const form = new FromData(data);
    form.append('private_assets', data.private_assets.files[0], data.private_assets.files[0].name);
    form.append('public_assets', data.public_assets.files[0], data.public_assets.files[0].name);
    product.addVideo(form)
    .then(res => {
      alert('video upload success');
      reset();
    }).catch(err => {
      console.log(err);
      alert('some error ocurred please check logs');
    })
  }

  function onError(errors, e) {
    console.log(errors, e)
    
  }

  return (
    <div className=" px-10 pt-12 pb-5 ">
      <h1 className="text-2xl font-bold">UPLOAD NEW VIDEO</h1>
      <p className="trackig-wide text-xl mt-3 font-normal">
        All fields are mandatory
      </p>
      <form className="space-y-5 mt-5" onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <InputField label="Video Title" 
            {...register('title', {required: {value: true, message: 'title value required'}})}  
            placeholder={"Title of Video"} 
          />
          {errors.title && <p style={{color: 'red'}}>{errors.title.message}</p>}

          <InputField
            label="Category"
            register={register('category')}
            placeholder={"Video Category"}
          />

          <InputField
            label="Tags"
            register={register('tags')}
            placeholder={"Upto 10 Tags Separated by Comma"}
          />
          
          <InputField
            label="Video Description"
            register = {register('description')}
            placeholder={"Description of Video"}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <UploadFileField
            onChange={(event) => setValue('public_assets', event.target.files)}
            files={getValues('public_assets') || []}
            label={"Upload Video Thumbnail (with Watermark)"}
            Icon={FolderUp}
            type="video"
          />
          <UploadFileField
            label={"Upload Video (without Watermark)"}
            onChange={(event) => setValue('private_assets', event.target.files)}
            files={getValues('private_assets') || []}
            Icon={FolderUp}
            type="video"
          />
        </div>
        <div className="flex justify-center ">
          <button className=" bg-blue-600 mt-12 py-3 px-5 text-white rounded-md font-medium">
            UPLOAD
          </button>
        </div>
      </form>
    </div>
  );
}
