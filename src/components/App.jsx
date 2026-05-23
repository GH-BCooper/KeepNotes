// Module Imports
import React, { useState } from "react";

// Component Imports
import Header from "./Header";

import Footer from "./Footer";

import Note from "./Note";

import CreateArea from "./CreateArea";

// App Component
function App() {
  // Notes State
  const [notes, setNotes] = useState([]);

  // Add Note Handler
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  // Delete Note Handler
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  // Component UI
  return (
    <div>
      {/* Header Component */}
      <Header />

      {/* Note Creation Area */}
      <CreateArea onAdd={addNote} />

      {/* Notes Rendering */}
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

// Module Export
export default App;
