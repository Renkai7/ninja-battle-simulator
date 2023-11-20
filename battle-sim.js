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
};

const detetemineWinner = () => {
	if (Naruto.healthPoints === 0) {
		console.log(`${Sasuke.name} wins!`);
		return true;
	} else if (Sasuke.healthPoints === 0) {
		console.log(`${Naruto.name} wins!`);
		return true;
	} else {
		return false;
	}
};

const main = () => {
	while (true) {
		let currentUserCharacter = "";
		const userCharacterChoice = Number(
			prompt("Choose a character: Naruto (press '1') | Sasuke (press '2')")
		);

		switch (userCharacterChoice) {
			case 1:
				currentUserCharacter = Naruto.name;
				console.log(`You chose ${Naruto.name}!`);
				battle(Naruto, Sasuke);
				break;
			case 2:
				currentUserCharacter = Sasuke.name;
				console.log(`You chose ${Sasuke.name}!`);
				battle(Sasuke, Naruto);
				break;
			case 3:
				console.log("Thanks for playing!");
				return;
			default:
				console.log("Please enter 1, 2, or 3.");
		}

		if (detetemineWinner()) {
			return;
		}
	}
};

main();
