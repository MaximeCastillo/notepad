import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { MarkdownInput } from 'components/MarkdownInput';
import 'index.css';

function App() {
  const [input, setInput] = useState('');

  console.log(input);

  return (
    <div>
      <h1>Bienvenue sur l'application Bloc-Notes</h1>
      <div>
        NoteDisplay : {input}
      </div>
      <div>
        <MarkdownInput onChange={value => setInput(value)} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));