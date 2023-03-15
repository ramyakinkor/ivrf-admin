import React, { useState } from "react";

export function useFormFile(initial='') {
  const [files, setFiles] = useState('');
  return {
    files: files,
    onChange: e => setFiles(e.target.files),
    reset: initial => setFiles(initial)
  }
}