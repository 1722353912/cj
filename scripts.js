const scores = [
    { course: "电工电子技术[4-64]", score: "78" },
    { course: "电气控制与PLC技术[4-64]", score: "90" },
    { course: "Linux操作系统[4-64]", score: "65" },
    { course: "大学体育（四）2022[1-16]", score: "81" },
    { course: "形势与政策（2022）[1-16]", score: "优" },
    { course: "大学生创新创业（二）[1-16]", score: "86" },
    { course: "网络安全技术与实训[4-64]", score: "89" },
    { course: "工业数据采集[4-64]", score: "70" },
    { course: "工业网络技术[4-64]", score: "71" },
    { course: "工业控制识图与制图[2-32]", score: "82" },
    { course: "大学体育（三）2023[1-16]", score: "79" },
    { course: "大学生职业规划与就业指导2022（二）[1-16]", score: "81" },
    { course: "识别技术及应用[4-64]", score: "74" },
    { course: "Web前端开发技术实训[2-32]", score: "92" },
    { course: "电气控制与PLC技术应用实训[2-32]", score: "94" },
    { course: "工业互联网算法应用[4-64]", score: "79" },
    { course: "工业数据采集与处理[2-32]", score: "89" }
];

const scoresBody = document.getElementById('scoresBody');

scores.forEach(score => {
    const row = document.createElement('tr');
    const courseCell = document.createElement('td');
    const scoreCell = document.createElement('td');
    
    courseCell.textContent = score.course;
    scoreCell.textContent = score.score;
    
    row.appendChild(courseCell);
    row.appendChild(scoreCell);
    scoresBody.appendChild(row);
});
