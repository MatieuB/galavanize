//document.getElementById("button").innerHTML = "<p>Please Click this button:</p>";
// document.getElementById("button").addEventListener("click", function() {
//   document.getElementById("message").innerHTML = "<p>'this was clicked'</p>"
// });
document.getElementById('paragraph1').innerText = "Please don\'t click this"
document.getElementById('button1').addEventListener("click", function(){
  console.log('i said don\'t do it!');
});
document.getElementById('button_color').addEventListener('click', function(){
  document.getElementById('squareish').className = 'blue_square';

});
