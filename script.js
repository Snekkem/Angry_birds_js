let Tests = [
    {
        question: 'Что из этого не является косметическим средством?',
        answers: ['Помада', 'Татуировка', 'Крем', 'Пудра'],
        correctAnswer: 'Татуировка',
        CurrentLvl: '1'
    },
    {
        question: 'Кто, в конце концов, скушал Колобка?',
        answers: ['Дед', 'Баба', 'Заяц', 'Лиса'],
        correctAnswer: 'Лиса',
        CurrentLvl: '2'
    },
    {
        question: 'Какой шахматной фигуры не существует?',
        answers: ['Пешка', 'Конь', 'Король', 'Дама'],
        correctAnswer: 'Дама',
        CurrentLvl: '3'
    },
    {
        question: 'Что означает буква «О» в аббревиатуре ОРТ?',
        answers: ['Олигархическое', 'Объективное', 'Общественное', 'Однообразное'],
        correctAnswer: 'Общественное',
        CurrentLvl: '4'
    },
    {
        question: 'Главный герой в романе Ф. И. Достоевского «Преступление и наказание»?',
        answers: ['Расторгуев', 'Чикатило', 'Тумбочкин', 'Раскольников'],
        correctAnswer: 'Раскольников',
        CurrentLvl: '5'
    },
    {
        question: 'В состав любого органического вещества входит…',
        answers: ['Кислород', 'Углерод', 'Водород', 'Азот'],
        correctAnswer: 'Углерод',
        CurrentLvl: '6'
    },
    {
        question: 'Какое слово здесь лишнее?',
        answers: ['Автор', 'Товар', 'Отвар', 'Ворот'],
        correctAnswer: 'Ворот',
        CurrentLvl: '7'
    },
    {
        question: 'Как назывался самый младший гражданский чин, присваивавшийся согласно Табели о рангах?',
        answers: ['Синодский регистратор', 'Провинциальный секретарь', 'Коллежский регистратор', 'Кабинетский регистратор'],
        correctAnswer: 'Коллежский регистратор',
        CurrentLvl: '8'
    },
    {
        question: 'Кто изобрел громоотвод?',
        answers: ['Франклин', 'Рузвельт', 'Вашингтон', 'Линкольн'],
        correctAnswer: 'Франклин',
        CurrentLvl: '9'
    },
    {
        question: 'Как в России в 15-17вв. назывались феодально-зависимые люди, не имевшие своего хозяйства, жившие и работавшие во дворах крестьян или посадских людей?',
        answers: ['Дворовые', 'Захребетники', 'Нахлебники', 'Бестягольные'],
        correctAnswer: 'Захребетники',
        CurrentLvl: '10'
    },
    {
        question: 'В каком городе находится штаб-квартира Microsoft?',
        answers: ['Нью-Йорк', 'Ричмонд', 'Новый Орлеан', 'Сиэтл'],
        correctAnswer: 'Ричмонд',
        CurrentLvl: '11'
    },
    {
        question: 'При каком правителе к России была присоединена территория Финляндии?',
        answers: ['Петр I', 'Екатерина II', 'Павел I', 'Александр I'],
        correctAnswer: 'Александр I',
        CurrentLvl: '12'
    },
    {
        question: 'Ричард Львиное Сердце был пленен во время?',
        answers: ['Крестового похода', 'Столетней войны', 'Войны алой и белой розы', 'Войны за независимость'],
        correctAnswer: 'Крестового похода',
        CurrentLvl: '13'
    },
    {
        question: 'Известно, что в кириллице многие буквы имели и цифровое значение. Чему равна буква К(како)?',
        answers: ['10', '20', '70', '90'],
        correctAnswer: '20',
        CurrentLvl: '14'
    },
    {
        question: 'Кто такой «молотоглав»?',
        answers: ['Рыба', 'Птица', 'Змея', 'Насекомое'],
        correctAnswer: 'Птица',
        CurrentLvl: '15'
    }];

let answers = document.querySelectorAll('#answers a section span');
let mark = document.querySelector('.mark');
let i = 0;
let arrLi = $('#ulLvl li');

let question = document.querySelector('.question h2');
let arrAnswerEl = $('#answers section span');

$('#answers a section').hover(
    function () {
        $(this).css({
            'background': 'rgb(207, 113, 36)',
            'color': '#000'
        });
    }, function () {
        $(this).css({
            'background': 'rgb(20, 42, 139)',
            'color': '#fff'
        });
    }
);

$('#answers a section').click(function () {
    if ($(this).find('span').text() == Tests[i].correctAnswer) {
        $(this).css({
            'background': 'green'
        });
        setTimeout(() => {
            $(this).css({
                'background': 'rgb(20, 42, 139)',
                'color': '#fff'
            });

            if (Tests[i].CurrentLvl == '15') {
                $('#win').html(`You win!`);
                $("#win").dialog();
                arrLi[15 - Tests[i].CurrentLvl].classList.remove('mark');
                i = 0;
                arrLi[15 - (Tests[i].CurrentLvl)].classList.add('mark');

                question.innerHTML = Tests[i].question;
                arrAnswerEl[0].textContent = Tests[i].answers[0];
                arrAnswerEl[1].textContent = Tests[i].answers[1];
                arrAnswerEl[2].textContent = Tests[i].answers[2];
                arrAnswerEl[3].textContent = Tests[i].answers[3];
            } else {
                arrLi[15 - Tests[i++].CurrentLvl].classList.remove('mark');
                arrLi[15 - (Tests[i].CurrentLvl)].classList.add('mark');

                question.innerHTML = Tests[i].question;
                arrAnswerEl[0].textContent = Tests[i].answers[0];
                arrAnswerEl[1].textContent = Tests[i].answers[1];
                arrAnswerEl[2].textContent = Tests[i].answers[2];
                arrAnswerEl[3].textContent = Tests[i].answers[3];
            }

            $('.hide-diagram').css({
                'display': 'none'
            });
        }, 1000);
    }
    else {
        $(this).css({
            'background': 'red'
        });
        setTimeout(() => {
            $(this).css({
                'background': 'rgb(20, 42, 139)',
                'color': '#fff'
            });
            $('#lose').html(`You lose!`);
            $("#lose").dialog();
            arrLi[15 - Tests[i].CurrentLvl].classList.remove('mark');
            i = 0;
            question.innerHTML = Tests[i].question;
            arrAnswerEl[0].textContent = Tests[i].answers[0];
            arrAnswerEl[1].textContent = Tests[i].answers[1];
            arrAnswerEl[2].textContent = Tests[i].answers[2];
            arrAnswerEl[3].textContent = Tests[i].answers[3];
            arrLi[15 - (Tests[i].CurrentLvl)].classList.add('mark');
            $('.hide-diagram').css({
                'display': 'none'
            });
            $('.hide-help').removeClass('hide-help');
        }, 100);
    }
    $('.hide').removeClass('hide');
})


$('.help div').click(function () {
    switch ($(this).data('help')) {
        case '50/50':
            let correctIndex = Tests[i].answers.indexOf(Tests[i].correctAnswer);
            let arrIndex = [0, 1, 2, 3];
            arrIndex.splice(arrIndex.indexOf(arrIndex[correctIndex]), 1);
            let randIndex = Math.floor((Math.random() * arrIndex.length) + 0);
            arrIndex.splice(arrIndex.indexOf(arrIndex[randIndex]), 1);
            arrAnswerEl[arrIndex[0]].closest('section').classList.add('hide');
            arrAnswerEl[arrIndex[1]].closest('section').classList.add('hide');
            break;
        case 'hall':
            let k = 0;
            let rightAnsw = Tests[i].answers.indexOf(Tests[i].correctAnswer);
            let arrCalk = $('#diagram ul li')
            let one = Math.floor(Math.random() * (70 - 50 + 1)) + 50;

            $(`#diagram-${rightAnsw} .fill`).css({
                'height': `${one * 2}`
            });
            $(`#diagram-${rightAnsw} .info span`).text(one + '%');

            let two = Math.floor(Math.random() * ((100 - one) - 0 + 1)) + 0;
            let three = Math.floor(Math.random() * ((100 - one - two) - 0 + 1)) + 0;
            let four = 100 - one - two - three;

            let arrRes = [one, two, three, four];

            arrCalk.splice(rightAnsw, 1);

            for (let x = 0; x < arrCalk.length; x++) {
                let str = arrCalk[k++].id;
                $(`#diagram-${str[str.length - 1]} .fill`).css({
                    'height': `${arrRes[k] * 2}`,
                });
                $(`#diagram-${str[str.length - 1]} .info span`).text(arrRes[k] + '%');
            }

            $('.hide-diagram').css({
                'display': 'block'
            });
            break;
        case 'call':
            let arrName = ['Никита', 'Антон', 'Александр', 'Екатерина'];
            let randomed = Math.floor((Math.random() * arrName.length) + 0);
            $('#dialog').html(`${arrName[randomed]} на связи<br><br>Я думаю это ответ: ${Tests[i].correctAnswer}`);
            $("#dialog").dialog();
            break;
    }
    $(this).addClass('hide-help');
});

function randIntExcep(min, max, exp) {
    var n;
    while (true) {
        if ((n = Math.floor(Math.random() * (max - min + 1)) + min) != exp)
            return n;
    }
}