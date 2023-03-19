import React, { useState } from "react";

export function useFormFile(initial='') {
  const [files, setFiles] = useState('');
  return {
    files: files,
    onChange: e => {
      console.log(e.target.files)
      setFiles('')
      setFiles(e.target.files)
    },
    reset: initial => setFiles(initial)
  }
}