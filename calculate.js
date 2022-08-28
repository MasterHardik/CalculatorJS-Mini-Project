let buttons = document.querySelector('buttons');
let btn = document.querySelectorAll('span');
let value = document.getElementById('value');
let togglebtn = document.querySelector('.togglebtn');
let body = document.querySelector('body');
// console.log("before loop");
for(let i=0;i<btn.length;i++)
{
    // console.log("in loop");
    btn[i].addEventListener("click",function(){
        if(this.innerHTML == "="){
            value.innerHTML  = eval(value.innerHTML);
        }
        else {
            if(this.innerHTML=="Clear"){
                // console.log("after clear");
                value.innerHTML = "";
            }
            else {
                value.innerHTML+= this.innerHTML;
            }
        }
    })
}
togglebtn.onclick  =function(){
    body.classList.toggle('dark');
}