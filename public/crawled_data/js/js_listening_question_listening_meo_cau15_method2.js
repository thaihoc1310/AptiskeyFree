// =======================
// DATA
// =======================
const meocau15_data = [
  {
    topic: "Music and Singer",
    correctanswer: "2010",
    key: "Ca sĩ sinh năm 2010",
    imgurl: "./images/meolisteningcau15/meocau1.png",
  },
  {
    topic: "The Local Central",
    correctanswer: "2011",
    key: "Trung tâm địa phương được xây năm 2011",
    imgurl: "./images/meolisteningcau15/meocau2.png",
  },
  {
    topic: "Urban Farming",
    correctanswer: "1020",
    key: "Ông nông dân có 10 vợ và 20 người con",
    imgurl: "./images/meolisteningcau15/meocau3.png",
  },
  {
    topic: "Information Technology",
    correctanswer: "2110",
    key: "Công nghệ thế kỷ 21 có nhiều người có thể gõ bàn phím máy tính bằng 10 ngón tay",
    imgurl: "./images/meolisteningcau15/meocau4.png",
  },
  {
    topic: "Art",
    correctanswer: "2101",
    key: "Nghệ sĩ 21 năm kinh nghiệm mà không vẽ được 1 bức tranh nào nên hồn.",
    imgurl: "./images/meolisteningcau15/meocau5.png",
  },
  {
    topic: "Politics",
    correctanswer: "0210",
    key: "Chính trị không (0) thể có 2 vua 1 nước nếu vậy sẽ không (0) tồn tại được.",
    imgurl: "./images/meolisteningcau15/meocau6.png",
  },
  {
    topic: "Community Design",
    correctanswer: "0120",
    key: "Tôi không (0) muốn thiết kế 1 ngôi nhà có 2 tầng mà không (0) có ban công.",
    imgurl: "./images/meolisteningcau15/meocau7.png",
  },
  {
    topic: "University",
    correctanswer: "0121",
    key: "Trường đại học không (0) có 1 sinh viên nào trong 2 năm liền, 1 năm sau thì phá sản.",
    imgurl: "./images/meolisteningcau15/meocau8.png",
  },
  {
    topic: "Subject and Beauty",
    correctanswer: "1202",
    key: "1 chàng trai tán 2 cô gái đẹp không (0) biết sao mà làm 2 người đều có bầu.",
    imgurl: "./images/meolisteningcau15/meocau9.png",
  },
  {
    topic: "Change in Workplace",
    correctanswer: "1201",
    key: "12 năm cống hiến cho công việc, nhưng không một (01) ai công nhận năng lực của tôi",
    imgurl: "./images/meolisteningcau15/meocau10.png",
  },
  {
    topic: "Actor",
    correctanswer: "1200",
    key: "Tìm thấy hóa thạch của một diễn viên thời cổ đại có niên đại 1200 năm",
    imgurl: "./images/meolisteningcau15/meocau11.png",
  },
  {
    topic: "Internet",
    correctanswer: "0200",
    key: "Tiền mạng internet của bạn không (0) phải 200k mà là miễn phí.",
    imgurl: "./images/meolisteningcau15/meocau12.png",
  },
  {
    topic: "Home schooling",
    correctanswer: "1220",
    key: "12 năm học chữ, 20 năm chưa chắc học được cuộc đời.",
    imgurl: "./images/meolisteningcau15/meocau13.png",
  }
  ,
  {
    topic: "Children and Teenagers with Technology",
    correctanswer: "0021",
    key: "Không (0) biết công nghệ thì không (0) thể lấy được vợ ở tuổi 21",
    imgurl: "./images/meolisteningcau15/meocau14.png",
  },
  {
    topic: "Environmental volunteer program",
    correctanswer: "0212",
    key: "không (0) thể có 2 chương trình tình nguyện về môi trường trong tháng 12.",
    imgurl: "./images/meolisteningcau15/meocau15.png",
  },
  {
    topic: "Local Culture diffirent",
    correctanswer: "2011",
    key: "2 năm qua, văn hóa địa phương không có 1 điểm khác, dù chỉ 1 chút.",
    imgurl: "./images/meolisteningcau15/meocau16.png",
  },
  {
    topic: "Work Business / Business and Culture",
    correctanswer: "1022",
    key: "1 công ty khởi nghiệp không (0) có vốn ban đầu, sau 2 năm mở được 2 chi nhánh.",
    imgurl: "./images/meolisteningcau15/meocau17.png",
  }
];

// =======================
// RENDER TABLE
// =======================
const tableBody = document.getElementById("meoTableBody");

meocau15_data.forEach((item, index) => {
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${item.topic}</td>
    <td><strong>${item.correctanswer}</strong></td>
    <td>
      <button class="btn btn-outline-primary btn-sm"
        onclick="showMeo(${index})">
        Xem mẹo
      </button>
    </td>
  `;

  tableBody.appendChild(tr);
});

// =======================
// MODAL FUNCTION
// =======================
function showMeo(index) {
  const item = meocau15_data[index];

  document.getElementById("meoModalTitle").innerText =
    `Mẹo: ${item.key}`;

  document.getElementById("meoModalImage").src =
    item.imgurl;

  const modal = new bootstrap.Modal(
    document.getElementById("meoModal")
  );
  modal.show();
}
