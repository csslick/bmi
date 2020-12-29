var height = 170, weight = 25;
var m = height * 0.01;
bmi = weight / (m * m);

if(bmi < 20) {
  console.log('저체중')
} else if(bmi >= 20 && bmi <= 24){
  console.log('정상')
} else if(bmi >= 25 && bmi <= 29) {
  console.log('과체중')
} else {
  console.log('비만')
}
// console.log(bmi)
