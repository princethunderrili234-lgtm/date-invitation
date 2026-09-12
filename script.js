let noClickCount = 0;
const noPhrases = [
    "Are you sure, meow?",
    "Better say yes!",
    "Babe please :(",
    "Don't break kitty's heart...",
    "I'm gonna cry meow...",
    "Heart broken <3"
];

let chosenActivity = "McDO";

function goToScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function handleNoClick() {
    const prompt = document.getElementById('no-prompt');
    const yesBtn = document.getElementById('yes-btn');
    
    prompt.innerText = noPhrases[noClickCount % noPhrases.length];
    noClickCount++;
    
    let currentSize = 13 + (noClickCount * 3);
    yesBtn.style.fontSize = currentSize + 'px';
    yesBtn.style.padding = (12 + noClickCount * 2) + 'px ' + (20 + noClickCount * 3) + 'px';
}

function selectActivity(btn) {
    document.querySelectorAll('.activity-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    chosenActivity = btn.innerText;
}

function saveDate() {
    const dateVal = document.getElementById('date-input').value;
    if(!dateVal) {
        alert("Please pick a date first!");
        return;
    }
    window.selectedDate = dateVal;
    goToScreen('screen-4');
}

function lockInDate() {
    document.getElementById('summary-text').innerHTML = `DATE: ${window.selectedDate}<br>ACTIVITY: ${chosenActivity}`;
    goToScreen('screen-5');
}

function openNote() {
    document.getElementById('love-modal').style.display = 'block';
}

function closeNote() {
    document.getElementById('love-modal').style.display = 'none';
}