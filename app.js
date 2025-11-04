const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const reset = document.querySelector('#reset');

p1Score=0;
p2Score=0;

p1Button.addEventListener('click',function (){
    p1Score+=1;
    p1Display.innerHTML=p1Score;
})

p2Button.addEventListener('click',function (){
    p2Score+=1;
    p2Display.innerHTML=p2Score;
})

reset.addEventListener('click',function (){
    p1Score=0;
    p2Score=0; 
    p1Display.innerHTML=p1Score; 
    p2Display.innerHTML=p2Score; 
})
