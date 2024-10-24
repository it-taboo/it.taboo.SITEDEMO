import './styles/app.css';

import { useState } from 'react/cjs/react.development'
import './styles/sidebar.css'

import MainPage from './pages/MainPage.jsx';
import Calculator from './pages/Calculator.jsx';
import Divination from './pages/Divination.jsx';
import Sidebar from './pages/global/sidebar.jsx';
import Tests from './pages/Tests';
import TicTacToe from './pages/TicTacToe';

import Snowfall from 'react-snowfall';

import { HashRouter, Link, Route, Routes, useLocation} from 'react-router-dom';

import lightColors from './arrays/lightcolors';
import darkColors from './arrays/darkcolors';
import rusTexts from './arrays/rustexts';
import engTexts from './arrays/engtexts';
import Hangman from './pages/hangman';
import TextQuest from './pages/TextQuest';

function CurrentPage() {
  const location = useLocation(); // useLocation работает только внутри компонентов, обёрнутых в Router

  return (
    <div>
      {/*location.pathname === '/' && <p>Текущий путь: {location.pathname}</p> <p>Ты на главной странице</p>*/}
      {location.pathname === '/calculator' && <Snowfall color = "white" className = 'snowfall'/>}
    </div>
  );
}

function App() {
    const [translate, changeTr] = useState('Русский')
    const [colors, changeColors] = useState(lightColors)
    const [lang, changeLang] = useState(rusTexts)

    const [theme, changeTheme] = useState(lang.app['2'])
    const [opacity, chOp] = useState('0')
    const [opacity2, chOp2] = useState('0')
    const [left, chLeft] = useState('0px')
    const [left2, chLeft2] = useState('0px')
    const [width, chWidth] = useState('0px')
    const [width2, chWidth2] = useState('0px')
    const [width3, chWidth3] = useState('0px')
    const [trans, chTrans] = useState('all 0s')

    const [tumbler, chTubmler] = useState('-185px')

    const [clickable, chClick] = useState(false)

    function changeTheme1() {
        if(theme === 'Светлая' || theme === 'Light') {
            changeColors(darkColors)
            if(lang === rusTexts) {
                changeTheme('Тёмная')
            }
            if(lang === engTexts) {
                changeTheme('Dark')
            }
        }
        if(theme === 'Тёмная' || theme === 'Dark') {
            changeColors(lightColors)
            if(lang === rusTexts) {
                changeTheme('Светлая')
            }
            if(lang === engTexts) {
                changeTheme('Light')
            }
        }
    }

    function changeTheme2() {
        chTrans('all 1s')

        chOp('0.4')
        chLeft('-185px')
        chLeft2('-245px')
        chWidth('165px')
        chWidth2('50px')
        chWidth3('82.5px')
        chOp2('1')

        chClick(true)
    }

    function close() {
        chOp('0')
        chOp2('0')
        chLeft('0px')
        chLeft2('0px')
        chWidth('0px')
        chWidth2('0px')
        chWidth3('0px')
        chTrans('all 1s')
        chClick(false)
    }

    function langChange(tr) {
        if(clickable === true) {
            if(tr === 'English') {
                changeLang(engTexts)
                changeTr('English')
                let newTheme = ''
                switch(theme) {
                    case 'Светлая':
                        newTheme = 'Light'
                        break
                    case 'Тёмная':
                        newTheme = 'Dark'
                        break
                    default: 
                        break
                }
                changeTheme(newTheme)
                chTubmler('-102.5px')
            }
            if(tr === 'Русский') {
                changeLang(rusTexts)
                changeTr('Русский')
                let newTheme = ''
                switch(theme) {
                    case 'Light':
                        newTheme = 'Светлая'
                        break
                    case 'Dark':
                        newTheme = 'Тёмная'
                        break
                    default: 
                        break
                }
                changeTheme(newTheme)
                chTubmler('-185px')
            }
        }
    }
    //fire-alt burn
    return (
        <HashRouter>
            <div className = 'App'>
                {/* 
                <div className = 'theme'>
                    <div className = 'main-select'>
                        <div className = 'lang'>
                            <div style = {{background: colors['gradient1'][0]}} className = 'select' onClick = {changeTheme2}>
                                <p>{lang.app['4']}</p>
                            </div>
                            <div className = 'button' style = {{opacity: opacity, marginLeft: left2, width: width2, transition: trans}} onClick = {close}>
                                <i className = 'fas fa-arrow-right'></i>
                            </div>
                            <div className = 'buttons' style = {{opacity: opacity, marginLeft: left, width: width, transition: trans}}>
                                <div className = 'lang-btn' onClick = {() => {langChange('Русский')}} style = {{opacity: opacity2}}>
                                    <p>Рус</p>
                                </div>
                                <div className = 'lang-btn' onClick = {() => {langChange('English')}} style = {{opacity: opacity2}}>
                                    <p>Eng</p>
                                </div>
                                <div className = 'tumbler' style = {{left: tumbler, width: width3}}></div>
                            </div>
                        </div>
                        <div style = {{background: colors['gradient1'][0]}} className = 'select' onClick = {changeTheme1}>
                            <p>{lang.app['0']}</p>
                        </div>
                    </div>
                    <p style = {{color: colors['text']}}>{lang.app['1']} {theme}</p>
                </div>
                */ }
                <Sidebar colors = {colors} text = {lang}/>
                {/*<Snowfall color = "white" className = 'snowfall'/>*/}
                
                <Routes>
                    <Route path = '/' element = {<MainPage colors = {colors} text = {lang}/>}></Route>
                    <Route path = '/calculator' element = {<Calculator colors = {colors} text = {lang}/>}></Route>
                    <Route path = '/divination' element = {<Divination colors = {colors} text = {lang}/>}></Route>
                    <Route path = '/tic-tac-toe' element = {<TicTacToe/>}></Route>
                    <Route path = '/hangman' element = {<Hangman/>}></Route>
                    <Route path = '/tests' element = {<Tests/>}></Route>
                </Routes>
            </div>
        <CurrentPage/>
        </HashRouter>
    );
}

export default App;