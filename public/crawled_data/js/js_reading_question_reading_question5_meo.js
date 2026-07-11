// ==========================================
// 1. DỮ LIỆU OPTIONS (Cấu trúc mảng riêng)
// ==========================================
const options_1 = [
    "Changing the definition of mountain",
    "The unique feeling of achievement",
    "Publicity of achievement",
    "The mistake of misplaced priorities",
    "Worrying connections",
    "Focus on stability",
    "Intimate relationships",
];
const question5_keyword_1 ='<strong>Mẹo nhớ Keyword:</strong> mountain → achievement → Publicity → mistake → Worrying → stability → relationships.';
const question5_meo_1 = "<strong>Nhớ theo đoạn văn:</strong> Ngọn núi (<strong>mountain</strong>) là biểu tượng của thành tựu (<strong>achievement</strong>), nhưng việc phô trương thành tích leo núi để có danh tiếng (<strong>publicity</strong>) là một sai lầm (<strong>mistake</strong>). Điều này dẫn đến lo ngại (<strong>worrying</strong>) và làm tâm lý dễ mất ổn định (<strong>stability</strong>). Từ đó, hiềm khích có thể nảy sinh trong các mối quan hệ (<strong>relationships</strong>) giữa những người leo núi. Tốt nhất là giữ bình tĩnh và không khoe khoang.";


const options_2 = [
    "A way of life now out date",
    "Benefits for employees",
    "Undesirable finalcial consequences",
    "Unforeseen challenges for employees",
    "Difficult to change old habits",
    "Unfair for some people",
    "Alternative solutions worth considering",
];

const question5_keyword_2 ='<strong>Mẹo nhớ Keyword:</strong> out date → Benefits → Undesirable → challenges → Difficult → Unfair → solutions.';
const question5_meo_2 = "<strong>Nhớ theo đoạn văn:</strong> Phương pháp làm việc cũ đã <strong>lỗi thời (out date)</strong>, nhưng <strong>lợi ích (Benefits)</strong> cho nhân viên vẫn quan trọng. Tuy nhiên, có thể có <strong>hệ quả không mong muốn (Undesirable)</strong> và <strong>thách thức (challenges)</strong> khi thay đổi. Điều này khiến nhân viên cảm thấy <strong>khó khăn (Difficult)</strong> và <strong>không công bằng (Unfair)</strong>. Các <strong>giải pháp thay thế (solutions)</strong> có thể giúp cải thiện.";

const options_3 = [
    "Redefining business models with technology",
    "Enhancing productivity through automation",
    "Promoting digital skills training",
    "Over-reliance on automated systems",
    "Concerns about cybersecurity risks",
    "Building inclusive digital ecosystems",
    "Focusing on ethical technology development",
];

const question5_keyword_3 = '<strong>Mẹo nhớ Keyword:</strong> Redefining → productivity → digital skills → Over-reliance → risks → Building → development.';
const question5_meo_3 = "<strong>Nhớ theo đoạn văn:</strong> Việc <strong>định nghĩa lại (Redefining)</strong> mô hình kinh doanh bằng công nghệ giúp <strong>tăng năng suất (productivity)</strong>, đồng thời thúc đẩy <strong>kỹ năng số (digital skills)</strong>. Tuy nhiên, <strong>quá phụ thuộc (Over-reliance)</strong> vào hệ thống tự động có thể gây ra <strong>rủi ro (risks)</strong>. Việc <strong>xây dựng (Building)</strong> các hệ sinh thái số bao gồm tất cả là bước quan trọng trong quá trình <strong>phát triển (development)</strong> công nghệ có đạo đức.";

const options_4 = [
    "Redefining holistic health approaches",
    "Promoting mental health awareness",
    "Encouraging community fitness programs",
    "Overemphasis on trendy diets",
    "Concerns about wellness misinformation",
    "Building supportive health communities",
    "Focusing on sustainable lifestyle changes",
];
const question5_keyword_4 = '<strong>Mẹo nhớ Keyword:</strong> Redefining → Promoting mental → fitness → Overemphasis → misinformation → health communities → lifestyle changes.';
const question5_meo_4 = "<strong>Nhớ theo đoạn văn:</strong> Định nghĩa lại (<strong>Redefining</strong>) chăm sóc sức khỏe, quảng bá sức khỏe tâm thần (<strong>Promoting mental</strong>), thể dục cộng đồng (<strong>fitness</strong>), quá nhấn mạnh (<strong>Overemphasis</strong>) vào chế độ ăn kiêng, thông tin sai lệch (<strong>misinformation</strong>), xây dựng cộng đồng chăm sóc sức khỏe (<strong>health communities</strong>) và thay đổi lối sống bền vững (<strong>lifestyle changes</strong>).";


// 5. Câu 5 - Đề mới tháng 9 -- cập nhật 18/9
const options_5 = [

    "Breaking New Ground in Ancient Mathematics",
    "Trailblazing Computer Science",
    "Driving Space Exploration Forward",
    "Transforming Geometry and Motion",
    "Connecting Symmetry to Physics",
    "Encouraging Diversity in STEM",
    "Breaking Through Educational Barriers",
];


const question5_keyword_5 = 'Mathematics → Computer → Space → Motion → Connecting → Diversity → Educational';
const question5_meo_5 = "<strong>Nhớ theo đoạn văn:</strong> Toán học (<strong>Mathematics</strong>) là nền tảng cho khoa học máy tính (<strong>Computer</strong>) và khám phá không gian (<strong>Space</strong>), giúp chúng ta hiểu về chuyển động (<strong>Motion</strong>) và kết nối (<strong>Connecting</strong>) các kiến thức đa dạng (<strong>Diversity</strong>), từ đó phát triển giáo dục (<strong>Educational</strong>) cho tương lai.";

// 5. Câu 5 - Đề mới tháng 9 -- cập nhật 22/9
const options_6 = [

    "Redefining Human-Technology Interaction",
    "Boosting Productivity Through Intelligent Automation",
    "Promoting Technology-Based Education Programs",
    "Overreliance on Digital Interfaces",
    "Concerns About Disparities in Access to Technology",
    "Building Innovative Tech Communities",
    "Focusing on Sustainable Digital Solutions"
];





const question5_keyword_6 = '<strong>Mẹo nhớ Keyword:</strong> Human-Technology → Intelligent Automation → Education → Digital Interfaces → Access to Technology → Building Innovative → Digital Solutions.';
const question5_meo_6 = "<strong>Nhớ theo đoạn văn:</strong> Công nghệ con người (<strong>Human-Technology</strong>) kết hợp tự động hóa thông minh (<strong>Intelligent Automation</strong>) để cải cách giáo dục (<strong>Education</strong>), tạo ra giao diện kỹ thuật số (<strong>Digital Interfaces</strong>), mang đến sự tiếp cận công nghệ (<strong>Access to Technology</strong>), xây dựng giải pháp sáng tạo (<strong>Building Innovative</strong>) và giải pháp kỹ thuật số (<strong>Digital Solutions</strong>).";

// 5. Câu 5 - Đề mới tháng 10 -- cập nhật 12/10
const options_7 = [

    "Redefining Global Cultural Understanding",
    "Encouraging Cross-Cultural Festivals",
    "Promoting Language Exchange Programs",
    "Overemphasis on Commercial Tourism",
    "Concerns About Cultural Preservation",
    "Building Mutual Respect Among Communities",
    "Focusing on Authentic Cultural Experiences"
];

// Thêm nội dung vào 15/3/2026

const question5_keyword_7 = '<strong>Mẹo nhớ Keyword:</strong> Global → Festivals → Language → Overemphasis → Preservation → Building → Authentic.';

const question5_meo_7 = "<strong>Nhớ theo đoạn văn:</strong> Hiểu biết toàn cầu (<strong>Global</strong>) thúc đẩy các lễ hội văn hóa (<strong>Festivals</strong>) và trao đổi ngôn ngữ (<strong>Language</strong>), nhưng đôi khi có sự tập trung quá mức vào du lịch thương mại (<strong>Overemphasis</strong>). Vì thế, cần quan tâm đến việc bảo tồn văn hóa (<strong>Preservation</strong>), xây dựng sự tôn trọng lẫn nhau (<strong>Building</strong>) và hướng đến trải nghiệm văn hóa chân thực (<strong>Authentic</strong>).";


// 5. Câu 5 - Đề mới tháng 10 -- cập nhật 12/10
const options_8 = [

    "Redefining Sustainable City Planning",
    "Encouraging Green Spaces in Urban Areas",
    "Supporting Affordable Housing Projects",
    "Overreliance on High-Rise Buildings",
    "Concerns About Traffic Congestion",
    "Strengthening Community Engagement",
    "Focusing on Renewable Energy Source"
];



const question5_keyword_8 = '<strong>Mẹo nhớ Keyword:</strong> Sustainable → Urban Areas → Housing Projects → Buildings → Traffic Congestion → Community → Energy Source.';
const question5_meo_8 = "<strong>Nhớ theo đoạn văn:</strong> Quy hoạch thành phố bền vững (<strong>Sustainable</strong>) bắt đầu từ việc mở rộng không gian xanh trong khu đô thị (<strong>Urban Areas</strong>), hỗ trợ các dự án nhà ở hợp lý (<strong>Housing Projects</strong>), hạn chế sự phụ thuộc quá mức vào các tòa nhà cao tầng (<strong>Buildings</strong>). Đồng thời, cần giải quyết vấn đề tắc nghẽn giao thông (<strong>Traffic Congestion</strong>), tăng cường sự gắn kết cộng đồng (<strong>Community</strong>) và tập trung vào việc sử dụng nguồn năng lượng tái tạo (<strong>Energy Source</strong>).";


// 5. Câu 5 - Đề mới tháng 10 -- cập nhật 12/10
const options_9 = [

    "Redefining Leisure in the Digital age",
    "Enhancing Connectivity with Mobile Apps",
    "Promoting Essential Digital Literacy",
    "Risks of Excessive Screen-Based Entertainment",
    "Concerns About Data Privacy",
    "Building Inclusive and Respectful Online Communities",
    "Prioritize human-friendly designs"
];
// Thêm nội dung vào 15/3/2026

const question5_keyword_9 = '<strong>Mẹo nhớ Keyword:</strong> Digital Age → Mobile Apps → Digital Literacy → Risks → Data Privacy → Online Communities → Prioritize.';

const question5_meo_9 = "<strong>Nhớ theo đoạn văn:</strong> Trong kỷ nguyên số (<strong>Digital Age</strong>), con người kết nối qua các ứng dụng di động (<strong>Mobile Apps</strong>) và cần hiểu biết kỹ thuật số cơ bản (<strong>Digital Literacy</strong>). Tuy nhiên, việc sử dụng quá mức mang lại nhiều rủi ro (<strong>Risks</strong>) và lo ngại về quyền riêng tư dữ liệu (<strong>Data Privacy</strong>). Vì vậy, cần xây dựng cộng đồng mạng lành mạnh (<strong>Online Communities</strong>) và ưu tiên thiết kế thân thiện, hướng đến con người (<strong>Prioritize</strong>).";




// 5. Câu 5 - Đề mới tháng 10 -- cập nhật 11/11
const options_10 = [

    "Achievements obscured by gender",
    "Recognizing the accomplishments of pioneering women",
    "Men are unfairly given credit",
    "A long career demonstrates exceptional ability",
    "The labels can change perceptions",
    "Striving to create gender balance",
    "Uniformity can be a disadvantage"
];


const question5_keyword_10 = '<strong>Mẹo nhớ Keyword:</strong> Obscured → Pioneering → Unfairly → A long career → Labels → Gender balance → Disadvantage.';

const question5_meo_10 = "<strong>Nhớ theo đoạn văn:</strong> Đôi khi, thành tựu bị <strong>che mờ (Obscured)</strong> bởi định kiến giới. Những phụ nữ <strong>tiên phong (Pioneering)</strong> thường gặp khó khăn trong việc được công nhận, trong khi đàn ông đôi khi được khen <strong>không công bằng (Unfairly)</strong>. <strong>Một sự nghiệp dài (A long career)</strong> thể hiện năng lực thật sự, nhưng <strong>nhãn mác (Labels)</strong> xã hội có thể làm sai lệch cách nhìn. Cần thúc đẩy <strong>cân bằng giới (Gender balance)</strong>, dù sự <strong>đồng nhất tuyệt đối</strong> đôi khi lại là <strong>bất lợi (Disadvantage)</strong>.";


// 6. Câu 6 - Đề mới tháng 10 (Mountain) -- cập nhật cho câu 11
const options_11 = [

    "Changing the definition of mountain",
    "The unique feeling of achievement",
    "Publicity of achievement",
    "The wrong priority",
    "A disturbing relevant",
    "Focus on sustainability",
    "A more intimate relationship"
];


const question5_keyword_11 = '<strong>Mẹo nhớ Keyword:</strong> Changing definition → Unique feeling → Publicity → Wrong priority → Disturbing relevant → Sustainability → Intimate relationship.';

const question5_meo_11 = "<strong>Nhớ theo đoạn văn:</strong> Chúng ta bắt đầu bằng việc <strong>thay đổi định nghĩa (Changing definition)</strong> về núi, tìm kiếm <strong>cảm giác thành tựu độc nhất (Unique feeling)</strong>. Nhưng sự hào nhoáng dẫn đến việc <strong>công khai thành tích (Publicity)</strong> và đặt ra <strong>ưu tiên sai lầm (Wrong priority)</strong>. Điều này tạo ra một thực tế <strong>liên quan đáng ngại (Disturbing relevant)</strong>. Giờ đây, ta phải <strong>tập trung vào bền vững (Focus on sustainability)</strong> để xây dựng một <strong>mối quan hệ thân mật hơn (Intimate relationship)</strong> với thiên nhiên.";




// ==========================================
// 3. GOM NHÓM DỮ LIỆU (Để code xử lý tự động)
// ==========================================
const all_options = [options_1, options_2, options_3, options_4, options_5, options_6, options_7, options_8, options_9, options_10, options_11];

const all_hints = [
    { keyword: question5_keyword_1, meo: question5_meo_1 },
    { keyword: question5_keyword_2, meo: question5_meo_2 },
    { keyword: question5_keyword_3, meo: question5_meo_3 },
    { keyword: question5_keyword_4, meo: question5_meo_4 },
    { keyword: question5_keyword_5, meo: question5_meo_5 },
    { keyword: question5_keyword_6, meo: question5_meo_6 },
    { keyword: question5_keyword_7, meo: question5_meo_7 },
    { keyword: question5_keyword_8, meo: question5_meo_8 },
    { keyword: question5_keyword_9, meo: question5_meo_9 },
    { keyword: question5_keyword_10, meo: question5_meo_10 },
    { keyword: question5_keyword_11, meo: question5_meo_11 },
];

const topic_name = {
    topic_1: "Mountain", // Bộ đề 16
    topic_2: "Four-Day Workweek", // Bộ đề 17
    topic_3: "Digital transformation (Tech Forward)", // Bộ đề 18
    topic_4: "Wellness trend", // Bộ đề 19
    topic_5: "Women mathematicians", // Bộ đề 20
    topic_6: "Technology advances",  // Bộ đề 21
    topic_7: "Cultural Exchange", // Bộ đề 22
    topic_8: "Urban Development", // Bộ đề 23
    topic_9: "Digital innovation", // Bộ đề 24
    topic_10: "Women mathematicians (phiên bản 2)",  // Bộ đề 25
    topic_11: "Mountain (phiên bản 2)",  // Bộ đề 26
};

// ==========================================
// 4. LOGIC XỬ LÝ (Không thay đổi)
// ==========================================
let currentIndex = 0;
const listElement = document.getElementById('sortable-list');
const answerElement = document.getElementById('answer-column');
const titleElement = document.getElementById('practice-title');
const topicElement = document.getElementById('topic-name-display');
const modal = document.getElementById("hintModal");

new Sortable(listElement, {
    animation: 250,
    ghostClass: 'sortable-ghost'
});

function loadQuestion(index) {
    currentIndex = index;
    titleElement.innerText = `Reading Question 5: ${index + 1}/${all_options.length}`;
    const key = `topic_${index + 1}`;
    topicElement.innerText = topic_name[key] || "Unknown Topic";
    
    let shuffled = [...all_options[index]].sort(() => Math.random() - 0.5);
    listElement.innerHTML = "";
    answerElement.innerHTML = "";
    answerElement.style.display = "none";

    shuffled.forEach(text => {
        const li = document.createElement('li');
        li.className = 'sort-item';
        li.innerText = text;
        listElement.appendChild(li);
    });

    all_options[index].forEach(text => {
        const li = document.createElement('li');
        li.className = 'answer-item';
        li.innerText = text;
        answerElement.appendChild(li);
    });

    document.getElementById('btn-back').disabled = index === 0;
    document.getElementById('btn-next').disabled = index === all_options.length - 1;
}

document.getElementById('btn-check').onclick = function() {
    const items = listElement.querySelectorAll('.sort-item');
    const correctOrder = all_options[currentIndex];
    answerElement.style.display = "block"; 
    items.forEach((item, idx) => {
        if (item.innerText.trim() === correctOrder[idx]) {
            item.classList.remove('wrong');
            item.classList.add('correct');
        } else {
            item.classList.remove('correct');
            item.classList.add('wrong');
        }
    });
};

document.getElementById('btn-reset').onclick = function() {
    loadQuestion(currentIndex);
};

document.getElementById('btn-hint').onclick = function() {
    const currentHint = all_hints[currentIndex];
    if (currentHint) {
        document.getElementById('hint-content').innerHTML = `
            <p>${currentHint.keyword}</p>
            <p>${currentHint.meo}</p>
        `;
        modal.style.display = "block";
    }
};

document.querySelector('.close-modal').onclick = () => modal.style.display = "none";
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; };

document.getElementById('btn-next').onclick = () => {
    if (currentIndex < all_options.length - 1) loadQuestion(currentIndex + 1);
};
document.getElementById('btn-back').onclick = () => {
    if (currentIndex > 0) loadQuestion(currentIndex - 1);
};

loadQuestion(0);