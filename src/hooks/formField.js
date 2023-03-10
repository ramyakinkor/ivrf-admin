import React, { useState } from "react";


export function useFormField() {
  const [value, setValue] = useState('');
  return {
    value: value,
    onChange: e => setValue(e.target.value)
  }
}