// At large viewports, switch subheading from a list, making sure it's shuffled and goes through all before repeating
const headerCarousel = document.getElementById("carousel");
const list = ["Acolher", "Codando", "Comunicando", "Cuidando", "Desembolando", "Endireitando", "Engenheirando", "Ensinando", "Negociando", "Projetando", "Veterinando"];
let intervalId = null;
let shuffledList = shuffleArray([...list.slice(1)]); // Shuffle items except the first one
let currentIndex = 0;

const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]]; // Swap elements
	}
	return array;
};

const switchText = () => {
	if (currentIndex === 0 && headerCarousel.textContent === "Acolher") {
		currentIndex++;
	}

	headerCarousel.textContent = shuffledList[currentIndex]; // Set to the current shuffled item
	currentIndex = (currentIndex + 1) % shuffledList.length; // Increment index and wrap around
};

const viewportCheck = () => {
	if (window.innerWidth >= 800) {
		if (!intervalId) {
			intervalId = setInterval(switchText, 3000);
		}
	} else {
		clearInterval(intervalId);
		intervalId = null;
		// Reset to the first item for mobile view
		headerCarousel.textContent = list[0];
		currentIndex = 0;
	}
};

// Initialize the carousel with the first item
headerCarousel.textContent = list[0];

window.addEventListener("load", viewportCheck);
window.addEventListener("resize", viewportCheck);
