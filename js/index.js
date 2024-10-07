const heading = document.getElementById('heading');
const content = document.getElementById('content');

const text = heading.innerText;
heading.innerText = '';

let index = 0;

function revealLetter() {
    if (index < text.length) {
        const letter = document.createElement('span');
        letter.innerText = text[index];
        letter.style.color = 'orange';
        heading.appendChild(letter);
        index++;
        setTimeout(revealLetter, 200);
    } else {
        content.classList.remove('hidden');
        content.style.display = 'block'; 
    }
}


setTimeout(() => {
    heading.classList.add('reveal'); 
    revealLetter();
}, 500);
