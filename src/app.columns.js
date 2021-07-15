//--------------------------------------------------------------------------------------------------

const colors = require('colors/safe');

/*--------------------------------------------------------------------------------------------------
|
| -> Таблица
|
|-------------------------------------------------------------------------------------------------*/

const Columns = function(array, config) {
// Аргументы
    let args = [];
    
// Столбцы
    for (let r = 0; r < array[0].length; r++) {
        let words = [];
    
        for (let i = 0; i < array.length; i++) {
            words[i] = array[i][r];
        }
        
        let obj = {};
        obj.color = config.color[r];
        obj.align = config.align[r];
        obj.nobr = (r != array[0].length - 1 ? true : false);
        
        args[r] = Columns.col(words, obj);
    }
    
    return Columns.cols(args).join('');
};

/*--------------------------------------------------------------------------------------------------
|
| -> Столбец
|
|-------------------------------------------------------------------------------------------------*/

Columns.col = (words, config) => {
// Конфиг по умолчанию
    config = config || {
        color: 'red',
        align: 'left',
        nobr: false
    };
    
// Перенос строки
    let breakLine = config.nobr ? '' : '\n';
    
// Цвет по умолчанию
    let bgColor = 'bgRed';
    
// Красный
    if (config.color == 'red') {
        bgColor = 'bgRed';
    }
    
// Черный
    if (config.color == 'black') {
        bgColor = 'bgBlack';
    }
    
// Самая длинная строка
    let maxlength = words.reduce((r,s) => r > s.length ? r : s.length, 0);
    
    let lines = [];
    let spaceLeft = ' ';
    let spaceRight = ' ';
    let j = 0;
    
    for (let i = 0; i < words.length + 1; i++) {
    // Верхний бордер
        if (i == 0) {
            lines.push(colors[bgColor](new Array(maxlength + 3).join(' ')) + breakLine);
        }
        
    // Ячейка с текстом
        else {
        // Отступ слева
            if (config.align == 'left') {
                spaceRight = new Array(maxlength - words[j].length + 2).join(' ');
            }
            
        // Отступ справа
            if (config.align == 'right') {
                spaceLeft = new Array(maxlength - words[j].length + 2).join(' ');
            }
            
        // Текст
            lines.push(
                colors[bgColor](spaceLeft + words[j] + spaceRight + breakLine)
            );
            
        // Нижний бордер
            lines.push(colors[bgColor](new Array(maxlength + 3).join(' ')) + breakLine);
            j++;
        }
    }
    
    return lines;
};

/*--------------------------------------------------------------------------------------------------
|
| -> Столбцы
|
|-------------------------------------------------------------------------------------------------*/

Columns.cols = (array) => {
    let lines = [];
    
    for (let i = 0; i < array[0].length; i++) {
        lines[i] = '';
        
        for (let j = 0; j < array.length; j++) {
            lines[i] += array[j][i];
        }
    }
    
    return lines;
};

//--------------------------------------------------------------------------------------------------

module.exports = Columns;

//--------------------------------------------------------------------------------------------------