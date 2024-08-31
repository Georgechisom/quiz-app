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
        test_50.style.display = "block";
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
    wrong_1.style.color = "#ffffff"
    correct.style.backgroundColor = "#008000d7";
    correct.style.border = "2px solid #008000d7"
    correct.style.color = "#ffffff"
};

wrong_2.onclick = () => {
    stopNow()
    wrong_2.style.backgroundColor = "#ff0000ee";
    wrong_2.style.border = "2px solid #ff0000ee"
    wrong_2.style.color = "#ffffff"
    correct.style.backgroundColor = "#008000d7";
    correct.style.border = "2px solid #008000d7"
    correct.style.color = "#ffffff"
};

wrong_3.onclick = () => {
    stopNow()
    wrong_3.style.backgroundColor = "#ff0000ee";
    wrong_3.style.border = "2px solid #ff0000ee"
    wrong_3.style.color = "#ffffff"
    correct.style.backgroundColor = "#008000d7";
    correct.style.border = "2px solid #008000d7"
    correct.style.color = "#ffffff"
};

wrong_4.onclick = () => {
    stopNow()
    wrong_4.style.backgroundColor = "#ff0000ee";
    wrong_4.style.border = "2px solid #ff0000ee"
    wrong_4.style.color = "#ffffff"
    correct.style.backgroundColor = "#008000d7";
    correct.style.border = "2px solid #008000d7"
    correct.style.color = "#ffffff"
};

wrong_5.onclick = () => {
    stopNow()
    wrong_5.style.backgroundColor = "#ff0000ee";
    wrong_5.style.border = "2px solid #ff0000ee"
    wrong_5.style.color = "#ffffff"
    correct.style.backgroundColor = "#008000d7";
    correct.style.border = "2px solid #008000d7"
    correct.style.color = "#ffffff"
};

wrong_6.onclick = () => {
    stopNow()
    wrong_6.style.backgroundColor = "#ff0000ee";
    wrong_6.style.border = "2px solid #ff0000ee"
    wrong_6.style.color = "#ffffff"
    correct.style.backgroundColor = "#008000d7";
    correct.style.border = "2px solid #008000d7"
    correct.style.color = "#ffffff"
};