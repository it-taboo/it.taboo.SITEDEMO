import { useState } from 'react/cjs/react.development'
import '../../styles/sidebar.css'

import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import logo from './../../images/logo.png'

let current = 'MainPage'

const Sidebar = (props) => {
    const [width, chWidth] = useState('60px')
    const [opacity, chOpacity] = useState('0%')
    const [opacity2, chOpacity2] = useState('0%')
    const [bg, chBg] = useState('rgba(0, 0, 0, 0)')
    const [zi, chZi] = useState('0')
    const [trans, chTrans] = useState('all 0.5s')
    const folder = 'fas fa-folder'
    const folderOpen = 'fas fa-folder-open'
    const [currentFolder, chFolder] = useState(folder)
  
    const [height, chHeight] = useState('0px')

    function change() {
        if(width === '60px') {
            console.log('0')
            chWidth('270px')
            chOpacity('100%')
            chTrans('all 1s')
            chBg('rgba(0, 0, 0, 0.5)')
            chZi('0')
            chFolder(folderOpen)
        } else {
            chWidth('60px')
            chHeight('0px')
            chOpacity('0%')
            chOpacity2('0%')
            chTrans('all 0.5s')
            chBg('rgba(0, 0, 0, 0)')
            chZi('0')
            chFolder(folder)
        }
    }

    function change2() {
        if(height === '0px') {
            chHeight('180px')
            chOpacity2('100%')
        } else {
            chHeight('0px')
            chOpacity2('0%')
        }
    }

    function calcReturn() {
        current = 'Calculator'
        console.log(current)
    }
    return (
        <div className='navhover'>
            <nav className = 'navtop'>
                <div className="el" style = {{transition: trans}}>
                    <img className='ittaboo-logo' src={logo}></img>
                    <Link className="name calcul" to = '/calculator'>Инструменты</Link>
                    <p className = "name p-name">|</p>
                    <Link className="name calcul" to = '/calculator'>О нас</Link>
                    <p className = "name p-name">|</p>
                    <Link className="name calcul" to = '/calculator'>Соцсети и Контакты</Link>
                    <p className = "name p-name">|</p>
                    <Link className="name calcul" to = '/calculator'>Донаты</Link>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar;