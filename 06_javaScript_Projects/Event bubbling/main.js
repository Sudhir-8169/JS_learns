timer=60;
score=0;
hit=0;
function randombubbles(){
var clutter="";
for(var i=0;i<168;i++){
   let rn=Math.floor(Math.random()*10)
    clutter+=`<div class="bubble">${rn}</div>`
}
document.querySelector('#bpanel').innerHTML=clutter;
}

function timerFunction(){

   timeint= setInterval(()=>{
    if(timer>0){
    timer--;
    document.getElementById('timer').innerText=timer;
    }
    else{
        clearInterval(timeint);
        document.querySelector('#bpanel').innerHTML=`<div class="ss"><h1 >Game over<h1><p>Score: ${score}<p>`
        document.querySelector('#hit').classList.add('Inavtive-hit');
        
    }
    },1000)
}

function hitGenerate(){
    hit=Math.floor(Math.random()*10)
    document.getElementById('hit').innerText=hit;
}



function generateScore(){
   
    score+=10;
    document.querySelector('#score').textContent=score
}

document.querySelector('#bpanel').addEventListener('click',(des)=>{
   bubbleValue=Number(des.target.textContent);
   if(hit===bubbleValue){
    generateScore();
    hitGenerate()
    randombubbles()
   }
   else{
    hitGenerate()
    randombubbles()
   }
})

hitGenerate()
randombubbles()
timerFunction()
