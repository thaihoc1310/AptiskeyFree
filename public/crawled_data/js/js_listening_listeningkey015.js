document.addEventListener('DOMContentLoaded', function() {

// ===============================================================================================================
// ////////////// DANH SÁCH CÂU HỎI ///////////////
// ===============================================================================================================

const listeningQuestions1 = [
  {
    heading: "Question 1 of 13",
    audioUrl: "audio/question1_13/2026_T5/01_aptiskey_com_three_oclock.mp3",
    question: "What time does the party start?",
    options: ["Five o'clock", "Four o'clock", "Three o'clock"],
    correctAnswer: "Three o'clock",
    transcript: "Hello everyone. Just a quick reminder about Anna's birthday party this Saturday. The party will start at three o'clock in the afternoon at her house. There will be music, games, and lots of food and drinks for everyone. Please try to arrive on time so we can begin the activities together. We hope to see you all there at three o'clock."
  },
  {
    heading: "Question 2 of 13",
    audioUrl: "audio/question1_13/2026_T5/02_aptiskey_com_different_country.mp3",
    question: "Where is she taking the staff to?",
    options: ["To a different city", "To a different country", "To a village"],
    correctAnswer: "To a different country",
    transcript: "I'd like to tell you about our company trip next month. This year, we are not visiting another city in our country like before. Instead, we are taking all the staff to a different country for five days. It will be a great chance to relax, learn about a new culture, and spend time together outside work. More information about the trip will be sent by email next week."
  },
  {
    heading: "Question 3 of 13",
    audioUrl: "audio/question1_13/2026_T5/03_aptiskey_com_8minute.mp3",
    question: "Which bus stop number is near the boy's house?",
    options: ["Ten", "Nine", "Eight"],
    correctAnswer: "Eight",
    transcript: "To get to my house, you can take the bus from the city center. Several buses stop near my neighborhood, but the easiest one is bus number eight. It stops just across the street from my home, so you only need to walk for about two minutes after you get off the bus."
  },
  {
    heading: "Question 4 of 13",
    audioUrl: "audio/question1_13/2026_T5/04_aptiskey_com_another_appointment.mp3",
    question: "Why can't he do that job today?",
    options: ["He has another appointment", "He is sick", "He has to eat"],
    correctAnswer: "He has another appointment",
    transcript: "Tom said he would like to help us with the job today, but unfortunately he can't come anymore. This morning, he remembered that he already has another appointment in the afternoon. It's something important, so he cannot cancel or change the time. He sounded sorry about it and asked if we could wait until tomorrow. If everything goes well, he will come and help us then."
  },
  {
    heading: "Question 5 of 13",
    audioUrl: "audio/question1_13/2026_T5/05_aptiskey_com_meeting_room.mp3",
    question: "Which room will the director's presentation be in?",
    options: ["The main hall", "The lecture room", "The meeting room"],
    correctAnswer: "The meeting room",
    transcript: "There has been a small change to today's schedule. The director's presentation will not take place in the main hall as planned because the room is being prepared for another event. Instead, everyone should go to the meeting room on the second floor at two o'clock. Please arrive a few minutes early so the presentation can start on time."
  },
  {
    heading: "Question 6 of 13",
    audioUrl: "audio/question1_13/2026_T5/06_aptiskey_com_10_pound.mp3",
    question: "How much money is left in the kitchen?",
    options: ["20 pounds", "10 pounds", "30 pounds"],
    correctAnswer: "10 pounds",
    transcript: "Before we go shopping, I checked the money we keep in the kitchen drawer. Yesterday evening, there were fifteen pounds in it, but this morning my brother used five pounds to buy some bread and milk from the supermarket. That means there are only ten pounds left now. We may need to get some more money before buying dinner tonight."
  },
  {
    heading: "Question 7 of 13",
    audioUrl: "audio/question1_13/2026_T5/07_aptiskey_com_train_station.mp3",
    question: "What is the new medical center next to?",
    options: ["A bus station", "Train station", "An airport"],
    correctAnswer: "Train station",
    transcript: "The town has recently opened a new health center for local people. It is in a very convenient location, so it is easy for everyone to visit. The building is right next to the train station, only a short walk from the main entrance. Patients can travel there quickly by public transport, which is especially helpful for older people and families with children."
  },
  {
    heading: "Question 8 of 13",
    audioUrl: "audio/question1_13/2026_T5/08_aptiskey_com_5h30.mp3",
    question: "What time do they arrange the meeting?",
    options: ["5:30 pm", "4:00 pm", "4:30 pm"],
    correctAnswer: "5:30 pm",
    transcript: "We finally arranged a time for tomorrow's meeting after checking everyone's schedule. At first, we wanted to meet at four o'clock, but some team members were still busy at that time. After discussing a few different options, we agreed to begin the meeting at half past five in the evening. Please try to arrive a little early so we can start on time."
  },
  {
    heading: "Question 9 of 13",
    audioUrl: "audio/question1_13/2026_T5/09_aptiskey_com_second_floor.mp3",
    question: "Which floor is the French class on?",
    options: ["On the ground floor", "On the third floor", "On the second floor"],
    correctAnswer: "On the second floor",
    transcript: "Welcome to the language center. Today, all new students should check their classroom information carefully before lessons begin. The French class will not be on the ground floor like last week because those rooms are being repaired. Instead, students need to go to the second floor. There will be signs in the building to help you find the correct classroom more easily."
  },
  {
    heading: "Question 10 of 13",
    audioUrl: "audio/question1_13/2026_T5/10_aptiskey_com_3days.mp3",
    question: "The man has a new job. How many days does he have to work?",
    options: ["Five days", "Three days", "Four days"],
    correctAnswer: "Three days",
    transcript: "My brother has recently started a new job at a small restaurant in town. At first, he thought he would need to work every weekday, but the manager later explained the schedule more clearly. Because the restaurant is still new, he only has to work three days each week at the moment. He is happy about this because he still has enough free time to continue his studies."
  },
  {
    heading: "Question 11 of 13",
    audioUrl: "audio/question1_13/2026_T5/11_aptiskey_com_get_something.mp3",
    question: "What is this man going to do?",
    options: ["Eat something", "Go to sleep", "Get something to drink"],
    correctAnswer: "Eat something",
    transcript: "After finishing work this evening, Daniel realized he had not eaten anything since lunch. He first thought about going straight home, but he felt too hungry to wait that long. Instead, he decided to stop somewhere in town before going back. He said he was going to get something to eat and then continue with the rest of his evening plans."
  },
  {
    heading: "Question 12 of 13",
    audioUrl: "audio/question1_13/2026_T5/12_aptiskey_com_7h30.mp3",
    question: "What time is dinner?",
    options: ["8:30 pm", "7:30 pm", "9:30 pm"],
    correctAnswer: "7:30 pm",
    transcript: "Just a reminder about tonight's family dinner at my grandparents' house. Some people thought it would begin at seven o'clock, but the time has changed slightly because a few family members will arrive later than expected. Dinner will now start at half past seven in the evening. Please try not to be late, because everyone will wait and eat together."
  },
  {
    heading: "Question 13 of 13",
    audioUrl: "audio/question1_13/2026_T5/13_aptiskey_com_20usd.mp3",
    question: "How much does a bus card cost?",
    options: ["$20", "$10", "$30"],
    correctAnswer: "$20",
    transcript: "If you travel around the city by bus every day, it is probably better to buy a bus card instead of paying for single tickets. The card can be used on all city buses and is valid for one month. Many students and workers use it because it saves both time and money. At the moment, a new bus card costs twenty dollars, and you can buy one at the main bus station."
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
  audioUrl: "audio/question15/2026_T6/03_local_culture_differences.mp3",
  topic: "Topic: Local Cultural Differences",
  transcript: `Man: Have you ever thought about how different local cultures can be, even within the same country?

Woman: Definitely. When I visited different regions last year, I was really surprised by how unique each place felt — the food, the festivals, the daily customs.

Man: For me, the hardest part is always the language. Even when people share a national language, local dialects and accents can create real misunderstandings. I honestly think language is the biggest barrier to experiencing a different local culture.

Woman: I would not say language alone is the biggest issue. There are other challenges too, like differences in values and social customs. But I am also concerned about how globalisation is affecting local cultures. International trends are slowly replacing traditional customs everywhere.

Man: I think you are right about that. Globalisation is clearly changing the way people live, and local traditions are not as strong as they used to be.

Woman: What worries me most is that younger people seem less motivated to learn about their own heritage. They are more interested in global trends than in local traditions.

Man: I am not completely sure about that. Some young people are actually very proud of where they come from and work hard to keep their traditions alive.

Woman: Maybe a few are. But in general, local knowledge is not being passed on the way it used to be. That is why I believe travel is really the most effective way to truly understand and appreciate cultural differences. You learn so much more by being there in person than by reading about it.

Man: Travel can certainly be eye-opening. But I think there are other good ways to learn too, such as online resources and cultural events.`,
  questions: [
    "1. Language is the main barrier to experiencing a local culture.",
    "2. Globalisation is having an impact on local cultures.",
    "3. Young people are less interested in their own local heritage.",
    "4. Travel is the best way to understand cultural differences."
  ],
  correctAnswer: ["Man", "Both", "Woman", "Woman"]
};

// Dữ liệu câu hỏi 16 & 17
const question16Data = [
  {
    audioUrl: "audio/question16/5_the_sport_verson2.mp3",
    topic: "The Sport (Phiên bản 2)",
    questions: [
      {
        id: "16.1",
        question: "What is the expert's opinion about sports competitions?",
        options: [
          "Prepare students for a competitive work environment",
          "Attract significant funding from international sponsors.",
          "Identify and recruit professional athletes for national teams."
        ]
      },
      {
        id: "16.2",
        question: "What is the expert's advice for schools?",
        options: [
          "Provides them with a balance in their lives",
          "Enforce athletic participation as a strict graduation requirement.",
          "Restrict physical activities to ensure academic excellence."
        ]
      }
    ],
    transcript: "When discussing the role of athletics in education, many focus only on physical health. However, from an expert perspective, the value of sports competitions goes much further; they actually prepare students for a competitive work environment by teaching them resilience and how to perform under pressure. For this reason, my primary advice for schools is to keep these programs active, as engaging in sports provides them with a balance in their lives. This balance is crucial for ensuring that academic demands don't become overwhelming for the students."
  },
  {
    audioUrl: "audio/question16/8_television_series_verson2.mp3",
    topic: "Television Series (Phiên bản 2)",
    questions: [
      {
        id: "17.1",
        question: "What happened to the TV series?",
        options: [
          "It caught the audience's attention from the start.",
          "It faced significant backlash from local viewers.",
          "It struggled to secure a prime-time slot."
        ]
      },
      {
        id: "17.2",
        question: "According to the expert, what is the series' potential?",
        options: [
          "It can help reach new customers.",
          "It will dominate the international award season.",
          "It primarily focuses on educational content for kids."
        ]
      }
    ],
    transcript: `When the new drama series premiered last month, the production team was uncertain about how it would be received in such a crowded market. However, they were pleasantly surprised because it caught the audience's attention from the start, breaking viewership records within its very first week of release. The unique plot and high-quality cinematography had everyone talking immediately.

Looking ahead, industry analysts believe the show has a very promising future beyond just high ratings. I spoke to a media consultant who pointed out that the series has a unique commercial appeal. According to the expert, the real potential of this show is that it can help reach new customers, particularly by attracting younger demographics and international viewers who don't usually watch domestic television. It is seen as a strategic tool to expand the network's influence into entirely new markets.`
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
