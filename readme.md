# Grunt-bolireplate

Grunt LESS Template - шаблон для быстрого старта работы над новым проектом.

Основные функции:
    - Автообновление страницы при изменении файлов;
    - Компиляция LESS файлов;
    - Минификация CSS;
    - Добавление нужных префиксов для CSS свойств;
    - Объединение и минификация JavaScript файлов.

По умолчанию используються такие плагины:
- [grunt-contrib-watch] - плагин для отслежывания изменений в файлах, и перезагрузки страницы (LiveReload);
- [grunt-contrib-less] - плагин для компиляции LESS файлов;
- [grunt-csso] - библиотека для минификации и сжатия CSS;
- [grunt-autoprefixer] - библиотека которая проставляет нужные префиксы для новых CSS свойств;
- [grunt-contrib-uglify] - библиотека для минификации JavaScript файлов.

### Установка
У вас должен быть установлен [Node.js]
```sh
$ mkdir dirname
$ cd dirname
$ git clone git@github.com:stfalcon-studio/grunt-boilerplate.git .
$ npm install
$ grunt
```
### Версия
0.9.0

[node.js]:http://nodejs.org/
[grunt-contrib-watch]:https://github.com/gruntjs/grunt-contrib-watch
[grunt-contrib-less]:https://github.com/gruntjs/grunt-contrib-less
[grunt-csso]:https://github.com/t32k/grunt-csso
[grunt-contrib-uglify]:https://github.com/gruntjs/grunt-contrib-uglify
[grunt-autoprefixer]:https://github.com/nDmitry/grunt-autoprefixer