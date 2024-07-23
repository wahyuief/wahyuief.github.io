document.getElementById('recommendation-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (message) {
        const newRecommendation = document.createElement('div');
        newRecommendation.classList.add('recommendation', 'col-4');
        newRecommendation.innerHTML = `<p>“${message}”</p>`;
        if (name) {
            newRecommendation.innerHTML += `<p>- ${name}</p>`;
        }
        document.querySelector('.recommendations-grid').appendChild(newRecommendation);
        document.getElementById('name').value = '';
        document.getElementById('message').value = '';
        document.getElementById('popup').style.display = 'flex';
    } else {
        alert('Please enter a message.');
    }
});

document.querySelector('#popup .close').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('popup')) {
        document.getElementById('popup').style.display = 'none';
    }
});

const backToTopButton = document.getElementById('back-to-top');

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});