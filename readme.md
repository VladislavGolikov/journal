# Универсальный макет для печати оперативных журналов аппаратной телевидения

Этот проект автоматически генерирует макет оперативного журнала и выводит его на печать.
Макет генерируется согласно текущей дате, но дата может быть изменена вручную.
Макет может иметь одну или несколько страниц для печати. Конфигурация и содержимое
таблиц макета находятся в конфигурационном файле в формате
[JSON](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON).

## Приступить к работе

Использовать макет для печати `как есть` возможно двумя способами: либо
[oneline](https://vladislavgolikov.github.io/journal/), либо просто скопировав
содержимое ветки [forpages](https://github.com/VladislavGolikov/journal/tree/forpages)
 настоящего проекта на локальный диск.<br>
Для использования модифицированного варианта макета следует скопировать на локальный
диск содержимое ветки [master](https://github.com/VladislavGolikov/journal/tree/master).
 Затем сделать соответствующие изменения в структуре и содержимом таблиц в файле
 `config.json`. И далее пересобрать проект, например, в [parcel](https://github.com/parcel-bundler/parcel).


### Зависимости

Готовый проект не имеет никаких зависимостей, для его запуска достаточно любого современного браузера.

## Использование

Макет по умолчанию открывается на первой странице журнала, согласно текущей дате:

<img src="examples/page1-1600.jpg" alt="первая страница журнала" width="320" >

при помощи кнопки листать  ![листать](examples/page.svg)


## Тестирование

Тестирование проводилось вручную, были испытаны следующие комбинации:
- [X] В рабочем каталоге находилось `более одного файла` с расширением .env
- [X] В рабочем каталоге не было `ни одного файла` с расширением .env
- [X] Файл с расширением .env был `защищен от записи`
- [X] В файле с расширением.env было `постороннее содержимое`

Также в проекте установлена заглушка для автоматического тестирования [JEST](https://github.com/facebook/jest),
но ввиду отстутствия разветвленной логики, автоматическое тестирование излишне.


## Версии

Для управления версиями в проекте используется [SemVer](http://semver.org/).
 Доступные версии [здесь](https://github.com/VladislavGolikov/SwitchingEnvironmentFiles/tags).

## Автор

**Владислав Голиков** - [Vladislav Golikov](https://github.com/VladislavGolikov)

## Лицензия

Этот проект находится под лицензией MIT. Подробнее: [LICENSE.md](LICENSE.md)

<!---
## Благодарности
будут потом... пока рано

* Hat tip to anyone whose code was used
* Inspiration
* etc
-->
