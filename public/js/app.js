const formulIMT = (m, p) => Math.floor(m / ((p / 100) ** 2)) + 1

function showData(showEl, data, err = false) {
    const { valid } = err || false;

    if (valid === "valid-weight")
        return showEl.textContent = `Вес – должен быть более 10 кг.`;
    
    if (valid === "valid-growth")
        return showEl.textContent = `Рост – не менее 160 см.`;
    
    return showEl.textContent = `ИМТ = ${data}`;
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

    const [newWeight] = weight.match(/\d+/),
          [newGrowth] = growth.match(/\d+/);

    if (newWeight < 10 && newWeight > 0) {
        result.classList.add('alert-danger');
        showData(result, dataForm, {valid: 'valid-weight'});
        return;
    }
    
    if (newGrowth < 160) {
        result.classList.add('alert-danger');
        showData(result, dataForm, {valid: 'valid-growth'});
        return;
    }

    const dataForm = formulIMT(+newWeight, +newGrowth);

    result.classList.remove('alert-danger');
    result.classList.add('alert-primary');
    showData(result, dataForm);
    return;    
});