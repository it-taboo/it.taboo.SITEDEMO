const Input = (props) => {
    return (
        <input className = 'textarea' onChange = {event => {props.getAnswer(event.target.value)}}></input>
    )
}

export default Input;