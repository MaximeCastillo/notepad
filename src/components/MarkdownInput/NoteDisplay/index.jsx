import React from 'react';
import Showdown from 'showdown';


export const NoteDisplay = (props) => {
  const converter = new Showdown.Converter();

  const input = props.input;

  const HTMLTitle = converter.makeHtml(input.title);
  const HTMLContent = converter.makeHtml(input.content);

  return (
    <div>
      <p dangerouslySetInnerHTML={{__html: HTMLTitle}} />
      <p dangerouslySetInnerHTML={{__html: HTMLContent}} />
    </div>
  );
}