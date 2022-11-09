export function renderBaby(baby) {
    const babyEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const emojiEl = document.createElement('p');
    const hungerEl = document.createElement('p');

    babyEl.classList.add('baby');
    nameEl.textContent = baby.name;

    hungerEl.textContent = baby.hunger < 0 ? 0 : baby.hunger;
    hungerEl.id = `baby-hp-${baby.id}`;

    emojiEl.id = `baby-${baby.id}`;
    if (baby.hunger === 3) {
        emojiEl.textContent = '😭';
    } else if (baby.hunger === 2) {
        emojiEl.textContent = '😢';
    } else if (baby.hunger === 1) {
        emojiEl.textContent = '🥺';
    } else if (baby.hunger === 0) {
        emojiEl.textContent = '👶';
    }

    if (baby.hunger < 1) {
        babyEl.classList.add('fed');
    }

    babyEl.append(nameEl, emojiEl, hungerEl);

    return babyEl;
}
