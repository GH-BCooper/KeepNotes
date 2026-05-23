// Module Imports
import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";

import { Fab } from "@mui/material";

import { Zoom } from "@mui/material";

// CreateArea Component
function CreateArea(props) {
  // Note Expansion State
  const [isExpanded, setExpanded] = useState(false);

  // Note State
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  // Input Change Handler
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  // Note Submission Handler
  function submitNote(event) {
    props.onAdd(note);

    setNote({
      title: "",
      content: "",
    });

    event.preventDefault();
  }

  // Textarea Expansion Handler
  function expand() {
    setExpanded(true);
  }

  // Component UI
  return (
    <div>
      <form className="create-note">
        {/* Conditional Title Input */}
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        {/* Note Content Input */}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />

        {/* Animated Submit Button */}
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

// Module Export
export default CreateArea;
