import '../../styles/calc.css';
import Input from './in-out-window';

const Button = (props) => {
    if(props.twoBlocks === 'True') {
        return (
            <div className = 'btn two-blocks'>{props.number}</div>
        )
    } else {
        return (
            <div className = 'btn' onClick = {() => {props.getAnswer(props.number)}}>{props.number}</div>
        )
    }
}

export default Button;