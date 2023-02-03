import Hello from '../hello/Hello';
import About from '../about/About';
import Skills from '../skills/Skills';

import './app.scss';

const App = () => {
    return (
         <div className="app">
             <Hello/>
             <About/>
            <Skills/>
         </div>
    )
}

export default App;