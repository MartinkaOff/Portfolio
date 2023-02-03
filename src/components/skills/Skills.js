

import './skills.scss';

const Skills = () => {
    
    const DropList = () => {
        let item = document.querySelector('.skills__html-item');


        if (item.classList.contains('down')) {
            item.classList.remove('down');
            item.classList.add('up');
        } else {
            item.classList.remove('up');
            item.classList.add('down');
        }
    }

    return (
        <div className="skills">
            <div className="skills__header"><span>0.2</span> МОИ НАВЫКИ </div>
            <div className="skills__item">
                <div className="skills__html" onClick={DropList}>HTML</div>
                <div className="skills__html-item">
                    HTML 5
                </div>
            </div>
        </div>
    )
}

export default Skills;