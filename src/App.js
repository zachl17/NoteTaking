import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import NoteListPage from './components/NoteListPage.js';
import NoteEditPage from './components/NoteEditPage.js';

function App() {
  return (
      <div className="App">
          <NoteListPage />     
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
export default App;


