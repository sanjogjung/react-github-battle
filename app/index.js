import React from 'react'
import { createRoot } from 'react-dom/client';
import Battle from './components/Battle';
import Popular from './components/Popular';
import './index.css'
import { ThemeProvider, ThemeConsumer } from './contexts/theme'
import Nav from './components/Nav';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Results from './components/Results';
import { Switch } from 'react-router-dom'

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
        <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className='container'>
              <Nav />

              <Switch>
                <Route exact path="/" component={Popular}/>
                <Route exact path="/battle" component={Battle} />
                <Route path="/battle/results" component={Results}/>
                <Route render={()=> <h1>404</h1>}/>
              </Switch>
            </div>
          </div>
        </ThemeProvider>
        </Router>
      )}
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />)