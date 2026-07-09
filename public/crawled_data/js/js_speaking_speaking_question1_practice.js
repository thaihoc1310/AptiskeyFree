const questions = [
    {
        question: "Please tell me about your family?",
        answer1: "I'm so happy when I talk about my family. There are four people in my family: my father, my mother, my sister, and me. My parents are farmers, and they are very kind and friendly. My sister is a teacher, and she is very beautiful. I'm a doctor. I hope my family will be with me forever.",
        answer2: "I'm so happy when I can talk about my family. There are five people in my family: my parents, two younger sisters, and me. My parents are farmers. They are so nice and humorous. My sisters are students who study at secondary school. And I'm a senior at National Economics University. I love my family very much and like to spend time with them.",
    },
    {
        question: "Please tell me about yourself?",
        answer1: "Hi, thank you for your question. I'm really happy to tell you a bit about myself. My name is Nguyen Van A. I'm a teacher. My hobby is listening to music, I really like listening to music because it helps me relax and feel better after a long working day.",
        answer2: "I would like to introduce myself. My full name is Nguyen Hong Ngoc. I'm a senior at National Economics University. My major is Accounting. I'm very friendly and nice. In my free time, I like hanging out with my friend. We go out to eat, go to the cinema, go shopping or go to the concert music and so on. In the future, I want to be an auditor because it helps to build a solid ground about accounting, finance and improve my soft skill."
    },
    {
        question: "Tell me about your hometown / the place that you live? / A famous place in your country?",
        answer1: "My hometown is Hanoi, the capital city of Vietnam. It is a very old city with many beautiful places. The weather in Hanoi is often cool in the winter and hot in the summer. People here are friendly and kind. There are many delicious foods like Pho and Bánh mì. I love my hometown very much.",
        answer2: "I live in Hung Yen province, which is located in the north part of Vietnam. It is about sixty kilometers from Ha Noi. I often come back to my hometown by motorbike. There are a lot of beautiful places such as Tam Dao, Dai Lai... It is a place with friendly and kind people. I think everyone should visit my hometown at least once."
    },
    {
        question: "Tell me the best way to travel about around your country?",
        answer1: "Well, this is a very good question. I think the best way to travel around my country is by motorbike, because it is a very cheap and flexible way to move from place to place. With a motorbike, you can stop anywhere to enjoy the view, take pictures, or try local food. Right now, I usually use a motorbike to go to work. It makes me feel comfortable every day.",
        answer2: "This is a good question. I think the best way to travel in my country is by motorbike. It is cheap and easy to go from one place to another. With a motorbike, you can stop anytime to see the view, take photos, or try local food. I also use a motorbike to go to work every day. It makes me feel comfortable."
    },
    {
        question: "Tell me about your friend / a member in your family",
        answer1: "I have many friends, but Marry is my best friend. We have known each other since childhood. Now we live in different cities, but we talk to each other every day via mobile phone. I like her because she is very kind and always helps me when I need support. I hope she will be with me forever and become my wife in the future.",
        answer2: "Well, I would like to talk about my mother who has played an essential role in my life. She's forty-two years old. She is very nice and humorous. She really is a mother and a friend to me as she always gives me valuable advice when I face a difficult problem. I love my mom very much."
    },
    {
        question: "What is the weather like today? / What is your favorite season?",
        answer1: "Today, it's very hot, but I like the heat and I really enjoy summer. In this season, I can go to the beach with my friends and family. At the beach, I can watch the sunset and enjoy the fresh air. I usually exercise in the morning, and summer is a great season for walking or running. I wish there were only one season in a year — summer!",
        answer2: "Today the weather is very good. It is amazing because it's cloudy. I can go hang out with my friend. We can take a beautiful photograph. I really love this weather, it makes me feel happy and relaxed."
    },
    {
        question: "Please tell me about one of your good memories",
        answer1: "I come from Hanoi, which is the capital of Vietnam. But now I'm working in another city, very far from there. Back in Hanoi, I had an old friend. Now she still lives there. We shared many memories when we were young. One day, we walked together and she talked to me about her feelings. But at that time, I was just a student, so I rejected her. Now she is married. I miss her every day but it's too late, I hope she will be happy every day.",
        answer2: "I am from Hanoi, the capital of Vietnam. Now I am working in a city far from Hanoi. In Hanoi, I had an old friend. She still lives there. We shared many memories when we were young. One day, we walked together and she told me how she felt. But at that time, I was just a student, so I didn't agree with her. Now she is married. I miss her a lot, but it is too late. I hope she is happy every day."
    },
    {
        question: "What do you like doing with your friends?",
        answer1: "I like to go to beach with my friend, I really like the beach and my friends are same, at there I can enjoy the fresh air, listen the sound of the waves, we usually go there at the weekend and watch sunset together then go to cinema to watch action film, it helps us relax and feel better after along working week.",
        answer2: "I like to listen to music with my friends. When we have free time, we enjoy our favorite songs together. Music helps us relax and forget about stress. Sometimes, we also talk about the songs we like."
    },
    {
        question: "What do you like doing in your free time?",
        answer1: "I like to go to beach in my free time, I really like the beach and my friends are same, at there I can enjoy the fresh air, listen the sound of the waves, we usually go there at the weekend and watch sunset together then go to cinema to watch action film, it helps us relax and feel better after along working week.",
        answer2: "I have always been a music lover, so whenever I have free time, I just put on my earphones and enjoy my favorite tunes. To me, music provides an escape from the busy life as it is both relaxing and therapeutic."
    },
    {
        question: "What did you do last night / on the weekend?",
        answer1: "I went to the beach with my friend last night, I really like the beach and my friends are same, at there I can enjoy the fresh air, listen the sound of the waves, we usually go there at the weekend and watch sunset together then go to cinema to watch action film, it helps us relax and feel better after along working week.",
        answer2: "Last weekend, I listened to music in my free time. I put on my earphones and enjoyed my favorite songs. Music helps me relax and forget about the busy day. It's a good way for me to unwind after a long week."
    },
    {
        question: "Please tell me about your first school?",
        answer1: "To be honest, I don't remember much about my first school. But as far as I can remember, its name was Nguyen Truong To, in Hanoi. Every day, my mother took me to school. That school brings back many memories — of my teachers, my friends, and the first steps of my learning journey.",
        answer2: "My first school was a small school in my hometown. It was near my house, so I walked there every day. The teachers were kind, and I had many friends. I liked learning there, especially playing games during break time. I was very happy in that school."
    },
    {
        question: "Describe the room you are in?",
        answer1: "I am in a big room with about forty people. We are taking an English exam. This room has about ten desks and ten computers. It also has four fans and one air conditioner. I'm very happy to be here because I have prepared for this exam for a long time. I hope I will get a high score today.",
        answer2: "I am in a quite big room which is about 40 square meters with white walls. This room is equipped with 50 desks, 4 fans and 2 conditioners. I and other candidates are taking our exam on the computers. There are 3 supervisors who will help in case something goes wrong. The atmosphere in this room is fairly stressful."
    },
    {
        question: "Describe your journey here today?",
        answer1: "I'm happy to tell you about my journey here today. I got up at around six o'clock and had breakfast. Then, I went to the Aptis testing center to take the Aptis General test. Because the testing center is near my home, I walked here by myself. And now, I'm talking to you about my journey today. I hope I will get a high score on this test.",
        answer2: "Today, I came here by motorbike with my friend. It's very fast and I won't be late for exam... But it only takes 15 minutes to arrive here. It is a nice day. I both feel happy and worried for exam today."
    },
    {
        question: "What are you wearing today?",
        answer1: "Well I'm not really the fashionable type. Today I'm wearing a red jacket and a white jeans, I like red jacket because I really like red color, I don't know white but I feel very comfortable when I wearing red color, in that color it always make me relax and feel better every day.",
        answer2: "Today, I'm wearing a blue t-shirt and a pair of jeans. It's a simple outfit because I'm just at home today. I also have on my comfortable sneakers. I like to wear something easy and casual on regular days."
    },
    {
        question: "When do you feel tired?",
        answer1: "Well, this is a very good question. It brings back many memories of my past. I don't feel tired when I work hard, but I do feel tired when I think about one person — my old friend. Now we live in different city. When I was young, she liked me, but I rejected her. Now she is married, and I always miss her whenever someone reminds me of her. At those times, I feel like my heart is truly tired.",
        answer2: "I feel tired at the end of the day, especially after working or studying for a long time. When I have a lot of tasks to do, I get tired easily. I also feel tired when I don't sleep well the night before. That's when I need to rest or take a break."
    },
    {
        question: "Describe a typical Vietnamese meal?",
        answer1: "A typical Vietnamese meal includes rice, vegetables, meat or fish, and soup. Rice is the main dish and is eaten every day. The food is shared by everyone at the table. People use chopsticks and eat together as a family. It's not just about eating, but also about spending time and talking with each other.",
        answer2: "A typical Vietnamese meal usually includes rice, a soup, and several dishes. The dishes are often made with vegetables, meat, or fish. For example, a common meal might be rice with grilled pork, pickled vegetables, and a bowl of clear soup. We also often eat with fish sauce, which adds flavor to the meal. It's fresh, tasty, and balanced."
    },
    {
        question: "Describe your typical day?",
        answer1: "I usually wake up at 6 o'clock. I eat breakfast, then go to work. I usually have lunch with my friends in the office and continue working in the afternoon. In the evening, I really like listening to music or reading a book. I go to bed around 10 p.m. This habit helps me stay healthy and happy every day.",
        answer2: "My typical day starts early in the morning. I wake up, have breakfast, and then go to work or school. During the day, I focus on my tasks and take short breaks. In the evening, I relax by watching TV or reading a book. After dinner, I spend time with my family or friends before going to bed. It's a simple but busy routine."
    },
    {
        question: "What do you like to do in your free time?",
        answer1: "In my free time, I really like listening to music. It helps me relax and feel better after a long day. I usually listen to music on my phone using Youtube. I like pop music the most, but sometimes I also enjoy piano music. Music is good because it makes me happy every day.",
        answer2: "I have always been a music lover, so whenever I have free time, I just put on my earphones and enjoy my favorite tunes. To me, music provides an escape from the busy life as it is both relaxing and therapeutic."
    },
    {
        question: "Describe your favorite places",
        answer1: "My favorite places is the beach. I really like going to the beach to relax, enjoy the fresh air, and listen to the sound of the waves. I usually go with my friends, and watch the sunset together. Being at the beach always makes me happy.",
        answer2: "There are a lot of places I like but my favorite place is Nha Trang. I think it is the most beautiful city in Viet Nam with a beautiful beach. I love to be there for a long time as I can rest softly and I have a good time to play sea sports and eat seafood. Nha Trang is a great place to make new inspiration and relax."
    },
    {
        question: "Tell me about the last time you talked with your mother",
        answer1: "Well, I really like this question, The last time I talked with my mother was this morning. We had breakfast together and chatted about my future, she gave me some advice about my career plans. I always feel happy when I talk to her. I hope my mother will be with me forever.",
        answer2: "The last time I talked to my mother was yesterday. We chatted on the phone for about 20 minutes. She asked me how I was doing and if I had any plans for the weekend. We also talked about family and shared some news. It was a nice conversation, and it made me feel happy."
    },
    {
        question: "People like sport in your country",
        answer1: "Yes, people in my country really like sports. The most popular sport is football. Many people play football in the parks or watch it on TV. Every day, there are many people playing sports at the football field near my house. Some people also like swimming or running. I think sport helps us stay healthy and make friends.",
        answer2: "Yes, people in my country really love sports. Football is the most popular sport, and many people watch the matches or play it in their free time. Besides football, badminton and volleyball are also common. Sports bring people together, and they help everyone stay healthy and active."
    },
    {
        question: "What are you looking for in your new house?",
        answer1: "Today, I want to talk about my dream house. My house will have three floors. The first floor will have a living room and a kitchen. The living room, I put a sofa and a large television to my family will watch TV together in the evening. My bedroom which I paint blue because it's my favorite color. I will raise vegetables and flowers in the garden. I hope it will be real in the future.",
        answer2: "In my new house, I want a big kitchen where I can cook with my family. I also want a cozy living room with a comfortable sofa to relax. My bedroom will be quiet and peaceful, with a big bed and some plants. I want a small garden outside to grow flowers and trees. I look forward to having a place like this."
    },
    {
        question: "Why are you learning English?",
        answer1: "As you know, nowadays English is a popular language in the world. Therefore, I need to improve my English because of two main reasons. Firstly, I want to get a better job in the future. When I have a English certificate, I can apply to the company with a high salary. Secondly, I want to travel around the world and have a foreign husband. With the reasons I have mentioned above, I believe that English is very important for me.",
        answer2: "I am learning English because it is useful. First, I want to find a good job that needs English. Second, I like to travel, and speaking English will help me talk to people in other countries. I also want to understand movies and books in English, so learning the language is important for me."
    },
    {
        question: "Describe your job",
        answer1: "I am a teacher. I teach English at a school. My job is to help students learn new things, like vocabulary, grammar, and speaking skills. I also prepare lessons, give tests, and grade students' work. I enjoy my job because I like helping students improve and seeing them succeed.",
        answer2: "Now, I'm an auditor. I work at Deloitte. My main responsibility is to communicate with the customer to obtain the documentation, audit evidence. Then, I and members of my team discuss together to expose the conclusion about the financial statement whether disclose true and fairly. I love my job very much because it helps me to improve my value every day."
    },
    {
        question: "What is the food like in your country?",
        answer1: "There are many traditional and delicious foods in Vietnam but I think the most famous food is Pho. It has become the must-try dish on VN for any visitors. It's tasty, cheap and available at all hours. The specialty of the food is the broth. It is made by stewing the bones of cows and pigs for a long time in a large pot. I love Pho very much so I can eat every day.",
        answer2: "In Vietnam, we have many kinds of food. Rice is a very important part of our meals. We often eat rice with vegetables, meat, and soup. One of the most popular dishes is Pho, a noodle soup with beef or chicken. It is very tasty, and you can find it anywhere. People in Vietnam also enjoy fresh fruits and drinks like iced tea."
    },
    {
        question: "When do you feel stressed?",
        answer1: "Communication with foreigners is the thing that I find most stressful. Because I do not have good use of English to speak fluently and Lack of vocabulary & confidence. I understand fully my job's requirement of English Fluency; I remind myself of learning to spend more time looking for some interactive & visually engaging. Hopefully, in the next few months, I will no longer get stressed in that situation.",
        answer2: "I feel stressed when I have too much work to do or when I have to meet deadlines. I also get stressed when I can't find the right words to say in English. To reduce stress, I try to take a break and relax by listening to music or taking a walk."
    },
    {
        question: "Tell me why you are interested in travel?",
        answer1: "I love traveling because it helps me relax and feel happy. When I travel, I can visit beautiful places, see new things, and meet new people. I also enjoy trying delicious food from different places. Traveling helps me forget about work or stress. It makes me feel better and gives me energy. That's why I enjoy traveling so much.",
        answer2: "When I feel tired, I am going to travel with my family or my friends because it helps me to relax and recharge my energy. I will go to the beautiful place and fresh air. I will eat the traditional and delicious food. I also take part in the activities at that place. In conclusion, I love traveling so much."
    },
    {
        question: "Favorite book in your country?",
        answer1: "My favorite book in my country is Mắt Biếc by Nguyễn Nhật Ánh. It's a beautiful story about childhood, love, and friendship. The main character is a boy who has a big love for a girl, and the book talks about his memories of growing up. Many people in my country love this book because it reminds them of their own childhood and dreams.",
        answer2: "In my country, the most popular books are fiction. Many people, from teenagers to adults, like reading novels. These books have many interesting stories. Besides novels, comics are also very popular, especially with children. Some adults also like to read self-help books to improve themselves. In general, people in my country love reading books to relax and learn new things."
    },
];

let currentIndex = 0;
let recognition = null;
let isRecording = false;
let hasRecorded = false;
let finalTranscript = '';
let recordTimerInterval = null;
let recordTimeLeft = 30;
let mediaRecorder = null;
let audioChunks = [];
let audioURL = null;
let micStream = null;

function renderQuestion() {
    const q = questions[currentIndex];
    const total = questions.length;

    document.getElementById('questionInput').value = currentIndex + 1;
    document.getElementById('questionTotal').textContent = total;
    document.getElementById('questionText').textContent = q.question;
    document.getElementById('transcriptBox').innerHTML = '<span class="placeholder-text">Your speech will appear here...</span>';
    finalTranscript = '';
    hasRecorded = false;

    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        progressBar.style.width = (((currentIndex + 1) / total) * 100) + '%';
    }

    stopRecording();
    stopReading();
    updateRecordBtn(false);
    hideAudioPlayer();
    hideAnswerBoxes();
    setScoreBtnVisible(false);

    document.getElementById('backButton').disabled = currentIndex === 0;
    document.getElementById('nextButton').disabled = currentIndex === questions.length - 1;
}

function updateRecordBtn(recording) {
    const btn = document.getElementById('recordBtn');
    if (recording) {
        btn.innerHTML = `<i class="bi bi-stop-circle-fill"></i> Stop (${recordTimeLeft}s)`;
        btn.classList.remove('btn-danger', 'btn-warning');
        btn.classList.add('btn-secondary');
    } else if (hasRecorded) {
        btn.innerHTML = '<i class="bi bi-arrow-counterclockwise"></i> Ghi âm lại';
        btn.classList.remove('btn-secondary', 'btn-danger');
        btn.classList.add('btn-warning');
    } else {
        btn.innerHTML = '<i class="bi bi-mic-fill"></i> Record';
        btn.classList.remove('btn-secondary', 'btn-warning');
        btn.classList.add('btn-danger');
    }
}

async function startRecording() {
    hideAudioPlayer();
    finalTranscript = '';
    document.getElementById('transcriptBox').innerHTML = '<span class="listening-pulse">Listening...</span>';

    // --- MediaRecorder: detect MIME type (webm cho desktop/Android, mp4 cho iOS) ---
    try {
        micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        audioChunks = [];

        const mimeType = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/ogg']
            .find(t => MediaRecorder.isTypeSupported(t)) || '';
        mediaRecorder = new MediaRecorder(micStream, mimeType ? { mimeType } : {});

        mediaRecorder.ondataavailable = function(e) {
            if (e.data.size > 0) audioChunks.push(e.data);
        };

        mediaRecorder.onstop = function() {
            const blobType = mediaRecorder.mimeType || 'audio/webm';
            const blob = new Blob(audioChunks, { type: blobType });
            if (audioURL) URL.revokeObjectURL(audioURL);
            audioURL = URL.createObjectURL(blob);
            const player = document.getElementById('audioPlayer');
            player.src = audioURL;
            document.getElementById('audioPlayerSection').style.display = 'block';
            if (micStream) { micStream.getTracks().forEach(t => t.stop()); micStream = null; }
        };

        mediaRecorder.start();
    } catch (err) {
        console.warn('MediaRecorder error:', err);
        document.getElementById('transcriptBox').innerHTML =
            '<span class="error-text">Không thể truy cập microphone. Vui lòng cấp quyền và thử lại.</span>';
        return;
    }

    // --- SpeechRecognition ---
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
        recognition = new SpeechRecognition();
        recognition.lang = 'en-US';
        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onresult = function(event) {
            let interim = '';
            finalTranscript = '';
            for (let i = 0; i < event.results.length; i++) {
                const transcript = event.results[i][0].transcript;
                if (event.results[i].isFinal) {
                    finalTranscript += transcript + ' ';
                } else {
                    interim += transcript;
                }
            }
            document.getElementById('transcriptBox').innerHTML =
                '<span class="final-text">' + finalTranscript + '</span>' +
                '<span class="interim-text">' + interim + '</span>';
        };

        recognition.onerror = function(event) {
            if (event.error === 'not-allowed') {
                document.getElementById('transcriptBox').innerHTML =
                    '<span class="error-text">Microphone bị từ chối. Vui lòng cấp quyền trong cài đặt trình duyệt.</span>';
                return;
            }
            if (event.error !== 'no-speech') {
                console.warn('Speech recognition error:', event.error);
            }
        };

        recognition.onend = function() {
            if (isRecording) {
                // Delay nhỏ để tránh crash vòng lặp trên iOS Safari
                setTimeout(function() {
                    try { recognition.start(); } catch(e) {}
                }, 100);
            }
        };

        try { recognition.start(); } catch(e) {}
    } else {
        document.getElementById('transcriptBox').innerHTML =
            '<span class="interim-text">Trình duyệt không hỗ trợ nhận diện giọng nói. Bạn vẫn có thể ghi âm và nghe lại.</span>';
    }

    isRecording = true;
    recordTimeLeft = 30;
    updateRecordBtn(true);

    recordTimerInterval = setInterval(function () {
        recordTimeLeft--;
        updateRecordBtn(true);
        if (recordTimeLeft <= 0) {
            hasRecorded = true;
            stopRecording();
            updateRecordBtn(false);
            setScoreBtnVisible(true);
        }
    }, 1000);
}

function stopRecording() {
    clearInterval(recordTimerInterval);
    recordTimerInterval = null;
    isRecording = false;
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop();
    }
    mediaRecorder = null;
    if (recognition) {
        recognition.stop();
        recognition = null;
    }
}

function hideAudioPlayer() {
    const section = document.getElementById('audioPlayerSection');
    if (section) section.style.display = 'none';
    const player = document.getElementById('audioPlayer');
    if (player) player.src = '';
    if (audioURL) {
        URL.revokeObjectURL(audioURL);
        audioURL = null;
    }
}

function toggleRecording() {
    if (isRecording) {
        hasRecorded = true;
        stopRecording();
        updateRecordBtn(false);
        setScoreBtnVisible(true);
    } else if (hasRecorded) {
        // Ghi âm lại: reset rồi bắt đầu mới
        hideAudioPlayer();
        setScoreBtnVisible(false);
        document.getElementById('transcriptBox').innerHTML = '<span class="placeholder-text">Your speech will appear here...</span>';
        finalTranscript = '';
        hasRecorded = false;
        startRecording();
    } else {
        startRecording();
    }
}

function showAnswer(num) {
    const q = questions[currentIndex];
    const other = num === 1 ? 2 : 1;
    const box  = document.getElementById('answerBox'  + num);
    const text = document.getElementById('answerText' + num);
    const btn  = document.getElementById('answerBtn'  + num);

    // Close the other box first
    document.getElementById('answerBox'  + other).style.display = 'none';

    const isOpen = box.style.display === 'block';
    if (isOpen) {
        box.style.display = 'none';
    } else {
        text.textContent = num === 1 ? q.answer1 : q.answer2;
        box.style.display = 'block';
    }
}

function hideAnswerBoxes() {
    document.getElementById('answerBox1').style.display = 'none';
    document.getElementById('answerBox2').style.display = 'none';
    stopReading();
}

let currentReadingNum = null;

function toggleRead(num) {
    const btn = document.getElementById('readBtn' + num);
    if (currentReadingNum === num && window.speechSynthesis.speaking) {
        stopReading();
        return;
    }
    stopReading();
    const text = document.getElementById('answerText' + num).textContent.trim();
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;

    currentReadingNum = num;
    btn.innerHTML = '<i class="bi bi-stop-fill"></i> Dừng';
    btn.classList.add('reading');

    utterance.onend = function () {
        resetReadBtn(num);
        currentReadingNum = null;
    };
    utterance.onerror = function () {
        resetReadBtn(num);
        currentReadingNum = null;
    };

    window.speechSynthesis.speak(utterance);
}

function stopReading() {
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }
    if (currentReadingNum !== null) {
        resetReadBtn(currentReadingNum);
        currentReadingNum = null;
    }
}

function resetReadBtn(num) {
    const btn = document.getElementById('readBtn' + num);
    if (btn) {
        btn.innerHTML = '<i class="bi bi-volume-up-fill"></i> Đọc';
        btn.classList.remove('reading');
    }
}

function setScoreBtnVisible(visible) {
    document.getElementById('scoreBtn').style.display = visible ? 'inline-flex' : 'none';
}

async function scoreAnswer() {
    const transcript = document.getElementById('transcriptBox').textContent.trim();
    if (!transcript || transcript === 'Your speech will appear here...') {
        alert('Chưa có nội dung ghi âm để chấm điểm.');
        return;
    }

    const question = questions[currentIndex].question;
    const prompt = `Hãy chấm điểm APTIS Speaking Part 1 với câu hỏi và câu trả lời như sau:\n\nCâu hỏi: ${question}\nCâu trả lời: ${transcript}\n\nBand chấm của APTIS từ A0 đến C1. Hãy đánh giá band và giải thích ngắn gọn lý do (độ lưu loát, từ vựng, ngữ pháp, nội dung).\n\nLưu ý khi chấm: đây là học viên đang luyện tập, không phải người bản ngữ, nên hãy chấm khoan dung và mang tính khích lệ. Tập trung vào khả năng truyền đạt ý tưởng có rõ ràng hay không, đừng trừ điểm nặng vì các lỗi ngữ pháp/phát âm nhỏ không ảnh hưởng tới việc hiểu nội dung. Nếu phân vân giữa 2 band liền kề, hãy chọn band cao hơn.`;

    const btn = document.getElementById('scoreBtn');
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner-border spinner-border-sm me-1"></span>Đang chấm...';

    try {
        const res = await fetch('/ask', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question: prompt })
        });
        const data = await res.json();
        const result = data.answer || data.error || 'Không nhận được kết quả.';

        document.getElementById('scoreModalBody').textContent = result;
        new bootstrap.Modal(document.getElementById('scoreModal')).show();
    } catch (err) {
        document.getElementById('scoreModalBody').textContent = 'Lỗi kết nối. Vui lòng thử lại.';
        new bootstrap.Modal(document.getElementById('scoreModal')).show();
    } finally {
        btn.disabled = false;
        btn.innerHTML = '<i class="bi bi-star-fill me-1"></i>Chấm điểm';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    renderQuestion();

    document.getElementById('recordBtn').addEventListener('click', toggleRecording);

    document.getElementById('questionInput').addEventListener('change', function () {
        const val = parseInt(this.value);
        if (!isNaN(val) && val >= 1 && val <= questions.length) {
            currentIndex = val - 1;
            renderQuestion();
        } else {
            this.value = currentIndex + 1;
        }
    });

    document.getElementById('backButton').addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            renderQuestion();
        }
    });

    document.getElementById('nextButton').addEventListener('click', function () {
        if (currentIndex < questions.length - 1) {
            currentIndex++;
            renderQuestion();
        }
    });

});
