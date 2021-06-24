let moonText=document.querySelector('.moon-text');
let btn=document.querySelector('#btn-done');

let heading=document.querySelector('.heading');
let btnchange=document.querySelector('.btn');
let text=document.querySelector('#text');
let second=document.querySelector('#second');
let secondDiv=document.querySelector('.secondDiv');
let card=document.querySelector('.card');

let star =document.querySelector('#star');
btn.addEventListener('click',()=>{
    let value=text.value;
    moonText.innerHTML=`${value}`;

    let music=new Audio();
    music.src='heaven.mp3';
    music.play();
    
    btnchange.classList.add('btn_hide');
    text.classList.add('input_delete');
    star.classList.add('star_delete');

    let start=()=>{
        heading.classList.add('abc');
    heading.innerHTML=`Relax and watch your thought`;
    }
    setTimeout(start,2000)

    let change=()=>{
        heading.classList.add('efg');
        heading.innerHTML=`  Take a deep breath in.. `;
    }
    setTimeout(change,6000);

    let changetwo=()=>{
        heading.classList.add('hij');
    heading.innerHTML=`       ... and breathe out`;
    }
    setTimeout(changetwo,10000);

    let changethree=()=>{
        heading.classList.add('klm');
    heading.innerHTML=`     Everything is okay`;
    }
    setTimeout(changethree,14000);

    let changefour=()=>{
        heading.classList.add('nop');
    heading.innerHTML=`       Your life is okay`;
    }
    setTimeout(changefour,18000);

    let changefive=()=>{
        heading.classList.add('qrs');
    heading.innerHTML=`Life is much grander than this thought`;
    }
    setTimeout(changefive,22000);

    let changesix=()=>{
        heading.classList.add('tuv');
    heading.innerHTML=`The universe is over 93 billion light-years in distance`;
    }
    setTimeout(changesix,26000);

    let changeseven=()=>{
        heading.classList.add('wxy');
    heading.innerHTML=`   Our galaxy is small`;
    }
    setTimeout(changeseven,30000);

    let changeeight=()=>{
        heading.classList.add('zab');
    heading.innerHTML=`   Our sun is tiny`;
    }
    setTimeout(changeeight,34000);

    let changenine=()=>{
        heading.classList.add('cef');
    heading.innerHTML=`The earth is minuscule`;
    }
    setTimeout(changenine,38000);

    let changeten=()=>{
        heading.classList.add('ghi');
    heading.innerHTML=`Our cities are insignificant....`;
    }
    setTimeout(changeten,42000);

    let changeelevan=()=>{
        heading.classList.add('jkl');
    heading.innerHTML=`...and you are microscopic`;
    }
    setTimeout(changeelevan,46000);

    let changetwel=()=>{
        heading.classList.add('mno');
    heading.innerHTML=`This is thought...does not matter`;
    }
    setTimeout(changetwel,50000);

    let changethirteen=()=>{
        heading.classList.add('pqr');
    heading.innerHTML=`it can easily disapear`;
    }
    setTimeout(changethirteen,54000);

    let changefourteen=()=>{
        heading.classList.add('stu');
    heading.innerHTML=`and life will go on...`;
    }
    setTimeout(changefourteen,58000);

    let changefifteen=()=>{
        second.classList.add('secondDiv');
    }
    setTimeout(changefifteen,62000);

    let changeseventeen=()=>{
        card.innerHTML=`<div class='thankss'>
       <h2>Hope you feel a littile less stressed and a little more connected</h2>
        </div>`
    }
    setTimeout(changeseventeen,66000);


    let changesixteen=()=>{
        card.innerHTML=`<div class='divcard'>
        <p class='thanks'>Thanks for visit..</p>
        <p class='paragraph'>Created By Dheeraj Rajput !!</p>
        </div>
        `
    }
    setTimeout(changesixteen,73000);
})

