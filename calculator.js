
let input=document.getElementById('input');
let btns=document.getElementsByClassName('btn');

for(let btn of btns){

btn.onclick=function(){
    
    if( btn.innerText=="=" ){
        input.value=eval(input.value)
        input.style.backgroundColor='orange'
    }
    else (input.value+=btn.innerText)

}

}
let ac=document.getElementById('btna');

ac.onclick=function(){
    
    input.value = '' ;
}





