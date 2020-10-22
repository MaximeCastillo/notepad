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

  console.log(input);

  return (
    <div>
      <h1>Bienvenue sur l'application Bloc-Notes</h1>
      <div>
        <NoteDisplay input={input} />
      </div>
      <div>
        <MarkdownInput onChange={handleInputChange} onClick={save} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));