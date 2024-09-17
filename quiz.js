const startQuiz = document.querySelector("#start_quiz");
const pinas = document.querySelector("#pina");
const firstpin = document.querySelector(".pin");
const bita = document.querySelector(".btnin");
const text = document.querySelector(".text");
const test_1 = document.querySelector(".tst1");
const test_2 = document.querySelector(".tst2");
const test_3 = document.querySelector(".tst3");
const test_4 = document.querySelector(".tst4");
const test_5 = document.querySelector(".tst5");
const milli = document.querySelector("#millisecs");
const nexts = document.querySelector(".btnina");
const quest_num = document.querySelector("#qNumb");



let timeInterval;

let qt = 1;

let timesnum;


function startTimer() {
    let x  = 15;

    timeInterval = setInterval(() => {
        milli.innerHTML = `${x--}`;
        if (x == 0) {
            x  = 15;
        }
    }, 1000);
    
};

function stopNow() {
    clearInterval(timeInterval);
    clearInterval(timesnum)
};

let total_score = [];

function student() {
    let a = 1
    console.log(a);
    total_score.push(a);
    console.log(total_score);
}


startQuiz.onclick = () => {
    firstpin.style.display = "none";
    pinas.style.display = "block";
}

bita.onclick = () => {
    pinas.style.display = "none";
    text.style.display = "block";
    stopNow()
    startTimer()
};

const correct = document.querySelector(".correct");
const correct1 = document.querySelector(".correct1");

let waitInterval;

function waiter() {
    waitInterval = setInterval(() => {
        nexts.style.display = "block";
    }, 500);
}

function waiter_stop() {
    clearInterval(waitInterval)
}

correct.onclick = () => {
    stopNow()
    correct.style.backgroundColor = "#008000d7";
    correct.style.border = "2px solid #008000d7"
    correct.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_1.style.display = "none";
        test_2.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 2) {
                qt = 2
            }
        }, 500);
    };
};


correct1.onclick = () => {
    stopNow();
    correct1.style.backgroundColor = "#008000d7";
    correct1.style.border = "2px solid #008000d7"
    correct1.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_2.style.display = "none";
        test_3.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 3) {
                qt = 3
            }
        }, 500);
    };
};

const correct2 = document.querySelector(".correct2");
correct2.onclick = () => {
    stopNow();
    correct2.style.backgroundColor = "#008000d7";
    correct2.style.border = "2px solid #008000d7"
    correct2.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_3.style.display = "none";
        test_4.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 4) {
                qt = 4
            }
        }, 500);
    };
};

const correct3 = document.querySelector(".correct3");
correct3.onclick = () => {
    stopNow();
    correct3.style.backgroundColor = "#008000d7";
    correct3.style.border = "2px solid #008000d7"
    correct3.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_4.style.display = "none";
        test_5.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 5) {
                qt = 5
            }
        }, 500);
    };
};

const test_6 = document.querySelector(".tst6");
const correct4 = document.querySelector(".correct4");
correct4.onclick = () => {
    stopNow();
    correct4.style.backgroundColor = "#008000d7";
    correct4.style.border = "2px solid #008000d7";
    correct4.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_5.style.display = "none";
        test_6.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 6) {
                qt = 6
            }
        }, 500);
    };
};

const test_7 = document.querySelector(".tst7");
const correct5 = document.querySelector(".correct5");
correct5.onclick = () => {
    stopNow();
    correct5.style.backgroundColor = "#008000d7"
    correct5.style.border = "2px solid #008000d7"
    correct5.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_6.style.display = "none";
        test_7.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 7) {
                qt = 7
            }
        }, 500);
    };
};

const test_8 = document.querySelector(".tst8");
const correct6 = document.querySelector(".correct6");
correct6.onclick = () => {
    stopNow();
    correct6.style.backgroundColor = "#008000d7"
    correct6.style.border = "2px solid #008000d7"
    correct6.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_7.style.display = "none";
        test_8.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 8) {
                qt = 8
            }
        }, 500);
    };
};

const test_9 = document.querySelector(".tst9");
const correct7 = document.querySelector(".correct7");
correct7.onclick = () => {
    stopNow();
    correct7.style.backgroundColor = "#008000d7"
    correct7.style.border = "2px solid #008000d7"
    correct7.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_8.style.display = "none";
        test_9.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 9) {
                qt = 9
            }
        }, 500);
    };
};

const test_10 = document.querySelector(".tst10");
const correct8 = document.querySelector(".correct8");
correct8.onclick = () => {
    stopNow();
    correct8.style.backgroundColor = "#008000d7"
    correct8.style.border = "2px solid #008000d7"
    correct8.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_9.style.display = "none";
        test_10.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 10) {
                qt = 10
            }
        }, 500);
    };
};

const test_11 = document.querySelector(".tst11");
const correct9 = document.querySelector(".correct9");
correct9.onclick = () => {
    stopNow();
    correct9.style.backgroundColor = "#008000d7"
    correct9.style.border = "2px solid #008000d7"
    correct9.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_10.style.display = "none";
        test_11.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 11) {
                qt = 11
            }
        }, 500);
    };
};

const test_12 = document.querySelector(".tst12");
const correct10 = document.querySelector(".correct10");
correct10.onclick = () => {
    stopNow();
    correct10.style.backgroundColor = "#008000d7"
    correct10.style.border = "2px solid #008000d7"
    correct10.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_11.style.display = "none";
        test_12.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 12) {
                qt = 12
            }
        }, 500);
    };
};

const test_13 = document.querySelector(".tst13");
const correct11 = document.querySelector(".correct11");
correct11.onclick = () => {
    stopNow();
    correct11.style.backgroundColor = "#008000d7"
    correct11.style.border = "2px solid #008000d7"
    correct11.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_12.style.display = "none";
        test_13.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 13) {
                qt = 13
            }
        }, 500);
    };
};

const test_14 = document.querySelector(".tst14");
const correct12 = document.querySelector(".correct12");
correct12.onclick = () => {
    stopNow();
    correct12.style.backgroundColor = "#008000d7"
    correct12.style.border = "2px solid #008000d7"
    correct12.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_13.style.display = "none";
        test_14.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 14) {
                qt = 14
            }
        }, 500);
    };
};

const test_15 = document.querySelector(".tst15");
const correct13 = document.querySelector(".correct13");
correct13.onclick = () => {
    stopNow();
    correct13.style.backgroundColor = "#008000d7"
    correct13.style.border = "2px solid #008000d7"
    correct13.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_14.style.display = "none";
        test_15.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 15) {
                qt = 15
            }
        }, 500);
    };
};

const test_16 = document.querySelector(".tst16");
const correct14 = document.querySelector(".correct14");
correct14.onclick = () => {
    stopNow();
    correct14.style.backgroundColor = "#008000d7"
    correct14.style.border = "2px solid #008000d7"
    correct14.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_15.style.display = "none";
        test_16.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 16) {
                qt = 16
            }
        }, 500);
    };
};

const test_17 = document.querySelector(".tst17");
const correct15 = document.querySelector(".correct15");
correct15.onclick = () => {
    stopNow();
    correct15.style.backgroundColor = "#008000d7"
    correct15.style.border = "2px solid #008000d7"
    correct15.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_16.style.display = "none";
        test_17.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 17) {
                qt = 17
            }
        }, 500);
    };
};

const test_18 = document.querySelector(".tst18");
const correct16 = document.querySelector(".correct16");
correct16.onclick = () => {
    stopNow();
    correct16.style.backgroundColor = "#008000d7"
    correct16.style.border = "2px solid #008000d7"
    correct16.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_17.style.display = "none";
        test_18.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 18) {
                qt = 18
            }
        }, 500);
    };
};

const test_19 = document.querySelector(".tst19");
const correct17 = document.querySelector(".correct17");
correct17.onclick = () => {
    stopNow();
    correct17.style.backgroundColor = "#008000d7"
    correct17.style.border = "2px solid #008000d7"
    correct17.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_18.style.display = "none";
        test_19.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 19) {
                qt = 19
            }
        }, 500);
    };
};

const test_20 = document.querySelector(".tst20");
const correct18 = document.querySelector(".correct18");
correct18.onclick = () => {
    stopNow();
    correct18.style.backgroundColor = "#008000d7"
    correct18.style.border = "2px solid #008000d7"
    correct18.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_19.style.display = "none";
        test_20.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 20) {
                qt = 20
            }
        }, 500);
    };
};

const test_21 = document.querySelector(".tst21");
const correct19 = document.querySelector(".correct19");
correct19.onclick = () => {
    stopNow();
    correct19.style.backgroundColor = "#008000d7"
    correct19.style.border = "2px solid #008000d7"
    correct19.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_20.style.display = "none";
        test_21.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 21) {
                qt = 21
            }
        }, 500);
    };
};

const test_22 = document.querySelector(".tst22");
const correct20 = document.querySelector(".correct20");
correct20.onclick = () => {
    stopNow();
    correct20.style.backgroundColor = "#008000d7"
    correct20.style.border = "2px solid #008000d7"
    correct20.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_21.style.display = "none";
        test_22.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 22) {
                qt = 22
            }
        }, 500);
    };
};

const test_23 = document.querySelector(".tst23");
const correct21 = document.querySelector(".correct21");
correct21.onclick = () => {
    stopNow();
    correct21.style.backgroundColor = "#008000d7"
    correct21.style.border = "2px solid #008000d7"
    correct21.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_22.style.display = "none";
        test_23.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 23) {
                qt = 23
            }
        }, 500);
    };
};

const test_24 = document.querySelector(".tst24");
const correct22 = document.querySelector(".correct22");
correct22.onclick = () => {
    stopNow();
    correct22.style.backgroundColor = "#008000d7"
    correct22.style.border = "2px solid #008000d7"
    correct22.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_23.style.display = "none";
        test_24.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 24) {
                qt = 24
            }
        }, 500);
    };
};

const test_25 = document.querySelector(".tst25");
const correct23 = document.querySelector(".correct23");
correct23.onclick = () => {
    stopNow();
    correct23.style.backgroundColor = "#008000d7"
    correct23.style.border = "2px solid #008000d7"
    correct23.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_24.style.display = "none";
        test_25.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 25) {
                qt = 25
            }
        }, 500);
    };
};

const test_26 = document.querySelector(".tst26");
const correct24 = document.querySelector(".correct24");
correct24.onclick = () => {
    stopNow();
    correct24.style.backgroundColor = "#008000d7"
    correct24.style.border = "2px solid #008000d7"
    correct24.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_25.style.display = "none";
        test_26.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 26) {
                qt = 26
            }
        }, 500);
    };
};

const test_27 = document.querySelector(".tst27");
const correct25 = document.querySelector(".correct25");
correct25.onclick = () => {
    stopNow();
    correct25.style.backgroundColor = "#008000d7"
    correct25.style.border = "2px solid #008000d7"
    correct25.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_26.style.display = "none";
        test_27.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 27) {
                qt = 27
            }
        }, 500);
    };
};

const test_28 = document.querySelector(".tst28");
const correct26 = document.querySelector(".correct26");
correct26.onclick = () => {
    stopNow();
    correct26.style.backgroundColor = "#008000d7"
    correct26.style.border = "2px solid #008000d7"
    correct26.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_27.style.display = "none";
        test_28.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 28) {
                qt = 28
            }
        }, 500);
    };
};

const test_29 = document.querySelector(".tst29");
const correct27 = document.querySelector(".correct27");
correct27.onclick = () => {
    stopNow();
    correct27.style.backgroundColor = "#008000d7"
    correct27.style.border = "2px solid #008000d7"
    correct27.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_28.style.display = "none";
        test_29.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 29) {
                qt = 29
            }
        }, 500);
    };
};

const test_30 = document.querySelector(".tst30");
const correct28 = document.querySelector(".correct28");
correct28.onclick = () => {
    stopNow();
    correct28.style.backgroundColor = "#008000d7"
    correct28.style.border = "2px solid #008000d7"
    correct28.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_29.style.display = "none";
        test_30.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 30) {
                qt = 30
            }
        }, 500);
    };
};

const test_31 = document.querySelector(".tst31");
const correct29 = document.querySelector(".correct29");
correct29.onclick = () => {
    stopNow();
    correct29.style.backgroundColor = "#008000d7"
    correct29.style.border = "2px solid #008000d7"
    correct29.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_30.style.display = "none";
        test_31.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 31) {
                qt = 31
            }
        }, 500);
    };
};

const test_32 = document.querySelector(".tst32");
const correct30 = document.querySelector(".correct30");
correct30.onclick = () => {
    stopNow();
    correct30.style.backgroundColor = "#008000d7"
    correct30.style.border = "2px solid #008000d7"
    correct30.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_31.style.display = "none";
        test_32.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 32) {
                qt = 32
            }
        }, 500);
    };
};

const test_33 = document.querySelector(".tst33");
const correct31 = document.querySelector(".correct31");
correct31.onclick = () => {
    stopNow();
    correct31.style.backgroundColor = "#008000d7"
    correct31.style.border = "2px solid #008000d7"
    correct31.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_32.style.display = "none";
        test_33.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 33) {
                qt = 33
            }
        }, 500);
    };
};

const test_34 = document.querySelector(".tst34");
const correct32 = document.querySelector(".correct32");
correct32.onclick = () => {
    stopNow();
    correct32.style.backgroundColor = "#008000d7"
    correct32.style.border = "2px solid #008000d7"
    correct32.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_33.style.display = "none";
        test_34.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 34) {
                qt = 34
            }
        }, 500);
    };
};

const test_35 = document.querySelector(".tst35");
const correct33 = document.querySelector(".correct33");
correct33.onclick = () => {
    stopNow();
    correct33.style.backgroundColor = "#008000d7"
    correct33.style.border = "2px solid #008000d7"
    correct33.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_34.style.display = "none";
        test_35.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 35) {
                qt = 35
            }
        }, 500);
    };
};

const test_36 = document.querySelector(".tst36");
const correct34 = document.querySelector(".correct34");
correct34.onclick = () => {
    stopNow();
    correct34.style.backgroundColor = "#008000d7"
    correct34.style.border = "2px solid #008000d7"
    correct34.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_35.style.display = "none";
        test_36.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 36) {
                qt = 36
            }
        }, 500);
    };
};

const test_37 = document.querySelector(".tst37");
const correct35 = document.querySelector(".correct35");
correct35.onclick = () => {
    stopNow();
    correct35.style.backgroundColor = "#008000d7"
    correct35.style.border = "2px solid #008000d7"
    correct35.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_36.style.display = "none";
        test_37.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 37) {
                qt = 37
            }
        }, 500);
    };
};

const test_38 = document.querySelector(".tst38");
const correct36 = document.querySelector(".correct36");
correct36.onclick = () => {
    stopNow();
    correct36.style.backgroundColor = "#008000d7"
    correct36.style.border = "2px solid #008000d7"
    correct36.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_37.style.display = "none";
        test_38.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 38) {
                qt = 38
            }
        }, 500);
    };
};

const test_39 = document.querySelector(".tst39");
const correct37 = document.querySelector(".correct37");
correct37.onclick = () => {
    stopNow();
    correct37.style.backgroundColor = "#008000d7"
    correct37.style.border = "2px solid #008000d7"
    correct37.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_38.style.display = "none";
        test_39.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 39) {
                qt = 39
            }
        }, 500);
    };
};

const test_40 = document.querySelector(".tst40");
const correct38 = document.querySelector(".correct38");
correct38.onclick = () => {
    stopNow();
    correct38.style.backgroundColor = "#008000d7"
    correct38.style.border = "2px solid #008000d7"
    correct38.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_39.style.display = "none";
        test_40.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 40) {
                qt = 40
            }
        }, 500);
    };
};

const test_41 = document.querySelector(".tst41");
const correct39 = document.querySelector(".correct39");
correct39.onclick = () => {
    stopNow();
    correct39.style.backgroundColor = "#008000d7"
    correct39.style.border = "2px solid #008000d7"
    correct39.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_40.style.display = "none";
        test_41.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 41) {
                qt = 41
            }
        }, 500);
    };
};

const test_42 = document.querySelector(".tst42");
const correct40 = document.querySelector(".correct40");
correct40.onclick = () => {
    stopNow();
    correct40.style.backgroundColor = "#008000d7"
    correct40.style.border = "2px solid #008000d7"
    correct40.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_41.style.display = "none";
        test_42.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 42) {
                qt = 42
            }
        }, 500);
    };
};

const test_43 = document.querySelector(".tst43");
const correct41 = document.querySelector(".correct41");
correct41.onclick = () => {
    stopNow();
    correct41.style.backgroundColor = "#008000d7"
    correct41.style.border = "2px solid #008000d7"
    correct41.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_42.style.display = "none";
        test_43.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 43) {
                qt = 43
            }
        }, 500);
    };
};

const test_44 = document.querySelector(".tst44");
const correct42 = document.querySelector(".correct42");
correct42.onclick = () => {
    stopNow();
    correct42.style.backgroundColor = "#008000d7"
    correct42.style.border = "2px solid #008000d7"
    correct42.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_43.style.display = "none";
        test_44.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 44) {
                qt = 44
            }
        }, 500);
    };
};

const test_45 = document.querySelector(".tst45");
const correct43 = document.querySelector(".correct43");
correct43.onclick = () => {
    stopNow();
    correct43.style.backgroundColor = "#008000d7"
    correct43.style.border = "2px solid #008000d7"
    correct43.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_44.style.display = "none";
        test_45.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 45) {
                qt = 45
            }
        }, 500);
    };
};

const test_46 = document.querySelector(".tst46");
const correct44 = document.querySelector(".correct44");
correct44.onclick = () => {
    stopNow();
    correct44.style.backgroundColor = "#008000d7"
    correct44.style.border = "2px solid #008000d7"
    correct44.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_45.style.display = "none";
        test_46.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 46) {
                qt = 46

            }
        }, 500);
    };
};

const test_47 = document.querySelector(".tst47");
const correct45 = document.querySelector(".correct45");
correct45.onclick = () => {
    stopNow();
    correct45.style.backgroundColor = "#008000d7"
    correct45.style.border = "2px solid #008000d7"
    correct45.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_46.style.display = "none";
        test_47.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 47) {
                qt = 47
            }
        }, 500);
    };
};

const test_48 = document.querySelector(".tst48");
const correct46 = document.querySelector(".correct46");
correct46.onclick = () => {
    stopNow();
    correct46.style.backgroundColor = "#008000d7"
    correct46.style.border = "2px solid #008000d7"
    correct46.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_47.style.display = "none";
        test_48.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 48) {
                qt = 48
            }
        }, 500);
    };
};

const test_49 = document.querySelector(".tst49");
const correct47 = document.querySelector(".correct47");
correct47.onclick = () => {
    stopNow();
    correct47.style.backgroundColor = "#008000d7"
    correct47.style.border = "2px solid #008000d7"
    correct47.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_48.style.display = "none";
        test_49.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 49) {
                qt = 49
            }
        }, 500);
    };
};

const test_50 = document.querySelector(".tst50");
const correct48 = document.querySelector(".correct48");
correct48.onclick = () => {
    stopNow();
    correct48.style.backgroundColor = "#008000d7"
    correct48.style.border = "2px solid #008000d7"
    correct48.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_49.style.display = "none";
        test_50.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 50) {
                qt = 50
            }
        }, 500);
    };
};

function stuResult() {
    let rs = 0;

    for (const el of total_score) {
        rs += el;
    }

    // console.log(rs);
    if (rs >= 0 && rs <= 24) {
        document.getElementById("realscore1").innerHTML = "Sorry !";
        document.getElementById("realscore2").innerHTML = "You are below pass mark";
        document.getElementById("realscore3").innerHTML = `${rs}`;
    } else if (rs >= 25 && rs <= 39) {
        document.getElementById("realscore1").innerHTML = "Congratulations !";
        document.getElementById("realscore2").innerHTML = "You did Great";
        document.getElementById("realscore3").innerHTML = `${rs}`;
    } else if (rs >= 40 && rs <= 50) {
        document.getElementById("realscore1").innerHTML = "Excellent !";
        document.getElementById("realscore2").innerHTML = "You did Wonderful";
        document.getElementById("realscore3").innerHTML = `${rs}`;
    }

};

const result = document.querySelector(".ress");
const last_man = document.querySelector(".lastman");
const correct49 = document.querySelector(".correct49");
correct49.onclick = () => {
    stopNow();
    correct49.style.backgroundColor = "#008000d7"
    correct49.style.border = "2px solid #008000d7"
    correct49.style.color = "#ffffff";
    student()
    waiter()
    nexts.onclick = () => {
        stopNow()
        document.querySelector(".mainhead").style.display = "none";
        test_50.style.display = "none";
        last_man.style.display = "none";
        result.style.display = "block";
        text.style.border = "2px solid #ffffff"
        nexts.style.display = "none";
        waiter_stop();
        clearInterval(timesnum);
        stuResult();
    };
};



const wrong_1 = document.querySelector(".wrong1");
const wrong_2 = document.querySelector(".wrong2");
const wrong_3 = document.querySelector(".wrong3");
const wrong_4 = document.querySelector(".wrong4");
const wrong_5 = document.querySelector(".wrong5");
const wrong_6 = document.querySelector(".wrong6");


wrong_1.onclick = () => {
    stopNow()
    wrong_1.style.backgroundColor = "#ff0000ee";
    wrong_1.style.border = "2px solid #ff0000ee"
    wrong_1.style.color = "#ffffff";
    correct.style.backgroundColor = "#008000d7";
    correct.style.border = "2px solid #008000d7";
    correct.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_1.style.display = "none";
        test_2.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 2) {
                qt = 2
            }
        }, 500);
    };
};

wrong_2.onclick = () => {
    stopNow()
    wrong_2.style.backgroundColor = "#ff0000ee";
    wrong_2.style.border = "2px solid #ff0000ee"
    wrong_2.style.color = "#ffffff"
    correct.style.backgroundColor = "#008000d7";
    correct.style.border = "2px solid #008000d7";
    correct.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_1.style.display = "none";
        test_2.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 2) {
                qt = 2
            }
        }, 500);
    };
};

wrong_3.onclick = () => {
    stopNow()
    wrong_3.style.backgroundColor = "#ff0000ee";
    wrong_3.style.border = "2px solid #ff0000ee"
    wrong_3.style.color = "#ffffff"
    correct.style.backgroundColor = "#008000d7";
    correct.style.border = "2px solid #008000d7"
    correct.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_1.style.display = "none";
        test_2.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 2) {
                qt = 2
            }
        }, 500);
    };
};

wrong_4.onclick = () => {
    stopNow()
    wrong_4.style.backgroundColor = "#ff0000ee";
    wrong_4.style.border = "2px solid #ff0000ee"
    wrong_4.style.color = "#ffffff"
    correct1.style.backgroundColor = "#008000d7";
    correct1.style.border = "2px solid #008000d7"
    correct1.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_2.style.display = "none";
        test_3.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 3) {
                qt = 3
            }
        }, 500);
    };
};

wrong_5.onclick = () => {
    stopNow()
    wrong_5.style.backgroundColor = "#ff0000ee";
    wrong_5.style.border = "2px solid #ff0000ee"
    wrong_5.style.color = "#ffffff"
    correct1.style.backgroundColor = "#008000d7";
    correct1.style.border = "2px solid #008000d7"
    correct1.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_2.style.display = "none";
        test_3.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 3) {
                qt = 3
            }
        }, 500);
    };
};

wrong_6.onclick = () => {
    stopNow()
    wrong_6.style.backgroundColor = "#ff0000ee";
    wrong_6.style.border = "2px solid #ff0000ee"
    wrong_6.style.color = "#ffffff"
    correct1.style.backgroundColor = "#008000d7";
    correct1.style.border = "2px solid #008000d7"
    correct1.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_2.style.display = "none";
        test_3.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 3) {
                qt = 3
            }
        }, 500);
    };
};

const wrong_7 = document.querySelector(".wrong7");
wrong_7.onclick = () => {
    stopNow()
    wrong_7.style.backgroundColor = "#ff0000ee";
    wrong_7.style.border = "2px solid #ff0000ee"
    wrong_7.style.color = "#ffffff"
    correct2.style.backgroundColor = "#008000d7";
    correct2.style.border = "2px solid #008000d7"
    correct2.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_3.style.display = "none";
        test_4.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 4) {
                qt = 4
            }
        }, 500);
    };
};

const wrong_8 = document.querySelector(".wrong8");
wrong_8.onclick = () => {
    stopNow()
    wrong_8.style.backgroundColor = "#ff0000ee";
    wrong_8.style.border = "2px solid #ff0000ee"
    wrong_8.style.color = "#ffffff"
    correct2.style.backgroundColor = "#008000d7";
    correct2.style.border = "2px solid #008000d7"
    correct2.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_3.style.display = "none";
        test_4.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 4) {
                qt = 4
            }
        }, 500);
    };
};

const wrong_9 = document.querySelector(".wrong9");
wrong_9.onclick = () => {
    stopNow()
    wrong_9.style.backgroundColor = "#ff0000ee";
    wrong_9.style.border = "2px solid #ff0000ee"
    wrong_9.style.color = "#ffffff"
    correct2.style.backgroundColor = "#008000d7";
    correct2.style.border = "2px solid #008000d7"
    correct2.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_3.style.display = "none";
        test_4.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 4) {
                qt = 4
            }
        }, 500);
    };
};

const wrong_10 = document.querySelector(".wrong10");
wrong_10.onclick = () => {
    stopNow()
    wrong_10.style.backgroundColor = "#ff0000ee";
    wrong_10.style.border = "2px solid #ff0000ee"
    wrong_10.style.color = "#ffffff"
    correct3.style.backgroundColor = "#008000d7";
    correct3.style.border = "2px solid #008000d7"
    correct3.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_4.style.display = "none";
        test_5.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 5) {
                qt = 5
            }
        }, 500);
    };
};

const wrong_11 = document.querySelector(".wrong11");
wrong_11.onclick = () => {
    stopNow()
    wrong_11.style.backgroundColor = "#ff0000ee";
    wrong_11.style.border = "2px solid #ff0000ee"
    wrong_11.style.color = "#ffffff"
    correct3.style.backgroundColor = "#008000d7";
    correct3.style.border = "2px solid #008000d7"
    correct3.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_4.style.display = "none";
        test_5.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 5) {
                qt = 5
            }
        }, 500);
    };
};

const wrong_12 = document.querySelector(".wrong12");
wrong_12.onclick = () => {
    stopNow()
    wrong_12.style.backgroundColor = "#ff0000ee";
    wrong_12.style.border = "2px solid #ff0000ee"
    wrong_12.style.color = "#ffffff"
    correct3.style.backgroundColor = "#008000d7";
    correct3.style.border = "2px solid #008000d7"
    correct3.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_4.style.display = "none";
        test_5.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 5) {
                qt = 5
            }
        }, 500);
    };
};

const wrong_13 = document.querySelector(".wrong13");
wrong_13.onclick = () => {
    stopNow()
    wrong_13.style.backgroundColor = "#ff0000ee";
    wrong_13.style.border = "2px solid #ff0000ee"
    wrong_13.style.color = "#ffffff"
    correct4.style.backgroundColor = "#008000d7";
    correct4.style.border = "2px solid #008000d7"
    correct4.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_5.style.display = "none";
        test_6.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 6) {
                qt = 6
            }
        }, 500);
    };
};

const wrong_14 = document.querySelector(".wrong14");
wrong_14.onclick = () => {
    stopNow()
    wrong_14.style.backgroundColor = "#ff0000ee";
    wrong_14.style.border = "2px solid #ff0000ee"
    wrong_14.style.color = "#ffffff"
    correct4.style.backgroundColor = "#008000d7";
    correct4.style.border = "2px solid #008000d7"
    correct4.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_5.style.display = "none";
        test_6.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 6) {
                qt = 6
            }
        }, 500);
    };
};

const wrong_15 = document.querySelector(".wrong15");
wrong_15.onclick = () => {
    stopNow()
    wrong_15.style.backgroundColor = "#ff0000ee";
    wrong_15.style.border = "2px solid #ff0000ee"
    wrong_15.style.color = "#ffffff"
    correct4.style.backgroundColor = "#008000d7";
    correct4.style.border = "2px solid #008000d7"
    correct4.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_5.style.display = "none";
        test_6.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 6) {
                qt = 6
            }
        }, 500);
    };
};

const wrong_16 = document.querySelector(".wrong16");
wrong_16.onclick = () => {
    stopNow()
    wrong_16.style.backgroundColor = "#ff0000ee";
    wrong_16.style.border = "2px solid #ff0000ee"
    wrong_16.style.color = "#ffffff"
    correct5.style.backgroundColor = "#008000d7";
    correct5.style.border = "2px solid #008000d7"
    correct5.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_6.style.display = "none";
        test_7.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 7) {
                qt = 7
            }
        }, 500);
    };
};

const wrong_17 = document.querySelector(".wrong17");
wrong_17.onclick = () => {
    stopNow()
    wrong_17.style.backgroundColor = "#ff0000ee";
    wrong_17.style.border = "2px solid #ff0000ee"
    wrong_17.style.color = "#ffffff"
    correct5.style.backgroundColor = "#008000d7";
    correct5.style.border = "2px solid #008000d7"
    correct5.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_6.style.display = "none";
        test_7.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 7) {
                qt = 7
            }
        }, 500);
    };
};

const wrong_18 = document.querySelector(".wrong18");
wrong_18.onclick = () => {
    stopNow()
    wrong_18.style.backgroundColor = "#ff0000ee";
    wrong_18.style.border = "2px solid #ff0000ee"
    wrong_18.style.color = "#ffffff"
    correct5.style.backgroundColor = "#008000d7";
    correct5.style.border = "2px solid #008000d7"
    correct5.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_6.style.display = "none";
        test_7.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 7) {
                qt = 7
            }
        }, 500);
    };
};

const wrong_19 = document.querySelector(".wrong19");
wrong_19.onclick = () => {
    stopNow()
    wrong_19.style.backgroundColor = "#ff0000ee";
    wrong_19.style.border = "2px solid #ff0000ee"
    wrong_19.style.color = "#ffffff"
    correct6.style.backgroundColor = "#008000d7";
    correct6.style.border = "2px solid #008000d7"
    correct6.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_7.style.display = "none";
        test_8.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 8) {
                qt = 8
            }
        }, 500);
    };
};

const wrong_20 = document.querySelector(".wrong20");
wrong_20.onclick = () => {
    stopNow()
    wrong_20.style.backgroundColor = "#ff0000ee";
    wrong_20.style.border = "2px solid #ff0000ee"
    wrong_20.style.color = "#ffffff"
    correct6.style.backgroundColor = "#008000d7";
    correct6.style.border = "2px solid #008000d7"
    correct6.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_7.style.display = "none";
        test_8.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 8) {
                qt = 8
            }
        }, 500);
    };
};

const wrong_21 = document.querySelector(".wrong21");
wrong_21.onclick = () => {
    stopNow()
    wrong_21.style.backgroundColor = "#ff0000ee";
    wrong_21.style.border = "2px solid #ff0000ee"
    wrong_21.style.color = "#ffffff"
    correct6.style.backgroundColor = "#008000d7";
    correct6.style.border = "2px solid #008000d7"
    correct6.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_7.style.display = "none";
        test_8.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 8) {
                qt = 8
            }
        }, 500);
    };
};

const wrong_22 = document.querySelector(".wrong22");
wrong_22.onclick = () => {
    stopNow()
    wrong_22.style.backgroundColor = "#ff0000ee";
    wrong_22.style.border = "2px solid #ff0000ee"
    wrong_22.style.color = "#ffffff"
    correct7.style.backgroundColor = "#008000d7";
    correct7.style.border = "2px solid #008000d7"
    correct7.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_8.style.display = "none";
        test_9.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 9) {
                qt = 9
            }
        }, 500);
    };
};

const wrong_23 = document.querySelector(".wrong23");
wrong_23.onclick = () => {
    stopNow()
    wrong_23.style.backgroundColor = "#ff0000ee";
    wrong_23.style.border = "2px solid #ff0000ee"
    wrong_23.style.color = "#ffffff"
    correct7.style.backgroundColor = "#008000d7";
    correct7.style.border = "2px solid #008000d7"
    correct7.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_8.style.display = "none";
        test_9.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 9) {
                qt = 9
            }
        }, 500);
    };
};

const wrong_24 = document.querySelector(".wrong24");
wrong_24.onclick = () => {
    stopNow()
    wrong_24.style.backgroundColor = "#ff0000ee";
    wrong_24.style.border = "2px solid #ff0000ee"
    wrong_24.style.color = "#ffffff"
    correct7.style.backgroundColor = "#008000d7";
    correct7.style.border = "2px solid #008000d7"
    correct7.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_8.style.display = "none";
        test_9.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 9) {
                qt = 9
            }
        }, 500);
    };
};

const wrong_25 = document.querySelector(".wrong25");
wrong_25.onclick = () => {
    stopNow()
    wrong_25.style.backgroundColor = "#ff0000ee";
    wrong_25.style.border = "2px solid #ff0000ee"
    wrong_25.style.color = "#ffffff"
    correct8.style.backgroundColor = "#008000d7";
    correct8.style.border = "2px solid #008000d7"
    correct8.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_9.style.display = "none";
        test_10.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 10) {
                qt = 10
            }
        }, 500);
    };
};

const wrong_26 = document.querySelector(".wrong26");
wrong_26.onclick = () => {
    stopNow()
    wrong_26.style.backgroundColor = "#ff0000ee";
    wrong_26.style.border = "2px solid #ff0000ee"
    wrong_26.style.color = "#ffffff"
    correct8.style.backgroundColor = "#008000d7";
    correct8.style.border = "2px solid #008000d7"
    correct8.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_9.style.display = "none";
        test_10.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 10) {
                qt = 10
            }
        }, 500);
    };
};

const wrong_27 = document.querySelector(".wrong27");
wrong_27.onclick = () => {
    stopNow()
    wrong_27.style.backgroundColor = "#ff0000ee";
    wrong_27.style.border = "2px solid #ff0000ee"
    wrong_27.style.color = "#ffffff"
    correct8.style.backgroundColor = "#008000d7";
    correct8.style.border = "2px solid #008000d7"
    correct8.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_9.style.display = "none";
        test_10.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 10) {
                qt = 10
            }
        }, 500);
    };
};

const wrong_28 = document.querySelector(".wrong28");
wrong_28.onclick = () => {
    stopNow()
    wrong_28.style.backgroundColor = "#ff0000ee";
    wrong_28.style.border = "2px solid #ff0000ee"
    wrong_28.style.color = "#ffffff"
    correct9.style.backgroundColor = "#008000d7";
    correct9.style.border = "2px solid #008000d7"
    correct9.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_10.style.display = "none";
        test_11.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 11) {
                qt = 11
            }
        }, 500);
    };
};

const wrong_29 = document.querySelector(".wrong29");
wrong_29.onclick = () => {
    stopNow()
    wrong_29.style.backgroundColor = "#ff0000ee";
    wrong_29.style.border = "2px solid #ff0000ee"
    wrong_29.style.color = "#ffffff"
    correct9.style.backgroundColor = "#008000d7";
    correct9.style.border = "2px solid #008000d7"
    correct9.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_10.style.display = "none";
        test_11.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 11) {
                qt = 11
            }
        }, 500);
    };
};

const wrong_30 = document.querySelector(".wrong30");
wrong_30.onclick = () => {
    stopNow()
    wrong_30.style.backgroundColor = "#ff0000ee";
    wrong_30.style.border = "2px solid #ff0000ee"
    wrong_30.style.color = "#ffffff"
    correct9.style.backgroundColor = "#008000d7";
    correct9.style.border = "2px solid #008000d7"
    correct9.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_10.style.display = "none";
        test_11.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 11) {
                qt = 11
            }
        }, 500);
    };
};

const wrong_31 = document.querySelector(".wrong31");
wrong_31.onclick = () => {
    stopNow()
    wrong_31.style.backgroundColor = "#ff0000ee";
    wrong_31.style.border = "2px solid #ff0000ee"
    wrong_31.style.color = "#ffffff"
    correct10.style.backgroundColor = "#008000d7";
    correct10.style.border = "2px solid #008000d7"
    correct10.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_11.style.display = "none";
        test_12.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 12) {
                qt = 12
            }
        }, 500);
    };
};

const wrong_32 = document.querySelector(".wrong32");
wrong_32.onclick = () => {
    stopNow()
    wrong_32.style.backgroundColor = "#ff0000ee";
    wrong_32.style.border = "2px solid #ff0000ee"
    wrong_32.style.color = "#ffffff"
    correct10.style.backgroundColor = "#008000d7";
    correct10.style.border = "2px solid #008000d7"
    correct10.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_11.style.display = "none";
        test_12.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 12) {
                qt = 12
            }
        }, 500);
    };
};

const wrong_33 = document.querySelector(".wrong33");
wrong_33.onclick = () => {
    stopNow()
    wrong_33.style.backgroundColor = "#ff0000ee";
    wrong_33.style.border = "2px solid #ff0000ee"
    wrong_33.style.color = "#ffffff"
    correct10.style.backgroundColor = "#008000d7";
    correct10.style.border = "2px solid #008000d7"
    correct10.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_11.style.display = "none";
        test_12.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 12) {
                qt = 12
            }
        }, 500);
    };
};

const wrong_34 = document.querySelector(".wrong34");
wrong_34.onclick = () => {
    stopNow()
    wrong_34.style.backgroundColor = "#ff0000ee";
    wrong_34.style.border = "2px solid #ff0000ee"
    wrong_34.style.color = "#ffffff"
    correct11.style.backgroundColor = "#008000d7";
    correct11.style.border = "2px solid #008000d7"
    correct11.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_12.style.display = "none";
        test_13.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 13) {
                qt = 13
            }
        }, 500);
    };
};

const wrong_35 = document.querySelector(".wrong35");
wrong_35.onclick = () => {
    stopNow()
    wrong_35.style.backgroundColor = "#ff0000ee";
    wrong_35.style.border = "2px solid #ff0000ee"
    wrong_35.style.color = "#ffffff"
    correct11.style.backgroundColor = "#008000d7";
    correct11.style.border = "2px solid #008000d7"
    correct11.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_12.style.display = "none";
        test_13.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 13) {
                qt = 13
            }
        }, 500);
    };
};

const wrong_36 = document.querySelector(".wrong36");
wrong_36.onclick = () => {
    stopNow()
    wrong_36.style.backgroundColor = "#ff0000ee";
    wrong_36.style.border = "2px solid #ff0000ee"
    wrong_36.style.color = "#ffffff"
    correct11.style.backgroundColor = "#008000d7";
    correct11.style.border = "2px solid #008000d7"
    correct11.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_12.style.display = "none";
        test_13.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 13) {
                qt = 13
            }
        }, 500);
    };
};

const wrong_37 = document.querySelector(".wrong37");
wrong_37.onclick = () => {
    stopNow()
    wrong_37.style.backgroundColor = "#ff0000ee";
    wrong_37.style.border = "2px solid #ff0000ee"
    wrong_37.style.color = "#ffffff"
    correct12.style.backgroundColor = "#008000d7";
    correct12.style.border = "2px solid #008000d7"
    correct12.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_13.style.display = "none";
        test_14.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 14) {
                qt = 14
            }
        }, 500);
    };
};

const wrong_38 = document.querySelector(".wrong38");
wrong_38.onclick = () => {
    stopNow()
    wrong_38.style.backgroundColor = "#ff0000ee";
    wrong_38.style.border = "2px solid #ff0000ee"
    wrong_38.style.color = "#ffffff"
    correct12.style.backgroundColor = "#008000d7";
    correct12.style.border = "2px solid #008000d7"
    correct12.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_13.style.display = "none";
        test_14.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 14) {
                qt = 14
            }
        }, 500);
    };
};

const wrong_39 = document.querySelector(".wrong39");
wrong_39.onclick = () => {
    stopNow()
    wrong_39.style.backgroundColor = "#ff0000ee";
    wrong_39.style.border = "2px solid #ff0000ee"
    wrong_39.style.color = "#ffffff"
    correct12.style.backgroundColor = "#008000d7";
    correct12.style.border = "2px solid #008000d7"
    correct12.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_13.style.display = "none";
        test_14.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 14) {
                qt = 14
            }
        }, 500);
    };
};

const wrong_40 = document.querySelector(".wrong40");
wrong_40.onclick = () => {
    stopNow()
    wrong_40.style.backgroundColor = "#ff0000ee";
    wrong_40.style.border = "2px solid #ff0000ee"
    wrong_40.style.color = "#ffffff"
    correct13.style.backgroundColor = "#008000d7";
    correct13.style.border = "2px solid #008000d7"
    correct13.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_14.style.display = "none";
        test_15.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 15) {
                qt = 15
            }
        }, 500);
    };
};

const wrong_41 = document.querySelector(".wrong41");
wrong_41.onclick = () => {
    stopNow()
    wrong_41.style.backgroundColor = "#ff0000ee";
    wrong_41.style.border = "2px solid #ff0000ee"
    wrong_41.style.color = "#ffffff"
    correct13.style.backgroundColor = "#008000d7";
    correct13.style.border = "2px solid #008000d7"
    correct13.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_14.style.display = "none";
        test_15.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 15) {
                qt = 15
            }
        }, 500);
    };
};

const wrong_42 = document.querySelector(".wrong42");
wrong_42.onclick = () => {
    stopNow()
    wrong_42.style.backgroundColor = "#ff0000ee";
    wrong_42.style.border = "2px solid #ff0000ee"
    wrong_42.style.color = "#ffffff"
    correct13.style.backgroundColor = "#008000d7";
    correct13.style.border = "2px solid #008000d7"
    correct13.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_14.style.display = "none";
        test_15.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 15) {
                qt = 15
            }
        }, 500);
    };
};

const wrong_43 = document.querySelector(".wrong43");
wrong_43.onclick = () => {
    stopNow()
    wrong_43.style.backgroundColor = "#ff0000ee";
    wrong_43.style.border = "2px solid #ff0000ee"
    wrong_43.style.color = "#ffffff"
    correct14.style.backgroundColor = "#008000d7";
    correct14.style.border = "2px solid #008000d7"
    correct14.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_15.style.display = "none";
        test_16.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 16) {
                qt = 16
            }
        }, 500);
    };
};

const wrong_44 = document.querySelector(".wrong44");
wrong_44.onclick = () => {
    stopNow()
    wrong_44.style.backgroundColor = "#ff0000ee";
    wrong_44.style.border = "2px solid #ff0000ee"
    wrong_44.style.color = "#ffffff"
    correct14.style.backgroundColor = "#008000d7";
    correct14.style.border = "2px solid #008000d7"
    correct14.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_15.style.display = "none";
        test_16.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 16) {
                qt = 16
            }
        }, 500);
    };
};

const wrong_45 = document.querySelector(".wrong45");
wrong_45.onclick = () => {
    stopNow()
    wrong_45.style.backgroundColor = "#ff0000ee";
    wrong_45.style.border = "2px solid #ff0000ee"
    wrong_45.style.color = "#ffffff"
    correct14.style.backgroundColor = "#008000d7";
    correct14.style.border = "2px solid #008000d7"
    correct14.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_15.style.display = "none";
        test_16.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 16) {
                qt = 16
            }
        }, 500);
    };
};

const wrong_46 = document.querySelector(".wrong46");
wrong_46.onclick = () => {
    stopNow()
    wrong_46.style.backgroundColor = "#ff0000ee";
    wrong_46.style.border = "2px solid #ff0000ee"
    wrong_46.style.color = "#ffffff"
    correct15.style.backgroundColor = "#008000d7";
    correct15.style.border = "2px solid #008000d7"
    correct15.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_16.style.display = "none";
        test_17.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 17) {
                qt = 17
            }
        }, 500);
    };
};

const wrong_47 = document.querySelector(".wrong47");
wrong_47.onclick = () => {
    stopNow()
    wrong_47.style.backgroundColor = "#ff0000ee";
    wrong_47.style.border = "2px solid #ff0000ee"
    wrong_47.style.color = "#ffffff"
    correct15.style.backgroundColor = "#008000d7";
    correct15.style.border = "2px solid #008000d7"
    correct15.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_16.style.display = "none";
        test_17.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 17) {
                qt = 17
            }
        }, 500);
    };
};

const wrong_48 = document.querySelector(".wrong48");
wrong_48.onclick = () => {
    stopNow()
    wrong_48.style.backgroundColor = "#ff0000ee";
    wrong_48.style.border = "2px solid #ff0000ee"
    wrong_48.style.color = "#ffffff"
    correct15.style.backgroundColor = "#008000d7";
    correct15.style.border = "2px solid #008000d7"
    correct15.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_16.style.display = "none";
        test_17.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 17) {
                qt = 17
            }
        }, 500);
    };
};

const wrong_49 = document.querySelector(".wrong49");
wrong_49.onclick = () => {
    stopNow()
    wrong_49.style.backgroundColor = "#ff0000ee";
    wrong_49.style.border = "2px solid #ff0000ee"
    wrong_49.style.color = "#ffffff"
    correct16.style.backgroundColor = "#008000d7";
    correct16.style.border = "2px solid #008000d7"
    correct16.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_17.style.display = "none";
        test_18.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 18) {
                qt = 18
            }
        }, 500);
    };
};

const wrong_50 = document.querySelector(".wrong50");
wrong_50.onclick = () => {
    stopNow()
    wrong_50.style.backgroundColor = "#ff0000ee";
    wrong_50.style.border = "2px solid #ff0000ee"
    wrong_50.style.color = "#ffffff"
    correct16.style.backgroundColor = "#008000d7";
    correct16.style.border = "2px solid #008000d7"
    correct16.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_17.style.display = "none";
        test_18.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 18) {
                qt = 18
            }
        }, 500);
    };
};

const wrong_51 = document.querySelector(".wrong51");
wrong_51.onclick = () => {
    stopNow()
    wrong_51.style.backgroundColor = "#ff0000ee";
    wrong_51.style.border = "2px solid #ff0000ee"
    wrong_51.style.color = "#ffffff"
    correct16.style.backgroundColor = "#008000d7";
    correct16.style.border = "2px solid #008000d7"
    correct16.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_17.style.display = "none";
        test_18.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 18) {
                qt = 18
            }
        }, 500);
    };
};

const wrong_52 = document.querySelector(".wrong52");
wrong_52.onclick = () => {
    stopNow()
    wrong_52.style.backgroundColor = "#ff0000ee";
    wrong_52.style.border = "2px solid #ff0000ee"
    wrong_52.style.color = "#ffffff"
    correct17.style.backgroundColor = "#008000d7";
    correct17.style.border = "2px solid #008000d7"
    correct17.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_18.style.display = "none";
        test_19.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 20) {
                qt = 20
            }
        }, 500);
    };
};

const wrong_53 = document.querySelector(".wrong53");
wrong_53.onclick = () => {
    stopNow()
    wrong_53.style.backgroundColor = "#ff0000ee";
    wrong_53.style.border = "2px solid #ff0000ee"
    wrong_53.style.color = "#ffffff"
    correct17.style.backgroundColor = "#008000d7";
    correct17.style.border = "2px solid #008000d7"
    correct17.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_18.style.display = "none";
        test_19.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 20) {
                qt = 20
            }
        }, 500);
    };
};

const wrong_54 = document.querySelector(".wrong54");
wrong_54.onclick = () => {
    stopNow()
    wrong_54.style.backgroundColor = "#ff0000ee";
    wrong_54.style.border = "2px solid #ff0000ee"
    wrong_54.style.color = "#ffffff"
    correct17.style.backgroundColor = "#008000d7";
    correct17.style.border = "2px solid #008000d7"
    correct17.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_18.style.display = "none";
        test_19.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 20) {
                qt = 20
            }
        }, 500);
    };
};

const wrong_55 = document.querySelector(".wrong55");
wrong_55.onclick = () => {
    stopNow()
    wrong_55.style.backgroundColor = "#ff0000ee";
    wrong_55.style.border = "2px solid #ff0000ee"
    wrong_55.style.color = "#ffffff"
    correct18.style.backgroundColor = "#008000d7";
    correct18.style.border = "2px solid #008000d7"
    correct18.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_19.style.display = "none";
        test_20.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 21) {
                qt = 21
            }
        }, 500);
    };
};

const wrong_56 = document.querySelector(".wrong56");
wrong_56.onclick = () => {
    stopNow()
    wrong_56.style.backgroundColor = "#ff0000ee";
    wrong_56.style.border = "2px solid #ff0000ee"
    wrong_56.style.color = "#ffffff"
    correct18.style.backgroundColor = "#008000d7";
    correct18.style.border = "2px solid #008000d7"
    correct18.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_19.style.display = "none";
        test_20.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 21) {
                qt = 21
            }
        }, 500);
    };
};

const wrong_57 = document.querySelector(".wrong57");
wrong_57.onclick = () => {
    stopNow()
    wrong_57.style.backgroundColor = "#ff0000ee";
    wrong_57.style.border = "2px solid #ff0000ee"
    wrong_57.style.color = "#ffffff"
    correct18.style.backgroundColor = "#008000d7";
    correct18.style.border = "2px solid #008000d7"
    correct18.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_19.style.display = "none";
        test_20.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 21) {
                qt = 21
            }
        }, 500);
    };
};

const wrong_58 = document.querySelector(".wrong58");
wrong_58.onclick = () => {
    stopNow()
    wrong_58.style.backgroundColor = "#ff0000ee";
    wrong_58.style.border = "2px solid #ff0000ee"
    wrong_58.style.color = "#ffffff"
    correct19.style.backgroundColor = "#008000d7";
    correct19.style.border = "2px solid #008000d7"
    correct19.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_20.style.display = "none";
        test_21.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 22) {
                qt = 22
            }
        }, 500);
    };
};

const wrong_59 = document.querySelector(".wrong59");
wrong_59.onclick = () => {
    stopNow()
    wrong_59.style.backgroundColor = "#ff0000ee";
    wrong_59.style.border = "2px solid #ff0000ee"
    wrong_59.style.color = "#ffffff"
    correct19.style.backgroundColor = "#008000d7";
    correct19.style.border = "2px solid #008000d7"
    correct19.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_20.style.display = "none";
        test_21.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 22) {
                qt = 22
            }
        }, 500);
    };
};

const wrong_60 = document.querySelector(".wrong60");
wrong_60.onclick = () => {
    stopNow()
    wrong_60.style.backgroundColor = "#ff0000ee";
    wrong_60.style.border = "2px solid #ff0000ee"
    wrong_60.style.color = "#ffffff"
    correct19.style.backgroundColor = "#008000d7";
    correct19.style.border = "2px solid #008000d7"
    correct19.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_20.style.display = "none";
        test_21.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 22) {
                qt = 22
            }
        }, 500);
    };
};

const wrong_61 = document.querySelector(".wrong61");
wrong_61.onclick = () => {
    stopNow()
    wrong_61.style.backgroundColor = "#ff0000ee";
    wrong_61.style.border = "2px solid #ff0000ee"
    wrong_61.style.color = "#ffffff"
    correct20.style.backgroundColor = "#008000d7";
    correct20.style.border = "2px solid #008000d7"
    correct20.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_21.style.display = "none";
        test_22.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 23) {
                qt = 23
            }
        }, 500);
    };
};

const wrong_62 = document.querySelector(".wrong62");
wrong_62.onclick = () => {
    stopNow()
    wrong_62.style.backgroundColor = "#ff0000ee";
    wrong_62.style.border = "2px solid #ff0000ee"
    wrong_62.style.color = "#ffffff"
    correct20.style.backgroundColor = "#008000d7";
    correct20.style.border = "2px solid #008000d7"
    correct20.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_21.style.display = "none";
        test_22.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 23) {
                qt = 23
            }
        }, 500);
    };
};

const wrong_63 = document.querySelector(".wrong63");
wrong_63.onclick = () => {
    stopNow()
    wrong_63.style.backgroundColor = "#ff0000ee";
    wrong_63.style.border = "2px solid #ff0000ee"
    wrong_63.style.color = "#ffffff"
    correct20.style.backgroundColor = "#008000d7";
    correct20.style.border = "2px solid #008000d7"
    correct20.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_21.style.display = "none";
        test_22.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 23) {
                qt = 23
            }
        }, 500);
    };
};

const wrong_64 = document.querySelector(".wrong64");
wrong_64.onclick = () => {
    stopNow()
    wrong_64.style.backgroundColor = "#ff0000ee";
    wrong_64.style.border = "2px solid #ff0000ee"
    wrong_64.style.color = "#ffffff"
    correct21.style.backgroundColor = "#008000d7";
    correct21.style.border = "2px solid #008000d7"
    correct21.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_22.style.display = "none";
        test_23.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 24) {
                qt = 24
            }
        }, 500);
    };
};

const wrong_65 = document.querySelector(".wrong65");
wrong_65.onclick = () => {
    stopNow()
    wrong_65.style.backgroundColor = "#ff0000ee";
    wrong_65.style.border = "2px solid #ff0000ee"
    wrong_65.style.color = "#ffffff"
    correct21.style.backgroundColor = "#008000d7";
    correct21.style.border = "2px solid #008000d7"
    correct21.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_22.style.display = "none";
        test_23.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 24) {
                qt = 24
            }
        }, 500);
    };
};

const wrong_66 = document.querySelector(".wrong66");
wrong_66.onclick = () => {
    stopNow()
    wrong_66.style.backgroundColor = "#ff0000ee";
    wrong_66.style.border = "2px solid #ff0000ee"
    wrong_66.style.color = "#ffffff"
    correct21.style.backgroundColor = "#008000d7";
    correct21.style.border = "2px solid #008000d7"
    correct21.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_22.style.display = "none";
        test_23.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 24) {
                qt = 24
            }
        }, 500);
    };
};

const wrong_67 = document.querySelector(".wrong67");
wrong_67.onclick = () => {
    stopNow()
    wrong_67.style.backgroundColor = "#ff0000ee";
    wrong_67.style.border = "2px solid #ff0000ee"
    wrong_67.style.color = "#ffffff"
    correct22.style.backgroundColor = "#008000d7";
    correct22.style.border = "2px solid #008000d7"
    correct22.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_23.style.display = "none";
        test_24.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 25) {
                qt = 25
            }
        }, 500);
    };
};

const wrong_68 = document.querySelector(".wrong68");
wrong_68.onclick = () => {
    stopNow()
    wrong_68.style.backgroundColor = "#ff0000ee";
    wrong_68.style.border = "2px solid #ff0000ee"
    wrong_68.style.color = "#ffffff"
    correct22.style.backgroundColor = "#008000d7";
    correct22.style.border = "2px solid #008000d7"
    correct22.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_23.style.display = "none";
        test_24.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 25) {
                qt = 25
            }
        }, 500);
    };
};

const wrong_69 = document.querySelector(".wrong69");
wrong_69.onclick = () => {
    stopNow()
    wrong_69.style.backgroundColor = "#ff0000ee";
    wrong_69.style.border = "2px solid #ff0000ee"
    wrong_69.style.color = "#ffffff"
    correct22.style.backgroundColor = "#008000d7";
    correct22.style.border = "2px solid #008000d7"
    correct22.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_23.style.display = "none";
        test_24.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 25) {
                qt = 25
            }
        }, 500);
    };
};

const wrong_70 = document.querySelector(".wrong70");
wrong_70.onclick = () => {
    stopNow()
    wrong_70.style.backgroundColor = "#ff0000ee";
    wrong_70.style.border = "2px solid #ff0000ee"
    wrong_70.style.color = "#ffffff"
    correct23.style.backgroundColor = "#008000d7";
    correct23.style.border = "2px solid #008000d7"
    correct23.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_24.style.display = "none";
        test_25.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 25) {
                qt = 25
            }
        }, 500);
    };
};

const wrong_71 = document.querySelector(".wrong71");
wrong_71.onclick = () => {
    stopNow()
    wrong_71.style.backgroundColor = "#ff0000ee";
    wrong_71.style.border = "2px solid #ff0000ee"
    wrong_71.style.color = "#ffffff"
    correct23.style.backgroundColor = "#008000d7";
    correct23.style.border = "2px solid #008000d7"
    correct23.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_24.style.display = "none";
        test_25.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 25) {
                qt = 25
            }
        }, 500);
    };
};

const wrong_72 = document.querySelector(".wrong72");
wrong_72.onclick = () => {
    stopNow()
    wrong_72.style.backgroundColor = "#ff0000ee";
    wrong_72.style.border = "2px solid #ff0000ee"
    wrong_72.style.color = "#ffffff"
    correct23.style.backgroundColor = "#008000d7";
    correct23.style.border = "2px solid #008000d7"
    correct23.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_24.style.display = "none";
        test_25.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 25) {
                qt = 25
            }
        }, 500);
    };
};

const wrong_73 = document.querySelector(".wrong73");
wrong_73.onclick = () => {
    stopNow()
    wrong_73.style.backgroundColor = "#ff0000ee";
    wrong_73.style.border = "2px solid #ff0000ee"
    wrong_73.style.color = "#ffffff"
    correct23.style.backgroundColor = "#008000d7";
    correct23.style.border = "2px solid #008000d7"
    correct23.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_24.style.display = "none";
        test_25.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 25) {
                qt = 25
            }
        }, 500);
    };
};

const wrong_74 = document.querySelector(".wrong74");
wrong_74.onclick = () => {
    stopNow()
    wrong_74.style.backgroundColor = "#ff0000ee";
    wrong_74.style.border = "2px solid #ff0000ee"
    wrong_74.style.color = "#ffffff"
    correct24.style.backgroundColor = "#008000d7";
    correct24.style.border = "2px solid #008000d7"
    correct24.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_25.style.display = "none";
        test_26.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 26) {
                qt = 26
            }
        }, 500);
    };
};

const wrong_75 = document.querySelector(".wrong75");
wrong_75.onclick = () => {
    stopNow()
    wrong_75.style.backgroundColor = "#ff0000ee";
    wrong_75.style.border = "2px solid #ff0000ee"
    wrong_75.style.color = "#ffffff"
    correct24.style.backgroundColor = "#008000d7";
    correct24.style.border = "2px solid #008000d7"
    correct24.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_25.style.display = "none";
        test_26.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 26) {
                qt = 26
            }
        }, 500);
    };
};

const wrong_76 = document.querySelector(".wrong76");
wrong_76.onclick = () => {
    stopNow()
    wrong_76.style.backgroundColor = "#ff0000ee";
    wrong_76.style.border = "2px solid #ff0000ee"
    wrong_76.style.color = "#ffffff"
    correct24.style.backgroundColor = "#008000d7";
    correct24.style.border = "2px solid #008000d7"
    correct24.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_25.style.display = "none";
        test_26.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 26) {
                qt = 26
            }
        }, 500);
    };
};

const wrong_77 = document.querySelector(".wrong77");
wrong_77.onclick = () => {
    stopNow()
    wrong_77.style.backgroundColor = "#ff0000ee";
    wrong_77.style.border = "2px solid #ff0000ee"
    wrong_77.style.color = "#ffffff"
    correct25.style.backgroundColor = "#008000d7";
    correct25.style.border = "2px solid #008000d7"
    correct25.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_26.style.display = "none";
        test_27.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 27) {
                qt = 27
            }
        }, 500);
    };
};

const wrong_78 = document.querySelector(".wrong78");
wrong_78.onclick = () => {
    stopNow()
    wrong_78.style.backgroundColor = "#ff0000ee";
    wrong_78.style.border = "2px solid #ff0000ee"
    wrong_78.style.color = "#ffffff"
    correct25.style.backgroundColor = "#008000d7";
    correct25.style.border = "2px solid #008000d7"
    correct25.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_26.style.display = "none";
        test_27.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 27) {
                qt = 27
            }
        }, 500);
    };
};

const wrong_79 = document.querySelector(".wrong79");
wrong_79.onclick = () => {
    stopNow()
    wrong_79.style.backgroundColor = "#ff0000ee";
    wrong_79.style.border = "2px solid #ff0000ee"
    wrong_79.style.color = "#ffffff"
    correct25.style.backgroundColor = "#008000d7";
    correct25.style.border = "2px solid #008000d7"
    correct25.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_26.style.display = "none";
        test_27.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 27) {
                qt = 27
            }
        }, 500);
    };
};

const wrong_80 = document.querySelector(".wrong80");
wrong_80.onclick = () => {
    stopNow()
    wrong_80.style.backgroundColor = "#ff0000ee";
    wrong_80.style.border = "2px solid #ff0000ee"
    wrong_80.style.color = "#ffffff"
    correct26.style.backgroundColor = "#008000d7";
    correct26.style.border = "2px solid #008000d7"
    correct26.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_27.style.display = "none";
        test_28.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 28) {
                qt = 28
            }
        }, 500);
    };
};

const wrong_81 = document.querySelector(".wrong81");
wrong_81.onclick = () => {
    stopNow()
    wrong_81.style.backgroundColor = "#ff0000ee";
    wrong_81.style.border = "2px solid #ff0000ee"
    wrong_81.style.color = "#ffffff"
    correct26.style.backgroundColor = "#008000d7";
    correct26.style.border = "2px solid #008000d7"
    correct26.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_27.style.display = "none";
        test_28.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 28) {
                qt = 28
            }
        }, 500);
    };
};

const wrong_82 = document.querySelector(".wrong82");
wrong_82.onclick = () => {
    stopNow()
    wrong_82.style.backgroundColor = "#ff0000ee";
    wrong_82.style.border = "2px solid #ff0000ee"
    wrong_82.style.color = "#ffffff"
    correct26.style.backgroundColor = "#008000d7";
    correct26.style.border = "2px solid #008000d7"
    correct26.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_27.style.display = "none";
        test_28.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 28) {
                qt = 28
            }
        }, 500);
    };
};

const wrong_83 = document.querySelector(".wrong83");
wrong_83.onclick = () => {
    stopNow()
    wrong_83.style.backgroundColor = "#ff0000ee";
    wrong_83.style.border = "2px solid #ff0000ee"
    wrong_83.style.color = "#ffffff"
    correct27.style.backgroundColor = "#008000d7";
    correct27.style.border = "2px solid #008000d7"
    correct27.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_28.style.display = "none";
        test_29.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 29) {
                qt = 29
            }
        }, 500);
    };
};

const wrong_84 = document.querySelector(".wrong84");
wrong_84.onclick = () => {
    stopNow()
    wrong_84.style.backgroundColor = "#ff0000ee";
    wrong_84.style.border = "2px solid #ff0000ee"
    wrong_84.style.color = "#ffffff"
    correct27.style.backgroundColor = "#008000d7";
    correct27.style.border = "2px solid #008000d7"
    correct27.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_28.style.display = "none";
        test_29.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 29) {
                qt = 29
            }
        }, 500);
    };
};

const wrong_85 = document.querySelector(".wrong85");
wrong_85.onclick = () => {
    stopNow()
    wrong_85.style.backgroundColor = "#ff0000ee";
    wrong_85.style.border = "2px solid #ff0000ee"
    wrong_85.style.color = "#ffffff"
    correct27.style.backgroundColor = "#008000d7";
    correct27.style.border = "2px solid #008000d7"
    correct27.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_28.style.display = "none";
        test_29.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 29) {
                qt = 29
            }
        }, 500);
    };
};

const wrong_86 = document.querySelector(".wrong86");
wrong_86.onclick = () => {
    stopNow()
    wrong_86.style.backgroundColor = "#ff0000ee";
    wrong_86.style.border = "2px solid #ff0000ee"
    wrong_86.style.color = "#ffffff"
    correct28.style.backgroundColor = "#008000d7";
    correct28.style.border = "2px solid #008000d7"
    correct28.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_29.style.display = "none";
        test_30.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 30) {
                qt = 30
            }
        }, 500);
    };
};

const wrong_87 = document.querySelector(".wrong87");
wrong_87.onclick = () => {
    stopNow()
    wrong_87.style.backgroundColor = "#ff0000ee";
    wrong_87.style.border = "2px solid #ff0000ee"
    wrong_87.style.color = "#ffffff"
    correct28.style.backgroundColor = "#008000d7";
    correct28.style.border = "2px solid #008000d7"
    correct28.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_29.style.display = "none";
        test_30.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 30) {
                qt = 30
            }
        }, 500);
    };
};

const wrong_88 = document.querySelector(".wrong88");
wrong_88.onclick = () => {
    stopNow()
    wrong_88.style.backgroundColor = "#ff0000ee";
    wrong_88.style.border = "2px solid #ff0000ee"
    wrong_88.style.color = "#ffffff"
    correct28.style.backgroundColor = "#008000d7";
    correct28.style.border = "2px solid #008000d7"
    correct28.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_29.style.display = "none";
        test_30.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 31) {
                qt = 31
            }
        }, 500);
    };
};

const wrong_89 = document.querySelector(".wrong89");
wrong_89.onclick = () => {
    stopNow()
    wrong_89.style.backgroundColor = "#ff0000ee";
    wrong_89.style.border = "2px solid #ff0000ee"
    wrong_89.style.color = "#ffffff"
    correct29.style.backgroundColor = "#008000d7";
    correct29.style.border = "2px solid #008000d7"
    correct29.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_30.style.display = "none";
        test_31.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 31) {
                qt = 31
            }
        }, 500);
    };
};

const wrong_90 = document.querySelector(".wrong90");
wrong_90.onclick = () => {
    stopNow()
    wrong_90.style.backgroundColor = "#ff0000ee";
    wrong_90.style.border = "2px solid #ff0000ee"
    wrong_90.style.color = "#ffffff"
    correct29.style.backgroundColor = "#008000d7";
    correct29.style.border = "2px solid #008000d7"
    correct29.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_30.style.display = "none";
        test_31.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 31) {
                qt = 31
            }
        }, 500);
    };
};

const wrong_91 = document.querySelector(".wrong91");
wrong_91.onclick = () => {
    stopNow()
    wrong_91.style.backgroundColor = "#ff0000ee";
    wrong_91.style.border = "2px solid #ff0000ee"
    wrong_91.style.color = "#ffffff"
    correct29.style.backgroundColor = "#008000d7";
    correct29.style.border = "2px solid #008000d7"
    correct29.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_30.style.display = "none";
        test_31.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 31) {
                qt = 31
            }
        }, 500);
    };
};

const wrong_92 = document.querySelector(".wrong92");
wrong_92.onclick = () => {
    stopNow()
    wrong_92.style.backgroundColor = "#ff0000ee";
    wrong_92.style.border = "2px solid #ff0000ee"
    wrong_92.style.color = "#ffffff"
    correct30.style.backgroundColor = "#008000d7";
    correct30.style.border = "2px solid #008000d7"
    correct30.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_31.style.display = "none";
        test_32.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 32) {
                qt = 32
            }
        }, 500);
    };
};

const wrong_93 = document.querySelector(".wrong93");
wrong_93.onclick = () => {
    stopNow()
    wrong_93.style.backgroundColor = "#ff0000ee";
    wrong_93.style.border = "2px solid #ff0000ee"
    wrong_93.style.color = "#ffffff"
    correct30.style.backgroundColor = "#008000d7";
    correct30.style.border = "2px solid #008000d7"
    correct30.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_31.style.display = "none";
        test_32.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 32) {
                qt = 32
            }
        }, 500);
    };
};

const wrong_94 = document.querySelector(".wrong94");
wrong_94.onclick = () => {
    stopNow()
    wrong_94.style.backgroundColor = "#ff0000ee";
    wrong_94.style.border = "2px solid #ff0000ee"
    wrong_94.style.color = "#ffffff"
    correct30.style.backgroundColor = "#008000d7";
    correct30.style.border = "2px solid #008000d7"
    correct30.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_31.style.display = "none";
        test_32.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 32) {
                qt = 32
            }
        }, 500);
    };
};

const wrong_95 = document.querySelector(".wrong95");
wrong_95.onclick = () => {
    stopNow()
    wrong_95.style.backgroundColor = "#ff0000ee";
    wrong_95.style.border = "2px solid #ff0000ee"
    wrong_95.style.color = "#ffffff"
    correct31.style.backgroundColor = "#008000d7";
    correct31.style.border = "2px solid #008000d7"
    correct31.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_32.style.display = "none";
        test_33.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 33) {
                qt = 33
            }
        }, 500);
    };
};

const wrong_96 = document.querySelector(".wrong96");
wrong_96.onclick = () => {
    stopNow()
    wrong_96.style.backgroundColor = "#ff0000ee";
    wrong_96.style.border = "2px solid #ff0000ee"
    wrong_96.style.color = "#ffffff"
    correct31.style.backgroundColor = "#008000d7";
    correct31.style.border = "2px solid #008000d7"
    correct31.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_32.style.display = "none";
        test_33.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 33) {
                qt = 33
            }
        }, 500);
    };
};

const wrong_97 = document.querySelector(".wrong97");
wrong_97.onclick = () => {
    stopNow()
    wrong_97.style.backgroundColor = "#ff0000ee";
    wrong_97.style.border = "2px solid #ff0000ee"
    wrong_97.style.color = "#ffffff"
    correct31.style.backgroundColor = "#008000d7";
    correct31.style.border = "2px solid #008000d7"
    correct31.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_32.style.display = "none";
        test_33.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 33) {
                qt = 33
            }
        }, 500);
    };
};

const wrong_98 = document.querySelector(".wrong98");
wrong_98.onclick = () => {
    stopNow()
    wrong_98.style.backgroundColor = "#ff0000ee";
    wrong_98.style.border = "2px solid #ff0000ee"
    wrong_98.style.color = "#ffffff"
    correct32.style.backgroundColor = "#008000d7";
    correct32.style.border = "2px solid #008000d7"
    correct32.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_33.style.display = "none";
        test_34.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 34) {
                qt = 34
            }
        }, 500);
    };
};

const wrong_99 = document.querySelector(".wrong99");
wrong_99.onclick = () => {
    stopNow()
    wrong_99.style.backgroundColor = "#ff0000ee";
    wrong_99.style.border = "2px solid #ff0000ee"
    wrong_99.style.color = "#ffffff"
    correct32.style.backgroundColor = "#008000d7";
    correct32.style.border = "2px solid #008000d7"
    correct32.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_33.style.display = "none";
        test_34.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 34) {
                qt = 34
            }
        }, 500);
    };
};

const wrong_100 = document.querySelector(".wrong100");
wrong_100.onclick = () => {
    stopNow()
    wrong_100.style.backgroundColor = "#ff0000ee";
    wrong_100.style.border = "2px solid #ff0000ee"
    wrong_100.style.color = "#ffffff"
    correct32.style.backgroundColor = "#008000d7";
    correct32.style.border = "2px solid #008000d7"
    correct32.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_33.style.display = "none";
        test_34.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 34) {
                qt = 34
            }
        }, 500);
    };
};

const wrong_101 = document.querySelector(".wrong101");
wrong_101.onclick = () => {
    stopNow()
    wrong_101.style.backgroundColor = "#ff0000ee";
    wrong_101.style.border = "2px solid #ff0000ee"
    wrong_101.style.color = "#ffffff"
    correct33.style.backgroundColor = "#008000d7";
    correct33.style.border = "2px solid #008000d7"
    correct33.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_34.style.display = "none";
        test_35.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 35) {
                qt = 35
            }
        }, 500);
    };
};

const wrong_102 = document.querySelector(".wrong102");
wrong_102.onclick = () => {
    stopNow()
    wrong_102.style.backgroundColor = "#ff0000ee";
    wrong_102.style.border = "2px solid #ff0000ee"
    wrong_102.style.color = "#ffffff"
    correct33.style.backgroundColor = "#008000d7";
    correct33.style.border = "2px solid #008000d7"
    correct33.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_34.style.display = "none";
        test_35.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 35) {
                qt = 35
            }
        }, 500);
    };
};

const wrong_103 = document.querySelector(".wrong103");
wrong_103.onclick = () => {
    stopNow()
    wrong_103.style.backgroundColor = "#ff0000ee";
    wrong_103.style.border = "2px solid #ff0000ee"
    wrong_103.style.color = "#ffffff"
    correct33.style.backgroundColor = "#008000d7";
    correct33.style.border = "2px solid #008000d7"
    correct33.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_34.style.display = "none";
        test_35.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 35) {
                qt = 35
            }
        }, 500);
    };
};

const wrong_104 = document.querySelector(".wrong104");
wrong_104.onclick = () => {
    stopNow()
    wrong_104.style.backgroundColor = "#ff0000ee";
    wrong_104.style.border = "2px solid #ff0000ee"
    wrong_104.style.color = "#ffffff"
    correct34.style.backgroundColor = "#008000d7";
    correct34.style.border = "2px solid #008000d7"
    correct34.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_35.style.display = "none";
        test_36.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 36) {
                qt = 36
            }
        }, 500);
    };
};

const wrong_105 = document.querySelector(".wrong105");
wrong_105.onclick = () => {
    stopNow()
    wrong_105.style.backgroundColor = "#ff0000ee";
    wrong_105.style.border = "2px solid #ff0000ee"
    wrong_105.style.color = "#ffffff"
    correct34.style.backgroundColor = "#008000d7";
    correct34.style.border = "2px solid #008000d7"
    correct34.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_35.style.display = "none";
        test_36.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 36) {
                qt = 36
            }
        }, 500);
    };
};

const wrong_106 = document.querySelector(".wrong106");
wrong_106.onclick = () => {
    stopNow()
    wrong_106.style.backgroundColor = "#ff0000ee";
    wrong_106.style.border = "2px solid #ff0000ee"
    wrong_106.style.color = "#ffffff"
    correct34.style.backgroundColor = "#008000d7";
    correct34.style.border = "2px solid #008000d7"
    correct34.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_35.style.display = "none";
        test_36.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 36) {
                qt = 36
            }
        }, 500);
    };
};

const wrong_107 = document.querySelector(".wrong107");
wrong_107.onclick = () => {
    stopNow()
    wrong_107.style.backgroundColor = "#ff0000ee";
    wrong_107.style.border = "2px solid #ff0000ee"
    wrong_107.style.color = "#ffffff"
    correct35.style.backgroundColor = "#008000d7";
    correct35.style.border = "2px solid #008000d7"
    correct35.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_36.style.display = "none";
        test_37.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 37) {
                qt = 37
            }
        }, 500);
    };
};

const wrong_108 = document.querySelector(".wrong108");
wrong_108.onclick = () => {
    stopNow()
    wrong_108.style.backgroundColor = "#ff0000ee";
    wrong_108.style.border = "2px solid #ff0000ee"
    wrong_108.style.color = "#ffffff"
    correct35.style.backgroundColor = "#008000d7";
    correct35.style.border = "2px solid #008000d7"
    correct35.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_36.style.display = "none";
        test_37.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 37) {
                qt = 37
            }
        }, 500);
    };
};

const wrong_109 = document.querySelector(".wrong109");
wrong_109.onclick = () => {
    stopNow()
    wrong_109.style.backgroundColor = "#ff0000ee";
    wrong_109.style.border = "2px solid #ff0000ee"
    wrong_109.style.color = "#ffffff"
    correct35.style.backgroundColor = "#008000d7";
    correct35.style.border = "2px solid #008000d7"
    correct35.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_36.style.display = "none";
        test_37.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 37) {
                qt = 37
            }
        }, 500);
    };
};

const wrong_110 = document.querySelector(".wrong110");
wrong_110.onclick = () => {
    stopNow()
    wrong_110.style.backgroundColor = "#ff0000ee";
    wrong_110.style.border = "2px solid #ff0000ee"
    wrong_110.style.color = "#ffffff"
    correct36.style.backgroundColor = "#008000d7";
    correct36.style.border = "2px solid #008000d7"
    correct36.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_37.style.display = "none";
        test_38.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 38) {
                qt = 38
            }
        }, 500);
    };
};

const wrong_111 = document.querySelector(".wrong111");
wrong_111.onclick = () => {
    stopNow()
    wrong_111.style.backgroundColor = "#ff0000ee";
    wrong_111.style.border = "2px solid #ff0000ee"
    wrong_111.style.color = "#ffffff"
    correct36.style.backgroundColor = "#008000d7";
    correct36.style.border = "2px solid #008000d7"
    correct36.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_37.style.display = "none";
        test_38.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 38) {
                qt = 38
            }
        }, 500);
    };
};

const wrong_112 = document.querySelector(".wrong112");
wrong_112.onclick = () => {
    stopNow()
    wrong_112.style.backgroundColor = "#ff0000ee";
    wrong_112.style.border = "2px solid #ff0000ee"
    wrong_112.style.color = "#ffffff"
    correct36.style.backgroundColor = "#008000d7";
    correct36.style.border = "2px solid #008000d7"
    correct36.style.color = "#ffffff"
    waiter()
    nexts.onclick = () => {
        stopNow()
        test_37.style.display = "none";
        test_38.style.display = "block";
        startTimer();
        nexts.style.display = "none";
        waiter_stop();
        timesnum = setInterval(() => {
            quest_num.innerHTML = `${qt++}`;
            if (qt >= 38) {
                qt = 38
            }
        }, 500);
    };
};