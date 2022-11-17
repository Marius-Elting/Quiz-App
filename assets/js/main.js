let data = [
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4a864049-816a-479e-8736-51740e8b724b.jpg",
        question: "Which ocean lies on the east coast of the United States?",
        choice: ["Eastern", "Pacific", "Indian", "Atlantic"],
        answer: "Atlantic"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4d101ba1-9275-4fb5-ba2c-5606e6c0274e.jpg",
        question: "Which is the world's highest mountain?",
        choice: ["K2", "Makalu", "Mount Everest", "Kilimanjaro"],
        answer: "Mount Everest"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/07121a24-b34b-4711-9bfa-5287163e65ce.jpg",
        question: "Which of these cities is not in Europe?",
        choice: ["Prague", "Moscow", "Barcelona", "Reykjavik"],
        answer: "Moscow"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/467a486b-be3a-4183-90ed-dd6867d5852d.jpg",
        question: "True or False: Iceland is covered in ice.",
        choice: ["true", "false"],
        answer: "false"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
        question: "The United Kingdom is comprised of how many countries?",
        choice: [1, 2, 3, 4],
        answer: 4
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
        question: "Which of the following countries do not border France?",
        choice: ["Germany", "Netherlands", "Spain", "Italy"],
        answer: "Netherlands"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/6e99b817-7be7-4f8a-9146-3f602ac81fad.jpg",
        question: "Which U.S. state is the Grand Canyon located in?",
        choice: ["Wyoming", "Arizona", "New Mexico", "Nevada"],
        answer: "Arizona"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/866f119d-e5e2-45ca-846c-b6d10a59d1e4.jpg",
        question: "Which is the smallest country, measured by total land area?",
        choice: ["Maldives", "Monaco", "Vatican"],
        answer: "Vatican"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/13efaf72-d695-4f65-b043-2b805b6a88eb.jpg",
        question: "Which is the longest river in the world?",
        choice: ["Amazon River", "Congo River", "Yellow River", "Nile River"],
        answer: "Nile River"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/1226f177-dc1a-4142-8875-bdaa177717d7.jpg",
        question: "Which is the largest body of water?",
        choice: ["indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Nile River"],
        answer: "Pacific Ocean"
    }
];
let questions = document.getElementById("questions");
// for (let objects in data) {
//     let div = document.createElement("div");
//     console.log(data[objects].url);
//     let img = document.createElement("img");
//     img.src = data[objects].url;
//     div.appendChild(img);
//     let question = document.createElement("p");
//     question.innerHTML = data[objects].question;
//     let div2 = document.createElement("div");
//     div.appendChild(question);
//     div2.classList.add("div2");
//     for (let answer of data[objects].choice) {
//         let button = document.createElement("button");
//         button.innerHTML = answer;
//         button.onclick = function (e) {
//             let buttons = document.getElementsByTagName("button");
//             for (let button1 of buttons) {
//                 button1.style.backgroundColor = "buttonface";
//             }
//             if (e.target.innerHTML == data[objects].answer) {
//                 // alert("richtig");
//                 button.style.backgroundColor = "green";
//             } else {
//                 // alert("leider falsch");
//                 button.style.backgroundColor = "red";
//             }
//         };

//         div2.appendChild(button);
//     }

//     div.appendChild(div2);

//     questions.appendChild(div);
// }
let i = 0;
let right = 0;
let wrong = 0;
let btnpress = 0;
function newQuestion() {

    let answerout = document.getElementById("output");
    let div = document.createElement("div");
    let img = document.createElement("img");

    img.src = data[i].url;
    div.appendChild(img);
    let question = document.createElement("p");
    question.innerHTML = data[i].question;
    let div2 = document.createElement("div");
    div.appendChild(question);
    div2.classList.add("div2");
    for (let answer of data[i].choice) {
        let button = document.createElement("button");
        button.innerHTML = answer;
        button.onclick = function (e) {
            if (btnpress >= 1) {
                return;
            } else {
                setTimeout(() => {
                    btnpress = 0;
                    console.log(btnpress);
                }, 550);
                let res = () => {
                    i = 0;
                    alert("Glückwunsch du hast " + right + " von " + data.length + " Richtig beantwortet");
                    questions.removeChild(div);
                    newQuestion();
                };
                btnpress = 1;
                let buttons = document.getElementsByTagName("button");
                for (let button1 of buttons) {
                    button1.style.backgroundColor = "buttonface";
                }
                if (e.target.innerHTML == data[i].answer) {

                    // alert("richtig");
                    button.style.backgroundColor = "green";
                    if (i < 9) {
                        right++;
                        i++;
                        answerout.innerHTML = "Richtig!";
                        setTimeout(() => {
                            newQuestion();
                            answerout.innerHTML = "";
                            questions.removeChild(div);
                        }, 500);

                    } else if (i = 9) {
                        right++;
                        res();
                    }
                } else {
                    button.style.backgroundColor = "red";

                    if (i < 9) {
                        wrong++;
                        i++;
                        answerout.innerHTML = "Leider falsch!";
                        setTimeout(() => {
                            newQuestion();
                            answerout.innerHTML = "";
                            questions.removeChild(div);
                        }, 500);

                    } else if (i = 9) {
                        wrong++;
                        res();

                    }
                    console.log(right);

                }

            }
        };
        div2.appendChild(button);

        div.appendChild(div2);

        questions.appendChild(div);
    }
}
newQuestion();
