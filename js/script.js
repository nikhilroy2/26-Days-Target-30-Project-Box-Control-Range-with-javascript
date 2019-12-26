// variable
'use strict'

let radius = document.querySelector('#radius');
let border = document.querySelector('#border');
let outline = document.querySelector('#outline');
let shadow = document.querySelector('#shadow');
let opacity = document.querySelector('#opacity');
let scale = document.querySelector('#scale');
let demo_box = document.querySelector('.demo_box');


// radius
radius.oninput = ()=> {
    setInterval(()=> {
        demo_box.style.borderRadius = radius.value + 'px';
    }, 10)
}
//border
border.oninput = ()=> {
    setInterval(()=> {
        demo_box.style.border =  border.value + 'px' + ' solid white';
    }, 10)
}

//outline
outline.oninput = ()=> {
    setInterval(()=> {
        demo_box.style.outline =  outline.value + 'px' + ' solid deeppink';
    }, 10)
}
//shadow
shadow.oninput = ()=> {
    setInterval(()=> {
        demo_box.style.boxShadow = `0px 0px ${shadow.value/2}px ${shadow.value}px tomato` ;
    }, 10)
}

//opacity
opacity.oninput = ()=> {
    setInterval(()=> {
        demo_box.style.opacity = `calc(100% - ${opacity.value}%)`;
    }, 10)
}

//scale
scale.oninput = ()=> {
    setInterval(()=> {
        demo_box.style.transform = `scale(calc(1 + ${scale.value / 85}))`;
        console.log( 1 + (scale.value / 85))
    }, 10)
}
document.title = 'Nikhil Roy Box Control Design'