const HIDDEN_CLASSNAME = "hidden"
const h2 = document.querySelector("h2");
const btn = document.getElementById("page");
const modalBtn = document.getElementById("modal_btn")
const modalCLSBtn = document.querySelector(".close-area")
const enter = document.getElementById("enter")
var mouseEnterCount = 0;

async function countDownfunc() {
    await beforeCnt();
    afterCnt();
}
    
function clickSrtBtnHandler () {
    countDownfunc();
}
function clickModalBtnHandler () {
    modal.style.display = "flex";
}

function clickModalCLSBtnHandler () {
    modal.style.display = "none"
}

//익명함수를 쓸대 function(){} == () => {}
function afterCnt () {
    let countdown = 10;
    const aftercounter = setInterval(() => {
        h2.innerText = String(countdown);

        if(countdown <= 0){
            clearInterval(aftercounter);
            h2.innerText = "DONE"
            alert("you have entered "+ mouseEnterCount + "!")
            mouseEnterCount = 0;
            enter.innerText = "Enter me"
            enter.classList.add("hidden")
            return;
        }
        countdown--;
        
    }, 1000);


}
function beforeCnt () {
    return new Promise(function (resolve) {
        let countdown = 5;
        const beforecounter = setInterval(function (){
            h2.classList.remove(HIDDEN_CLASSNAME)
            h2.innerText = String(countdown);
            if(countdown <= 0){
                clearInterval(beforecounter);
                h2.innerText = "START"
                enter.classList.remove(HIDDEN_CLASSNAME)
                resolve();
                return;
            }
            countdown--;

        },1000)
    })
}

function mouseEnterCountHandler() {
    mouseEnterCount++
    enter.innerText = String(mouseEnterCount)
}

enter.addEventListener("mouseenter",mouseEnterCountHandler);


btn.addEventListener('click', clickSrtBtnHandler);
modalBtn.addEventListener("click",clickModalBtnHandler);
modalCLSBtn.addEventListener("click",clickModalCLSBtnHandler);