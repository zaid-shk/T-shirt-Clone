let sun = document.querySelector('#dark #sun')
let moon = document.querySelector('#dark #moon')
sun.addEventListener('click',function(){
    if(sun.style.display = 'none'){
        console.log("Dark mode")
        sun.style.display = 'block'
    }else{
        sun.style.display = 'none'
    }
})
moon.addEventListener('click',function(){
    if(moon.style.display = 'none'){
        moon.style.display = 'block'
        console.log('')
    }else{
        moon.style.display = 'none'
    }
})
