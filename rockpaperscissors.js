let check=JSON.parse(localStorage.getItem('check'))||  // here get objec tfrom the check which is at localstorage
{  // here we had declare the varible or object check ,,
  win:0,
  loose:0,
  tie:0,
};

// if(!check){
//   check={
//     win:0,
//     loose:0,
//     tie:0,
//   }
// }
updatesocre();

let isautoplay=false;
let interval;
// this fuction by using isautoplay check it's on or not 
function autoplay(){
  if(!isautoplay){
    interval=setInterval(function(){
      const playermove=pickcompmove();
      playergame(playermove)
    },1000);
    isautoplay=true;
  
}else{
  clearInterval(interval);  /// clear interval means it will stop setinterval funtion running
  isautoplay=false;
}
}

// function autoplay(){
//   setInterval(function(){
//     const playermove=pickcompmove();
//     playergame(playermove)
//   },1000);
// }

function playergame(playermove){

  pickcompmove();
  
  let result ='';
  if(playermove==='scissors'){

    if (comp==='rock'){
    result='L';
    }
    if (comp==='paper'){
    result='W';
    }
    if (comp==='scissors'){
    result='T';
    }
}
else if(playermove==='paper'){

  pickcompmove();

if (comp==='rock'){
  result='W';
}
if (comp==='paper'){
  result='T';
}
if (comp==='scissors'){
  result='L';
}

}
else if(playermove==='rock'){
  
  pickcompmove();

  if (comp==='rock'){
    result='T';
  }
  if (comp==='paper'){
    result='L';
  }
  if (comp==='scissors'){
    result='W';
  }


}

if(result==='W'){
  check.win++;
}else if(result ==='L'){
  check.loose++;
}else if (result==='T'){
  check.tie++;
}

localStorage.setItem('check',JSON.stringify(check)); // this only take input as sting the local storage 
console.log(localStorage);



updatesocre();

document.querySelector('.js-result').innerHTML=`${result}`;
document.querySelector('.js-move').innerHTML=` you
<img src="images/${playermove}-emoji.png" class="move-icon">
<img src="images/${comp}-emoji.png " class="move-icon">
computer`;


// alert(`${result},so the ${playermove} vs ${comp},now score is win:${check.win},loose:${check.loose},TIe:${check.tie}`);

}

// take current count of loose , win and tie , from local storage 
function updatesocre(){
const see=document.querySelector('.js-score').innerHTML=`win:${check.win},loose:${check.loose},TIe:${check.tie}`;
}

//it's random and take move like rack or paper or scissors
function pickcompmove(){
let ran =Math.random();

if(ran >=0 && ran < 1/3  ){
  comp ='rock';
}else if (ran >= 1/3 && ran < 2/3 ){
  comp ='paper';
}else if ( ran >= 2/3 && ran < 1){
  comp ='scissors'; 
}

return comp;
}

document.body.addEventListener('keydown',(evnet) => {
  if(evnet.key==='r'){
    playergame('rock')
  }else if(evnet.key==='p'){
    playergame('paper')
  }else if(evnet.key==='s'){
    playergame('scissors')
  }
  console.log('keydown')
})
