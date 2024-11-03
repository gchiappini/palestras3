// At large viewports, switch subheading from a list, making sure it's shuffled and goes through all before repeating
const headerCarousel = document.getElementById("carousel");
const list = ["Acolher", "Codando", "Comunicando", "Cuidando", "Desembolando", "Endireitando", "Engenheirando", "Ensinando", "Negociando", "Projetando", "Veterinando"];
let intervalId = null;
let currentIndex = 0;

const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]]; // Swap elements
	}
	return array;
};

let shuffledList = shuffleArray([...list]);

const switchText = () => {
	if (currentIndex === shuffledList.length) {
		currentIndex = 0; // Reset index to start with the first item
	}
	headerCarousel.textContent = shuffledList[currentIndex++];
};

const viewportCheck = () => {
	if (window.innerWidth >= 800) {
		if (!intervalId) {
			intervalId = setInterval(switchText, 3000);
		}
	} else {
		clearInterval(intervalId);
		intervalId = null;
		headerCarousel.textContent = list[0]; // Reset to first item
		currentIndex = 0; // Reset index for mobile view
	}
};

// Initialize the carousel with the first item
headerCarousel.textContent = shuffledList[currentIndex++];

window.addEventListener("load", viewportCheck);
window.addEventListener("resize", viewportCheck);
