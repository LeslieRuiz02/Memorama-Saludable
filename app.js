// app.js - Memorama de Alimentos Saludables para Preescolar

const FOODS = [
  {
    id: "manzana",
    name: "Manzana 🍎",
    tip: "¡Manzana! Cuida tus dientes y es muy crujiente.",
    benefit: "Tiene mucha fibra que limpia los dientes y ayuda a la digestión.",
    svg: `<svg viewBox="0 0 100 100">
      <!-- Apple Body -->
      <path d="M 50 25 C 35 15 15 25 15 55 C 15 80 40 90 50 85 C 60 90 85 80 85 55 C 85 25 65 15 50 25 Z" fill="#ff5252" stroke="#d32f2f" stroke-width="3"/>
      <!-- Stem and Leaf -->
      <path d="M 50 25 Q 52 10 60 8" fill="none" stroke="#795548" stroke-width="3" stroke-linecap="round"/>
      <path d="M 52 16 Q 65 10 60 22 Z" fill="#4caf50" stroke="#388e3c" stroke-width="1.5"/>
      <!-- Kawaii Eyes -->
      <circle cx="38" cy="50" r="5" fill="#2c3e50"/>
      <circle cx="62" cy="50" r="5" fill="#2c3e50"/>
      <circle cx="36" cy="48" r="1.5" fill="#ffffff"/>
      <circle cx="60" cy="48" r="1.5" fill="#ffffff"/>
      <!-- Cheeks -->
      <ellipse cx="30" cy="56" rx="5" ry="3" fill="#ff8a80"/>
      <ellipse cx="70" cy="56" rx="5" ry="3" fill="#ff8a80"/>
      <!-- Smile -->
      <path d="M 45 56 Q 50 62 55 56" fill="none" stroke="#2c3e50" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Shine -->
      <ellipse cx="30" cy="36" rx="4" ry="8" transform="rotate(-30 30 36)" fill="#ffffff" opacity="0.6"/>
    </svg>`
  },
  {
    id: "platano",
    name: "Plátano 🍌",
    tip: "¡Plátano! Tiene potasio y te da súper fuerza para correr.",
    benefit: "Rico en potasio y carbohidratos sanos para dar energía a tus músculos.",
    svg: `<svg viewBox="0 0 100 100">
      <!-- Banana Body -->
      <path d="M 25 15 Q 12 18 10 25 Q 10 32 15 35 Q 35 40 50 55 Q 65 70 70 85 Q 78 85 82 78 Q 80 50 60 32 Q 45 18 25 15 Z" fill="#ffeb3b" stroke="#fbc02d" stroke-width="3"/>
      <!-- Tips -->
      <path d="M 25 15 Q 20 16 18 20" fill="none" stroke="#5d4037" stroke-width="3" stroke-linecap="round"/>
      <path d="M 70 85 Q 73 83 75 80" fill="none" stroke="#5d4037" stroke-width="4" stroke-linecap="round"/>
      <!-- Kawaii Face (slightly rotated to match shape) -->
      <g transform="rotate(20 45 45)">
        <circle cx="38" cy="40" r="5" fill="#2c3e50"/>
        <circle cx="58" cy="40" r="5" fill="#2c3e50"/>
        <circle cx="36" cy="38" r="1.5" fill="#ffffff"/>
        <circle cx="56" cy="38" r="1.5" fill="#ffffff"/>
        <ellipse cx="31" cy="45" rx="4" ry="2.5" fill="#ff8a80"/>
        <ellipse cx="65" cy="45" rx="4" ry="2.5" fill="#ff8a80"/>
        <path d="M 45 44 Q 48 49 51 44" fill="none" stroke="#2c3e50" stroke-width="2.5" stroke-linecap="round"/>
      </g>
    </svg>`
  },
  {
    id: "zanahoria",
    name: "Zanahoria 🥕",
    tip: "¡Zanahoria! Es muy buena para que tus ojos vean súper bien.",
    benefit: "Contiene vitamina A que ayuda a tener una excelente vista, sobre todo de noche.",
    svg: `<svg viewBox="0 0 100 100">
      <!-- Greens -->
      <path d="M 50 30 C 45 10 35 15 38 30 C 50 5 50 10 50 30 C 55 10 65 15 62 30 Z" fill="#4caf50" stroke="#388e3c" stroke-width="2"/>
      <!-- Carrot Body -->
      <path d="M 35 30 Q 50 25 65 30 L 53 90 Q 50 95 47 90 Z" fill="#ff9800" stroke="#f57c00" stroke-width="3"/>
      <!-- Lines -->
      <path d="M 40 45 H 48" stroke="#f57c00" stroke-width="2" stroke-linecap="round"/>
      <path d="M 55 60 H 62" stroke="#f57c00" stroke-width="2" stroke-linecap="round"/>
      <path d="M 42 75 H 48" stroke="#f57c00" stroke-width="2" stroke-linecap="round"/>
      <!-- Kawaii Eyes -->
      <circle cx="43" cy="46" r="4.5" fill="#2c3e50"/>
      <circle cx="57" cy="46" r="4.5" fill="#2c3e50"/>
      <circle cx="41.5" cy="44" r="1.3" fill="#ffffff"/>
      <circle cx="55.5" cy="44" r="1.3" fill="#ffffff"/>
      <!-- Cheeks -->
      <ellipse cx="37" cy="51" rx="4" ry="2.5" fill="#ff8a80"/>
      <ellipse cx="63" cy="51" rx="4" ry="2.5" fill="#ff8a80"/>
      <!-- Smile -->
      <path d="M 48 51 Q 50 55 52 51" fill="none" stroke="#2c3e50" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: "brocoli",
    name: "Brócoli 🥦",
    tip: "¡Brócoli! Es como un arbolito mágico lleno de vitaminas.",
    benefit: "Protege tu sistema inmunológico para evitar que te enfermes.",
    svg: `<svg viewBox="0 0 100 100">
      <!-- Stem -->
      <path d="M 42 60 L 40 90 Q 50 93 60 90 L 58 60 Z" fill="#81c784" stroke="#4caf50" stroke-width="3"/>
      <!-- Fluffy Bush -->
      <path d="M 50 15 C 30 15 20 30 25 45 C 15 55 25 70 40 65 C 50 75 70 70 75 58 C 85 50 80 30 70 25 C 65 15 55 15 50 15 Z" fill="#2e7d32" stroke="#1b5e20" stroke-width="3"/>
      <!-- Kawaii Face on Stem -->
      <circle cx="46" cy="72" r="3.5" fill="#2c3e50"/>
      <circle cx="54" cy="72" r="3.5" fill="#2c3e50"/>
      <circle cx="45" cy="70.5" r="1" fill="#ffffff"/>
      <circle cx="53" cy="70.5" r="1" fill="#ffffff"/>
      <path d="M 48 76 Q 50 78 52 76" fill="none" stroke="#2c3e50" stroke-width="2" stroke-linecap="round"/>
      <ellipse cx="42" cy="74" rx="2.5" ry="1.5" fill="#ff8a80"/>
      <ellipse cx="58" cy="74" rx="2.5" ry="1.5" fill="#ff8a80"/>
    </svg>`
  },
  {
    id: "fresa",
    name: "Fresa 🍓",
    tip: "¡Fresa! Tiene vitamina C para protegerte de la gripe.",
    benefit: "Rica en antioxidantes y vitamina C que curan heridas y suben las defensas.",
    svg: `<svg viewBox="0 0 100 100">
      <!-- Leaf crown -->
      <path d="M 50 22 C 45 10 25 15 35 25 C 50 15 50 15 50 25 C 50 15 75 15 65 25 C 55 15 50 22 50 22 Z" fill="#4caf50" stroke="#388e3c" stroke-width="2"/>
      <!-- Strawberry Body -->
      <path d="M 50 90 C 20 75 15 45 25 30 C 35 20 65 20 75 30 C 85 45 80 75 50 90 Z" fill="#ff2e63" stroke="#c70039" stroke-width="3"/>
      <!-- Seeds -->
      <circle cx="35" cy="38" r="1.5" fill="#ffeb3b"/>
      <circle cx="65" cy="38" r="1.5" fill="#ffeb3b"/>
      <circle cx="42" cy="72" r="1.5" fill="#ffeb3b"/>
      <circle cx="58" cy="72" r="1.5" fill="#ffeb3b"/>
      <circle cx="30" cy="55" r="1.5" fill="#ffeb3b"/>
      <circle cx="70" cy="55" r="1.5" fill="#ffeb3b"/>
      <circle cx="50" cy="60" r="1.5" fill="#ffeb3b"/>
      <!-- Kawaii Eyes -->
      <circle cx="42" cy="46" r="4.5" fill="#2c3e50"/>
      <circle cx="58" cy="46" r="4.5" fill="#2c3e50"/>
      <circle cx="40.5" cy="44" r="1.3" fill="#ffffff"/>
      <circle cx="56.5" cy="44" r="1.3" fill="#ffffff"/>
      <!-- Cheeks -->
      <ellipse cx="35" cy="52" rx="4" ry="2.5" fill="#ff8a80"/>
      <ellipse cx="65" cy="52" rx="4" ry="2.5" fill="#ff8a80"/>
      <!-- Smile -->
      <path d="M 47 51 Q 50 55 53 51" fill="none" stroke="#2c3e50" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: "pescado",
    name: "Pescado 🐟",
    tip: "¡Pescado! Nutre tu cerebro para que seas súper inteligente.",
    benefit: "Contiene Omega 3 y proteínas esenciales para el desarrollo del cerebro y memoria.",
    svg: `<svg viewBox="0 0 100 100">
      <!-- Tail -->
      <path d="M 15 50 L 3 35 Q 8 50 3 65 Z" fill="#00bcd4" stroke="#0097a7" stroke-width="3"/>
      <!-- Body -->
      <path d="M 15 50 C 35 25 75 20 85 50 C 75 80 35 75 15 50 Z" fill="#00e5ff" stroke="#0097a7" stroke-width="3"/>
      <!-- Fins -->
      <path d="M 50 32 Q 40 18 55 22" fill="none" stroke="#0097a7" stroke-width="3" stroke-linecap="round"/>
      <path d="M 50 68 Q 40 82 55 78" fill="none" stroke="#0097a7" stroke-width="3" stroke-linecap="round"/>
      <!-- Kawaii Eye (Only one since side profile) -->
      <circle cx="68" cy="44" r="5.5" fill="#2c3e50"/>
      <circle cx="66" cy="42" r="1.5" fill="#ffffff"/>
      <!-- Cheek -->
      <ellipse cx="72" cy="52" rx="4" ry="3" fill="#ff8a80"/>
      <!-- Smile -->
      <path d="M 76 46 Q 80 49 76 52" fill="none" stroke="#2c3e50" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Scales -->
      <path d="M 35 45 Q 38 50 35 55" fill="none" stroke="#0097a7" stroke-width="2" stroke-linecap="round"/>
      <path d="M 45 42 Q 48 48 45 54" fill="none" stroke="#0097a7" stroke-width="2" stroke-linecap="round"/>
      <path d="M 55 45 Q 58 50 55 55" fill="none" stroke="#0097a7" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: "leche",
    name: "Leche 🥛",
    tip: "¡Leche! Hace tus dientes y huesos muy fuertes.",
    benefit: "Aporta calcio y vitamina D para construir huesos grandes y dientes sanos.",
    svg: `<svg viewBox="0 0 100 100">
      <!-- Glass -->
      <path d="M 28 20 L 35 85 Q 50 90 65 85 L 72 20 Z" fill="#eeeeee" stroke="#b0bec5" stroke-width="3"/>
      <!-- Liquid Line inside -->
      <path d="M 32 35 C 40 37 45 33 52 35 C 59 37 64 34 68 35 L 63 81 Q 50 85 37 81 Z" fill="#ffffff"/>
      <!-- Face on Glass -->
      <circle cx="43" cy="55" r="4" fill="#2c3e50"/>
      <circle cx="57" cy="55" r="4" fill="#2c3e50"/>
      <circle cx="41.5" cy="53" r="1.2" fill="#ffffff"/>
      <circle cx="55.5" cy="53" r="1.2" fill="#ffffff"/>
      <!-- Cheeks -->
      <ellipse cx="37" cy="60" rx="3.5" ry="2" fill="#ff8a80"/>
      <ellipse cx="63" cy="60" rx="3.5" ry="2" fill="#ff8a80"/>
      <!-- Smile -->
      <path d="M 48 60 Q 50 63 52 60" fill="none" stroke="#2c3e50" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: "huevo",
    name: "Huevo 🥚",
    tip: "¡Huevo! Te da súper proteínas para que crezcan tus músculos.",
    benefit: "Contiene proteínas de la más alta calidad y hierro para dar fuerza al cuerpo.",
    svg: `<svg viewBox="0 0 100 100">
      <!-- Shell -->
      <path d="M 50 15 C 28 15 25 55 25 68 C 25 82 38 90 50 90 C 62 90 75 82 75 68 C 75 55 72 15 50 15 Z" fill="#fff9c4" stroke="#fbc02d" stroke-width="3"/>
      <!-- Shell shine -->
      <path d="M 35 50 Q 30 65 40 75" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
      <!-- Kawaii Face -->
      <circle cx="42" cy="52" r="4.5" fill="#2c3e50"/>
      <circle cx="58" cy="52" r="4.5" fill="#2c3e50"/>
      <circle cx="40.5" cy="50.2" r="1.3" fill="#ffffff"/>
      <circle cx="56.5" cy="50.2" r="1.3" fill="#ffffff"/>
      <!-- Cheeks -->
      <ellipse cx="35" cy="58" rx="4" ry="2.5" fill="#ff8a80"/>
      <ellipse cx="65" cy="58" rx="4" ry="2.5" fill="#ff8a80"/>
      <!-- Smile -->
      <path d="M 47 57 Q 50 61 53 57" fill="none" stroke="#2c3e50" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`
  }
];

// Web Audio API Sound Synthesizer
class SoundEffects {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTone(freqStart, freqEnd, type, duration, volume = 0.1) {
    if (this.muted) return;
    this.init();

    const osc = this.ctx.createOscillator();
    const gainNode = this.ctx.createGain();

    osc.connect(gainNode);
    gainNode.connect(this.ctx.destination);

    osc.type = type;
    osc.frequency.setValueAtTime(freqStart, this.ctx.currentTime);
    if (freqEnd) {
      osc.frequency.exponentialRampToValueAtTime(freqEnd, this.ctx.currentTime + duration);
    }

    gainNode.gain.setValueAtTime(volume, this.ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }

  flip() {
    this.playTone(300, 600, "sine", 0.15, 0.08);
  }

  match() {
    // Two-tone happy chord
    setTimeout(() => this.playTone(523.25, 523.25, "triangle", 0.3, 0.1), 0); // C5
    setTimeout(() => this.playTone(659.25, 659.25, "triangle", 0.4, 0.1), 80); // E5
  }

  error() {
    this.playTone(180, 100, "sawtooth", 0.35, 0.05);
  }

  victory() {
    const melody = [
      { f: 523.25, d: 0.15 }, // C5
      { f: 587.33, d: 0.15 }, // D5
      { f: 659.25, d: 0.15 }, // E5
      { f: 783.99, d: 0.3 }   // G5
    ];
    melody.forEach((note, index) => {
      setTimeout(() => {
        this.playTone(note.f, note.f, "sine", note.d, 0.1);
      }, index * 160);
    });
  }
}

// Game State Engine
class Game {
  constructor() {
    this.difficulty = "easy"; // easy, medium, hard
    this.moves = 0;
    this.matches = 0;
    this.totalPairs = 4;
    this.stars = 3;
    this.cardsData = [];
    this.flippedCards = [];
    this.isLock = false;
    this.sound = new SoundEffects();
    this.voiceMuted = false;

    // DOM cache
    this.board = document.getElementById("game-board");
    this.movesCounter = document.getElementById("moves-counter");
    this.matchesCounter = document.getElementById("matches-counter");
    this.starsContainer = document.getElementById("stars-container");
    this.victoryModal = document.getElementById("victory-modal");

    this.bindEvents();
  }

  init() {
    this.sound.init();
    this.moves = 0;
    this.matches = 0;
    this.stars = 3;
    this.flippedCards = [];
    this.isLock = false;

    this.updateStats();
    this.generateCards();
  }

  bindEvents() {
    // Difficulty
    document.getElementById("btn-easy").addEventListener("click", () => this.changeDifficulty("easy"));
    document.getElementById("btn-medium").addEventListener("click", () => this.changeDifficulty("medium"));
    document.getElementById("btn-hard").addEventListener("click", () => this.changeDifficulty("hard"));

    // Audio controls
    const soundBtn = document.getElementById("toggle-sound");
    const voiceBtn = document.getElementById("toggle-voice");

    soundBtn.addEventListener("click", () => {
      this.sound.muted = !this.sound.muted;
      soundBtn.classList.toggle("muted", this.sound.muted);
      document.getElementById("sound-icon").textContent = this.sound.muted ? "🔇" : "🔊";
      this.sound.init();
    });

    voiceBtn.addEventListener("click", () => {
      this.voiceMuted = !this.voiceMuted;
      voiceBtn.classList.toggle("muted", this.voiceMuted);
      document.getElementById("voice-icon").textContent = this.voiceMuted ? "🔇" : "🗣️";
      this.sound.init();
    });

    // Reset / Play again
    document.getElementById("btn-restart").addEventListener("click", () => {
      this.victoryModal.classList.remove("open");
      this.init();
    });

    // Educational Guide Accordion
    const guideHeader = document.getElementById("guide-toggle");
    const guideSection = guideHeader.parentElement;
    guideHeader.addEventListener("click", () => {
      guideSection.classList.toggle("open");
    });
  }

  changeDifficulty(level) {
    this.difficulty = level;
    document.querySelectorAll(".btn-diff").forEach(btn => btn.classList.remove("active"));
    document.getElementById(`btn-${level}`).className = `btn btn-diff active`;

    if (level === "easy") {
      this.totalPairs = 4;
      this.board.className = "game-board easy";
    } else if (level === "medium") {
      this.totalPairs = 6;
      this.board.className = "game-board medium";
    } else {
      this.totalPairs = 8;
      this.board.className = "game-board hard";
    }

    this.init();
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  generateCards() {
    this.board.innerHTML = "";
    
    // Choose foods for this difficulty
    const selectFoods = FOODS.slice(0, this.totalPairs);
    // Duplicate to make pairs
    let deck = [...selectFoods, ...selectFoods].map((food, idx) => ({
      ...food,
      uniqueId: idx
    }));

    this.cardsData = this.shuffle(deck);

    this.cardsData.forEach(cardInfo => {
      const cardEl = document.createElement("div");
      cardEl.className = "card";
      cardEl.setAttribute("tabindex", "0");
      cardEl.setAttribute("data-id", cardInfo.id);
      cardEl.setAttribute("data-unique-id", cardInfo.uniqueId);

      cardEl.innerHTML = `
        <div class="card-front">❓</div>
        <div class="card-back">${cardInfo.svg}</div>
      `;

      // Event Listeners
      cardEl.addEventListener("click", () => this.flipCard(cardEl));
      cardEl.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.flipCard(cardEl);
        }
      });

      this.board.appendChild(cardEl);
    });
  }

  flipCard(cardEl) {
    if (this.isLock) return;
    if (cardEl.classList.contains("flipped") || cardEl.classList.contains("matched")) return;

    this.sound.init(); // wake up AudioContext if needed
    cardEl.classList.add("flipped");
    this.sound.flip();

    this.flippedCards.push(cardEl);

    if (this.flippedCards.length === 2) {
      this.checkMatch();
    }
  }

  checkMatch() {
    this.isLock = true;
    this.moves++;

    const [c1, c2] = this.flippedCards;
    const isMatch = c1.getAttribute("data-id") === c2.getAttribute("data-id");

    if (isMatch) {
      this.matches++;
      c1.classList.add("matched");
      c2.classList.add("matched");
      this.sound.match();

      // Read Tip Out Loud
      const foodId = c1.getAttribute("data-id");
      const foodInfo = FOODS.find(f => f.id === foodId);
      if (foodInfo) {
        this.speak(foodInfo.tip);
      }

      this.flippedCards = [];
      this.isLock = false;
      this.updateStats();

      if (this.matches === this.totalPairs) {
        setTimeout(() => this.winGame(), 800);
      }
    } else {
      c1.classList.add("error");
      c2.classList.add("error");
      this.sound.error();

      setTimeout(() => {
        c1.classList.remove("flipped", "error");
        c2.classList.remove("flipped", "error");
        this.flippedCards = [];
        this.isLock = false;
      }, 1000);

      this.updateStats();
    }
  }

  speak(text) {
    if (this.voiceMuted) return;
    window.speechSynthesis.cancel(); // clear previous speech
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "es-ES";

    // Attempt to set a friendly Spanish voice
    const voices = window.speechSynthesis.getVoices();
    const esVoice = voices.find(v => v.lang.includes("es-ES") || v.lang.includes("es-MX"));
    if (esVoice) utterance.voice = esVoice;

    window.speechSynthesis.speak(utterance);
  }

  updateStats() {
    this.movesCounter.textContent = this.moves;
    this.matchesCounter.textContent = `${this.matches} / ${this.totalPairs}`;

    // Dynamically calculate stars
    // Easy: max 3 stars, lose 1 at 7 moves, lose 2 at 11 moves.
    // Medium: lose 1 at 11, lose 2 at 17.
    // Hard: lose 1 at 15, lose 2 at 23.
    let limit1 = this.totalPairs + 3;
    let limit2 = this.totalPairs * 2 + 3;

    if (this.moves > limit2) {
      this.stars = 1;
    } else if (this.moves > limit1) {
      this.stars = 2;
    } else {
      this.stars = 3;
    }

    // Render stars
    this.starsContainer.innerHTML = "";
    for (let i = 1; i <= 3; i++) {
      const star = document.createElement("span");
      star.className = `star ${i <= this.stars ? "active" : ""}`;
      star.textContent = "★";
      this.starsContainer.appendChild(star);
    }
  }

  winGame() {
    this.sound.victory();
    this.throwConfetti();

    // Setup victory stars
    const winStarsContainer = document.getElementById("victory-stars");
    winStarsContainer.innerHTML = "";
    for (let i = 0; i < this.stars; i++) {
      winStarsContainer.innerHTML += "⭐";
    }

    // Customize congrats message
    const winMsg = document.getElementById("victory-message");
    if (this.stars === 3) {
      winMsg.textContent = "¡Eres un maestro comelón súper saludable! ⭐⭐⭐";
    } else if (this.stars === 2) {
      winMsg.textContent = "¡Increíble! Sigue comiendo sano para tener más energía. ⭐⭐";
    } else {
      winMsg.textContent = "¡Buen intento! ¡Juega de nuevo para obtener las 3 estrellas! ⭐";
    }

    this.victoryModal.classList.add("open");
  }

  throwConfetti() {
    for (let i = 0; i < 80; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 90%, 65%)`;
      confetti.style.animationDuration = Math.random() * 2 + 1.5 + "s";
      confetti.style.transform = `scale(${Math.random() * 0.8 + 0.5})`;
      document.body.appendChild(confetti);

      // Clean up DOM
      setTimeout(() => {
        confetti.remove();
      }, 3500);
    }
  }
}

// Render educational catalog
function renderCatalog() {
  const catalogContainer = document.getElementById("foods-catalog");
  if (!catalogContainer) return;
  catalogContainer.innerHTML = "";

  FOODS.forEach(food => {
    const item = document.createElement("div");
    item.className = "catalog-item";
    item.innerHTML = `
      <div class="catalog-item-icon">${food.svg}</div>
      <div class="catalog-item-info">
        <h3>${food.name}</h3>
        <p>${food.benefit}</p>
      </div>
    `;
    catalogContainer.appendChild(item);
  });
}

// Bootstrapper
document.addEventListener("DOMContentLoaded", () => {
  renderCatalog();
  const game = new Game();
  game.init();

  // Load voices async to help speech synthesis
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = () => {};
  }
});
