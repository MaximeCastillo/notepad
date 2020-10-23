import React from 'react';
import Showdown from 'showdown';

const converter = new Showdown.Converter();

export const NoteDisplay = ({ input }) => {
  if (!input) {
    return null;
  }

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