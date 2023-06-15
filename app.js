const dino = document.getElementById('dino');
const cac = document.getElementById('cactus');
const score = document.getElementById('score');
const msg = document.getElementById('msg1');
const star = document.getElementById('starting');
const ok = document.getElementById('btn');
const score1 = document.getElementById("score1");


const jump = () => {
    if (dino.classList != 'jump') {
        dino.classList.add('jump');
    }
    setTimeout(function () {
        dino.classList.remove('jump');
    }, 300);
}



document.addEventListener('keydown', function (event) {
    jump();
});



window.onload = function () {
    let s = 0;
    let Interval;

    star.addEventListener("click", func);

    function func() {
        cac.classList.add("anime");
        clearInterval(Interval);
        Interval = setInterval(startTimer, 1000);
    }



    const isAlive = setInterval(function () {
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
        let cacLeft = parseInt(window.getComputedStyle(cac).getPropertyValue("left"));


        if (cacLeft < 50 && cacLeft > 0 && dinoTop >= 140) {
            cac.classList.remove("anime");
            cac.style.left = "580";
            msg.classList.add("show");
            stop();
        }
    }, 15);

    function stop() {
        clearInterval(Interval);
    }

    function reset() {
        msg.classList.remove("show");
        clearInterval(Interval);
        s = 0;
        score.innerHTML = 0;
    }

    ok.addEventListener("click", reset);



    function startTimer() {
        s = s + 1;
        score.innerHTML = s;
        score1.innerHTML = s;
    }

}