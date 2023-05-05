import { PlusOutlined } from '@ant-design/icons';
import { Input, Tag, Tooltip } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

const TagInput = ({value , onChange}) => {
  const [tagItems, setTags] = useState(() => value ? value.split(',') : []);
  const [inputs, SetInputs] = useState(value)



  const handleClose = (removedTag) => {
    const newTags = tags.filter(tag => tag !== removedTag);
    console.log(newTags);
    setTags(newTags);
  };


  const handleInputConfirm = (event) => {
    const inputVal = event.target.value
    console.log(inputVal)
    if ( inputVal && tagItems.indexOf(inputVal) === -1) {
      setTags([...tagItems, inputVal]);
      const tags = [...tagItems, inputVal].join(',')
      SetInputs(tags);
    }
  };

  
  return (
    <>
      {tagItems.map(tag => <Tag closable onClose={handleClose}>{tag}</Tag>)}
      <Input onPressEnter={handleInputConfirm} />
      <Input hidden={true} value={inputs} onChange={onChange}/>
    </>
  );
};

export default TagInput;