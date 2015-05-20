$(function() {
	var clientNr = 999;
	var waiting = 6;
	var context =
		"<p class='nrLable'>Current number</p>"+
		"<h2 class='currentNr'>33</h1>"+
		"<button class='grab'>Grab a number</button>"+
		"<h2 class='yourNr'></h2>"+
		"<p class='clientNr'></p>";
	$(".wrap").html(context);

	var currentNr = $(".currentNr").html()/1;
	$(".waitlistNr").html(waiting);

	$(".grab").on('click',function () {
		clientNr = currentNr + waiting;
		$(".yourNr").html("Your number");
		$(".clientNr").html(clientNr);
		$(".grab").css("background-color","#479389");
		$(".grab").html("Grab a new number");

	});

	function countUp (amount) {
		currentNr = currentNr + amount;
		$(".currentNr").html(currentNr);
		checkNr(clientNr);
	}

	function checkNr (client) {
		if (client - currentNr == 2) {
			magicGoesHere(false);
		}
		if (currentNr === client) {
			magicGoesHere(true);
			printPhrase("Welcome Back!");
		}
	}

	function printPhrase (phrase) {
		var message = $(".yourNr").html();
		if (message === "Welcome Back!" ) {
			return false;
		};
		$(".yourNr").html(phrase);
		$(".clientNr").html("");
	}
//-----------when ready, hook on push here
	function magicGoesHere (status) {
		if (status) {
			alert("It's your turn.");
			return false;
		};
		alert("get ready you are up in two");

	}
//-------------------------------------
	setInterval(function(){
		countUp(1);
	}, 2000);


});
