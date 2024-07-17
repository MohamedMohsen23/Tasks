var input = prompt("Please enter your exam score:");
    var score = parseInt(input);
if (isNaN(score)) {
        document.write("Not a number"); 
}else if (score > 100 || score < 0) {
  document.write("Invalid Score");
} else if (score == 100) {
  document.write("Perfect Score");
} else if (score < 100 && score >= 85) {
  document.write("Grade A");
} else if (score < 80 && score >= 75) {
  document.write("Grade B");
} else if (score < 75 && score >= 65) {
  document.write("Grade C");
} else if (score < 65 && score >= 50) {
  document.write("Grade D");
} 
else {
  document.write("Grade F");
}

// switch case
switch (true) {
    case isNaN(score):
        document.write("Not a number");
        break;
  case score===100:
    document.write("Perfect Score");
    break;
  case score < 100 && score >= 85:
    document.write("Grade A");
    break;
  case score < 80 && score >= 75:
    document.write("Grade B");
    break;
  case score < 75 && score >= 65:
    document.write("Grade C");
    break;
  case score < 65 && score >= 50:
    document.write("Grade D");
    break;
  case score <50 && score >= 0:
    document.write("Grade F");
    break;
  default:
    document.write("Invalid Score");

}
