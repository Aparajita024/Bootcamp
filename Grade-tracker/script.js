const students = [];

function handleSubmit() {
  const name = document.getElementById("student-name").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const marks = parseInt(document.getElementById("marks").value);

  if (!name || !subject || isNaN(marks) || marks < 0 || marks > 100) {
    alert("Please fill all fields correctly.");
    return;
  }

  let grade;
  if (marks >= 90) grade = "A";
  else if (marks >= 75) grade = "B";
  else if (marks >= 50) grade = "C";
  else grade = "Fail";

  const student = { name, subject, marks, grade };
  students.push(student);

  document.getElementById("result").innerText = `Result for ${name} in ${subject}: Grade ${grade}`;
  document.getElementById("total").innerText = `Total students entered: ${students.length}`;

  console.clear();
  console.table(students);
  console.log(`Student ${students.length} added successfully\n`);
  console.log(`Student Info:\nName: ${name}\nSubject: ${subject}\nMarks: ${marks}\nGrade: ${grade}`);

  document.getElementById("student-name").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("marks").value = "";
}

function handleClear() {
  students.length = 0;
  document.getElementById("student-name").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("marks").value = "";
  document.getElementById("result").innerText = "";
  document.getElementById("total").innerText = "";
  console.clear();
  alert("All student records cleared.");
}
