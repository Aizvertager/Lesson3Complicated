// 1.a
let lang = prompt('Введите ru или en');

if (lang == 'ru') {
    alert('пн, вт, ср, чт, пт, сб, вс');
} else if (lang == 'en') {
    alert('mn, ts, wd, th, fr, st, sn');
} else {
    alert('Вы ввели не тот текст');
}

//1.b

switch (lang) {
    case 'ru': 
        alert('пн, вт, ср, чт, пт, сб, вс'); 
        break;
    case 'en':
        alert('mn, ts, wd, th, fr, st, sn');
        break;
    default: 
        break;
}

//1.c
let arr = {
    'ru' : ['пн, вт, ср, чт, пт, сб, вс'],
    'en' : ['mn, ts, wd, th, fr, st, sn']
};

alert(arr[lang]);

//2
let namePerson = prompt('Введите ваше имя');
namePerson == 'Артем' ? console.log('Директор') :
namePerson == 'Максим' ? console.log('Преподаватель') : console.log('Студент');

