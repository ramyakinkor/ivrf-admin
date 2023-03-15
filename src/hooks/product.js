import { useEffect } from "react"
import { environments } from "./environments";

export const useProduct = () => {
  const addImage = async (form) => {
    const url = `/api/Product/image`
    let res = await fetch(url, {
      body: form,
      method: "post",
    })
    res = await res.json();
    return res;
  }

  return {
    addImage
  }
}