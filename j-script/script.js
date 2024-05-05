var studentName = ("Rafia Rafique")
var sciMarks = (90);
var urduMarks = (95);
var engMarks = (97);
var marks = (300);
var science = ("Science: " + sciMarks);
var urdu = ("Urdu: " + urduMarks);
var english = ("English: " + engMarks);

var totalMarks = (sciMarks + urduMarks + engMarks)


var total = ("Obtained Marks :" + (sciMarks + urduMarks + engMarks));
var per = (totalMarks / marks * 100);

var grade;
if (per >= 90) {
    grade = "A+";
}
else if (per >= 80) {
    grade = "A";
}
else if (per >= 70) {
    grade = "B";
}
else if (per >= 60) {
    grade = "C";
}
else if (per >= 50) {
    grade = "D";
}
else  {
    grade = "Fail";
}
var result = ("Grade " + grade);
var remarks;
if (per >=40) {
    remarks = "Congratulation! You pass"
}
 else   {
    remarks = "Sorry! You fail"
}



console.log(studentName);
console.log(science);
console.log(urdu);
console.log(english);
console.log(total);
console.log("Percentage: " + per + "%");
console.log(result);
console.log(remarks);


