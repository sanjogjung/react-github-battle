import React from 'react'
import { createRoot } from 'react-dom/client';
import Battle from './components/Battle';
import Popular from './components/Popular';
import './index.css'
import { ThemeProvider, ThemeConsumer } from './contexts/theme'
import Nav from './components/Nav';


class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            theme: 'light',
            toggleTheme: ()=> {
                this.setState(({ theme }) => ({
                   theme: theme === 'light' ? "dark": "light"
                }))
            }
        }
    }

    render() {
      return (
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className='container'>
              <Nav />
              <Battle />
            </div>
          </div>
        </ThemeProvider>

      )
        
    }
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />)