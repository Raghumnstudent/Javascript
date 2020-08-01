
console.log('Mini-Project')
const startmin = Number(prompt('Enter The Time in minutes like 20m 30m 53m 1h=60m'));
let secondtime = startmin*60
const cuntdownel = document.getElementById('countdown')

function update(){
    const min = Math.floor(secondtime/60);
    let second = secondtime%60;
    second = second<10 ? '0' + second : second;
    cuntdownel.innerHTML=`${min}m:${second}s`;
    secondtime--
}
setInterval(()=>{
    if(secondtime == 0 ){
        cuntdownel.innerHTML='00:00';
    }
    else{
        update(); 
    }
},1000);