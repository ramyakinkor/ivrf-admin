import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useFormField } from "../../hooks/formField";

export default function Login() {

  const navigate = useNavigate();
  const userId = useFormField();
  const password = useFormField();

  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  function submit(event) {
    postData('/api/Admin/login', {
      email: userId.value,
      password: password.value
    })
    .then(val => {
      localStorage.setItem('token', val);
      // set token
      navigate('/')
      // navigate to home
      
    })
    event.preventDefault();
  }
  return (
    <div>
      <Header />
      <p className="text-[1.4rem] text-center font-normal mb-7 mt-14">LOGIN</p>
      <div className="flex w-full justify-center mt-10">
        <form className="flex flex-col gap-7 w-full sm:w-auto justify-center " onSubmit={submit}>
          <div className="flex flex-col gap-2 w-full px-2 sm:w-auto ">
            <label className="text-gray-500">User ID</label>
            <input {...userId}
              className="p-3 sm:w-96 text-gray-500 rounded-md  border-[#d4d3d3] border-[1px] outline-none  w-full"
              type="text"
              placeholder="User ID"
            />
          </div>
          <div className="flex flex-col w-full px-2 gap-2 sm:w-auto">
            <label className="text-gray-500">Password</label>
            <input
              {...password}
              className="p-3 sm:w-96 rounded-md  border-[#d4d3d3] border-[1px] outline-none  w-full"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex p-2 gap-2 items-center">
            <div className="h-10 w-10 bg-gray-300 border-2 border-black"></div>
            <p className="text-2xl">CAPTCHA</p>
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
