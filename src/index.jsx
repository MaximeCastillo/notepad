import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { MarkdownInput } from 'components/MarkdownInput';
import 'index.css';
import { NoteDisplay } from './components/MarkdownInput/NoteDisplay';

function App() {
  const [input, setInput] = useState({});

  const handleInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  });

  const save = (e) => {
    e.preventDefault();
    localStorage.setItem('note', JSON.stringify(input));
    console.log(localStorage);
  }

  const maSauvegarde = localStorage.getItem('note');
  const maNote = JSON.parse(maSauvegarde);

  return (
    <div>
      <h1>Bienvenue sur l'application Bloc-Notes</h1>
      <h4>(Notre équipe s'occupera du CSS ce week-end, promis ! :D )</h4>
      <div>
        <NoteDisplay input={input} />
      </div>
      <div>
        <MarkdownInput onChange={handleInputChange} onClick={save} />
      </div>
      <h3>Note enregistrée :</h3>
      <div>
        <NoteDisplay input={maNote} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));