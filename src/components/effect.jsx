import { useRef } from "react/cjs/react.development"

const Effect = (props) => {
    const sky = useRef('#sky')

    function createSnow() {
        const snow = document.createElement('div')
        //sky.append(snow)
        //snow.classList.add('snowflake')
        console.log('Была создана новая снежинка')
        let m = Math.floor(Math.random() * 100)
        console.log(m)
        let w = Math.floor(Math.random() * 100)
        console.log(w)
        if(15 < w && w < 30) {
            snow.style.opacity = '0.5'
            snow.style.animation = 'snowfall 8s'
            snow.style.width = `${w}px`
            snow.style.height = `${w}px`
        } 
        if(w < 15) {
            snow.style.opacity = '0.5'
            snow.style.animation = 'snowfall 8s'
            snow.style.width = `${w * 1.5}px`
            snow.style.height = `${w * 1.5}px`
        }
        snow.style.left = `${m}%`
    }
    return (
        <div className = 'main'>
            <div id = 'sky'></div>
            {setInterval(() => {
                createSnow()
            }, 50)}
        </div>
    )
}

export default Effect;