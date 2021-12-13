import '../styles/mainpage.css';

import Tilt from 'react-vanilla-tilt'

const MainPage = (props) => {
    return (
        <div className = 'main' style = {{background: props.bg}}>
            <div className = 'circle3' style = {{background: props.lc[2]}}></div>
            <div className = 'circle4' style = {{background: props.lc[1]}}></div>
            <div className = 'circle5' style = {{background: props.lc[1]}}></div>
            <div className = 'circle6' style = {{background: props.lc[0]}}></div>
            <div className = 'circle7' style = {{background: props.lc[2]}}></div>
            <h1 className = 'main-title' style = {{color: props.h1col}}>Добро пожаловать!</h1>

            <div className = 'content'>
                <h2 style = {{color: props.textcol}}>На этом сайте вы найдете:</h2>
                    <div className = 'main-calc main-el b11'>
                        <h3 style = {{color: props.textcol}}>Калькулятор</h3>
                        <p style = {{color: props.textcol}} className = 'main-p a1'>Многофункциональный калькулятор, который может выполнить простейшие операции, начиная от сложения - заканчивая дробью.</p>
                        <div className = 'mini-calc mini'>
                            <input style = {{color: props.textcol}} readOnly value = '34+6'></input>
                            <button style = {{color: props.textcol}}>1</button>
                            <button style = {{color: props.textcol}}>C</button>
                            <button style = {{color: props.textcol}} className = 'c1'>2</button>
                            <button style = {{color: props.textcol}} className = 'c2'>=</button>
                        </div>
                    </div>
                <div className = 'main-weather main-el b12'>
                    <h3 style = {{color: props.textcol}}>Прогноз погоды</h3>
                    <p style = {{color: props.textcol}} className = 'main-p a2'>Прогноз погоды на сегодня, статистика включая закат и рассвет, а также дальнейшая погода на 5 дней.</p>
                    <div className = 'mini-weather mini'>
                        <p style = {{color: props.textcol}} className = 'd1'>Париж</p>
                        <p style = {{color: props.textcol}} className = 'd2'>15°C</p>
                        <p style = {{color: props.textcol}} className = 'd3'>28.04</p>
                    </div>
                </div>
                <div className = 'main-chem main-el b13'>
                    <h3 style = {{color: props.textcol}}>Таблица менделеева</h3>
                    <p style = {{color: props.textcol}} className = 'main-p a3'>Периодическая таблица химических элементов Д. И. Менделеева, во всей красе в которой была, только лучше! Также у каждого элемента есть краткая характеристика.</p>
                    <div className = 'mini-chem mini'>
                        <div className="chem-title"></div>
                        <div className="chem-el">
                            <p className="chem-p"></p>
                            <p className="chem-num"></p>
                        </div>
                        <div className="chem-el">
                            <p className="chem-p"></p>
                            <p className="chem-num"></p>
                        </div>
                        <div className="chem-el">
                            <p className="chem-p"></p>
                            <p className="chem-num"></p>
                        </div>
                        <div className="chem-el">
                            <p className="chem-p"></p>
                            <p className="chem-num"></p>
                        </div>
                        <div className="chem-el">
                            <p className="chem-p"></p>
                            <p className="chem-num"></p>
                        </div>
                        <div className="chem-el">
                            <p className="chem-p"></p>
                            <p className="chem-num"></p>
                        </div>
                        <div className="chem-el">
                            <p className="chem-p"></p>
                            <p className="chem-num"></p>
                        </div>
                    </div>
                </div>
                <div className = 'main-game main-el b14'>
                    <h3 style = {{color: props.textcol}}>Развлечения</h3>
                    <p style = {{color: props.textcol}} className = 'main-p a4'>Развлечения на любой вкус и цвет. От гадания по картам до крестиков-ноликов!</p>
                    <div className = 'mini-game mini'></div>
                </div>
            </div>
        </div>
    )
}

export default MainPage;