
const jerryImage = document.querySelector('img')

let showScore = document.querySelector('.score')
const tomCursor = document.querySelector(".tom-cursor")
let changeSpeed = document.querySelector("#speed_select")


let score = 0

document.addEventListener('mouseenter', () =>{
    tomCursor.style.display = 'block'
})

document.addEventListener('mouseleave', () =>{
    tomCursor.style.display = 'none'
})

document.addEventListener('mousemove', TrackCursor)

function TrackCursor(evt){
    tomCursor.style.transform = `translate(${evt.clientX - 30}px, ${evt.clientY - 260}px)`
}

setInterval(() => {
    let top = Math.random() * innerWidth
    let left = Math.random() * innerHeight

    jerryImage.style = `
    position: absolute;
    left: ${top}px;
    top: ${left}px;
    transition: 0.5s;
    `
}, 1500)

function medium(){
    setInterval(() => {
        let top = Math.random() * innerWidth
        let left = Math.random() * innerHeight
    
        jerryImage.style = `
        position: absolute;
        left: ${top}px;
        top: ${left}px;
        transition: 0.5s;
        `
    }, 800)
}

function hard(){
    setInterval(() => {
        let top = Math.random() * innerWidth
        let left = Math.random() * innerHeight
    
        jerryImage.style = `
        position: absolute;
        left: ${top}px;
        top: ${left}px;
        transition: 0.5s;
        `
    }, 800)
}

if(changeSpeed.value == 800){
    medium()
}

if(changeSpeed.value == 500){
    hard()
}


document.addEventListener('click', (e) =>{
    if(e.target.getAttribute('id') == 'jerry-image'){
        // console.log('you get score');
        result = score += 1
        showScore.textContent = `Your score: ${result}`
    }
})  
changeSpeed.addEventListener('mouseenter', () =>{
    tomCursor.style.display = 'none'
})

changeSpeed.addEventListener('mouseleave', () =>{
    tomCursor.style.display = 'block'
})