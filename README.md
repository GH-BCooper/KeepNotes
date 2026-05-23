# 📝 Keeper App

A modern note-taking web application built using React.js and Material UI that allows users to create and delete notes dynamically with a clean and interactive interface inspired by Google Keep.

---

# 🚀 Features

- Create notes dynamically
- Delete notes instantly
- Expandable note input area
- Responsive UI
- Material UI icons and animations
- Component-based React architecture
- Dynamic rendering using React state

---

# 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- Material UI (MUI)
- HTML5
- CSS3
- Vite

---

# 📁 Project Structure

```bash id="w4m8qx"
Keeper-App/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── App.jsx
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Note.jsx
│   │   └── CreateArea.jsx
│   │
│   ├── index.jsx
│   └── styles.css
│
├── index.html
├── package.json
├── vite.config.js
└── README.md




⚙️ Application Functionality

The Keeper App allows users to:

Create notes with titles and content
Dynamically display notes
Delete notes using a delete button
Expand the note input area interactively
🔥 Core Functionalities
Create Notes

Users can add notes dynamically using React state management.

Example
setNotes((prevNotes) => {
  return [...prevNotes, newNote];
});
Delete Notes

Users can remove notes instantly.

Example
prevNotes.filter((noteItem, index) => {
  return index !== id;
});
Expandable Input Area

The textarea expands when clicked using conditional rendering and React state.

Example
const [isExpanded, setExpanded] = useState(false);
Dynamic Note Rendering

Notes are rendered using the .map() method.

Example
notes.map((noteItem, index) => {
  return <Note />;
});
⚙️ React Concepts Practiced
Functional Components
Props
useState Hook
Event Handling
Conditional Rendering
Component Reusability
Dynamic Rendering
State Management
⚙️ Material UI Features Used
Icons
AddIcon
DeleteIcon
HighlightIcon
Components
Floating Action Button (Fab)
Zoom Animation
⚙️ Component Overview
App Component

Handles:

Notes state
Add note functionality
Delete note functionality
Rendering all components
Header Component

Displays:

App title
Highlight icon
Footer Component

Displays:

Dynamic copyright year
CreateArea Component

Handles:

Note creation
Form expansion
User input
Note Component

Displays:

Individual notes
Delete functionality





▶️ Installation & Setup
1. Clone the Repository
git clone YOUR_REPOSITORY_LINK
2. Navigate into the Project Folder
cd Keeper-App
3. Install Dependencies
npm install
4. Run the Development Server
npm run dev
🌍 Open in Browser

Visit:

http://localhost:5173