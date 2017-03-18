# preloader.css3

[![Package Quality](http://npm.packagequality.com/badge/gulp-preloader.css3.png)](http://packagequality.com/#?package=gulp-preloader.css3)

[![Package Quality](http://npm.packagequality.com/shield/gulp-preloader.css3.svg)](http://packagequality.com/#?package=gulp-preloader.css3)  ![](https://david-dm.org/yarkovaleksei/preloader.css3.svg)

[Демонстрация работы](https://yarkovaleksei.github.io/preloader.css3)

**Установка:**
```bash
$ bower install preloader.css3 --save
#или так
$ npm install preloader.css3 --save
```

**Подключение (перед закрывающим тегом head):**
```html
<link rel="stylesheet" href="bower_components/preloader.css3/dist/preloader.css">
<script src="bower_components/preloader.css3/dist/preloader.js"></script>
# или
<link rel="stylesheet" href="node_modules/preloader.css3/dist/preloader.css">
<script src="node_modules/preloader.css3/dist/preloader.js"></script>
```

**И сразу после открывающего тега body вызываем функцию preloaderCSS3:**
```html
<script>preloaderCSS3("Loading application... Please wait");</script>
```

Функция **preloaderCSS3** принимает один аргумент. Это сообщение, которое будет выведено на экране загрузки.

Если функцию не вызвать, то прелоадер не скроется после загрузки страницы.

