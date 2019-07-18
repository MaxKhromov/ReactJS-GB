//TASK 1
function loop(times = 0, cb = 'null') {
    for (let i = 1; i <= times; i++) {
        if (typeof cb === 'function') {
            cb(i);
        } else {
            console.log(`Не указана функция для выполнения :( cb= ${cb}`);
            break;
        }
    }
}

function foo(n = 'null') {
    console.log(`Функция выполняется! N = ${n}`);
}

loop(5, (n) => {
    foo(n);
});

//TASK 2

function calculateArea(amountOfFigureSides, figureSidesLength) {
    const result = {
        figure: `Фигура: ${amountOfFigureSides}-угольник`,
        area: `Площадь фигуры: ${((amountOfFigureSides * Math.pow(figureSidesLength, 2)) / (4*Math.tan(Math.PI/amountOfFigureSides))).toFixed(2)}`,
        input: `Входные параметры: Количество сторон - ${amountOfFigureSides}, Длина сторон - ${figureSidesLength}`,
    }
    console.table(result);
}

calculateArea(6, 5);

//TASK 3