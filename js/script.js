document.addEventListener("DOMContentLoaded", function() {
	var submitButton = document.getElementById("enter");

	submitButton.addEventListener("click", function() {
		//Calculate caffein in the number of cups the user supplied
		let numberOfCups = document.getElementById("cupsdrunk").value;
		displayResult(numberOfCups);
	});
	function displayResult(cups) {
		var outputField = document.getElementById("output");

		if (!isNaN(cups) && cups !== "") {
			let totalCaffeine = cups * 94.8;
			outputField.innerHTML = "In " + cups + " cups of coffee there is approximately: " + totalCaffeine + "mg of caffeine";
			let infoField = document.getElementById("info").style.visibility = "visible";

			if (totalCaffeine >= 400) {
				document.getElementById("warn").style.color = "red";	
			}
		} else {
			outputField.innerHTML = "Please enter a number in the text box";
		}
	}
});
