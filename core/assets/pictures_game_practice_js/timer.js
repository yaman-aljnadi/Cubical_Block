var startTime = Math.floor(Date.now() / 1000);
var start_Time_minutes_generator = Math.floor(Date.now() / 1000);
var start_Time_hours_generator = Math.floor(Date.now() / 1000);

function reset_all(){
    startTime = Math.floor(Date.now() / 1000);
    start_Time_minutes_generator = Math.floor(Date.now() / 1000);
    start_Time_hours_generator = Math.floor(Date.now() / 1000);
    localStorage.setItem("startTime", startTime);

}


function startTimeCounter() {

    var now = Math.floor(Date.now() / 1000);

    var diff = now - startTime;
    var diff_minutes_generator = now - start_Time_minutes_generator;
    var diff_hours_generator = now - start_Time_hours_generator

    var d = Math.floor(diff / 86400);

    var h = Math.floor(diff_hours_generator / 3600);
    if (h == 24) {
        h = 0
        start_Time_hours_generator = Math.floor(Date.now() / 1000);
        now = Math.floor(Date.now() / 1000);
        diff_hours_generator = now - startTime;
    }

    var m = Math.floor(diff_minutes_generator / 60);
    if (m == 60) {
        m = 0
        start_Time_minutes_generator = Math.floor(Date.now() / 1000);
        now = Math.floor(Date.now() / 1000);
        diff_minutes_generator = now - startTime;
    }

    var s = Math.floor(diff % 60);

    d = checkTime(d);
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    document.getElementById("s").innerHTML = s;

    if (m >= 1) {
        document.getElementById("m").innerHTML = m + ":";
    }
    else{
        document.getElementById("m").innerHTML = ""
    }

    if (h >= 1) {
        document.getElementById("h").innerHTML = h + ":";
    }
    else{
        document.getElementById("h").innerHTML = "";
    }

    if (d >= 1) {
        document.getElementById("d").innerHTML = d + ":";
    }
    else{
        document.getElementById("d").innerHTML = "";
    }

    var the_loop_key = setTimeout(startTimeCounter, 1000);
}

function checkTime(i) {
    return i;
}



startTimeCounter();



document.addEventListener("DOMContentLoaded", () => {
    const hide_timer = document.querySelector("#hide_timer");
    const show_timer = document.querySelector("#show_timer");

    hide_timer.addEventListener("click", e => {
        e.preventDefault();

        document.getElementById("timer").style.opacity = "0"
        document.getElementById("show_timer").style.opacity = "1"
    });

    show_timer.addEventListener("click", e => {
        e.preventDefault();

        document.getElementById("timer").style.opacity = "1"
        document.getElementById("show_timer").style.opacity = "0"
    });
});


/////////////////////////////////////////////////////////////////////////////////////////
//   html


//<button id="show_timer">show timer</button>
        
//<div id="timer">

//<div id="timer_count_up"><p class="labels" id="d"></p><p class="labels" id="h"></p><p class="labels" id="m"></p><p class="labels" id="s"></p></div>

//<button id="hide_timer">hide timer</button>
//<button id="reset" value="Reset" onclick="reset_all()">reset</button>

//</div>

/////////////////////////////////////////////////////////////////////////////////////////
// css 


// #timer{
//     position: absolute;
//     height: 16vh;
//     width: 14vw;
//     border-bottom-left-radius: 2.5vh;
//     border-top-left-radius: 2.5vh;
//     border-bottom-right-radius: 2.5vh;
//     border-top-right-radius: 2.5vh;
//     background-color: rgb(148, 148, 148);
// }
// .labels{
//     padding-top: 0.6vh;
//     display: inline-block;
// }
// #timer_count_up{
//     font-family: cursive, fantasy, 'Times New Roman';
//     position: absolute;
//     text-align: center;
//     height: 5vh;
//     width: 12vw;
//     border-bottom-left-radius: 2.5vh;
//     border-top-left-radius: 2.5vh;
//     border-bottom-right-radius: 2.5vh;
//     border-top-right-radius: 2.5vh;
//     background-color: rgb(238, 238, 238);
// }
// #hide_timer{
//     font-family: cursive, fantasy, 'Times New Roman';
//     position: absolute;
//     border-color: black;
//     border-width: 1%;
//     height: 5vh;
//     width: 7vw;
//     border-bottom-left-radius: 2.5vh;
//     border-top-left-radius: 2.5vh;
//     border-bottom-right-radius: 2.5vh;
//     border-top-right-radius: 2.5vh;
//     background-color: rgb(238, 238, 238);
//     transition: 0.5s;
// }
// #hide_timer:hover{
//     background-color: rgb(223, 223, 223);
// }
// #reset{
//     font-family: cursive, fantasy, 'Times New Roman';
//     position: absolute;
//     border-color: black;
//     border-width: 1%;
//     height: 5vh;
//     width: 5vw;
//     border-bottom-left-radius: 2.5vh;
//     border-top-left-radius: 2.5vh;
//     border-bottom-right-radius: 2.5vh;
//     border-top-right-radius: 2.5vh;
//     background-color: rgb(238, 238, 238);
//     transition: 0.5s;
// }
// #reset:hover{
//     background-color: rgb(223, 223, 223);
// }
// #show_timer{
//     z-index: 9;
//     font-family: cursive, fantasy, 'Times New Roman';
//     position: absolute;
//     border-color: black;
//     border-width: 1%;
//     height: 5vh;
//     width: 8vw;
//     border-bottom-left-radius: 2.5vh;
//     border-top-left-radius: 2.5vh;
//     border-bottom-right-radius: 2.5vh;
//     border-top-right-radius: 2.5vh;
//     background-color: rgb(238, 238, 238);
//     opacity: 0;
//     transition: 0.5s;
// }
// #show_timer:hover{
//     background-color: rgb(223, 223, 223);
// }
// #timer{
//     opacity: 1;
//     transition: 0.5s;
// }

/////////////////////////////////////////////////////////////////////////////////////////