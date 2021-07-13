const oneDay = (24 * 60 * 60 * 1000); // hours*minutes*seconds*milliseconds
//let birthday = new Date('8/10/2021 00:00:00');
const birthday = new Date('8/10/2021');
const today = new Date();

const diffDays = Math.round(Math.abs((birthday - today) / oneDay));
// const hours = Math.round(Math.abs(diffDays*24))
// const minutes = Math.round(Math.abs(diffDays*24*60))
// const seconds = Math.round(Math.abs(diffDays*24*60*3600))

var diff = birthday.valueOf() - today.valueOf();
var diffInDays = diff/2.506e+9
var diffInHours = Math.round(diff/3.6e+6)
var diffInMinutes = Math.round(diff/60000)
var diffInSeconds = Math.round(diff/1000);

document.body.innerHTML ="<h1>" + "How long until Jacobs Birthday " + "<br>" +
"<br>" +
"Days: " +  diffDays + "<br>" + 
"Hours: " + diffInHours + "<br>" +
"Minutes: " + diffInMinutes + "<br>" +
"Seconds: " + diffInSeconds + "<br>"

window.setTimeout(function () {
  window.location.reload();
  console.log('3 seconds');
}, 3000);

//console.log(diffDays)