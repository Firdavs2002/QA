function formulIMT(m, p) {
    return Math.floor((m / (p ** 2)) + 1)
}

function showData(showEl, data) {
    showEl.textContent = `ИМТ = ${data}`;
}

let sec = 0, unicUnd;

setInterval(() => {
    ++sec
    console.log(sec);
    console.log(unicUnd);
}, 1000);

const formEl = document.querySelector('.form-control'),
      femaleEl = formEl.querySelector('.female'),
      maleEl = formEl.querySelector('.male'),
      weightEl = formEl.querySelector('.weight'),
      growthEl = formEl.querySelector('.growth'),
      ageEl = formEl.querySelector('.age'),
      result = formEl.querySelector('.result');

formEl.addEventListener('submit', evt => {
    evt.preventDefault();
    
    
    const weight = weightEl.value,
          growth = growthEl.value;

    if (+weight < 10) weightEl.setCustomValidity("Вес – должен быть более 10 кг");

    const dataForm = Number.isNaN(formulIMT(+weight, +growth)) ? "Ошибка, ожидалось число" : formulIMT(+weight, +growth);
    if (!Number.isNaN(dataForm)) {
        result.classList.add('alert-danger');
        showData(result, dataForm);
        return;
    }
    result.classList.remove('alert-danger');
    showData(result, dataForm);
});

growthEl.addEventListener('invalid', evt => {
    const { value } = evt.target;
    
    if (growthEl.validity.patternMismatch) {
        if (+value < 160 && +value > 0) {
            growthEl.setCustomValidity("Рост не может быть меньше 160 см");
            return;
        }
        growthEl.setCustomValidity("Неверно указены данные");
    } else if (growthEl.validity.valueMissing) {
        growthEl.setCustomValidity("Это поле объязательно");
        return;
    }
    else {
        growthEl.setCustomValidity("");
        growthEl.validity.customError = false;
        return
    }
}, false);