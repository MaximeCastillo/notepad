import React, { useState} from 'react';

export const MarkdownInput = () => {
  const [input, setInput] = useState({});

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    console.log(input);
  };

  return (
    <form>
      <div>
        <label>Answer:</label>
        <input type="text" value={input.answer1} name='answer1' onChange={handleInputChange} />
      </div>
      <div>
        <label>Answer 2:</label>
        <input type="text" value={input.anwser2} name='answer2' onChange={handleInputChange} />
      </div>
    </form>
  )
}