const sky = document.querySelector('.sky')

function createSnow() {
    const snow = document.createElement('div')
    sky.append(snow)
    snow.classList.add('snowflake')
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

setInterval(() => {
    createSnow()
}, 50)

/*function createDrop() {
    const drop = document.createElement('div')
    sky.append(drop)
    drop.classList.add('raindrop')
    console.log('Была создана новая капля')
    let m = Math.floor(Math.random() * 100)
    console.log(m)
    let w = Math.floor(Math.random() * 100)
    console.log(w)
    if(15 < w && w < 30) {
        drop.style.opacity = '0.5'
        drop.style.animation = 'dropfall 2s'
    } 
    if(w < 15) {
        drop.style.opacity = '0.5'
        drop.style.animation = 'dropfall 4s'
    }
    drop.style.left = `${m}%`
}

setInterval(() => {
    createDrop()
}, 1)*/