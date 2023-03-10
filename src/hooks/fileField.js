import React, { useState } from "react";

export function useFormFile() {
  const [files, setFiles] = useState('');
  return {
    files: files,
    onChange: e => setFiles(e.target.files)
  }
}