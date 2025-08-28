let sun = document.querySelector('#dark #sun')
let moon = document.querySelector('#dark #moon')
sun.addEventListener('click',function(){
    if(sun.style.display = 'none'){
        moon.style.display = "block"
        console.log('Dark Mode')
    }else{
        sun.style.display = 'block'
        moon.style.display = 'none'
    }
})
moon.addEventListener('click',function(){
    if(moon.style.display = 'none'){
        sun.style.display = 'block'
        console.log('Light Mode')
    }else{
        moon.style.display = 'block'
        sun.style.display = 'none'
    }
})