// ==========================================
// STUDENT ACADEMIC & SCHOLARSHIP MANAGEMENT
// ==========================================

// SCENARIO 1: High Performing Student (Active)
let student = {
    name: "John Doe",
    registrationNo: "FA23-BSE-001",
    program: "Software Engineering",
    semester: 5,
    cgpa: 3.9,
    attendance: 95,
    assignment: 19,
    midterm: 28,
    finalExam: 45
};

// SCENARIO 2: Average Student (Uncomment to test)
// let student = {
//     name: "Sara",
//     registrationNo: "FA23-BSE-002",
//     program: "Computer Science",
//     semester: 5,
//     cgpa: 2.8,
//     attendance: 80,
//     assignment: 14,
//     midterm: 20,
//     finalExam: 32
// };

// SCENARIO 3: Low Attendance (Uncomment to test)
// let student = {
//     name: "Ali",
//     registrationNo: "FA23-BSE-003",
//     program: "Information Technology",
//     semester: 5,
//     cgpa: 3.5,
//     attendance: 60, // Below scholarship requirement
//     assignment: 18,
//     midterm: 26,
//     finalExam: 40
// };

// SCENARIO 4: Poor Academic Performance (Uncomment to test)
// let student = {
//     name: "Ahmed",
//     registrationNo: "FA23-BSE-004",
//     program: "Software Engineering",
//     semester: 5,
//     cgpa: 1.8,
//     attendance: 45,
//     assignment: 5,
//     midterm: 10,
//     finalExam: 15
// };


// =========================================
// ACADEMIC CALCULATION (Arithmetic Operators)
// =========================================
let maxTotal = 100;

// Calculate total using arithmetic operator (+)
let totalMarks = student.assignment + student.midterm + student.finalExam;

// Calculate percentage (/, *)
let percentage = (totalMarks / maxTotal) * 100;

// Calculate lost marks (-)
let marksLost = maxTotal - totalMarks;


// =========================================
// GRADE CALCULATION (Conditions)
// =========================================
let resultGrade;

if (percentage >= 80) {
    resultGrade = "A";
}
else if (percentage >= 70) {
    resultGrade = "B";
}
else if (percentage >= 60) {
    resultGrade = "C";
}
else if (percentage >= 50) {
    resultGrade = "D";
}
else {
    resultGrade = "F";
}


// =========================================
// PASS/FAIL STATUS (Comparison)
// =========================================
let status;

if (percentage >= 50) {
    status = "Passed";
}
else {
    status = "Failed";
}


// =========================================
// SCHOLARSHIP ELIGIBILITY (Logical Operators)
// =========================================
let scholarship;

// Using && (AND) operator
if (student.cgpa >= 3.8 && student.attendance >= 90 && percentage >= 85) {
    scholarship = "Gold Scholarship";
}
else if (student.cgpa >= 3.5 && student.attendance >= 85 && percentage >= 80) {
    scholarship = "Silver Scholarship";
}
// Using || (OR) operator
else if (student.cgpa >= 3.0 || percentage >= 75) {
    scholarship = "Bronze Scholarship";
}
// Using ! (NOT) operator
else if (!(student.attendance >= 75)) {
    scholarship = "Not Eligible (Low Attendance)";
}
else {
    scholarship = "Not Eligible";
}


// =========================================
// ACADEMIC WARNING
// =========================================
let academicStatus;

if (percentage < 40 || student.attendance < 50 || student.cgpa < 2.0) {
    academicStatus = "Critical";
}
else if (percentage < 50 || student.attendance < 75 || student.cgpa < 2.5) {
    academicStatus = "Academic Warning";
}
else {
    academicStatus = "Good Standing";
}


// =========================================
// DYNAMIC OUTPUT (Beautiful UI Profile)
// =========================================
let statusColor = status === "Passed" ? "success" : "danger";
let academicColor = academicStatus === "Good Standing" ? "success" : (academicStatus === "Academic Warning" ? "warning" : "danger");

document.getElementById("academic-report").innerHTML = `
    <div class="p-4 rounded shadow-sm" style="background-color: #f8f9fa; border-top: 5px solid #0d6efd;">
        <h2 class="text-center text-primary mb-4 fw-bold">STUDENT ACADEMIC REPORT</h2>
        
        <div class="row mb-4">
            <div class="col-md-6">
                <h5 class="border-bottom pb-2 text-secondary">Student Details</h5>
                <p class="mb-1"><strong>Name:</strong> ${student.name}</p>
                <p class="mb-1"><strong>Registration:</strong> ${student.registrationNo}</p>
                <p class="mb-1"><strong>Program:</strong> ${student.program}</p>
                <p class="mb-1"><strong>Semester:</strong> ${student.semester}</p>
            </div>
            <div class="col-md-6">
                <h5 class="border-bottom pb-2 text-secondary">Performance Data</h5>
                <p class="mb-1"><strong>CGPA:</strong> <span class="badge bg-info text-dark">${student.cgpa}</span></p>
                <p class="mb-1"><strong>Attendance:</strong> <span class="badge bg-secondary">${student.attendance}%</span></p>
                <p class="mb-1"><strong>Total Marks:</strong> ${totalMarks} / ${maxTotal}</p>
                <p class="mb-1"><strong>Percentage:</strong> ${percentage}%</p>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <h5 class="border-bottom pb-2 text-secondary">Official Results</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item bg-transparent d-flex justify-content-between align-items-center">
                        <strong>Grade:</strong> 
                        <span class="badge bg-dark fs-6">${resultGrade}</span>
                    </li>
                    <li class="list-group-item bg-transparent d-flex justify-content-between align-items-center">
                        <strong>Pass/Fail Status:</strong> 
                        <span class="badge bg-${statusColor} fs-6">${status}</span>
                    </li>
                    <li class="list-group-item bg-transparent d-flex justify-content-between align-items-center">
                        <strong>Academic Status:</strong> 
                        <span class="badge bg-${academicColor} fs-6">${academicStatus}</span>
                    </li>
                    <li class="list-group-item bg-transparent d-flex justify-content-between align-items-center">
                        <strong>Scholarship Eligibility:</strong> 
                        <span class="badge bg-primary fs-6">${scholarship}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
`;


// =========================================
// HOISTING DEMONSTRATION (For Console)
// =========================================
console.log("--- Hoisting Demo ---");

// var is hoisted
console.log("var is hoisted:", hoistedVariable);
var hoistedVariable = "var is hoisted";

/*
   let is also hoisted internally,
   but it cannot be accessed before
   its declaration.

   The following code would produce
   a ReferenceError:
*/
console.log(letVariable);
let letVariable = 10;
