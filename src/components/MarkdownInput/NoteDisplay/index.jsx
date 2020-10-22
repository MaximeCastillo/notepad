import React from 'react';
import Showdown from 'showdown';


export const NoteDisplay = (props) => {
  const input = props.input;
  const converter = new Showdown.Converter();

  return (
    <div>
      <h4>{input.title}</h4>
      <p>{input.content}</p>
    </div>
  );
}