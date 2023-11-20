const Naruto = {
	name: "Naruto",
	healthPoints: 100,
	attackPoints: 50,
};

const Sasuke = {
	name: "Sasuke",
	healthPoints: 100,
	attackPoints: 50,
};

const userCharacterChoice = prompt(
	"Choose a character: Naruto (press '1') | Sasuke (press '2')"
);

const battle = (attacker, defender) => {
	const damage = attacker.attackPoints;
	defender.healthPoints -= damage;

	// prevent health going below 0
	if (defender.healthPoints < 0) {
		defender.healthPoints = 0;
	}
	console.log(
		`${attacker.name} attacked ${defender.name} for ${damage} points. ${defender.name} has ${defender.healthPoints} left.`
	);
	detetemineWinner(attacker, defender);
};

const detetemineWinner = (userOne, userTwo) => {
	if (userOne.healthPoints === 0) {
		console.log("User one loses!");
	} else if (userTwo.healthPoints === 0) {
		console.log("User two loses!");
	}
};
