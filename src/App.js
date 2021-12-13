import './styles/app.css';

import { useState } from 'react/cjs/react.development'
import './styles/sidebar.css'

import MainPage from './pages/MainPage.jsx';
import Calculator from './pages/Calculator.jsx';
import Divination from './pages/Divination.jsx';
import Sidebar from './pages/global/sidebar.jsx';
import Tests from './pages/Tests';

import CurPage from './pages/Current.jsx';

import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';

function App() {
    const [darkColors, changeDark] = useState(['linear-gradient(90deg, #3c61c9, #243cc4)', 'linear-gradient(90deg, #243cc4, rgb(41, 26, 173))', 'linear-gradient(90deg, rgb(41, 26, 173), #28057a)', 'linear-gradient(90deg, #3c61c9, #243cc4, rgb(41, 26, 173), #28057a)'])
    const [lightColors, changeLight] = useState(['linear-gradient(90deg, #80a2ff, #3e5bff)', 'linear-gradient(90deg, #5770ff, #2824ff)', 'linear-gradient(90deg, #423fff, #4b18c2)'])
    const [textColor, changeTextColor] = useState('')
    const [theme, changeTheme] = useState('Светлая')
    const [background, changeBg] = useState('#e6e6ff')
    const [h1col, changeH1] = useState('rgb(31, 84, 255)')

    const [opacity1, changeOpacity1] = useState('rgba(0, 0, 0, 0.082)')

    const [calcbg, changeCalc] = useState('transparent')
    const [calccol, changeCalccol] = useState('rgba(0, 0, 0, 0.4)')

    const [sidebarBg, changeSidebar] = useState('linear-gradient(110deg, #7da0ff 15%, #3700ff)')
    
    function changeTheme1() {
        if(theme === 'Светлая') {
            changeTheme('Тёмная')
            changeTextColor('#ff59a6')
            changeBg('#220115')
            changeDark(['linear-gradient(90deg, #b82e73, #cc1e83)', 'linear-gradient(90deg, #b31a85, #490b9b)', 'linear-gradient(90deg, #580eac, #3706a8)', 'linear-gradient(90deg, #b82e73, #cc1e83, #580eac, #3706a8)'])
            changeLight(['linear-gradient(90deg, #ff80c0, #ff3eaf)', 'linear-gradient(90deg, #ff57cd, #8324ff)', 'linear-gradient(90deg, #993fff, #5107ff)'])
            changeH1('rgb(255, 36, 120)')

            changeOpacity1('rgba(0, 0, 0, 0.5)')
            changeCalc('rgba(255, 255, 255, 0.05)')
            changeCalccol('rgba(255, 255, 255, 0.4)')

            changeSidebar('linear-gradient(110deg, #ff4e98 15%, #b700ff)')
        }
        if(theme === 'Тёмная') {
            changeTheme('Светлая')
            changeTextColor('#596dff')
            changeBg('#e6e6ff')
            changeDark(['linear-gradient(90deg, #3c61c9, #243cc4)', 'linear-gradient(90deg, #243cc4, rgb(41, 26, 173))', 'linear-gradient(90deg, rgb(41, 26, 173), #28057a)', 'linear-gradient(90deg, #3c61c9, #243cc4, rgb(41, 26, 173), #28057a)'])
            changeLight(['linear-gradient(90deg, #80a2ff, #3e5bff)', 'linear-gradient(90deg, #5770ff, #2824ff)', 'linear-gradient(90deg, #423fff, #4b18c2)'])
            changeH1('rgb(31, 84, 255)')

            changeOpacity1('rgba(0, 0, 0, 0.082)')
            changeCalc('transparent')
            changeCalccol('rgba(0, 0, 0, 0.4)')

            changeSidebar('linear-gradient(110deg, #7da0ff 15%, #3700ff)')
        }
        console.log('Тема сменена на ' + theme)
    }
    return (
        <BrowserRouter>
            <div className = 'App'>
                <div className = 'theme'>
                    <div style = {{background: lightColors[0]}} className = 'select' onClick = {changeTheme1}>
                        <p>Сменить тему</p>
                    </div>
                    <p style = {{color: textColor}}>Тема: {theme}</p>
                </div>
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>

                <Sidebar bg = {sidebarBg}/>
                
                <Routes>
                    <Route path = '/' element = {<MainPage bg = {background} h1col = {h1col} textcol = {textColor} lc = {lightColors}/>}></Route>
                    <Route path = '/calculator' element = {<Calculator h1col = {h1col} lc = {lightColors} bg = {background} calcbg = {calcbg} calccol = {calccol}/>}></Route>
                    <Route path = '/divination' element = {<Divination textcol = {textColor} bg = {background} dc = {darkColors} lc = {lightColors} h1col = {h1col} opacity = {opacity1}/>}></Route>
                    <Route path = '/tests' element = {<Tests/>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;