var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("button1");
for(var i=0; i<btns.length;i++){
    btns[i].addEventListener("click", function()
    {
        var current = document.getElementsByClassName("active1");
        current[0].className = current[0].className.replace("active1", "");
        this.className += " active1";
    });
}

var header = document.getElementById("myDIV2");
var btns = header.getElementsByClassName("button2");
for(var i=0; i<btns.length;i++){
    btns[i].addEventListener("click", function()
    {
        var current = document.getElementsByClassName("active2");
        current[0].className = current[0].className.replace("active2", "");
        this.className += " active2";
    });
}

var header = document.getElementById("myDIV3");
var btns = header.getElementsByClassName("button3");
for(var i=0; i<btns.length;i++){
    btns[i].addEventListener("click", function()
    {
        var current = document.getElementsByClassName("active3");
        current[0].className = current[0].className.replace("active3", "");
        this.className += " active3";
    });
}
var header = document.getElementById("myDIV4");
var btns = header.getElementsByClassName("button4");
for(var i=0; i<btns.length;i++){
    btns[i].addEventListener("click", function()
    {
        var current = document.getElementsByClassName("active4");
        current[0].className = current[0].className.replace("active4", "");
        this.className += " active4";
    });
}

const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
    faq.addEventListener("click", () =>{
        faq.classList.toggle("active");
    });
});


/*FOR SHOW AND HIDE DETAILS*/

function myFunction() {
    var change = document.getElementById("demo");
    if (change.innerHTML == "Show details")
    {
        change.innerHTML = "Hide details";
        document.getElementById("answer1").style.display="inline";
    }

    else {
    change.innerHTML = "Show details";
    
document.getElementById("answer1").style.display="none";
     }
     
     
}

    

        


    
    



/*
JAVASCRIPT CODE TO SET BACKGROUND COLOR 
AND CHANGE TEXT COLOR INSIDE BUTTON WHEN BUTTON IS CLICKED
let btn1Day = document.querySelector('#primary');
let btn7Days = document.querySelector('#danger');
let btn30Days = document.querySelector('#success');
let btn1Year = document.querySelector('#ready');
let btn5Years = document.querySelector('#go');

btn1Day.addEventListener('click',() => btn1Day.style.backgroundColor='#ffe559')
btn7Days.addEventListener('click',() => btn7Days.style.backgroundColor='#ffe559')
btn30Days.addEventListener('click',() =>btn30Days.style.backgroundColor='#ffe559')
btn1Year.addEventListener('click',() => btn1Year.style.backgroundColor='#ffe559')
btn5Years.addEventListener('click',() => btn5Years.style.backgroundColor='#ffe559')

btn1Day.addEventListener('click',() => btn1Day.style.color='black')
btn7Days.addEventListener('click',() => btn7Days.style.color='black')
btn30Days.addEventListener('click',() => btn30Days.style.color='black')
btn1Year.addEventListener('click',() => btn1Year.style.color='black')
btn5Years.addEventListener('click',() => btn5Years.style.color='black')

let btnTier1 = document.querySelector('#apple');
let btnTier2 = document.querySelector('#mango');
let btnTier3 = document.querySelector('#banana');
let btnTier4 = document.querySelector('#kiwi');
let btnTier5 = document.querySelector('#grapes');

btnTier1.addEventListener('click',() => btnTier1.style.backgroundColor='#ffe559')
btnTier2.addEventListener('click',() => btnTier2.style.backgroundColor='#ffe559')
btnTier3.addEventListener('click',() =>btnTier3.style.backgroundColor='#ffe559')
btnTier4.addEventListener('click',() => btnTier4.style.backgroundColor='#ffe559')
btnTier5.addEventListener('click',() => btnTier5.style.backgroundColor='#ffe559')

btnTier1.addEventListener('click',() => btnTier1.style.color='black')
btnTier2.addEventListener('click',() => btnTier2.style.color='black')
btnTier3.addEventListener('click',() =>btnTier3.style.color='black')
btnTier4.addEventListener('click',() => btnTier4.style.color='black')
btnTier5.addEventListener('click',() => btnTier5.style.color='black')


let btnUSEBALANCE = document.querySelector('#red');
let btn$1000 = document.querySelector('#blue');
let btn$100 = document.querySelector('#green');

btnUSEBALANCE.addEventListener('click',() => btnUSEBALANCE.style.backgroundColor='#e9ec0e7a')
btn$1000.addEventListener('click',() => btn$1000.style.backgroundColor='#e9ec0e7a')
btn$100.addEventListener('click',() =>btn$100.style.backgroundColor='#e9ec0e7a')

let btnApply = document.querySelector('#myDiv');
let btnCancel = document.querySelector('#myDiv');


btnApply.addEventListener('click',() => btnApply.style.backgroundColor='black')
btnApply.addEventListener('click',() =>btnApply.style.color='white')
btnCancel.addEventListener('click',() =>btnCancel.style.backgroundColor='black')
btnCancel.addEventListener('click',() =>btnCancel.style.color='white')*/

