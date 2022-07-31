const inputAnswer = document.querySelector('.input-answer');
const answerText = document.querySelector('.answer-text');

window.addEventListener('keydown', (e) => {
    if(e.keyCode === 13 && inputAnswer.value !== '') {
        // answerText.innerHTML = inputAnswer.value;
        // inputAnswer.value = '';

        fetch(`https://api.simsimi.net/v2/?text=${encodeURIComponent(inputAnswer.value)}&lc=vn`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            answerText.innerHTML = data.response.success;
        })
    }
})