import React from 'react';

export const MarkdownInput = (props) => {
  return (
    <form>
      <div>
        <label>Titre :</label>
        <input type="text" name='title' onChange={props.onChange} />
      </div>
      <div>
        <label>Note :</label>
        <textarea rows="10" name='content' onChange={props.onChange} />
      </div>
    </form>
  );
}