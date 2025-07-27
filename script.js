const wordsList = [
  { word: "GRUE",           hint: "Engin de levage sur les chantiers" },
  { word: "BETONNIERE",     hint: "Machine pour mélanger le béton" },
  { word: "ECHAFFAUDAGE",   hint: "Structure temporaire pour travailler en hauteur" },
  { word: "TRUELLE",        hint: "Outil du maçon pour appliquer le mortier" },
  { word: "PELLETEUSE",     hint: "Engin de chantier pour creuser" },
  { word: "NIVEAU",         hint: "Outil pour vérifier l'horizontalité ou la verticalité" },
  { word: "CIMENT",         hint: "Liant hydraulique, composant principal du béton" },
  { word: "COFFRAGE",       hint: "Moule temporaire pour maintenir le béton lors du coulage" },
  { word: "PARPAING",       hint: "Bloc de construction en béton" },
  { word: "POUTRE",         hint: "Élément horizontal supportant des charges" },
  { word: "ARMATURE",       hint: "Barres d'acier pour renforcer le béton" },
  { word: "LONGRINE",       hint: "Poutre de fondation reliant les semelles" },
  { word: "SEMELLE",        hint: "Base d'une fondation répartissant la charge" },
  { word: "VOLIGE",         hint: "Planchette pour former le support de la toiture" },
  { word: "DALLE",          hint: "Surface horizontale, constituée de béton armé et de barres d’acier" }
];

const gameDuration = 180; // durée totale en secondes
const maxParts    = 9; // allow up to 9 wrong attempts
const parts       = ["post","beam","rope","head","body","left-arm","right-arm","left-leg","right-leg"];

let found = 0, wrong = 0;
let currentWord, timer, timeElapsed = 0;

// DOM
const roundEl = document.getElementById('round');
const timerEl = document.getElementById('time-left');
const display = document.getElementById('word-display');
const msg     = document.getElementById('message');
const input   = document.getElementById('letter-input');
const btn     = document.getElementById('submit-letter');
const hintBtn = document.getElementById('hint-btn');
const restart = document.getElementById('restart');

function init() {
  found = 0;
  timeElapsed = 0;
  startTimer();
  nextWord();
}

function startTimer() {
  clearInterval(timer);
  timeElapsed = 0;
  updateTimer();
  timer = setInterval(() => {
    timeElapsed++;
    updateTimer();
    if (timeElapsed >= gameDuration) endGame();
  }, 1000);
}

function updateTimer() {
  const m = String(Math.floor(timeElapsed / 60)).padStart(2,'0');
  const s = String(timeElapsed % 60).padStart(2,'0');
  timerEl.textContent = `${m}:${s}`;
}

function nextWord() {
  wrong = 0;
  parts.forEach(id => document.getElementById(id).style.display = 'none');
  currentWord = wordsList[Math.floor(Math.random() * wordsList.length)];
  display.textContent = '_ '.repeat(currentWord.word.length).trim();
  msg.textContent = '';
  roundEl.textContent = `Trouvés : ${found}`;
  input.disabled = false; btn.disabled = false;
  restart.style.display = 'none';
}

function finishRound(isWin) {
  if (isWin) {
    found++;
    document.getElementById('smile').style.display = 'inline';
  }
  if (timeElapsed < gameDuration) {
    setTimeout(nextWord, 600);
  } else {
    endGame();
  }
}

function guess() {
  const l = input.value.toUpperCase();
  input.value = '';
  if (!/^[A-Z]$/.test(l)) return;

  const { word } = currentWord;
  let arr = display.textContent.split(' ');
  let correct = false;

  // Révélation lettre
  for (let i = 0; i < word.length; i++) {
    if (word[i] === l) { arr[i] = l; correct = true; }
  }
  display.textContent = arr.join(' ');

  if (correct) {
    msg.textContent = 'Bien joué !';
    if (!arr.includes('_')) {
      finishRound(true);
    }
  } else {
    if (wrong < maxParts) {
      document.getElementById(parts[wrong]).style.display = 'inline';
      wrong++;
    }
    if (wrong >= maxParts) {
      msg.textContent = `Pendu ! Le mot était : ${currentWord.word}`;
      finishRound(false);
    }
  }
}

function endGame() {
  clearInterval(timer);
  const eq = found * 30;
  msg.textContent = `⏱️ Temps écoulé ! Mots trouvés : ${found}. Temps équivalent : ${eq}s.`;
  input.disabled = true; btn.disabled = true;
  restart.style.display = 'inline';
}

// Événements
btn.addEventListener('click', guess);
input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') guess();
});
hintBtn.addEventListener('click', () => {
  msg.textContent = `Indice : ${currentWord.hint}`;
});
restart.addEventListener('click', init);

// Démarrage
init();

