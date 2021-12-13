import Calculator from "./Calculator";
import MainPage from "./MainPage";


const CurPage = (props) => {
    let cur = <MainPage/>
    switch(props.cur) {
        case 'Calculator':
            return (
                <Calculator/>
            )
            break
        default:
            return (
                <MainPage/>
            )
    }
}

export default CurPage;