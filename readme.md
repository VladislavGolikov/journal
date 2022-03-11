# Универсальный макет для печати оперативных журналов аппаратной телевидения

Этот проект автоматически генерирует макет оперативного журнала для удобного вывода на печать.
Макет генерируется согласно текущей дате, но дата может быть изменена вручную.
Макет может отображать один или несколько журналов. Отображение текущего - также может быть изменено вручную.
Внутри макета может быть одна или несколько страниц для печати. Отображение текущей страницы - также может быть
изменено вручную. Конфигурация и содержимое таблиц макета находятся в конфигурационном файле в формате
[JSON](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON).

## Приступить к работе

Использовать макет для печати `как есть` возможно либо непосредственно с сервиса
 [GitHub Pages](https://vladislavgolikov.github.io/journal/), либо просто скопировав
содержимое ветки [forpages](https://github.com/VladislavGolikov/journal/tree/forpages)
 настоящего проекта на локальный диск.<br>
Для использования модифицированных вариантов макетов следует скопировать на локальный
диск содержимое ветки [master](https://github.com/VladislavGolikov/journal/tree/master).
 Затем сделать соответствующие изменения в структуре и содержимом таблиц в файле
 `config.json`. И далее пересобрать проект, например, в [parcel](https://github.com/parcel-bundler/parcel).


### Зависимости

Готовый проект не имеет никаких зависимостей, для его запуска достаточно любого современного браузера.

## Использование

Макет по умолчанию открывается на первой странице журнала, согласно текущей дате:

<img src="examples/page1-1600.jpg" alt="первая страница журнала" width="400" >

при помощи кнопки `листать`  ![листать](examples/page.svg)  циклически изменяются страницы журнала:

<img src="examples/page3-1600.jpg" alt="другая страница журнала" width="400" >

при помощи кнопок `месяц назад`  ![месяц назад](examples/month-down.svg) и `месяц вперед`  ![месяц вперед](examples/month-up.svg)
можно изменить текущую дату журнала :

<img src="examples/page5-1600.jpg" alt="дата назад" width="400" ><img src="examples/page4-1600.jpg" alt="дата вперед" width="400" >

при помощи кнопки `печать`  ![печать](examples/print.svg)  выбранный макет журнала выводится на печать:

<img src="examples/page2-1600.jpg" alt="печать страницы" width="400" >


## Версии

Для управления версиями в проекте используется [SemVer](http://semver.org/).
 Доступные версии [здесь](https://github.com/VladislavGolikov/journal/tags).

## Автор

**Владислав Голиков** - [Vladislav Golikov](https://github.com/VladislavGolikov)

## Лицензия

Этот проект находится под лицензией MIT. Подробнее: [LICENSE.md](LICENSE.md)
