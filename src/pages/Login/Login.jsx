import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useFormField } from "../../hooks/formField";
import {useForm} from 'react-hook-form'
import { useDispatch } from "react-redux";
import { login } from "../../store/reducers/AdminSlice";

export default function Login() {
  const {handleSubmit, clearErrors, register, reset} = useForm();
  const dispatch = useDispatch();

  function submit(data) {
    dispatch(login({credential: data, reset: reset}));
    event.preventDefault();
  }
  return (
    <div>
      <p className="text-[1.4rem] text-center font-normal mb-7 mt-14">LOGIN</p>
      <div className="flex w-full justify-center mt-10">
        <form className="flex flex-col gap-7 w-full sm:w-auto justify-center " onSubmit={handleSubmit(submit)}>
          <div className="flex flex-col gap-2 w-full px-2 sm:w-auto ">
            <label className="text-gray-500">User ID</label>
            <input {...register('email')}
              className="p-3 sm:w-96 text-gray-500 rounded-md  border-[#d4d3d3] border-[1px] outline-none  w-full"
              type="text"
              placeholder="User ID"
            />
          </div>
          <div className="flex flex-col w-full px-2 gap-2 sm:w-auto">
            <label className="text-gray-500">Password</label>
            <input
              {...register('password')}
              className="p-3 sm:w-96 rounded-md  border-[#d4d3d3] border-[1px] outline-none  w-full"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-[#3662e3] py-[0.6em] px-5 text-white rounded-md hover:bg-[#436ef1]" >
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
