import { useRef } from "react"
import { useState } from "react/cjs/react.development"
import Cell from "./cell.jsx"

const Board = (props) => {
    const winCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const winLine = useRef()

    const [list, changeList] = useState(['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'])
    const [player, changePl] = useState(true)
    const [playable, changePla] = useState(true)

    const [tttInfo, changeInfo] = useState('Выйграйте бота')

    function winner(winCombo) {
        changePla(false)
        changeInfo(winCombo)
    } 

    function updateData() {
        if(playable === true) {
            if(list[winCombos[0][0]] === 'times' && list[winCombos[0][1]] === 'times' && list[winCombos[0][2]] === 'times') {
                winLine.current.style.top = '46px'
                winLine.current.style.animation = 'winLine 0.9s infinite'
                winner('Крестики стоят в ряду!')
            }
            if(list[winCombos[1][0]] === 'times' && list[winCombos[1][1]] === 'times' && list[winCombos[1][2]] === 'times') {
                winLine.current.style.top = '150px'
                winLine.current.style.animation = 'winLine 0.9s infinite'
                winner('Крестики стоят в ряду!')
            }
            if(list[winCombos[2][0]] === 'times' && list[winCombos[2][1]] === 'times' && list[winCombos[2][2]] === 'times') {
                winLine.current.style.top = '250px'
                winLine.current.style.animation = 'winLine 0.9s infinite'
                winner('Крестики стоят в ряду!')
            }

            if(list[winCombos[3][0]] === 'times' && list[winCombos[3][1]] === 'times' && list[winCombos[3][2]] === 'times') {
                winLine.current.style.top = '146px'
                winLine.current.style.left = '-108px'
                winLine.current.style.transform = 'rotate(90deg)'
                winLine.current.style.animation = 'winLine 0.9s infinite'
                winner('Крестики стоят в ряду!')
            }
            if(list[winCombos[4][0]] === 'times' && list[winCombos[4][1]] === 'times' && list[winCombos[4][2]] === 'times') {
                winLine.current.style.top = '146px'
                winLine.current.style.left = '-3px'
                winLine.current.style.transform = 'rotate(90deg)'
                winLine.current.style.animation = 'winLine 0.9s infinite'
                winner('Крестики стоят в ряду!')
            }
            if(list[winCombos[5][0]] === 'times' && list[winCombos[5][1]] === 'times' && list[winCombos[5][2]] === 'times') {
                winLine.current.style.top = '146px'
                winLine.current.style.left = '99px'
                winLine.current.style.transform = 'rotate(90deg)'
                winLine.current.style.animation = 'winLine 0.9s infinite'
                winner('Крестики стоят в ряду!')
            }

            if(list[winCombos[6][0]] === 'times' && list[winCombos[6][1]] === 'times' && list[winCombos[6][2]] === 'times') {
                winLine.current.style.top = '146px'
                winLine.current.style.left = '-47px'
                winLine.current.style.transform = 'rotate(45deg)'
                winLine.current.style.width = '400px'
                winLine.current.style.animation = 'winLine 0.9s infinite'
                winner('Крестики стоят в ряду!')
            }
            if(list[winCombos[7][0]] === 'times' && list[winCombos[7][1]] === 'times' && list[winCombos[7][2]] === 'times') {
                winLine.current.style.top = '146px'
                winLine.current.style.left = '-47px'
                winLine.current.style.transform = 'rotate(-45deg)'
                winLine.current.style.width = '400px'
                winLine.current.style.animation = 'winLine 0.9s infinite'
                winner('Крестики стоят в ряду!')
            }
        }

        let rand = Math.floor(Math.random() * 9)
        changePl(!player)

        if(list.includes('none') && playable === true) {
            if(list[rand] === 'none') {
                let arr = list
                arr[rand] = 'circle'
                changeList(arr)
            } else {
                updateData()
            }
        }

        if(playable === true) {
            if(list[winCombos[0][0]] === 'circle' && list[winCombos[0][1]] === 'circle' && list[winCombos[0][2]] === 'circle') {
                winLine.current.style.top = '46px'
                winLine.current.style.animation = 'winLine 0.9s infinite'
                winner('Нолики стоят в ряду!')
            }
            if(list[winCombos[1][0]] === 'circle' && list[winCombos[1][1]] === 'circle' && list[winCombos[1][2]] === 'circle') {
                winLine.current.style.top = '150px'
                winLine.current.style.animation = 'winLine 0.9s infinite'
                winner('Нолики стоят в ряду!')
            }
            if(list[winCombos[2][0]] === 'circle' && list[winCombos[2][1]] === 'circle' && list[winCombos[2][2]] === 'circle') {
                winLine.current.style.top = '250px'
                winLine.current.style.animation = 'winLine 0.9s infinite'
                winner('Нолики стоят в ряду!')
            }

            if(list[winCombos[3][0]] === 'circle' && list[winCombos[3][1]] === 'circle' && list[winCombos[3][2]] === 'circle') {
                winLine.current.style.top = '146px'
                winLine.current.style.left = '-108px'
                winLine.current.style.transform = 'rotate(90deg)'
                winLine.current.style.animation = 'winLine 0.9s infinite'
                winner('Нолики стоят в ряду!')
            }
            if(list[winCombos[4][0]] === 'circle' && list[winCombos[4][1]] === 'circle' && list[winCombos[4][2]] === 'circle') {
                winLine.current.style.top = '146px'
                winLine.current.style.left = '-3px'
                winLine.current.style.transform = 'rotate(90deg)'
                winLine.current.style.animation = 'winLine 0.9s infinite'
                winner('Нолики стоят в ряду!')
            }
            if(list[winCombos[5][0]] === 'circle' && list[winCombos[5][1]] === 'circle' && list[winCombos[5][2]] === 'circle') {
                winLine.current.style.top = '146px'
                winLine.current.style.left = '99px'
                winLine.current.style.transform = 'rotate(90deg)'
                winLine.current.style.animation = 'winLine 0.9s infinite'
                winner('Нолики стоят в ряду!')
            }

            if(list[winCombos[6][0]] === 'circle' && list[winCombos[6][1]] === 'circle' && list[winCombos[6][2]] === 'circle') {
                winLine.current.style.top = '146px'
                winLine.current.style.left = '-47px'
                winLine.current.style.transform = 'rotate(45deg)'
                winLine.current.style.width = '400px'
                winLine.current.style.animation = 'winLine 0.9s infinite'
                winner('Нолики стоят в ряду!')
            }
            if(list[winCombos[7][0]] === 'circle' && list[winCombos[7][1]] === 'circle' && list[winCombos[7][2]] === 'circle') {
                winLine.current.style.top = '146px'
                winLine.current.style.left = '-47px'
                winLine.current.style.transform = 'rotate(-45deg)'
                winLine.current.style.width = '400px'
                winLine.current.style.animation = 'winLine 0.9s infinite'
                winner('Нолики стоят в ряду!')
            }
        }
    }

    //frame 

    return (
        <div className = 'grid-main'>
            <p className = 'ttt-info'>{tttInfo}</p>
            <div className = 'grid-ttt'>
                <div className = 'win-line' ref = {winLine}></div>
                <Cell num = '1' update = {updateData} list = {list} chlist = {changeList} playable = {playable}/>
                <Cell num = '2' update = {updateData} list = {list} chlist = {changeList} playable = {playable}/>
                <Cell num = '3' update = {updateData} list = {list} chlist = {changeList} playable = {playable}/>
                <Cell num = '4' update = {updateData} list = {list} chlist = {changeList} playable = {playable}/>
                <Cell num = '5' update = {updateData} list = {list} chlist = {changeList} playable = {playable}/>
                <Cell num = '6' update = {updateData} list = {list} chlist = {changeList} playable = {playable}/>
                <Cell num = '7' update = {updateData} list = {list} chlist = {changeList} playable = {playable}/>
                <Cell num = '8' update = {updateData} list = {list} chlist = {changeList} playable = {playable}/>
                <Cell num = '9' update = {updateData} list = {list} chlist = {changeList} playable = {playable}/>
            </div>
        </div>
    )
}

export default Board