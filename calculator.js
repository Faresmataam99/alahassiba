
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
let acs=document.getElementById('btn2');
for(let ac of acs) { 
ac.onclick=function(){
    
    input.value==0;
}
}




