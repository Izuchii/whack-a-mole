let score = 0;
let activeCell = null;
const feedback = document.querySelector('#feedback');

function getRandomCell() {
    const cells = document.querySelectorAll('.cell');
    return cells[Math.floor(Math.random() * cells?.length)];
}

function setMole() {
    if(activeCell) {
        activeCell.classList.remove('mole');
    }
    activeCell = getRandomCell();
    activeCell.classList.add('mole');
}

document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', () => {
        if(cell === activeCell) {
            score++;
            setMole();
            document.getElementById('score').innerHTML = `Score: ${score}`;
            feedback.innerHTML = 'Hit!';
            setTimeout(() => {feedback.innerHTML = ''}, 1000);
        }
    });
});

setInterval(setMole, 1000);