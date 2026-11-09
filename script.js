// Generate Stars
function createStars() {
	const starsContainer = document.querySelector('.stars');
	for (let i = 0; i < 50; i++) {
		const star = document.createElement('div');
		star.classList.add('star');
		star.style.left = Math.random() * 100 + '%';
		star.style.top = Math.random() * 100 + '%';
		star.style.animationDelay = Math.random() * 3 + 's';
		star.style.animationDuration = (Math.random() * 2 + 2) + 's';
		starsContainer.appendChild(star);
	}
}

// Generate Candles (23 purple ones)
function createCandles() {
	const container = document.querySelector('.candle-container');
	for (let i = 0; i < 23; i++) {
		const candle = document.createElement('div');
		candle.classList.add('candle');
		candle.style.animationDelay = (i * 0.1) + 's';
		container.appendChild(candle);
	}
}

// Messages for Flowers
const messages = [
	"You make me smile every day 💜",
	"Adore your laugh and your light 🌟",
	"Forever my favorite star ⭐",
	"Can't wait for more adventures with you 🌙",
	"Your kindness inspires me daily",
	"You make ordinary moments magical ✨"
];

// Generate Flowers
function createFlowers() {
	const container = document.querySelector('.flowers');
	messages.forEach((msg, index) => {
		const flower = document.createElement('div');
		flower.classList.add('flower');
		flower.innerHTML = `
			<div class="stem"></div>
			<div class="flower-head">
				<div class="flower-center"></div>
				<div class="petal"></div>
				<div class="petal"></div>
				<div class="petal"></div>
				<div class="petal"></div>
				<div class="petal"></div>
				<div class="petal"></div>
			</div>
			<div class="message-bubble">
				<p class="message-text">${msg}</p>
			</div>
		`;
		flower.style.animationDelay = (index * 0.2) + 's';
        
		// Add click event
		const bubble = flower.querySelector('.message-bubble');
		flower.addEventListener('click', () => {
			bubble.classList.toggle('show');
			// Optional: Hide after 3 seconds
			setTimeout(() => bubble.classList.remove('show'), 3000);
		});
        
		container.appendChild(flower);
	});
}

// Generate Floating Hearts
function createHearts() {
	const heartsContainer = document.querySelector('.hearts');
	for (let i = 0; i < 20; i++) {
		const heart = document.createElement('div');
		heart.classList.add('heart');
		heart.innerHTML = '❤';
		heart.style.left = Math.random() * 100 + '%';
		heart.style.animationDelay = Math.random() * 5 + 's';
		heart.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
		heartsContainer.appendChild(heart);
	}
}

// Run all generators on DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
	createStars();
	createCandles();
	createFlowers();
	createHearts();
});
