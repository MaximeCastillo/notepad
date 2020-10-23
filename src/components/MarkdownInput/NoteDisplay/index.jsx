import React from 'react';
import Showdown from 'showdown';


export const NoteDisplay = ({ input }) => {
  if (!input) {
    return null;
  }

  const converter = new Showdown.Converter();

  const data = input;

  const HTMLTitle = converter.makeHtml(data.title);
  const HTMLContent = converter.makeHtml(data.content);

  return (
    <div>
      <p dangerouslySetInnerHTML={{__html: HTMLTitle}} />
      <p dangerouslySetInnerHTML={{__html: HTMLContent}} />
    </div>
  );
}