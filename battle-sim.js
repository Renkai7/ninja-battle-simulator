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
	console.log(
		`${attacker.name} attacked ${defender.name} for ${damage} points. ${defender.name} has ${defender.healthPoints} left.`
	);
};
