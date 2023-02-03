import './hello.scss';

const Hello = () => {
    return (
        <div className="hello">
            <div className="hello__info">
                Здраствуйте, меня зовут 
                <br /> <br />
                <span>Газизов Ильдар</span>
                <br />
                <div className='hello__info-gray'>Я начинающий Frontend разработчик</div>
                <div className="hello__info-descr">
                    Мне нравится изучать технологии и постоянно пробовать что-то новое. Мой репозиторий на <a href="https://github.com/MartinkaOff?tab=repositories">GitHub</a>.
                </div>
                
            </div>
        </div>
    )
}

export default Hello;