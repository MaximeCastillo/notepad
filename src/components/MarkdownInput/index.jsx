import React from 'react';

export const MarkdownInput = (props) => {

  return (
    <form>
      <div>
        <label>Answer:</label>
        <input type="text" name='answer1' onChange={e => props.onChange(e)} />
      </div>
      <div>
        <label>Answer 2:</label>
        <input type="text" name='answer2' onChange={e => props.onChange(e)} />
      </div>
    </form>
  )
}