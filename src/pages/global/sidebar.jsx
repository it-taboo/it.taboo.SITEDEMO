import { useState } from 'react/cjs/react.development'
import '../../styles/sidebar.css'

import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';

let current = 'MainPage'

const Sidebar = (props) => {
    const [width, chWidth] = useState('60px')
    const [opacity, chOpacity] = useState('0%')
    const [opacity2, chOpacity2] = useState('0%')
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
            chFolder(folderOpen)
        } else {
            chWidth('60px')
            chHeight('0px')
            chOpacity('0%')
            chOpacity2('0%')
            chTrans('all 0.5s')
            chFolder(folder)
        }
    }

    function change2() {
        if(height === '0px') {
            chHeight('90px')
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
        <div className = 'sidebar' style = {{width: width, transition: trans, background: props.bg}}>
            <div className = 'header'>
                <i className={currentFolder} onClick = {change}></i>
                <p className="name" style = {{opacity: opacity}}>Меню</p>
            </div>
            <nav>
                <div className = 'elements'>
                    <div className="el" style = {{width: width, transition: trans}}>
                        <i className="fas fa-calculator"></i>
                        <Link className="name calcul" style = {{opacity: opacity}} to = '/calculator'>Калькулятор</Link>
                    </div>
                    <div className="el" style = {{width: width, transition: trans}}>
                        <i className="fas fa-gamepad"></i>
                        <p className="name game" style = {{opacity: opacity}} onClick = {change2}>Развлечения</p>
                    </div>

                    <div className = 'sub-el-div' style = {{height: height, opacity: opacity2}}>
                        <div className = 'sub-el' style = {{width: width, transition: trans}}>
                            <i className="fas fa-heart"></i>
                            <Link className="name game" style = {{opacity: opacity}} to = './divination'>Гадание по картам</Link>
                        </div>
                        <div className = 'sub-el' style = {{width: width, transition: trans}}>
                            <i className="fas fa-dice-five"></i>
                            <p className="name game" style = {{opacity: opacity}}>Рандомайзер</p>
                        </div>
                    </div>

                    <div className="el" style = {{width: width, transition: trans}}>
                        <i className="fas fa-cloud"></i>
                        <p className="name weather" style = {{opacity: opacity}}>Погода</p>
                    </div>
                    <div className="el" style = {{width: width, transition: trans}}>
                        <i className="fas fa-table"></i>
                        <p className="name table" style = {{opacity: opacity}}>Таблица менделеева</p>
                    </div>
                    <div className="el" style = {{width: width, transition: trans}}>
                        <i className="fas fa-file-alt"></i>
                        <Link className="name calcul" style = {{opacity: opacity}} to = '/tests'>Тесты</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar;