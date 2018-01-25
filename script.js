function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function checkAnswer(useranswer){

    if (useranswer == 'a'){
        answerA.classList.remove('list-group-item-dark');
        if ((span1.innerHTML > 0) && (span1.innerHTML < 127)){
            answerA.classList.add('list-group-item-success');
        } else {
            answerA.classList.add('list-group-item-danger');
        }
    }
    if (useranswer == 'b'){
        answerB.classList.remove('list-group-item-dark');
        if ((span1.innerHTML > 127) && (span1.innerHTML < 192)){
            answerB.classList.add('list-group-item-success');
        } else {
            answerB.classList.add('list-group-item-danger');
        }
    }
    if (useranswer == 'c'){
        answerC.classList.remove('list-group-item-dark');
        if ((span1.innerHTML >= 192) && (span1.innerHTML < 224)){
            answerC.classList.add('list-group-item-success');
        } else {
            answerC.classList.add('list-group-item-danger');
        }
    }
    if (useranswer == 'd'){
        answerD.classList.remove('list-group-item-dark');
        if ((span1.innerHTML >= 224) && (span1.innerHTML < 240)){
            answerD.classList.add('list-group-item-success');
        } else {
            answerD.classList.add('list-group-item-danger');
        }
    }
    if (useranswer == 'e'){
        answerE.classList.remove('list-group-item-dark');
        if ((span1.innerHTML >= 240) && (span1.innerHTML < 255)){
            answerE.classList.add('list-group-item-success');
        } else {
            answerE.classList.add('list-group-item-danger');
        }
    }
    
}
let span1 = document.getElementById("ip1");
let span2 = document.getElementById("ip2");
let span3 = document.getElementById("ip3");
let span4 = document.getElementById("ip4");

let randomButton = document.getElementById("btnRandom");
randomButton.addEventListener("click", function(){
    span1.innerHTML = randomNum(1,256);
    span2.innerHTML = randomNum(0,256);
    span3.innerHTML = randomNum(0,256);
    span4.innerHTML = randomNum(0,255);

    answerA.className = "list-group-item list-group-item-dark";
    answerB.className = "list-group-item list-group-item-dark";
    answerC.className = "list-group-item list-group-item-dark";
    answerD.className = "list-group-item list-group-item-dark";
    answerE.className = "list-group-item list-group-item-dark";

});

let answerA = document.getElementById("classA");
answerA.addEventListener("click",function() {
    checkAnswer('a');
});
let answerB = document.getElementById("classB");
answerB.addEventListener("click",function() {
    checkAnswer('b');
});
let answerC = document.getElementById("classC");
answerC.addEventListener("click",function() {
    checkAnswer('c');
});
let answerD = document.getElementById("classD");
answerD.addEventListener("click",function() {
    checkAnswer('d');
});
let answerE = document.getElementById("classE");
answerE.addEventListener("click",function() {
    checkAnswer('e');
});
