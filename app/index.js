import React from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'

function isAuthed () {
    return true
}

function isNew () {
    return false
}

function showWarning () {
    return true
}
class App extends React.Component {
    render() {
      return (
          <h1>
              First Component
          </h1>
      )
        
    }
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />)