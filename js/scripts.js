$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age >= 21) {
    $('#quiz').show();
  }
  else {
    $('#under-21').show();
  }
});
value1 = 1
value2 = 2
value3 = 3
	var range;
	if (correct < 4) {
		range = 0;
	}
	if (correct > 0 && correct < 3) {
		range = 12;
	}
	if (correct > 2) {
		range = 16;
	}
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[range];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct";
