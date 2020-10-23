import React from 'react';

export const MarkdownInput = ({ onChange, onClick }) => {
  return (
    <form>
      <div>
        <label>Titre :</label>
        <input type="text" name='title' onChange={onChange} />
      </div>
      <div>
        <label>Note :</label>
        <textarea rows="10" name='content' onChange={onChange} />
      </div>
      <div>
        <input type="submit" value="Sauvegarder la note" onClick={onClick} />
      </div>
    </form>
  );
}