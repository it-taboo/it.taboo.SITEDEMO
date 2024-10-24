import Board from "../components/ttt/board"
import Cell from "../components/ttt/cell"
import './../styles/ttt.css'

const TicTacToe = (props) => {
    return (
        <div>
            <h1>кружочки в квадратиках</h1>
            <Board/>
        </div>
    )
}

export default TicTacToe