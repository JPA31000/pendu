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
  { word: "CHANTEAU",       hint: "Support pour la découpe du bois" }
];

const totalRounds = 3;
const maxParts    = 6;
const parts       = ["post","beam","rope","head","body","left-arm","right-arm","left-leg","right-leg"];

let sequence = [], found = 0, current = 0, wrong = 0;
let timeLeft = 180, timer;  

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
  // Sélection de 3 mots uniques
  const copy = [...wordsList];
  sequence = [];
  for (let i = 0; i < totalRounds; i++) {
    const idx = Math.floor(Math.random() * copy.length);
    sequence.push(copy.splice(idx, 1)[0]);
  }
  found = 0; current = 0;
  startTimer();
  nextWord();
}

function startTimer() {
  clearInterval(timer);
  timeLeft = 180;
  updateTimer();
  timer = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft <= 0) endGame();
  }, 1000);
}

function updateTimer() {
  const m = String(Math.floor(timeLeft / 60)).padStart(2,'0');
  const s = String(timeLeft % 60).padStart(2,'0');
  timerEl.textContent = `${m}:${s}`;
}

function nextWord() {
  wrong = 0;
  parts.forEach(id => document.getElementById(id).style.display = 'none');
  const { word } = sequence[current];
  display.textContent = '_ '.repeat(word.length).trim();
  msg.textContent = '';
  roundEl.textContent = `Trouvés : ${found} / 3`;
  input.disabled = false; btn.disabled = false;
  restart.style.display = 'none';
}

function finishRound(isWin) {
  if (isWin) {
    found++;
    document.getElementById('smile').style.display = 'inline';
  }
  current++;
  if (current < totalRounds && timeLeft > 0) {
    setTimeout(nextWord, 600);
  } else {
    endGame();
  }
}

function guess() {
  const l = input.value.toUpperCase();
  input.value = '';
  if (!/^[A-Z]$/.test(l)) return;

  const { word } = sequence[current];
  let arr = display.textContent.split(' ');
  let correct = false;

  // Révélation lettre
  for (let i = 0; i < word.length; i++) {
    if (word[i] === l) { arr[i] = l; correct = true; }
  }
  display.textContent = arr.join(' ');
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

const totalRounds = 3;
const maxParts    = 6;
const parts       = ["post","beam","rope","head","body","left-arm","right-arm","left-leg","right-leg"];

let sequence = [], found = 0, current = 0, wrong = 0;
let timeLeft = 180, timer;  

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
  // Sélection de 3 mots uniques
  const copy = [...wordsList];
  sequence = [];
  for (let i = 0; i < totalRounds; i++) {
    const idx = Math.floor(Math.random() * copy.length);
    sequence.push(copy.splice(idx, 1)[0]);
  }
  found = 0; current = 0;
  startTimer();
  nextWord();
}

function startTimer() {
  clearInterval(timer);
  timeLeft = 180;
  updateTimer();
  timer = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft <= 0) endGame();
  }, 1000);
}

function updateTimer() {
  const m = String(Math.floor(timeLeft / 60)).padStart(2,'0');
  const s = String(timeLeft % 60).padStart(2,'0');
  timerEl.textContent = `${m}:${s}`;
}

function nextWord() {
  wrong = 0;
  parts.forEach(id => document.getElementById(id).style.display = 'none');
  const { word } = sequence[current];
  display.textContent = '_ '.repeat(word.length).trim();
  msg.textContent = '';
  roundEl.textContent = `Trouvés : ${found} / 3`;
  input.disabled = false; btn.disabled = false;
  restart.style.display = 'none';
}

function finishRound(isWin) {
  if (isWin) {
    found++;
    document.getElementById('smile').style.display = 'inline';
  }
  current++;
  if (current < totalRounds && timeLeft > 0) {
    setTimeout(nextWord, 600);
  } else {
    endGame();
  }
}

function guess() {
  const l = input.value.toUpperCase();
  input.value = '';
  if (!/^[A-Z]$/.test(l)) return;

  const { word } = sequence[current];
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
      msg.textContent = `Pendu ! Le mot était : ${sequence[current].word}`;
      finishRound(false);
    }
  }
}

function endGame() {
  clearInterval(timer);
  const success = (found === totalRounds && timeLeft > 0);
  msg.textContent = success
    ? '👏 Bravo ! Vous avez trouvé les 3 mots.'
    : `⏱️ Temps écoulé ! Mots trouvés : ${found}.`;
  input.disabled = true; btn.disabled = true;
  restart.style.display = 'inline';
}

// Événements
btn.addEventListener('click', guess);
hintBtn.addEventListener('click', () => {
  msg.textContent = `Indice : ${sequence[current].hint}`;
});
restart.addEventListener('click', init);

// Démarrage
init();

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
      msg.textContent = `Pendu ! Le mot était : ${sequence[current].word}`;
      finishRound(false);
    }
  }
}

function endGame() {
  clearInterval(timer);
  const success = (found === totalRounds && timeLeft > 0);
  msg.textContent = success
    ? '👏 Bravo ! Vous avez trouvé les 3 mots.'
    : `⏱️ Temps écoulé ! Mots trouvés : ${found}.`;
  input.disabled = true; btn.disabled = true;
  restart.style.display = 'inline';
}

// Événements
btn.addEventListener('click', guess);
hintBtn.addEventListener('click', () => {
  msg.textContent = `Indice : ${sequence[current].hint}`;
});
restart.addEventListener('click', init);

// Démarrage
init();
