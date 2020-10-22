import React from 'react';
import ReactDOM from 'react-dom';
import { MarkdownInput } from 'components/MarkdownInput';
import 'index.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Bienvenue sur l'application Bloc-Notes</h1>
        <div>
          NoteDisplay
        </div>
        <div>
          <MarkdownInput />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));