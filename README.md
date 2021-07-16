## Что это?

**App.columns** — это [npm-пакет](https://www.npmjs.com/package/app.columns)
для построения таблиц в консоли.

## Пример #1

```js
const columns = require('app.columns');

let log = columns.col(
    [
        'Ошибка:',
        'Путь:'
    ]
);
console.log(log.join(''));
```

Результат в консоли:

![](https://github.com/classtype/app.columns/raw/master/examples/example1.png)


## Пример #2

```js
const columns = require('app.columns');

let log = columns.col(
    [
        'Ошибка:',
        'Путь:'
    ], {
        align:'right'
    }
);
console.log(log.join(''));
```

Результат в консоли:

![](https://github.com/classtype/app.columns/raw/master/examples/example2.png)


## Пример #3

```js
const columns = require('app.columns');

let log = columns.col(
    [
        'Ошибка:',
        'Путь:'
    ], {
        color:'black', align:'right'
    }
);
console.log(log.join(''));
```

Результат в консоли:

![](https://github.com/classtype/app.columns/raw/master/examples/example3.png)


## Пример #4

```js
const columns = require('app.columns');

let log = columns.cols([
    columns.col(
        [
            'Ошибка:',
            'Путь:'
        ], {
            color:'red', align:'right', nobr:true
        }
    ),
    columns.col(
        [
            '"obj.noInitMethod is not a function"',
            '"/home/examples/example.js"'
        ], {
            color:'black', align:'left', nobr:false
        }
    )
]);
console.log(log.join(''));
```

Результат в консоли:

![](https://github.com/classtype/app.columns/raw/master/examples/example4.png)


## Пример #5

```js
const columns = require('app.columns');

let log = columns([
    ['Ошибка:', '"obj.noInitMethod is not a function"'],
    ['Путь:', '"/home/examples/example.js"'],
    ['Примечание:', '"Какой-то текст."']
], {
    color: ['red', 'black'],
    align: ['right', 'left']
});
console.log(log);
```

Результат в консоли:

![](https://github.com/classtype/app.columns/raw/master/examples/example5.png)


## Пример #6

```js
const columns = require('app.columns');

let log = columns([
    ['Ошибка:', 'Не верно указан пусть к файлу или каталогу:'],
    ['\n', '\n"/home/examples/file_no_found.js"'],
    ['Путь:', '"/home/examples/example.js"']
], {
    color: ['red', 'black'],
    align: ['right', 'left']
});
console.log(log);
```

Результат в консоли:

![](https://github.com/classtype/app.columns/raw/master/examples/example6.png)


## Установка

```
$ npm i app.columns
```
