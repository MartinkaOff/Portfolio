

import './skills.scss';
import html from './assets/html5.svg';
import css from './assets/css3.svg';
import js from './assets/js.svg';
import dots from './assets/dots.svg';

const Skills = () => {
    
    const DropList = (selector, downDrop) => {
        let item = document.querySelector(selector),
            plus = document.querySelector(downDrop);

        if (item.classList.contains('down')) {
            item.classList.add('up');
            item.classList.remove('down');
            

            plus.classList.remove('active');
            plus.classList.add('inActive');
            

        } else {
            item.classList.remove('up');
            item.classList.add('down');
            

            plus.classList.remove('inActive');
            plus.classList.add('active');
        }
    }

    return (
        <div className="skills">
            <div className=" header skills__header"><span>0.2.</span> МОИ НАВЫКИ </div>

        {/* HTML */}

        <div className="skills__item skills__item-html">
                <div onClick={() => DropList('.skills__item-html', '.plus-html')}  className='skills__item-wrapper'>
                    <div   style={{'display' : 'flex', 'alignItems' : 'center'}}>
                        <img src={html} alt="" className="skills__item-icon" />
                        <div className="skills__name skills__name-html">
                            HTML
                        </div>
                    </div>
                    <div className="plus plus-html">+</div>
                </div>
                <div className="skills__name-item skills__name-item-html">
                    <div className="skills__name-subitem">
                        <span>Другое</span>
                        <br />
                        HTML5
                    </div>
                </div>
            </div>

        {/* CSS */}

            <div className="skills__item skills__item-css">
                <div onClick={() => DropList('.skills__item-css', '.plus-css')}  className='skills__item-wrapper'>
                    <div   style={{'display' : 'flex', 'alignItems' : 'center'}}>
                        <img src={css} alt="" className="skills__item-icon" />
                        <div className="skills__name skills__name-css">
                            Css
                        </div>
                    </div>
                    <div className="plus plus-css">+</div>
                </div>
                <div className="skills__name-item skills__name-item-css">
                    <div className="skills__name-subitem">
                        <span>Препроцессоры</span>
                        <br />
                        SASS/SCSS, Less
                    </div>
                    <div className="skills__name-subitem">
                        <span>Фреймворки</span>
                        <br />
                        Bootstrap
                    </div>
                    <div className="skills__name-subitem">
                        <span>Другое</span>
                        <br />
                        CSS3
                    </div>
                </div>
            </div>

        {/* JS */}

            <div className="skills__item skills__item-js">
                <div onClick={() => DropList('.skills__item-js', '.plus-js')}  className='skills__item-wrapper'>
                    <div   style={{'display' : 'flex', 'alignItems' : 'center'}}>
                        <img src={js} alt="" className="skills__item-icon" style={{'width' : '48px'}} />
                        <div className="skills__name skills__name-js" style={{'margin-left' : '5px'}}>
                            JavaScript
                        </div>
                    </div>
                    <div className="plus plus-js">+</div>
                </div>
                <div className="skills__name-item skills__name-item-js">
                    <div className="skills__name-subitem">
                        <span>Библиотеки</span>
                        <br />
                        React, JQuery
                    </div>
                    <div className="skills__name-subitem">
                        <span>Другое</span>
                        <br />
                        JavaScript
                    </div>
                </div>
            </div>

        {/* Разное */}

            <div className="skills__item skills__item-different">
                <div onClick={() => DropList('.skills__item-different', '.plus-different')}  className='skills__item-wrapper'>
                    <div   style={{'display' : 'flex', 'alignItems' : 'center'}}>
                        <img src={dots} alt="" className="skills__item-icon" style={{'width' : '48px'}} />
                        <div className="skills__name skills__name-different" style={{'margin-left' : '5px'}}>
                            Разное
                        </div>
                    </div>
                    <div className="plus plus-different">+</div>
                </div>
                <div className="skills__name-item skills__name-item-different">
                    <div className="skills__name-subitem">
                        <span>Дизайн</span>
                        <br />
                        Figma
                    </div>
                    <div className="skills__name-subitem">
                        <span>OС</span>
                        <br />
                        Windows
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;