document.addEventListener('DOMContentLoaded', function() {

// ===============================================================================================================
// ////////////// DANH SÁCH CÂU HỎI ///////////////
// ===============================================================================================================

const listeningQuestions1 = [
  {
    heading: "Question 1 of 13",
    audioUrl: "audio/question1_13/2026/q1_dinner_time.mp3",
    question: "The woman is calling a friend about meeting for dinner. How long does it take to get to the station?",
    options: ["40 minutes", "20 minutes", "60 minutes"],
    correctAnswer: "40 minutes",
    transcript: "I am happy about dinner tonight! I need to check the time. It takes 40 minutes to walk to the station. I must leave now to catch the train. If I miss it, I will wait another 30 minutes. The new restaurant will be great!"
  },
  {
    heading: "Question 2 of 13",
    audioUrl: "audio/question1_13/2026/q2_flight_cost.mp3",
    question: "Listen to a woman asking about a flight. How much does the flight in the morning cost?",
    options: ["250 pounds", "350 pounds", "500 pounds"],
    correctAnswer: "350 pounds",
    transcript: "I am looking at flight prices. The morning flight is 350 pounds. The afternoon one is 300 pounds. There is a 400-pound flight, but it has extra things I don't need. I will choose the 350-pound flight because the time is good for me."
  },
  {
    heading: "Question 3 of 13",
    audioUrl: "audio/question1_13/2026/q3_music_player.mp3",
    question: "Listen to a friend talking about selling her music player. How much did she sell it for?",
    options: ["30 dollars", "50 dollars", "70 dollars"],
    correctAnswer: "50 dollars",
    transcript: "I sold my music player last week. It was good, so I wanted 60 dollars. But 40 dollars was too cheap. I finally sold it for 50 dollars. That price was fair. Now I have some money to save."
  },
  {
    heading: "Question 4 of 13",
    audioUrl: "audio/question1_13/2026/q4_late_reason.mp3",
    question: "Listen to a woman explaining why she was late. What is the main reason she gets late?",
    options: ["Car broke down", "Heavy traffic", "Missed the train"],
    correctAnswer: "Missed the train",
    transcript: "I am often late. Sometimes I sleep too much, but not today. I left on time, but I missed the train at the last minute. This is the main reason I am late. I usually remember my things, so I don't forget them."
  },
  {
    heading: "Question 5 of 13",
    audioUrl: "audio/question1_13/2026/q5_after_work.mp3",
    question: "A man is talking about his routine after work. What is the man going to do after work?",
    options: ["Goes running", "Cooks dinner", "Watches TV"],
    correctAnswer: "Goes running",
    transcript: "My job is hard, so I am very tired after work. I wait for 5 o'clock to go home. I live near my office. I like to run after work to relax. It helps me feel better for the next day."
  },
  {
    heading: "Question 6 of 13",
    audioUrl: "audio/question1_13/2026/q6_meeting_time.mp3",
    question: "Tom is calling his friend. What time will they meet?",
    options: ["6 PM", "7 PM", "8 PM"],
    correctAnswer: "7 PM",
    transcript: "Hi Mike, it's Tom. Do you want to meet tonight? Let's meet at the park at 7 P.M. We can eat snacks or play basketball. Tell me if you can come. See you later!"
  },
  {
    heading: "Question 7 of 13",
    audioUrl: "audio/question1_13/2026/q7_finance_advice.mp3",
    question: "A finance expert is giving advice to young people. What shouldn't they do?",
    options: ["Ask for more money", "Invest in stocks", "Buy expensive cars"],
    correctAnswer: "Ask for more money",
    transcript: "Saving money is important. I plan my spending carefully. I save for emergencies. Young people should not borrow money from the bank. This brings debt. It is better to save money instead."
  },
  {
    heading: "Question 8 of 13",
    audioUrl: "audio/question1_13/2026/q8_show_ending.mp3",
    question: "A girl is talking about a show she will attend. What will it end with?",
    options: ["A surprise performance", "A speech", "A firework display"],
    correctAnswer: "A surprise performance",
    transcript: "Hi, I'm Emma. I am going to a show on Saturday at 7 P.M. There is dancing and singing. The show ends with a surprise performance. I really want to know what it is!"
  },
  {
    heading: "Question 9 of 13",
    audioUrl: "audio/question1_13/2026/q9_cabinet.mp3",
    question: "Listen to an auction man talking about a cabinet. Which part of the cabinet is original?",
    options: ["The legs", "The drawer", "The top"],
    correctAnswer: "The drawer",
    transcript: "Welcome to the auction! Look at this beautiful wooden cabinet. It fits in any room. The drawer is original, which makes it special. You can put things inside it. Let's start the bidding!"
  },
  {
    heading: "Question 10 of 13",
    audioUrl: "audio/question1_13/2026/q10_coffee_plan.mp3",
    question: "A woman tells her friend about her plans for the day. What is the woman going to do?",
    options: ["Go shopping", "Visit the library", "Have coffee"],
    correctAnswer: "Have coffee",
    transcript: "Hi! I have plans for today. I am meeting a friend at a café for a drink. We haven't met for a long time. A conversation with coffee is a good start to the day. I will think about lunch later."
  },
  {
    heading: "Question 11 of 13",
    audioUrl: "audio/question1_13/2026/q11_mother_daughter.mp3",
    question: "Linda is talking about her mother. What do mother and daughter have in common?",
    options: ["Same fashion sense", "Same music taste", "Similar interests"],
    correctAnswer: "Similar interests",
    transcript: "My mom is important to me. We like reading and gardening. We talk about books and plants. We like different music, but our hobbies bring us together. I love spending time with her."
  },
  {
    heading: "Question 12 of 13",
    audioUrl: "audio/question1_13/2026/q12_radio_topic.mp3",
    question: "Listen to the speaker talking on the radio. What is she talking about?",
    options: ["Her holiday trip", "Her new car", "Her journey to work"],
    correctAnswer: "Her journey to work",
    transcript: "I take the same way to work every morning. I take a bus and then a train. The train is crowded. I listen to music. Then I walk for ten minutes. It is tiring, but I like the time to think."
  },
  {
    heading: "Question 13 of 13",
    audioUrl: "audio/question1_13/2026/q13_library_location.mp3",
    question: "Listen to the conversation about the directions. Where is the library located?",
    options: ["Opposite the park", "Next to the bank", "On the left of the square"],
    correctAnswer: "On the left of the square",
    transcript: "The library is easy to find. It is on the left of the square, past the bakery. It is a big building. It is not in front of the square. There is a park there. Just look to your left."
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
  audioUrl: "audio/question15/2026_T6/01_aptiskey_com_children_technology.mp3",
  topic: "Topic: Children and Teenagers with Technology",
  transcript: "Man: I've been thinking about how children and young people use technology nowadays. They seem very interested in learning through computers, tablets, and educational apps.\n\nWoman: I agree. Technology-based lessons can make learning more enjoyable, and many children are excited to use digital tools in class.\n\nMan: However, I think technology can also affect their communication skills. Some children spend so much time online that they find it difficult to communicate with people face to face.\n\nWoman: Yes, I've noticed that too. They may feel confident when sending messages, but they sometimes struggle to have conversations without using a device.\n\nMan: Another problem is that many families don't know how to manage their children's use of technology. I think parents need more support and guidance to set appropriate rules at home.\n\nWoman: That may be true, but I also believe children can learn to control their own online behaviour. With proper education, they can understand when to stop using technology and how to interact responsibly online.",
  questions: [
    "1. Children are interested in technology-based learning.",
    "2. Children have trouble communicating offline.",
    "3. Families need help managing technology.",
    "4. Children can learn to regulate their online interactions."
  ],
  correctAnswer: ["Both", "Both", "Man", "Woman"]
};

// Dữ liệu câu hỏi 16 & 17
const question16Data = [
  {
    audioUrl: "audio/question16/1_study_break.mp3",
    topic: "A break from studying",
    questions: [
      {
        id: "16.1",
        question: "Why hasn't he gone to college?",
        options: [
          "He wasn't ready to start higher education",
          "He couldn't afford the tuition fees.",
          "He didn't get good enough grades"
        ]
      },
      {
        id: "16.2",
        question: "Why did he decide to travel for 2 years?",
        options: [
          "To gain life experience.",
          "To avoid studying.",
          "To travelling."
        ]
      }
    ],
    transcript: "After completing high school, many of my friends chose to go directly to university, while I opted for a different direction. Honestly, I didn't feel prepared to begin higher education at that time; I needed some time away from studying to refresh my mind. Rather than signing up for courses, I spent the following two years traveling throughout Asia and Europe. For me, it wasn't simply a holiday; I wanted to gain practical experience and explore different perspectives before eventually returning to my studies."
  },
  {
    audioUrl: "audio/question16/7_television_series_verson1.mp3",
    topic: "Television series",
    questions: [
      {
        id: "17.1",
        question: "Why is this series so popular?",
        options: [
          "It has the consistent quality throughout.",
          "It was only available for a short time.",
          "It features unknown actors."
        ]
      },
      {
        id: "17.2",
        question: "What is the current series industry affected by?",
        options: [
          "Viewer habits influence the way that series are made.",
          "Series are no longer produced for online platforms.",
          "Actors now write most of the scripts themselves."
        ]
      }
    ],
    transcript: `In the world of entertainment, very few shows manage to capture the public's imagination like the one we are discussing today. While many shows start with a great premise but fail to keep the momentum, the reason this particular show has become a global phenomenon is that it has the consistent quality throughout every single season. From the very first episode to the grand finale, the writing, acting, and production values never drop, ensuring that fans stay engaged for years.
However, this success doesn't happen in a vacuum. If we look at the bigger picture, the entire television landscape is undergoing a massive transformation. Experts have noted that the current series industry is heavily affected by how audiences consume content. In fact, viewer habits influence the way that series are made more than ever before. With the rise of streaming platforms and the trend of binge-watching, producers and directors are now forced to adapt their storytelling techniques and release schedules to match the specific preferences and behaviors of the modern viewer.`
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



// 2. Hàm ẩn hiện paragrap
function toggleTranscript() {
  if (transcriptBox.style.display === "none") {
    transcriptBox.style.display = "block";
    showTranscriptButton.innerText = "Hide paragraph";
  } else {
    transcriptBox.style.display = "none";
    showTranscriptButton.innerText = "Show paragraph";
  }
}

// 3. Hàm load âm thanh
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



// ===============================================================================================================
// 4. Đáp án câu 1-13
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
// 1. Hàm render
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


// 2. Hàm ẩn hiện
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

// Hàm render câu hỏi 15
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

// Hàm ẩn hiện transcript
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


// ===== XỬ LÝ NÚT NEXT =====
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

// ===== XỬ LÝ NÚT BACK =====
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


// 1. Hiển thị câu hỏi khi trang được load
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
