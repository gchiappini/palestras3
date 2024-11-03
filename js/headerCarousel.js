// At large viewports, switch subheading from a list, making sure it's shuffled and goes through all before repeating
const headerCarousel = document.getElementById("carousel");
const gerundios = ["Acolher", "Codando", "Comunicando", "Cuidando", "Desembolando", "Endireitando", "Engenheirando", "Ensinando", "Negociando", "Projetando", "Veterinando"];
let intervalId = null;
let currentIndex = 0;
let shuffledGerundios = shuffleArray([...gerundios]);

const switchText = () => {
	if (currentIndex === shuffledGerundios.length) {
		shuffledGerundios = shuffleArray([...gerundios]);
		currentIndex = 0;
	}
	headerCarousel.textContent = shuffledGerundios[currentIndex++];
};

const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]]; // Swap elements
	}
	return array;
};

const viewportCheck = () => {
	if (window.innerWidth >= 800) {
		if (!intervalId) {
			intervalId = setInterval(switchText, 3000);
		}
	} else {
		clearInterval(intervalId);
		intervalId = null;
		headerCarousel.textContent = gerundios[0]; // Reset to first item
	}
};

headerCarousel.textContent = shuffledGerundios[currentIndex++]; // Start with the first item

window.addEventListener("load", viewportCheck);
window.addEventListener("resize", viewportCheck);
