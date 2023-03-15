import React, { useState } from "react";


export function useFormField(initial = '') {
  const [value, setValue] = useState('');
  return {
    value: value,
    onChange: e => setValue(e.target.value),
    reset: initial => setValue(initial)
  }
}