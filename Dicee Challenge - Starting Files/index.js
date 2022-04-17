window.onload = function() {
	function createRndInt(minNum, maxNum) {
		let rndNum = Math.round(Math.random() * maxNum + minNum);

		return rndNum;
	}
	
	let rndImgs = [];
	
	for(let i = 1; i < 7; i++) {
		rndImgs[i] = "images/dice" + (i) + ".png";
	}
	
	let randomNumber1 = createRndInt(1, 6);
	let randomNumber2 = createRndInt(1, 6);

	document.querySelector(".img1").src = rndImgs[randomNumber1];
	document.querySelector(".img2").src = rndImgs[randomNumber2];
	
	let result;
	
	if(randomNumber1 === randomNumber2) {
		result = "Draw!";
	} else if(randomNumber1 > randomNumber2) {
		result = "🚩Player 1 Win!";
	} else {
		result = "Player 2 Win!🚩";
	}
	
	document.querySelector("h1").textContent = result;

}
