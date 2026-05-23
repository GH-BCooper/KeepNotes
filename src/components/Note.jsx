// Module Imports
import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";


// Note Component
function Note(props) {

  // Delete Button Handler
  function handleClick() {

    props.onDelete(props.id);

  }


  // Component UI
  return (

    <div className="note">

      {/* Note Title */}
      <h1>{props.title}</h1>


      {/* Note Content */}
      <p>{props.content}</p>


      {/* Delete Button */}
      <button onClick={handleClick}>

        <DeleteIcon />

      </button>

    </div>

  );

}


// Module Export
export default Note;