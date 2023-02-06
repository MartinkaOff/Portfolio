

import './projects.scss';

const Projects = () => {
    return (
        <div className="projects">
            <div className=" header projects__header"><span>0.3.</span> ПРОЕКТЫ </div>
            <div className="projects__items">
                <div className="projects__item">
                    <div className="projects__info">
                        <div className="projects__item-title">Car Tuning</div>
                        <div className="projects__item-descr">Landing page about car tuning</div>
                        <div className="projects__item-links">
                            <a href='https://github.com/MartinkaOff/CarTuning.github.io' className="projects__item-rep">Открыть репозиторий</a>
                            <a href='/projects/car' className="projects__item-view">Демо</a>
                        </div>
                        <div className="projects__item-techs">
                            <div className="projects__item-tech">JS</div>
                            <div className="projects__item-tech">Webpack + Gulp</div>
                        </div>
                    </div>
                </div>
                <div className="projects__item">
                    <div className="projects__info">
                        <div className="projects__item-title">Marvel API</div>
                        <div className="projects__item-descr">An application that uses the Marvel API</div>
                        <div className="projects__item-links">
                            <a href='https://github.com/MartinkaOff/MarvelApi' className="projects__item-rep">Открыть репозиторий</a>
                            <a href='/projects/marvelApi' className="projects__item-view">Демо</a>
                        </div>
                        <div className="projects__item-techs">
                            <div className="projects__item-tech">React</div>
                        </div>
                    </div>
                </div>
                <div className="projects__item">
                    <div className="projects__info">
                        <div className="projects__item-title">Parallax Test</div>
                        <div className="projects__item-descr">Website with parallax effect</div>
                        <div className="projects__item-links">
                            <a href='https://github.com/MartinkaOff/ParallaxTest.github.io' className="projects__item-rep">Открыть репозиторий</a>
                            <a href='/projects.parallaxTest' className="projects__item-view">Демо</a>
                        </div>
                        <div className="projects__item-techs">
                            <div className="projects__item-tech">JS</div>
                        </div>
                    </div>
                </div>
                <div className="projects__item">
                    <div className="projects__info">
                        <div className="projects__item-title">Pulse</div>
                        <div className="projects__item-descr">A simple landing page with little logic</div>
                        <div className="projects__item-links">
                            <a href='https://github.com/MartinkaOff/Pulse' className="projects__item-rep">Открыть репозиторий</a>
                            <a href='/projects/pulse' className="projects__item-view">Демо</a>
                        </div>
                        <div className="projects__item-techs">
                            <div className="projects__item-tech">JS</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;