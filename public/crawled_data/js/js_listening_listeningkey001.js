document.addEventListener('DOMContentLoaded', function() {

// ===============================================================================================================
// ////////////// DANH SÁCH CÂU HỎI ///////////////
// ===============================================================================================================

const listeningQuestions1 = [
  {
    heading: "Question 1 of 17", 
    audioUrl: "audio/question1_13/audio_q1.mp3", 
    question: "What is not original?",
    options: ["Furniture", "Home", "Bicycle"], 
    correctAnswer: "Furniture", 
    transcript: "Welcome! I’m so glad you are interested in this beautiful property. This house was built in the 1920s and has maintained much of its original charm. The hardwood floors you see here are completely original, and they’ve been carefully preserved over the years. The same goes for the architecture- those high ceilings and detailed mouldings are a testament to the craftsmanship of that era. However, the furniture you see isn’t original. It was replaced a few years ago to give the home a more modern, functional feel. But don’t worry, the updates blend well with the classic features, giving you the best of both words- historic charm with modern comfort." 
  },
  {
    heading: "Question 2 of 17", 
    audioUrl: "audio/question1_13/audio_q2.mp3", 
    question: "What did she advice for people who lack motivation at work?",
    options: ["Attend a time management workshop", "Request a transfer", "Take on additional responsibilities"], 
    correctAnswer: "Request a transfer", 
    transcript: "Many people feel unhappy at work, and often, they think a higher salary or less work will fix it. But that’s not always the solution. Sometimes, the problem is the work environment. A change of place can help improve how we feel at work. However, looking for a new job can be stressful and take time. One option is to ask for a transfer to another branch within the same company. This can offer the same benefits as getting a new job, without the challenges of starting over somewhere new." 
  },
  {
    heading: "Question 3 of 17", 
    audioUrl: "audio/question1_13/audio_q3.mp3", 
    question: "What time do they meet?",
    options: ["6.30pm", "8.00pm", "7.00pm"], 
    correctAnswer: "6.30pm", 
    transcript: "Hey, I was just checking in to confirm what time we’re meeting up tonight. I know we’ve been talking about hanging out, but I wanted to make sure. Are we still on for 6:30? That time works great for me, so I just wanted to double-check if it’s good for you too. Alright, looking forward to it. See you then!"  
  },
    {
    heading: "Question 4 of 17", 
    audioUrl: "audio/question1_13/audio_q4.mp3", 
    question: "Where does she go shopping?",
    options: ["at a new shopping mall", "at a department store", "at a local market"], 
    correctAnswer: "at a new shopping mall", 
    transcript: "Person A: 'Hey, do you know where Sarah likes to go shopping?' \nPerson B: 'Oh, yeah! She usually goes to that new shopping mall that just opened. It's got a lot of cool stores.' \nPerson A: 'Really? I haven't been there yet. What's it like?' \nPerson B: 'It's amazing! It's really modern, and there’s a big variety of shops. She loves it because she can find pretty much anything she needs, from clothes to electronics.' \nPerson A: 'That sounds great. I should check it out sometime.' \nPerson B: 'Definitely! The food court is great too. She always grabs a bite there after shopping.'"  
  },
{
  heading: "Question 5 of 17", 
  audioUrl: "audio/question1_13/audio_q5.mp3", 
  question: "What is her favorite thing to do in her spare time?",
  options: ["watching a movie at home", "going to the theatre", "playing sports"], 
  correctAnswer: "going to the theatre", 
  transcript: "Whenever she has some free time, she loves going to the theatre. There's something special about watching live performances that really captures her attention. Whether it’s a play, musical, or even a stand-up comedy show, she enjoys the atmosphere and the excitement of being in a theatre. It’s her favorite way to unwind and escape into a different world for a few hours."
},
{
  heading: "Question 6 of 17", 
  audioUrl: "audio/question1_13/audio_q6.mp3", 
  question: "Which sports is she good at?",
  options: ["Running", "Swimming", "Football"], 
  correctAnswer: "Football", 
  transcript: "She’s always enjoyed sports, and football is the one she’s really good at. She has great control over the ball and is quick on her feet, whether she’s playing with friends or in a competitive setting."
},

    {
    heading: "Question 7 of 17", 
    audioUrl: "audio/question1_13/audio_q7.mp3", 
    question: "The woman is discussing her new exercise routine. How much time does she spend cycling?",
    options: ["45 minutes", "35 minutes", "60 minutes"], 
    correctAnswer: "35 minutes", 
    transcript: "Lately, I’ve started a new routine that I’m really enjoying! I decided to involve more exercise into my life. So, I began by walking for about 15 minutes every day, just to get moving. After that, I hop on my bike and cycle for 35 minutes. It’s been refreshing! I love how it helps me clear my mind after a busy day. I’m thinking of sticking with this habit for the long run!" 
  },
    {
    heading: "Question 8 of 17", 
    audioUrl: "audio/question1_13/audio_q8.mp3", 
    question: "When do they meet each other? ",
    options: ["On Thursday morning", "On Wednesday morning", "On monday morning"], 
    correctAnswer: "On Thursday morning", 
    transcript: "Hi Professor Smith, this is John calling about our meeting for the assignment. I wanted to confirm our appointment time. I know we discussed a few options earlier. At first, I thought we agreed on Tuesday morning, but then I remembered that doesn’t work with your schedule. Then I considered Thursday afternoon, but I have another class then. So, I’m pretty sure we settled on Thursday morning at 10 AM in your office. That’s what I have written down. I’ll bring my draft and notes for the project. If I’ve got the day or time wrong, or if you need me to bring anything else, please let me know. Looking forward to discussing the assignment with you. Have a great day!" 
  },
    {
    heading: "Question 9 of 17", 
    audioUrl: "audio/question1_13/audio_q9.mp3", 
    question: "A woman is calling her son. What time will the mother meet the son?",
    options: ["Six o’clock", "Two o’clock", "Three o'clock"], 
    correctAnswer: "Three o'clock", 
    transcript: "Hi, sweetheart! I just wanted to tell you that we’ll meet at 3 o'clock when you finish school. After that, I can take you to your soccer club at 4 o'clock. If you need anything, just let me know, and I can pick it up for you. Then, we can head out to dinner at 5 o'clock. Looking forward to seeing you!" 
  },
    {
    heading: "Question 10 of 17", 
    audioUrl: "audio/question1_13/audio_q10.mp3", 
    question: "Jack is calling to invite a friend to his house. What color is Jack’s house??",
    options: ["Black", "Red", "Green"], 
    correctAnswer: "Red", 
    transcript: "Hey! It’s Jack. I just moved to a new house in this busy neighborhood, and it’s really cool! There are so many houses here in different colors—purple, blue, and white. My house is big and red! I’d love for you to come over and check it out. Let me know when you’re free!." 
  },
    {
    heading: "Question 11 of 17", 
    audioUrl: "audio/question1_13/audio_q11.mp3", 
    question: "A man is talking about his daily routine. What does he do after work?",
    options: ["Go home", "Go to the coffee shop", "Play football"], 
    correctAnswer: "Play football", 
    transcript: "Every day, I wake up at 7 A.M. and have a quick breakfast before going to work. I usually take the bus, and it takes about 30 minutes to get to the office. At work, I spend most of my time on the computer, answering emails and working on projects. I have lunch at noon and get back to work until 5 P.M. After work, I like to relax by playing football with my friends. It’s a great way to stay active and have fun!" 
  },
    {
    heading: "Question 12 of 17", 
    audioUrl: "audio/question1_13/audio_q12.mp3", 
    question: "A mom is talking to her son. What does the son like to study?",
    options: ["Art", "Math", "Science"], 
    correctAnswer: "Art", 
    transcript: "Hey sweetheart, I’m so proud of you! Your art project looks amazing, you’re really talented. I love how you used all those bright colors. You always do such a great job with your drawings. But remember, you also need to spend some time on your other subjects too, like math and science. I know you can do well in those if you try hard, just like you do with art. Let’s work on it together, okay?" 
  },
 {
  heading: "Question 13 of 17", 
  audioUrl: "audio/question1_13/audio_q13.mp3", 
  question: "How many weeks did they spend in India?",
  options: ["Three weeks", "Two weeks", "One week"], 
  correctAnswer: "Two weeks", 
  transcript: "They traveled to India for a short trip, and they spent two weeks there. During that time, they explored different cities, experienced the local culture, and visited some famous landmarks. It was a quick but memorable visit."
},
];

// Dữ liệu câu hỏi 14
const question14Data = {
  audioUrl: "audio/question14/audio_q1.mp3",  // Đường dẫn audio
  topic: "Topic: Protect the environment",                  
  options: [
    "Does not use commercial cleaning products",
    "Give away used items",
    "Buy environmentally friendly products",
    "Reuse containers for storing food",
    "Plant trees in the backyard",
    "Use solar panels for electricity"
  ],
  transcript: `Person A: I find the act of giving away old or secondhand items a bit hypocritical. Why do people give away their old things, only to go out and buy the same item but brand new? Not only does this fail to protect the environment, but it also causes double the harm. Personally, I have a way of protecting the environment by not releasing harmful chemicals into it. I do this by not purchasing chemical cleaning solutions. Instead, I make use of natural products like lemons to create my own floor-cleaning solutions.

Person B: I often don\'t have time to think about how to reuse my belongings or clothes, but I don\'t want to throw them away because that would be wasteful. So, I think a better way is to donate them to charity organizations or give them to others. Many people are in need of these things, and giving away my old items also makes me feel happier because I\'m helping others.

Person C: A good way to protect the environment is by not using plastic bags or by bringing reusable bags when going to the market, which helps reduce the disposal of plastic bags, a material that is difficult to decompose. However, I\'m a very busy person and rarely have time to prepare my own bags when going shopping, and I usually drive to buy groceries quickly instead of walking. I guess I can\'t protect the environment by not driving. But I have a principle of only buying eco-friendly products, so I think I’m still contributing in a small way to protecting the Earth.

Person D: I see that too many people are wasting food containers, as they often throw them away after use, such as glass jars or plastic bottles. I can reuse them to store food and neatly organize them in my refrigerator. Reusing these containers is a very easy way to protect the environment that anyone can do.`
};
// Dữ liệu câu hỏi 15
const question15Data = {
  audioUrl: "audio/question15/audio_q1.mp3", // Đường dẫn đến file audio
  topic: "Topic: Changes in the workplace",
  transcript: `W: I'm thinking about switching to another job.

M: Why? Your current job is very stable.

W: I think I should try my hand at different fields. The jobs I take should only last around 1-2 years. I don't like staying too long in one job or with one company; that would be really boring. Nowadays, many companies offer temporary jobs, which allows me to try out different fields.

M: Oh, but if you stay longer at one company, they might offer you more opportunities for career advancement. I always want to stay long-term with a company that suits me.

W: Nowadays, young people who have just graduated from university are very talented and have many qualifications. I'm afraid that if I stick with one job and don't change to accumulate knowledge in various fields, it will be hard to compete with these young, talented people.

M: We also need to consider job satisfaction. If we do well, we need to be encouraged and motivated. That helps employees feel that their efforts and contributions to the company are worthwhile.

W: You're absolutely right, I couldn't agree more. In this age of technological advancement, many jobs have been replaced by machines. More and more people are losing their jobs due to the development of technology and engineering. I think this is a concerning issue.

M: I don't think so. Technology is helping us do our work more quickly, easily, and conveniently than ever. If we know how to leverage technology in our jobs, productivity will increase significantly, which in turn helps develop the economy and society.`,
  questions: [
    "1. Continuity is important when planning a career",
    "2. Job security cannot be guaranteed",
    "3. Job satisfaction is important for motivator",
    "4. Technological improvement is good for the economy"
  ],
  correctAnswer: ["Man", "Woman", "Both", "Man"] // Đáp án đúng của từng câu hỏi
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
        ],
      }
    ],
    transcript: "After completing high school, many of my friends chose to go directly to university, while I opted for a different direction. Honestly, I didn’t feel prepared to begin higher education at that time; I needed some time away from studying to refresh my mind. Rather than signing up for courses, I spent the following two years traveling throughout Asia and Europe. For me, it wasn’t simply a holiday; I wanted to gain practical experience and explore different perspectives before eventually returning to my studies." 
  },
  {
    audioUrl: "audio/question16/2_scientist_biography_verson1.mp3",  // Phần tử thứ hai
    topic: "A book about a life of a scientist",
    questions: [
      {
        id: "17.1", 
        question: "Why do many readers find the book interesting?",
        options: [
          "It uses simple language to describe complex ideas.",
          "It relies heavily on technical vocabulary.",
          "It avoids explaining abstract concepts."
        ]
      },
      {
        id: "17.2", 
        question: "Why is the book so popular?",
        options: [
          "It is similar to the previous book about the scientist.",
          "It is too long.",
          "It is too difficult to understand."
        ]
      }
    ],
    transcript: "I’ve just completed a new biography about a well-known physicist, and it’s truly impressive. What makes it engaging is the author’s style, which explains complicated ideas in a clear and simple way, allowing even readers without a scientific background to understand it. The book has already become a bestseller. Many specialists think its popularity comes from its similarity to the earlier book about the same scientist, which was also highly successful. If you liked the previous one, you’ll certainly find this new book worth reading." 
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


//let correctAnswer14 = []; // Đáp án đúng cho câu 14
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
