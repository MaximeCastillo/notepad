import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { MarkdownInput } from 'components/MarkdownInput';
import 'index.css';

function App() {
  const [input, setInput] = useState({});

  const handleInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  });

  console.log(input);

  return (
    <div>
      <h1>Bienvenue sur l'application Bloc-Notes</h1>
      <div>
        NoteDisplay : {input.answer1}
      </div>
      <div>
        <MarkdownInput onChange={e => handleInputChange(e)} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));