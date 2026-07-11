document.addEventListener('DOMContentLoaded', function() {

// ===============================================================================================================
// ////////////// DANH SÁCH CÂU HỎI ///////////////
// ===============================================================================================================

const listeningQuestions1 = [
{
  heading: "Question 1 of 17", 
  audioUrl: "audio/question1_13/audio_de2_q1.mp3", 
  question: "Doctor’s office is calling about a change in the appointment. When is the new appointment?",
  options: ["Thursday 13th", "Friday 14th", "Wednesday 12th"],
  correctAnswer: "Thursday 13th",
  transcript: "Hello! This is the doctor’s office calling to change your appointment. I wanted to let you know that the new appointment is on Thursday the 13th. I understand you might have been expecting it to be on Friday the 14th, but we’re all off this day due to the national dentist holiday. Please let us know if that works for you!"
},
{
  heading: "Question 2 of 17", 
  audioUrl: "audio/question1_13/audio_de2_q2.mp3", 
  question: "A man is ordering a drink. What does he want?",
  options: ["Water", "Iced tea", "Beer"],
  correctAnswer: "Iced tea",
  transcript: "Hi there! I’m really thirsty. Can I have a drink, please? I was thinking about getting a beer, but it's a bit too early for that. Water sounds good, but I’m in the mood for something cooler. I’ll go with an iced tea, please. That sounds perfect for this weather!"
},
{
  heading: "Question 3 of 17", 
  audioUrl: "audio/question1_13/audio_de2_q3.mp3", 
  question: "An author is talking about her daily routine. When does she usually write?",
  options: ["In the afternoons", "In the mornings", "At night"],
  correctAnswer: "In the afternoons",
  transcript: "Every morning, I start my day by going for a run. It helps me clear my mind and gives me energy. After lunch, at around two o’clock, I sit down at my working table, ready to write. My husband is my best critic, so I try to produce something before he gets home in the afternoon."
},
{
  heading: "Question 4 of 17", 
  audioUrl: "audio/question1_13/audio_de2_q4.mp3",  
  question: "How does he travel?",
  options: ["By car", "By plane", "By train"],
  correctAnswer: "By train",
  transcript: "He travels most of the time, enjoying the convenience and comfort of his journeys. Whether it's for work or leisure, he finds it the best way to get around, especially because of the scenic views. He travels by train."
}
,
{
  heading: "Question 5 of 17", 
  audioUrl: "audio/question1_13/audio_de2_q5.mp3", 
  question: "A woman is talking about her usual Saturday routine. What does she usually do on Saturdays?",
  options: ["Goes shopping", "Sees her family", "Goes to a birthday party"],
  correctAnswer: "Sees her family",
  transcript: "Normally, on Saturdays, I spend the day with my family. We like to have brunch together and then do some fun activities, like playing board games or going for a walk. It’s a nice way to relax and catch up. But this week, I have something different planned. I’m going to see a friend for her birthday and go shopping together instead. I’m looking forward to it, but I know I’ll miss our usual family time!"
},
{
  heading: "Question 6 of 17", 
  audioUrl: "audio/question1_13/audio_de2_q6.mp3", 
  question: "A man is talking about his family trip. What does the man’s wife enjoy?",
  options: ["Photography", "Shopping", "Hiking"],
  correctAnswer: "Photography",
  transcript: "On our family trip last summer, we had such a great time! My wife really enjoys photography. So, when we went walking together in the parks, she spent a lot of time taking pictures of the beautiful landscapes. Well, at least she is not crazy about shopping."
},
{
  heading: "Question 7 of 17", 
  audioUrl: "audio/question1_13/audio_de2_q7.mp3", 
  question: "A woman is talking about her job. What encouraged her to become a scientist?",
  options: ["Her computer", "Her mother", "A large stone"],
  correctAnswer: "A large stone",
  transcript: "I’ve always loved science, but there was a moment that really encouraged me to become a scientist. I remember when I was a child, I found a large stone during a school trip. It sparked my curiosity about geology. My mother also inspired me to explore my interests in science. Of course, I use the computer a lot now for my research, but that stone was the beginning."
},
{
  heading: "Question 8 of 17", 
  audioUrl: "audio/question1_13/audio_de2_q8.mp3", 
  question: "Listen to the speaker talking about their weekly schedule. When is the meeting scheduled?",
  options: ["Monday morning", "Friday afternoon", "Wednesday afternoon"],
  correctAnswer: "Wednesday afternoon",
  transcript: "This week is pretty busy, but the most important thing is the meeting on Wednesday afternoon. We usually have it on Monday, but this time we had to change the day. Wednesday works better because everyone is free. I have a lot to prepare before then, so I'll spend Tuesday getting everything ready. It's a big meeting, and we need to finalize some plans. I'm just glad it's not on Friday, or I'd be too tired!"
},
{
  heading: "Question 9 of 17", 
  audioUrl: "audio/question1_13/audio_de2_q9.mp3", 
  question: "A man is reading the news about a housing development plan. How many new houses are going to be built?",
  options: ["1500", "2000", "2500"],
  correctAnswer: "2000",
  transcript: "I just heard the news that the local authority is planning to build 2000 new houses! I remember they were initially saying it would only be 1500. But then I heard someone mention 2500! That’s quite a jump. I wonder how this will affect the neighborhood. Will it bring in more families or just more traffic? It’ll be interesting to see how it all unfolds."
},
{
  heading: "Question 10 of 17", 
  audioUrl: "audio/question1_13/audio_de2_q10.mp3", 
  question: "Listen to a writer talking about her job. What is her first job?",
  options: ["Writer", "Librarian", "Teacher"],
  correctAnswer: "Teacher",
  transcript: "When I was younger, I didn’t always dream of being a writer. My first job was actually as a teacher. I taught English to small children, and I loved helping them learn to read and write. It wasn’t easy, though. I spent a lot of time grading papers and preparing lessons. But that job taught me how to use words well, and now I write stories for everyone to enjoy."
},
{
  heading: "Question 11 of 17", 
  audioUrl: "audio/question1_13/audio_de2_q11.mp3", 
  question: "Listen to Marry talking to Jane while waiting for James. What did they decide to do?",
  options: ["Cancel the meeting", "Having the meeting without him", "Wait for him longer"],
  correctAnswer: "Having the meeting without him",
  transcript: "Hi, Jane! It looks like James is running late again. I’m starting to wonder if we should wait for him. I don’t want to waste too much time. I feel like we could have the meeting without him. We have a lot to discuss, and we can always update him later. I think it’s better to move forward instead of just waiting. So let’s go ahead."
},
{
  heading: "Question 12 of 17", 
  audioUrl: "audio/question1_13/audio_de2_q12.mp3", 
  question: "A woman is talking to her coworker. When does the meeting start?",
  options: ["10.15", "10.30", "9.45"],
  correctAnswer: "10.15",
  transcript: "Hey, just wanted to give you a quick heads-up. I won’t be able to join the meeting with the clients at 10:15 like we planned—I’ve got something that suddenly came up. I know it’s last minute, but could you go ahead and handle the presentation on your own? You’re familiar with everything, so I trust you’ve got this. Let me know how it goes afterward. Thanks, I really appreciate it!"
},
{
  heading: "Question 13 of 17", 
  audioUrl: "audio/question1_13/audio_de2_q13.mp3", 
  question: "Vincent is calling James. Why does Vincent call James?",
  options: ["Invite him to a party", "Suggest a drink", "Ask for help"],
  correctAnswer: "Suggest a drink",
  transcript: "Hi James, it’s Vincent. I just want to check in and see how you’re doing. It’s been a while since we last caught up! How about we grab a drink later? I know a great new place that has very nice tea. You should definitely try it next time you visit me. Text me back!"
},
];

// Dữ liệu câu hỏi 14
const question14Data = {
  audioUrl: "audio/question14/audio_de2.mp3",  // Đường dẫn audio
  topic: "Topic: Protect the environment",                  
  options: [
    "Shopping online",
    "Not driving to work",
    "Using less electricity",
    "Using less water",
    "Buying imported goods",
    "Wasting more energy"
  ],
  transcript: `A: I usually shop online to reduce the need to drive to the supermarket, which produces harmful emissions for the environment. Additionally, I can avoid using plastic bags for groceries when shopping in person. By simply sitting at home and clicking a few buttons, I can buy everything I want without emitting harmful gases from a car.

B: I used to drive to work for a long period, but then I realized that the excessive use of personal cars contributes significantly to environmental pollution. Therefore, I chose to ride a bicycle to work, which benefits both the environment and my health.

C: I'm not that into environmental protection and usually just do what’s convenient for me. But my electric bill last month shocked me because it was so expensive, and I realized that I needed to save money. So from now on, I’ll have to manage my electricity use more efficiently.

D: I think a lot of people overemphasize protecting the environment by cutting down on personal vehicles, avoiding plastic bags, planting a lot of trees, and so on. But I personally believe we should focus on protecting the environment through small daily actions we often overlook. For example, turning off the water while brushing our teeth or washing our hands. If everyone saves a little water like that, it would add up to a huge amount saved globally.`
};


// Dữ liệu câu hỏi 15
const question15Data = {
  audioUrl: "audio/question15/audio_de2.mp3", // Đường dẫn đến file audio
  topic: "Topic: Beauty",
  transcript: `W: Hi, what are you reading?

M: I'm reading an article about the concept of beauty.

W: Oh really, that sounds interesting. Beauty is something that can't be defined because everyone has a different perspective on it, right?

M: Actually, people have quite similar perspectives on beauty. We always prefer beautiful things and are drawn to them.

W: Beauty in the past and now is very different. The older generation might see traditional things as beautiful, while the younger generation considers unique and unconventional things as beautiful. So, not everyone has the same view on beauty.

M: Beauty can be found in many places we wouldn't expect, or even within something considered ugly, there's always some beauty present. So, nothing in the world is entirely ugly.

W: Exactly. That's why the definition of beauty is constantly changing. In a few decades, people might find things beautiful that we once considered ugly.

M: That's one perspective. Let's wait and see how it changes.`,
  questions: [
    "1. People share the very similar ideas about beauty",
    "2. Views of beauty change over time",
    "3.  Beauty can be found in unlikely places",
    "4. Traditional ideas of beauty are going to change"
  ],
  correctAnswer: ["Man", "Woman", "Both", "Woman"] // Đáp án đúng của từng câu hỏi
};

// Dữ liệu câu hỏi 16 & 17
const question16Data = [
  {
    audioUrl: "audio/question16/4_the_sport_verson1.mp3",
    topic: "The sport",
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
        ],
      }
    ],
    transcript: "While most people praise the benefits of exercise, I have a somewhat different view on professional competitive sports. In my experience, when sports become too intense or commercialized, they can actually have a harmful effect on both the players' health and the spirit of fair play. However, my opinion changes when it comes to education. I believe that engaging in physical activity is essential for those in school because it helps balance student's lives. It provides a much-needed break from long hours of academic pressure and keeps them mentally grounded." 
  },
  {
    audioUrl: "audio/question16/7_television_series_verson1.mp3",  // Phần tử thứ hai
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

  // ✅ Đặt lại đáp án sau khi input đã có value
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
    const textColor = isCorrect ? 'text-success' : 'text-danger'; // ✅ Màu chữ cho câu trả lời người dùng

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
//let correctAnswer14 = []; // ✅ Đáp án đúng 4 phần tử đầu tiên (dùng cho chấm điểm)

// ✅ Hàm render
let shuffledOptions14 = [];
function renderQuestion14(data) {
  document.getElementById("audioPlayer2").src = data.audioUrl;
  document.getElementById("question14_topic").innerText = data.topic;

  // Lưu lại 4 đáp án đúng đầu tiên
  correctAnswer14 = data.options.slice(0, 4);

  // Tạo mảng xáo trộn để render
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

    // Nếu người dùng đã chọn đáp án → chọn lại
    const prevAnswer = userAnswers_question14[index];
    if (prevAnswer) {
      const selectedIndex = shuffledOptions14.indexOf(prevAnswer);
      select.selectedIndex = selectedIndex + 1; // vì index 0 là "-- Select an answer --"
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
// ===============================================================================================================
// Đáp án câu 14 (với 4 phần tử đầu tiên của options trong question14Data)
// ===============================================================================================================

// Lắng nghe sự kiện khi người dùng chọn đáp án cho câu hỏi 14 (selectbox)
document.querySelectorAll('select[id^="person"]').forEach((select, index) => {
  select.addEventListener('change', function() {
    storeUserAnswerQuestion14(index, this.value); // Lưu đáp án người dùng cho câu hỏi 14
  });
});

// Hàm lưu đáp án câu 14 vào mảng userAnswers_question14
let userAnswers_question14 = [];

// Hàm lưu đáp án người dùng cho câu hỏi 14 vào mảng
function storeUserAnswerQuestion14(index, answerLetter) {
  const optionIndex = answerLetter.charCodeAt(0) - 65;
  const selectedAnswer = shuffledOptions14[optionIndex]; // ✅ Dùng mảng đã xáo trộn
  userAnswers_question14[index] = selectedAnswer;
}




// Hàm ẩn hiện transcript
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


let correctAnswer14 = []; // Đáp án đúng cho câu 14
function showResults_question14() {
  const comparisonBody14 = document.getElementById('comparisonBody_question14');
  const totalScoreEl = document.getElementById('totalScore_question14');
  comparisonBody14.innerHTML = '';

  //const correctAnswer14 = question14Data.options.slice(0, 4); // 4 đáp án đúng
  let score = 0;
  let html14 = '';

  correctAnswer14.forEach((correctOption, index) => {
    const userAnswer = userAnswers_question14[index] || 'Not answered';
    const isCorrect = userAnswer === correctOption;
    const textColor = isCorrect ? 'text-success' : 'text-danger';

    if (isCorrect) {
      score += 2; // Mỗi câu đúng 2 điểm
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

  // Hiện bảng kết quả nếu muốn
  // document.getElementById('comparisonResult_question14').style.display = "block";
}





// ===============================================================================================================
// ////////////// CÂU HỎI 15 ///////////////
// ===============================================================================================================
// Mảng lưu đáp án người dùng cho câu hỏi 15
let userAnswers_question15 = [];



// Hàm lưu đáp án người dùng cho câu hỏi 15
function storeUserAnswerQuestion15(index, answer) {
  const options = ["Man", "Woman", "Both"]; // Các lựa chọn thực tế
  const selectedAnswer = options[answer.charCodeAt(0) - 65];  // Chuyển từ 'A' -> "man", 'B' -> "woman", 'C' -> "both"
  userAnswers_question15[index] = selectedAnswer; // Lưu đáp án vào mảng
}

// Hàm render câu hỏi 15
function renderQuestion15(data) {
  document.getElementById("audioPlayer3").src = data.audioUrl;
  document.getElementById("question15_id").innerText = data.topic;

  data.questions.forEach((question, index) => {
    const label = document.getElementById("opinion" + (index + 1) + "_label");  // Dùng index để tạo id cho label
    const select = document.getElementById("opinion" + (index + 1));  // Dùng index để tạo id cho select

    if (label) {
      label.innerText = question;  // Gán nội dung question từ mảng vào label
    }

    if (select) {
      select.innerHTML = `<option value="">-- Select an answer --</option>`; // reset
      const options = ["Man", "Woman", "Both"];
      options.forEach((opt, i) => {
        const val = String.fromCharCode(65 + i); // 'A', 'B', 'C'
        const optionEl = document.createElement("option");
        optionEl.value = val;
        optionEl.innerText = opt;
        select.appendChild(optionEl);
      });

      // Nếu người dùng đã chọn đáp án trước đó, hiển thị lại đáp án đã chọn
      if (userAnswers_question15[index]) {
        const selectedIndex = options.indexOf(userAnswers_question15[index]);
        select.value = String.fromCharCode(65 + selectedIndex); // Chọn lại giá trị đã lưu
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

// Lắng nghe sự kiện khi người dùng chọn đáp án cho câu hỏi 15 (selectbox)
document.querySelectorAll('select[id^="opinion"]').forEach((select, index) => {
  select.addEventListener('change', function() {
    storeUserAnswerQuestion15(index, this.value); // Lưu đáp án người dùng cho câu hỏi 15
  });
});

// Hàm hiển thị kết quả cho câu hỏi 15
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

  // document.getElementById('comparisonResult_question15').style.display = 'block';
}





// ===============================================================================================================
// ////////////// CÂU HỎI 16 ///////////////
// ===============================================================================================================



let userAnswers_question16 = {}; // Lưu đáp án người dùng
let correctAnswers_question16 = {};        // q.id → correct answer text
let shuffledOptionsMap_question16 = {};    // q.id → shuffled options array

function renderQuestion16(data) {
  // Gán audio và tiêu đề
  document.getElementById("audioPlayer16").src = data.audioUrl;
  document.getElementById("question16_topic").innerText = `Topic: ${data.topic}`;
  document.getElementById("transcriptContent16").innerText = data.transcript;

  data.questions.forEach((q, index) => {
  const qIndex = index + 1;

  // Gán tiêu đề câu hỏi
  const labelEl = document.getElementById(`q16_opinion${qIndex}_label`);
  labelEl.innerText = `${q.id} ${q.question}`;

  // Lưu đáp án đúng (phần tử đầu tiên)
  correctAnswers_question16[q.id] = q.options[0];

  // Chỉ xáo trộn nếu chưa có câu trả lời
  if (Object.keys(userAnswers_question16).length === 0) {
    const shuffled = [...q.options].sort(() => Math.random() - 0.5);
    shuffledOptionsMap_question16[q.id] = shuffled;
  } else {
    shuffledOptionsMap_question16[q.id] = shuffledOptionsMap_question16[q.id] || [...q.options];
  }

  const shuffled = shuffledOptionsMap_question16[q.id];

  shuffled.forEach((text, optIndex) => {
    const letter = String.fromCharCode(65 + optIndex); // A, B, C
    const radio = document.getElementById(`opinion${qIndex}_${letter}`);
    const label = document.querySelector(`label[for=opinion${qIndex}_${letter}]`);

    if (radio && label) {
      label.innerText = text;
      radio.checked = false;

      // Nếu đã chọn trước đó, hiển thị lại
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


  // 👉 Thêm đoạn này
  const audio = document.getElementById("audioPlayer16");
  const playBtn = document.getElementById("playButton16");
  const playIcon = document.getElementById("playIcon16");
  setupPlayButton(audio, playBtn, playIcon);

  // Ẩn/hiện transcript
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
      const correctText = correctAnswers_question16[qid];                // đáp án đúng gốc
      const shuffled = shuffledOptionsMap_question16[qid];              // mảng đã xáo trộn
      const userLetter = userAnswers_question16[qid];                   // A/B/C
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
let userAnswers = [];  // Mảng lưu trữ các đáp án người dùng

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
    document.getElementById('question16_id').textContent = "Question 16 of 17"; // Change Next to Submit
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
  // 🔁 Reset tất cả audio và icon play
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
  // 🔁 Reset tất cả audio và icon play
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


// Lắng nghe sự kiện nhấn nút "confirmSubmitBtn" (trên popup)
document.getElementById('confirmSubmitBtn').addEventListener('click', function () {
  // Gọi tất cả hàm hiển thị kết quả các phần
  showResults_question1_13();   // Câu 1–13
  showResults_question14();    // Câu 14
  showResults_question15();    // Câu 15
  showResults_question16();    // Câu 16–17

  // Tính tổng điểm và phân loại
  calculateTotalScore();

      document.getElementById("question1_13").style.display = "none";
    document.getElementById("question14").style.display = "none";
    document.getElementById("question15").style.display = "none";
    document.getElementById("question16").style.display = "none";
    document.getElementById('backButton').style.display = "none";

  // Hiển thị khu vực kết quả phân loại và navigation
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

// 2. Phân loại điểm
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
    }else {
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
// Bản đồ giữa nút và phần kết quả tương ứng
const navMap = {
  navQ1: 'comparisonResult_question1',
  navQ2: 'comparisonResult_question14',
  navQ3: 'comparisonResult_question15',
  navQ4: 'comparisonResult_question16'
};

// Lặp qua tất cả các nút điều hướng
Object.keys(navMap).forEach(navId => {
  const button = document.getElementById(navId);
  button.addEventListener('click', () => {
    // 1. Ẩn toàn bộ các khu vực kết quả
    Object.values(navMap).forEach(resultId => {
      const section = document.getElementById(resultId);
      if (section) section.style.display = 'none';
    });

    // 2. Hiện phần được chọn
    const targetResult = document.getElementById(navMap[navId]);
    if (targetResult) targetResult.style.display = 'block';

    // 3. Cập nhật nút đang được chọn (btn-active)
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
// Countdown Timer
let timeLeft = 40 * 60; // 35 minutes in seconds
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
