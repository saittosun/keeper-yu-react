// jshint esversion: 6
import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from '../../src/notes';

// function noteArray(note) {
//   return (
//     <Note 
//       key={note.key}
//       title={note.title}
//       content={note.content}/>
//   )
// }

function App() {
  return (
    <div className="App">
      <Header />
      {notes.map((note) => {
        return (
          <Note 
            key={note.key}
            title={note.title}
            content={note.content}/>
        )
      })}
      <Footer />
    </div>
  );
}

export default App;
