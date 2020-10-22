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
        NoteDisplay : {input.title}
      </div>
      <div>
        <MarkdownInput input={input} onChange={handleInputChange} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));