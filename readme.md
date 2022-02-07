# Универсальный макет для печати оперативных журналов аппаратной телевидения

Этот проект автоматически генерирует макет оперативного журнала и выводит его на печать.
Макет генерируется согласно текущей дате, но дата может быть изменена вручную.
Макет может иметь одну или несколько страниц для печати. Конфигурация и содержимое
таблиц макета находятся в конфигурационном файле в формате
[JSON](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON).

## Приступить к работе

Для запуска скрипта следует использовать в целевом проекте команду`npm run` со
 значением `sw` (сокращение от switch). При этом открывается новое окно командной
 строки, в котором показывается предыдущее и установленное значение переменной среды.
  По прошествии 5 секунд окно закрывается.<br>
 Таким образом, каждый новый запуск команды:
 ```
 npm run sw
 ```
будет переключать переменную среды в соответствующее значение.

<img src="examples/development.jpg" alt="установлено в production" width="400" > <img src="examples/production.jpg" alt="установлено в production" width="400" >

### Зависимости

Для более наглядного состояния работы скрипта используется пакет [colors](https://github.com/Marak/colors.js), который
раскрашивает командную строку.<br>


При `успешной работе` командная строка будет иметь такой вид:<br><br>
<img src="examples/command_line1.jpg" alt="командная строка раскрашена зеленым" width="320" ><br><br>
Если `что-то пошло не так`, то вид будет такой:<br><br>
<img src="examples/command_line2.jpg" alt="командная строка раскрашена красным" width="320" ><br><br>



### Установка

Рекомендуется простая установка командой:
```
npm install switching-environment-files
```

## Тестирование

Тестирование проводилось вручную, были испытаны следующие комбинации:
- [X] В рабочем каталоге находилось `более одного файла` с расширением .env
- [X] В рабочем каталоге не было `ни одного файла` с расширением .env
- [X] Файл с расширением .env был `защищен от записи`
- [X] В файле с расширением.env было `постороннее содержимое`

Также в проекте установлена заглушка для автоматического тестирования [JEST](https://github.com/facebook/jest),
но ввиду отстутствия разветвленной логики, автоматическое тестирование излишне.
<!---
### Break down into end to end tests

Explain what these tests test and why)

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```
-->
<!---
## Развертывание
пока пункт не нужен
Add additional notes about how to deploy this on a live system
-->
<!---
## Создано с помощью
собственно пока список пуст...

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds
-->
<!---
## Contributing Содействие...

пока обойдемся без этого...

Please read [CONTRIBUTING.md](ссылка на файл)
-->
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
