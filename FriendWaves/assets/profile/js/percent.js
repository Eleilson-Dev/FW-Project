// seletores circulo de progresso
const circleProgres = document.querySelector('.circleProgres1');
const circleProgres2 = document.querySelector('.circleProgres2');
const circleProgres3 = document.querySelector('.circleProgres3');
const circleProgres4 = document.querySelector('.circleProgres4');
const circleProgres5 = document.querySelector('.circleProgres5');
// seletores de percentuais
const numberPercent1 = document.querySelector('.number-percent1');
const numberPercent2 = document.querySelector('.number-percent2');
const numberPercent3 = document.querySelector('.number-percent3');
const numberPercent4 = document.querySelector('.number-percent4');
const numberPercent5 = document.querySelector('.number-percent5');

const values = [90, 86, 73, 69, 76];

const percent1 = () => {
    const number = values[0];
    circleProgres.style.strokeDashoffset = 189 - (189 * number) / 100;

    let counter = 0;

    const timer = setInterval(() => {
        counter++;
        if (counter === number) {
            clearInterval(timer);
        }
        numberPercent1.innerHTML = `${counter} <span>%</span>`;
    }, 25);
};
const percent2 = () => {
    const number = values[1];
    circleProgres2.style.strokeDashoffset = 189 - (189 * number) / 100;

    let counter = 0;

    const timer = setInterval(() => {
        counter++;
        if (counter === number) {
            clearInterval(timer);
        }
        numberPercent2.innerHTML = `${counter} <span>%</span>`;
    }, 25);
};
const percent3 = () => {
    const number = values[2];
    circleProgres3.style.strokeDashoffset = 189 - (189 * number) / 100;

    let counter = 0;

    const timer = setInterval(() => {
        counter++;
        if (counter === number) {
            clearInterval(timer);
        }
        numberPercent3.innerHTML = `${counter} <span>%</span>`;
    }, 25);
};
const percent4 = () => {
    const number = values[3];
    circleProgres4.style.strokeDashoffset = 189 - (189 * number) / 100;

    let counter = 0;

    const timer = setInterval(() => {
        counter++;
        if (counter === number) {
            clearInterval(timer);
        }
        numberPercent4.innerHTML = `${counter} <span>%</span>`;
    }, 25);
};
const percent5 = () => {
    const number = values[4];
    circleProgres5.style.strokeDashoffset = 189 - (189 * number) / 100;

    let counter = 0;

    const timer = setInterval(() => {
        counter++;
        if (counter === number) {
            clearInterval(timer);
        }
        numberPercent5.innerHTML = `${counter} <span>%</span>`;
    }, 25);
};

const load = () => {
    percent1();
    percent2();
    percent3();
    percent4();
    percent5();
};
