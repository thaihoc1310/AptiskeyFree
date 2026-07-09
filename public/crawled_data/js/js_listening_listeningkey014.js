document.addEventListener('DOMContentLoaded', function() {

// ===============================================================================================================
// ////////////// DANH SÁCH CÂU HỎI ///////////////
// ===============================================================================================================

const listeningQuestions1 = [
  {
    heading: "Question 1 of 13",
    audioUrl: "audio/question1_13/2026/q14_saving_money.mp3",
    question: "Listen to a woman giving advice on saving money. What advice does she give to save money?",
    options: ["Stop eating out", "Use the public transport", "Sell old clothes"],
    correctAnswer: "Use the public transport",
    transcript: "Do you want to save money? You can buy many things at once. But the best tip is to use the bus or train. Don't drive your car. This saves money on gas. Put money in the bank later, but start with public transport now."
  },
  {
    heading: "Question 2 of 13",
    audioUrl: "audio/question1_13/2026/q15_bus_fare.mp3",
    question: "Lalia is talking to her friend about her upcoming trip. How much does she think the bus fare will be?",
    options: ["£2.5", "£1.5", "£5.0"],
    correctAnswer: "£2.5",
    transcript: "I am excited about my trip. How much is the bus ticket? I think it is £2.50. The subway is £4.50. The bus is cheaper. I need small money. When does the bus leave? I don't want to miss it."
  },
  {
    heading: "Question 3 of 13",
    audioUrl: "audio/question1_13/2026/q16_afternoon_plan.mp3",
    question: "A woman is chatting with a friend about her afternoon plans. What is she going to do this afternoon?",
    options: ["Sleep at home", "Go to the cinema", "Go on a city tour"],
    correctAnswer: "Go on a city tour",
    transcript: "I am happy about this afternoon. Usually, I stay home. Today I want to do something new. I will go on a city tour. I didn't want to go to the park or museum. The tour is more exciting."
  },
  {
    heading: "Question 4 of 13",
    audioUrl: "audio/question1_13/2026/q17_meeting_place.mp3",
    question: "Louis is calling his friend Standar. Where will Luis meet Standar?",
    options: ["Inside the train", "Outside the station", "At the bus stop"],
    correctAnswer: "Outside the station",
    transcript: "Hi. I am at the train station. The cafe inside is crowded. The ticket counter is noisy. Let's meet outside the station. It is easy to find you there."
  },
  {
    heading: "Question 5 of 13",
    audioUrl: "audio/question1_13/2026/q18_meeting_reschedule.mp3",
    question: "Jane is calling her friend Martha. What time are they going to meet?",
    options: ["4.30", "5.30", "6.30"],
    correctAnswer: "5.30",
    transcript: "Hi Martha. I want to check our time. I cannot meet at 4:00. Can we meet at 5:30? 6:00 is too late. Please tell me if 5:30 is okay. I want to see you."
  },
  {
    heading: "Question 6 of 13",
    audioUrl: "audio/question1_13/2026/q19_job_location.mp3",
    question: "A man is talking about his job. Where is he working now?",
    options: ["In a hospital", "In a school", "In a bank"],
    correctAnswer: "In a bank",
    transcript: "I work in a bank now. It is busy. The pay is good, but the job is stressful. I have a lot of work to do. But I am learning a lot about finance."
  },
  {
    heading: "Question 7 of 13",
    audioUrl: "audio/question1_13/2026/q20_key_location.mp3",
    question: "The man is talking about his key. Where did he find the key?",
    options: ["In the front door", "In the kitchen", "Under the car seat"],
    correctAnswer: "In the front door",
    transcript: "I lost my house key. It was not in the car or bedroom. I waited outside for an hour. Then I saw it under the mat at the door. I was very happy."
  },
  {
    heading: "Question 8 of 13",
    audioUrl: "audio/question1_13/2026/q21_late_time.mp3",
    question: "A man is calling his mother. How long will he be late?",
    options: ["30 minutes", "5 minutes", "10 minutes"],
    correctAnswer: "10 minutes",
    transcript: "Hi Mom. There is traffic. The train takes 20 minutes. I will be 10 minutes late. But we have 15 minutes before we meet Mr. Smith. I will hurry."
  },
  {
    heading: "Question 9 of 13",
    audioUrl: "audio/question1_13/2026/q22_movie_begin.mp3",
    question: "A woman is going to the cinema with her husband. What time does the movie begin?",
    options: ["6:00", "6:40", "7:15"],
    correctAnswer: "6:40",
    transcript: "I checked the time. The movie starts at 6:40. It ends at 9:20. Do you want to eat dinner after? We can go to the new restaurant. We can talk about the movie."
  },
  {
    heading: "Question 10 of 13",
    audioUrl: "audio/question1_13/2026/q23_park_meet.mp3",
    question: "A man is calling his friend. Where will they meet?",
    options: ["At the library", "At the mall", "By the park"],
    correctAnswer: "By the park",
    transcript: "Do you want to meet after school? We usually go to the café. I want to go somewhere different. Let's meet by the park. We can walk there. What do you think?"
  },
  {
    heading: "Question 11 of 13",
    audioUrl: "audio/question1_13/2026/q24_turn_right.mp3",
    question: "Dan is going to university. Where should Dan turn right?",
    options: ["At the school", "At the bakery", "At the traffic lights"],
    correctAnswer: "At the traffic lights",
    transcript: "It is my first day at university. I go straight to Main Street. Then I turn left at the hospital. At the traffic lights, I turn right. Then I will see the university. Is that right?"
  },
  {
    heading: "Question 12 of 13",
    audioUrl: "audio/question1_13/2026/q25_cheapest_computer.mp3",
    question: "A saleswoman is talking to her customer. How much is the cheapest computer in the shop?",
    options: ["120 pounds", "135 pounds", "160 pounds"],
    correctAnswer: "135 pounds",
    transcript: "We have computers for you. The £145 one is good for games. The £155 one is faster for hard work. If you want a simple computer, the cheapest one is £135."
  },
  {
    heading: "Question 13 of 13",
    audioUrl: "audio/question1_13/2026/q26_building.mp3",
    question: "A tour guide is introducing a famous building. What is this building currently used for?",
    options: ["A hotel", "A post office", "A department store"],
    correctAnswer: "A department store",
    transcript: "Welcome. This is a famous building. It was a museum in the 1920s. Then it was a cinema. Now, it is a big department store. You can buy many things here."
  }
];


// Dữ liệu câu hỏi 14
const question14Data = {
  audioUrl: "audio/question14/audio_de13.mp3",
  topic: "Topic: New museum in town",
  options: [
    "Finished the visit quickly",
    "Got lost during the visit",
    "Enjoyed the use of technology",
    "Wants to visit again",
    "Thought the museum was too small"
  ],
  transcript: `Person A: I was quite excited to see the new museum in town, but when I arrived, I found it smaller than I expected. There were only a few rooms open to visitors, and some exhibitions were still being prepared. I walked through the main displays, took a few photos, and left after about thirty minutes. I thought the museum was interesting, but there was not enough to keep me there for a long time.

Person B: I liked the idea of having a new museum in our town, but my visit was a little frustrating. The building was quite large, and the signs were not very clear. I tried to find the history section, but I ended up walking around the same area several times. In the end, I had to ask a staff member for help because I could not find the correct room.

Person C: For me, the best thing about the new museum was the modern technology. Instead of just reading information on the walls, visitors could use touch screens, audio guides, and even virtual reality to learn about the exhibits. This made the visit much more interesting and enjoyable, especially for young people.

Person D: I had a really good time at the new museum, although I could not see everything in one visit. Some parts were very crowded, and I missed one special exhibition because I arrived too late. I think the museum has a lot to offer, so I would definitely like to go back another day and spend more time there.`
};

// Dữ liệu câu hỏi 15
const question15Data = {
  audioUrl: "audio/question15/2026_T6/02_environmental_volunteer_program.mp3",
  topic: "Topic: Environmental volunteer program",
  transcript: "Man: I watched a news report about the clean-up program yesterday. To be honest, I think the media made it sound much more successful than it really was.\n\nWoman: I agree. They only showed the best parts and ignored many problems. The benefits of the program were clearly exaggerated.\n\nMan: Exactly. And even with programs like this, I still think littering will always be a problem. Some people just do not care enough about public places.\n\nWoman: Maybe, but I don't think we should give up. Volunteers can still make a difference.\n\nMan: That's true, but the problem will never completely disappear.\n\nWoman: For me, the reason why volunteers join is not very important. Whether they do it because they care about the environment or because they want experience, the result can still be the same if they work hard.\n\nMan: I see your point. But I think we need stricter rules too. In my opinion, punishment is the most effective way to stop people from littering.\n\nWoman: I'm not sure it is the best way. Education is also important.\n\nMan: Education helps, but without fines or punishment, many people will not change their behavior.",
  questions: [
    "1. The media exaggerates the benefits of the program.",
    "2. Littering will always be a problem.",
    "3. The motivation of volunteers does not affect the outcome of the program.",
    "4. Punishment is the most effective way to prevent littering."
  ],
  correctAnswer: ["Both", "Man", "Woman", "Man"]
};

// Dữ liệu câu hỏi 16 & 17
const question16Data = [
  {
    audioUrl: "audio/question16/4_the_sport_verson1.mp3",
    topic: "The Sport",
    questions: [
      {
        id: "16.1",
        question: "What is this person's opinion on sports?",
        options: [
          "They have a harmful effect",
          "They bring people together",
          "They improve concentration"
        ]
      },
      {
        id: "16.2",
        question: "What is the importance of sports for students?",
        options: [
          "It helps balance student's lives.",
          "It distracts students from studying.",
          "It is only useful for professional athletes."
        ]
      }
    ],
    transcript: "While most people praise the benefits of exercise, I have a somewhat different view on professional competitive sports. In my experience, when sports become too intense or commercialized, they can actually have a harmful effect on both the players' health and the spirit of fair play. However, my opinion changes when it comes to education. I believe that engaging in physical activity is essential for those in school because it helps balance student's lives. It provides a much-needed break from long hours of academic pressure and keeps them mentally grounded."
  },
  {
    audioUrl: "audio/question16/3_scientist_biography_verson2.mp3",
    topic: "A Book About A Life Of A Scientist (Phiên bản 2)",
    questions: [
      {
        id: "17.1",
        question: "What does the speaker say about the way of writing?",
        options: [
          "It is exciting to read",
          "It employs a very outdated narrative style.",
          "It focuses exclusively on the scientist's childhood."
        ]
      },
      {
        id: "17.2",
        question: "What does the speaker say about the overall content of the book?",
        options: [
          "It has been written for a general audience",
          "It is intended primarily for advanced research purposes.",
          "It mainly summarizes the scientist's previous publications."
        ]
      }
    ],
    transcript: "I've just completed reading a new biography about a globally famous scientist, and it's very impressive. What stands out most is the author's storytelling style; it feels engaging and reads more like a compelling narrative than a traditional, dry biography. Moreover, even though the subject is quite technical, the content is written in a way that is accessible to general readers. As a result, complex discoveries become easy to understand, even for those without a scientific background."
  }
];

// ===============================================================================================================
// ////////////// CÂU HỎI 1_13 ///////////////
// ===============================================================================================================
function renderQuestion1_13(data) {
  const radioButtons = document.querySelectorAll('input[name="answer"]');
  radioButtons.forEach(button => {
    button.checked = false;
  });

  document.getElementById("question1_13_id").innerText = data.heading;

  const audio = document.getElementById("audioPlayer");
  const questionText = document.getElementById("questionText");
  audio.src = data.audioUrl;
  questionText.innerText = data.question;

  data.options.forEach((option, index) => {
    const label = document.getElementById("label" + index);
    const input = document.getElementById("option" + index);
    if (label && input) {
      label.innerText = option;
      input.value = option;
    }
  });

  const storedAnswer = userAnswers[currentIndex];
  if (storedAnswer) {
    const savedInput = document.querySelector(`input[name="answer"][value="${storedAnswer}"]`);
    if (savedInput) savedInput.checked = true;
  }

  const playBtn = document.getElementById("playButton");
  const playIcon = document.getElementById("playIcon");
  setupPlayButton(audio, playBtn, playIcon);

  const transcriptBox = document.getElementById("transcriptBox");
  const transcriptContent = document.getElementById("transcriptContent");
  transcriptContent.innerText = data.transcript;

  const showTranscriptButton = document.getElementById("showTranscriptButton");

  transcriptBox.style.display = "none";
  showTranscriptButton.innerText = "Show paragraph";

  showTranscriptButton.removeEventListener("click", toggleTranscript);
  showTranscriptButton.addEventListener("click", toggleTranscript);
}

function toggleTranscript() {
  if (transcriptBox.style.display === "none") {
    transcriptBox.style.display = "block";
    showTranscriptButton.innerText = "Hide paragraph";
  } else {
    transcriptBox.style.display = "none";
    showTranscriptButton.innerText = "Show paragraph";
  }
}

function setupPlayButton(audio, playBtn, playIcon) {
  if (playBtn.dataset.bound === "true") return;
  playBtn.dataset.bound = "true";

  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play().then(() => {
        playIcon.classList.remove("bi-play-fill");
        playIcon.classList.add("bi-pause-fill");
      }).catch(err => console.error("Không phát được:", err));
    } else {
      audio.pause();
      playIcon.classList.remove("bi-pause-fill");
      playIcon.classList.add("bi-play-fill");
    }
  });

  audio.addEventListener("ended", () => {
    playIcon.classList.remove("bi-pause-fill");
    playIcon.classList.add("bi-play-fill");
  });
}

document.querySelectorAll('input[name="answer"]').forEach((input, index) => {
  input.addEventListener('change', function() {
    storeUserAnswer(currentIndex, this.value);
  });
});

function storeUserAnswer(questionIndex, answer) {
  userAnswers[questionIndex] = answer;
}

function showResults_question1_13() {
  const comparisonBody1 = document.getElementById('comparisonBody_question1');
  const totalScoreDisplay = document.getElementById('totalScore_question1_13');
  comparisonBody1.innerHTML = '';

  let score = 0;

  listeningQuestions1.forEach((question, index) => {
    const userAnswer = userAnswers[index];
    const isCorrect = userAnswer === question.correctAnswer;
    const textColor = isCorrect ? 'text-success' : 'text-danger';

    if (isCorrect) {
      score += 2;
    }

    comparisonBody1.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td class="${textColor} fw-bold">${userAnswer || 'Not answered'}</td>
        <td class="text-success fw-bold">${question.correctAnswer}</td>
      </tr>
    `;
  });

  question1_13Score = score;
  totalScoreDisplay.innerText = `Score: ${score} / 26`;
  document.getElementById('comparisonResult_question1').style.display = "block";
}


// ===============================================================================================================
// ////////////// CÂU HỎI 2 (14 of 17) ///////////////
// ===============================================================================================================
let shuffledOptions14 = [];
function renderQuestion14(data) {
  document.getElementById("audioPlayer2").src = data.audioUrl;
  document.getElementById("question14_topic").innerText = data.topic;

  correctAnswer14 = data.options.slice(0, 4);

  shuffledOptions14 = [...data.options].sort(() => Math.random() - 0.5);

  const selectIds = ["person1", "person2", "person3", "person4"];
  selectIds.forEach((id, index) => {
    const select = document.getElementById(id);
    select.innerHTML = `<option value="">-- Select an answer --</option>`;

    shuffledOptions14.forEach((opt, idx) => {
      const val = String.fromCharCode(65 + idx);
      const optionEl = document.createElement("option");
      optionEl.value = val;
      optionEl.innerText = opt;
      select.appendChild(optionEl);
    });

    const prevAnswer = userAnswers_question14[index];
    if (prevAnswer) {
      const selectedIndex = shuffledOptions14.indexOf(prevAnswer);
      select.selectedIndex = selectedIndex + 1;
    }
  });

  const audio = document.getElementById("audioPlayer2");
  const playBtn = document.getElementById("playButton2");
  const playIcon = document.getElementById("playIcon2");
  setupPlayButton(audio, playBtn, playIcon);

  const transcriptBox = document.getElementById("transcriptBox14");
  const transcriptContent = document.getElementById("transcriptContent14");
  transcriptContent.innerText = data.transcript;

  const showTranscriptButton = document.getElementById("showTranscriptButton14");
  transcriptBox.style.display = "none";
  showTranscriptButton.innerText = "Show paragraph";

  showTranscriptButton.removeEventListener("click", toggleTranscript14);
  showTranscriptButton.addEventListener("click", toggleTranscript14);
}

function toggleTranscript14() {
  const transcriptBox = document.getElementById("transcriptBox14");
  const showTranscriptButton = document.getElementById("showTranscriptButton14");

  if (transcriptBox.style.display === "none") {
    transcriptBox.style.display = "block";
    showTranscriptButton.innerText = "Hide paragraph";
  } else {
    transcriptBox.style.display = "none";
    showTranscriptButton.innerText = "Show paragraph";
  }
}

document.querySelectorAll('select[id^="person"]').forEach((select, index) => {
  select.addEventListener('change', function() {
    storeUserAnswerQuestion14(index, this.value);
  });
});

let userAnswers_question14 = [];

function storeUserAnswerQuestion14(index, answerLetter) {
  const optionIndex = answerLetter.charCodeAt(0) - 65;
  const selectedAnswer = shuffledOptions14[optionIndex];
  userAnswers_question14[index] = selectedAnswer;
}

let correctAnswer14 = [];
function showResults_question14() {
  const comparisonBody14 = document.getElementById('comparisonBody_question14');
  const totalScoreEl = document.getElementById('totalScore_question14');
  comparisonBody14.innerHTML = '';

  let score = 0;
  let html14 = '';

  correctAnswer14.forEach((correctOption, index) => {
    const userAnswer = userAnswers_question14[index] || 'Not answered';
    const isCorrect = userAnswer === correctOption;
    const textColor = isCorrect ? 'text-success' : 'text-danger';

    if (isCorrect) {
      score += 2;
    }

    html14 += `
      <tr>
        <td>${index + 1}</td>
        <td class="${textColor} fw-bold">${userAnswer}</td>
        <td class="text-success fw-bold">${correctOption}</td>
      </tr>
    `;
  });

  comparisonBody14.innerHTML = html14;
  totalScoreEl.innerText = `Score: ${score} / 8`;
  question14Score = score;
}


// ===============================================================================================================
// ////////////// CÂU HỎI 15 ///////////////
// ===============================================================================================================
let userAnswers_question15 = [];

function storeUserAnswerQuestion15(index, answer) {
  const options = ["Man", "Woman", "Both"];
  const selectedAnswer = options[answer.charCodeAt(0) - 65];
  userAnswers_question15[index] = selectedAnswer;
}

function renderQuestion15(data) {
  document.getElementById("audioPlayer3").src = data.audioUrl;
  document.getElementById("question15_id").innerText = data.topic;

  data.questions.forEach((question, index) => {
    const label = document.getElementById("opinion" + (index + 1) + "_label");
    const select = document.getElementById("opinion" + (index + 1));

    if (label) {
      label.innerText = question;
    }

    if (select) {
      select.innerHTML = `<option value="">-- Select an answer --</option>`;
      const options = ["Man", "Woman", "Both"];
      options.forEach((opt, i) => {
        const val = String.fromCharCode(65 + i);
        const optionEl = document.createElement("option");
        optionEl.value = val;
        optionEl.innerText = opt;
        select.appendChild(optionEl);
      });

      if (userAnswers_question15[index]) {
        const selectedIndex = options.indexOf(userAnswers_question15[index]);
        select.value = String.fromCharCode(65 + selectedIndex);
      }
    }
  });

  const audio = document.getElementById("audioPlayer3");
  const playBtn = document.getElementById("playButton3");
  const playIcon = document.getElementById("playIcon3");
  setupPlayButton(audio, playBtn, playIcon);

  const transcriptBox = document.getElementById("transcriptBox15");
  const transcriptContent = document.getElementById("transcriptContent15");
  transcriptContent.innerText = data.transcript;

  const showTranscriptButton = document.getElementById("showTranscriptButton15");

  transcriptBox.style.display = "none";
  showTranscriptButton.innerText = "Show paragraph";

  showTranscriptButton.removeEventListener("click", toggleTranscript15);
  showTranscriptButton.addEventListener("click", toggleTranscript15);
}

function toggleTranscript15() {
  const transcriptBox = document.getElementById("transcriptBox15");
  const showTranscriptButton = document.getElementById("showTranscriptButton15");

  if (transcriptBox.style.display === "none") {
    transcriptBox.style.display = "block";
    showTranscriptButton.innerText = "Hide paragraph";
  } else {
    transcriptBox.style.display = "none";
    showTranscriptButton.innerText = "Show paragraph";
  }
}

document.querySelectorAll('select[id^="opinion"]').forEach((select, index) => {
  select.addEventListener('change', function() {
    storeUserAnswerQuestion15(index, this.value);
  });
});

function showResults_question15() {
  const comparisonBody15 = document.getElementById('comparisonBody_question15');
  const totalScoreEl = document.getElementById('totalScore_question15');
  comparisonBody15.innerHTML = '';

  const correctAnswer15 = question15Data.correctAnswer;
  let score = 0;
  let html15 = '';

  correctAnswer15.forEach((correctAns, index) => {
    const userAns = userAnswers_question15[index] || 'Not answered';
    const isCorrect = userAns === correctAns;
    const textColor = isCorrect ? 'text-success' : 'text-danger';

    if (isCorrect) {
      score += 2;
    }

    html15 += `
      <tr>
        <td>${index + 1}</td>
        <td class="${textColor} fw-bold">${userAns}</td>
        <td class="text-success fw-bold">${correctAns}</td>
      </tr>
    `;
  });

  comparisonBody15.innerHTML = html15;
  totalScoreEl.innerText = `Score: ${score} / 8`;
  question15Score = score;
}


// ===============================================================================================================
// ////////////// CÂU HỎI 16 ///////////////
// ===============================================================================================================

let userAnswers_question16 = {};
let correctAnswers_question16 = {};
let shuffledOptionsMap_question16 = {};

function renderQuestion16(data) {
  document.getElementById("audioPlayer16").src = data.audioUrl;
  document.getElementById("question16_topic").innerText = `Topic: ${data.topic}`;
  document.getElementById("transcriptContent16").innerText = data.transcript;

  data.questions.forEach((q, index) => {
  const qIndex = index + 1;

  const labelEl = document.getElementById(`q16_opinion${qIndex}_label`);
  labelEl.innerText = `${q.id} ${q.question}`;

  correctAnswers_question16[q.id] = q.options[0];

  if (Object.keys(userAnswers_question16).length === 0) {
    const shuffled = [...q.options].sort(() => Math.random() - 0.5);
    shuffledOptionsMap_question16[q.id] = shuffled;
  } else {
    shuffledOptionsMap_question16[q.id] = shuffledOptionsMap_question16[q.id] || [...q.options];
  }

  const shuffled = shuffledOptionsMap_question16[q.id];

  shuffled.forEach((text, optIndex) => {
    const letter = String.fromCharCode(65 + optIndex);
    const radio = document.getElementById(`opinion${qIndex}_${letter}`);
    const label = document.querySelector(`label[for=opinion${qIndex}_${letter}]`);

    if (radio && label) {
      label.innerText = text;
      radio.checked = false;

      if (userAnswers_question16[q.id] === letter) {
        radio.checked = true;
      }

      radio.onchange = () => {
        userAnswers_question16[q.id] = letter;
        console.log(userAnswers_question16, correctAnswers_question16);
      };
    }
  });
});

  const audio = document.getElementById("audioPlayer16");
  const playBtn = document.getElementById("playButton16");
  const playIcon = document.getElementById("playIcon16");
  setupPlayButton(audio, playBtn, playIcon);

  const btn = document.getElementById("showTranscriptButton16");
  const box = document.getElementById("transcriptBox16");
  btn.innerText = "Show Paragraph";
  box.style.display = "none";

  btn.onclick = () => {
    if (box.style.display === "none") {
      box.style.display = "block";
      btn.innerText = "Hide Paragraph";
    } else {
      box.style.display = "none";
      btn.innerText = "Show Paragraph";
    }
  };
}

function showResults_question16() {
  const container = document.getElementById("comparisonResult_question16");
  const tbody = document.getElementById("comparisonBody_question16");
  const totalScoreEl = document.getElementById("totalScore_question16");
  tbody.innerHTML = "";

  let score = 0;

  question16Data.forEach(section => {
    section.questions.forEach(q => {
      const qid = q.id;
      const correctText = correctAnswers_question16[qid];
      const shuffled = shuffledOptionsMap_question16[qid];
      const userLetter = userAnswers_question16[qid];
      const userText = userLetter ? shuffled[userLetter.charCodeAt(0) - 65] : "Not answered";

      const isCorrect = userText === correctText;
      if (isCorrect) score += 2;

      const row = document.createElement("tr");
      const userClass = isCorrect ? "text-success fw-bold" : "text-danger fw-bold";

      row.innerHTML = `
        <td>${qid}</td>
        <td class="${userClass}">${userText}</td>
        <td class="text-success fw-bold">${correctText}</td>
      `;
      tbody.appendChild(row);
    });
  });

  totalScoreEl.innerText = `Score: ${score} / 8`;
  question16_17Score = score;
}


// ===============================================================================================================
// ////////////// NÚT NHẤN NEXT VÀ BACK ///////////////
// ===============================================================================================================
let currentIndex = 0;
let userAnswers = [];

function renderQuestionByIndex(currentIndex) {
  if (currentIndex <= listeningQuestions1.length - 1) {
    renderQuestion1_13(listeningQuestions1[currentIndex]);
    document.getElementById("question1_13").style.display = "block";
    document.getElementById("question14").style.display = "none";
    document.getElementById("question15").style.display = "none";
    document.getElementById("question16").style.display = "none";
  } else if (currentIndex === listeningQuestions1.length) {
    renderQuestion14(question14Data);
    document.getElementById("question1_13").style.display = "none";
    document.getElementById("question14").style.display = "block";
    document.getElementById("question15").style.display = "none";
    document.getElementById("question16").style.display = "none";
  } else if (currentIndex === listeningQuestions1.length + 1) {
    renderQuestion15(question15Data);
    document.getElementById("question1_13").style.display = "none";
    document.getElementById("question14").style.display = "none";
    document.getElementById("question15").style.display = "block";
    document.getElementById("question16").style.display = "none";
  } else if (currentIndex === listeningQuestions1.length + 2) {
    renderQuestion16(question16Data[0]);
    document.getElementById("question1_13").style.display = "none";
    document.getElementById("question14").style.display = "none";
    document.getElementById("question15").style.display = "none";
    document.getElementById("question16").style.display = "block";
    document.getElementById('question16_id').textContent = "Question 16 of 17";
  } else if (currentIndex === listeningQuestions1.length + 3) {
    renderQuestion16(question16Data[1]);
    document.getElementById("question1_13").style.display = "none";
    document.getElementById("question14").style.display = "none";
    document.getElementById("question15").style.display = "none";
    document.getElementById("question16").style.display = "block";
    document.getElementById('question16_id').textContent = "Question 17 of 17";
    document.getElementById('nextButton').textContent = "Submit Test";
  }
}

document.getElementById('nextButton').addEventListener('click', function (e) {
  document.querySelectorAll('audio').forEach(audio => {
    if (!audio.paused) {
      audio.pause();
      audio.currentTime = 0;
    }
  });
  document.querySelectorAll('i[id^="playIcon"]').forEach(icon => {
    icon.classList.remove("bi-pause-fill");
    icon.classList.add("bi-play-fill");
  });

  const btn = e.target;
  const btnText = btn.innerText.trim().toLowerCase();

  if (btnText === "submit test") {
    const modal = new bootstrap.Modal(document.getElementById("confirmationModal"));
    modal.show();
    return;
  }

  if (btnText === "back to home") {
    window.location.href = "/home.html";
    return;
  }

  if (currentIndex < listeningQuestions1.length + 3) {
    currentIndex++;
    renderQuestionByIndex(currentIndex);
  }
});

document.getElementById('backButton').addEventListener('click', function () {
  document.querySelectorAll('audio').forEach(audio => {
    if (!audio.paused) {
      audio.pause();
      audio.currentTime = 0;
    }
  });
  document.querySelectorAll('i[id^="playIcon"]').forEach(icon => {
    icon.classList.remove("bi-pause-fill");
    icon.classList.add("bi-play-fill");
  });

  document.getElementById('nextButton').textContent = "Next";

  if (currentIndex > 0) {
    currentIndex--;
  }

  renderQuestionByIndex(currentIndex);
});

document.getElementById('confirmSubmitBtn').addEventListener('click', function () {
  showResults_question1_13();
  showResults_question14();
  showResults_question15();
  showResults_question16();

  calculateTotalScore();

  document.getElementById("question1_13").style.display = "none";
  document.getElementById("question14").style.display = "none";
  document.getElementById("question15").style.display = "none";
  document.getElementById("question16").style.display = "none";
  document.getElementById('backButton').style.display = "none";

  document.getElementById('result_navigation').style.display = 'block';
  document.getElementById('nextButton').textContent = "Back to home";
});

window.onload = function() {
    renderQuestion1_13(listeningQuestions1[0]);
};


// ===============================================================================================================
// ////////////// TÍNH TỔNG ĐIỂM VÀ PHÂN LOẠI CẤP BẬC ///////////////
// ===============================================================================================================
var question1_13Score = 0;
var question14Score = 0;
var question15Score = 0;
var question16_17Score = 0;
function calculateTotalScore() {
    var totalScore = 0;
    totalScore = question1_13Score + question14Score + question15Score + question16_17Score;

    if (totalScore === 48) {
        totalScore = 50;
    }
    document.getElementById('totalScore').innerText = `Total Score: ${totalScore} / 50`;
    classifyScore(totalScore);
}

function classifyScore(score) {
    let grade = '';

    if (score >= 42) {
        grade = 'C1';
    } else if (score >= 34) {
        grade = 'B2';
    } else if (score >= 24) {
        grade = 'B1';
    } else if (score >= 16) {
        grade = 'A2';
    } else {
        grade = 'A1';
    }
    document.getElementById('scoreClassification').innerText = `Your grade: ${grade}`;
}
document.getElementById('confirmSubmitBtn').addEventListener('click', function() {
    calculateTotalScore();
    document.getElementById('result_navigation').style.display = 'block';
});

// ===============================================================================================================
// ////////////// HIỂN THỊ SỐ ĐIỂM ///////////////
// ===============================================================================================================
const navMap = {
  navQ1: 'comparisonResult_question1',
  navQ2: 'comparisonResult_question14',
  navQ3: 'comparisonResult_question15',
  navQ4: 'comparisonResult_question16'
};

Object.keys(navMap).forEach(navId => {
  const button = document.getElementById(navId);
  button.addEventListener('click', () => {
    Object.values(navMap).forEach(resultId => {
      const section = document.getElementById(resultId);
      if (section) section.style.display = 'none';
    });

    const targetResult = document.getElementById(navMap[navId]);
    if (targetResult) targetResult.style.display = 'block';

    Object.keys(navMap).forEach(id => {
      const btn = document.getElementById(id);
      btn.classList.remove('btn-active');
    });
    button.classList.add('btn-active');
  });
});


// ===============================================================================================================
// ////////////// ĐẾM NGƯỢC THỜI GIAN --- COUNT DOWN ///////////////
// ===============================================================================================================
let timeLeft = 40 * 60;
const countdownElement = document.getElementById('countdownTimer');

function updateCountdown() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    countdownElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    if (timeLeft > 0) {
        timeLeft--;
        setTimeout(updateCountdown, 1000);
    }
}

updateCountdown();


// Kết thúc
});
