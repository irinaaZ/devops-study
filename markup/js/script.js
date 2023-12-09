function removePreviousStyles() {
    document.querySelectorAll('div[class^="price-card"]').forEach(function (card) {
        card.style.border = 'none';
        card.classList.remove('price-card--white');
        card.querySelector('span[class^="page__heading"]').classList.remove('page__heading--red');
        card.querySelector('label[class^="page__heading"]').classList.remove('page__heading--red');
    });
}

function handleCardClick(card) {
    const input = card.querySelector('.price-input');
    if (input) {
        removePreviousStyles();
        input.checked = !input.checked;

        if (input.checked) {
            card.style.border = '2px solid #04234F';
            card.classList.toggle('price-card--white');
            card.classList.remove('rice-card--blue');
            card.querySelector('span[class^="page__heading"]').classList.toggle('page__heading--red');
            card.querySelector('label[class^="page__heading"]').classList.toggle('page__heading--red');
        }
    }
}

document.querySelectorAll('div[class^="price-card"]').forEach(function (card) {
    card.addEventListener('click', function () {
        handleCardClick(card);
    });
});