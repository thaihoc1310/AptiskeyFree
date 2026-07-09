// Re-uses the questions array from speaking_question4_practice.js
// Loaded after that script provides the `questions` global.

let openIndex = null;

function populateQuestions() {
    const tbody = document.getElementById('questionTableBody');

    questions.forEach((q, index) => {
        // Question row
        const row = document.createElement('tr');
        row.innerHTML = `
            <th scope="row" class="text-muted">${index + 1}</th>
            <td>${q.question}</td>
            <td class="text-center">
                <button class="btn btn-sm btn-outline-primary btn-ans" id="btn-${index}" onclick="showAnswer(${index})">
                    Xem đáp án
                </button>
            </td>
        `;
        tbody.appendChild(row);

        // Hidden inline answer row
        const ansRow = document.createElement('tr');
        ansRow.id = `ansRow-${index}`;
        ansRow.style.display = 'none';
        ansRow.innerHTML = `
            <td></td>
            <td colspan="2" style="padding: 0 12px 14px;">
                <div id="ansContent-${index}" class="answer-inline"></div>
            </td>
        `;
        tbody.appendChild(ansRow);
    });
}

function showAnswer(index) {
    const ansRow     = document.getElementById(`ansRow-${index}`);
    const ansContent = document.getElementById(`ansContent-${index}`);
    const btn        = document.getElementById(`btn-${index}`);

    const isSameOpen = openIndex === index;

    // Close current open
    if (openIndex !== null) {
        document.getElementById(`ansRow-${openIndex}`).style.display = 'none';
        document.getElementById(`btn-${openIndex}`).classList.remove('active');
        openIndex = null;
    }

    // Toggle off if same button clicked
    if (isSameOpen) return;

    // Open new answer
    ansContent.innerHTML = `<div class="answer-inline-label">Đáp án mẫu</div>${questions[index].answer1}`;
    ansRow.style.display = '';
    btn.classList.add('active');
    openIndex = index;

    ansRow.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

document.addEventListener('DOMContentLoaded', populateQuestions);
