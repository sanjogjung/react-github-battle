import React from 'react'
import { FaLightbulb } from 'react-icons/fa'
import { ThemeConsumer } from '../contexts/theme'

export default function Nav () {
    return (
        <ThemeConsumer>
           {({ theme, toggleTheme}) => (
               <nav className='row space-between'>
                   <button
                     style={{fontSize: '30px'}}
                     className='btn btn-clear'
                     onClick={toggleTheme}
                   >
                       {theme === 'light' ? '🔦 ': '💡' }
                    </button>
               </nav>
           )}
        </ThemeConsumer>
    )
}