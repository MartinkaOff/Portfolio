import Hello from '../hello/Hello';
import About from '../about/About';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';

import './app.scss';

const App = () => {
    return (
         <div className="app">
             <Hello/>
             <About/>
             <Skills/>
             <Projects/>
         </div>
    )
}

export default App;