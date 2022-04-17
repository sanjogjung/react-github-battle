import React from 'react'
import { createRoot } from 'react-dom/client';
import Battle from './components/Battle';
import Popular from './components/Popular';
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
          <div className='container'>
              <Battle />
            {/* <Popular /> */}
          </div>
      )
        
    }
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />)