import {CreateCellNamed} from './createcell.js';

import {journalShift, journalReceiver, monthDuration, defaultPage} from './config.json';

import htmlLogo from 'bundle-text:./logo.pug';

export class CreateTableGeneral {
    constructor() {
        this.placeForStylize=document.querySelector('.allthereis');
        this.htmlLogo=htmlLogo; /* шаблон логотипа */
        this.date=new Date();
        this.currentMonth=this.date.getMonth(); /* месяц по дефолту вначале */
        this.currentYear=this.date.getFullYear(); /* год по дефолту вначале */

        this.currentJournal=journalReceiver; /* по умолчанию текущий журнал - показаний */
        this.updateJournal();

        this.clearPage();
        this.createGridStyle();
        this.createTableHead();
        this.createTableSimple();
        this.createLogo();
    }

    updateJournal() {
        this.logopositionX=this.currentJournal.logo[0]; /* грид позиция логотипа по Х */
        this.logopositionY=this.currentJournal.logo[1]; /* грид позиция логотипа по Y */
        this.title=this.currentJournal.title;
        this.checkTitle(); /* изменение заголовка журнала */
        this.page=defaultPage;
        /* массив из массивов, где:
        название клетки, его x-grid начало, его x-grid конец, его y-grid начало, его y-grid конец, текст для заполнения ячеек.
        И сам при этом элемент массива страниц! */
        this.layoutGeneral=this.currentJournal.layout; /* весь массив макетов */
        this.maxPage=this.layoutGeneral.length; /* максимум страниц - количество макетов страниц */
        this.checkPageButton(); /* кнопка сереет, если страница одна */
        this.headerRowsHeight=this.currentJournal.headerRowsHeight; /* разметка строк */
        this.headerColumnsWidthGeneral=this.currentJournal.headerColumnsWidth; /* весь массив разметки столбцов */
        this.headerRows=this.headerRowsHeight.length; /* столько строк в заголовке таблицы */
        this.updateLayout();
    }

    clearPage() {
        this.placeForStylize.innerHTML='';
    }

    createGridStyle() { /* разметка грида */

        this.placeForStylize.style.gridTemplateColumns=this.headerColumnsWidth.join(' ');
        this.placeForStylize.style.gridTemplateRows=`${this.headerRowsHeight.join(' ')} repeat(${this.numOfRows}, 1fr)`;
    }

    createTableHead() {
        this.layout.forEach(function(el){
            if (el[5]==="dateup") {el[0]=`${monthDuration[this.currentMonth][2]} ${this.currentYear} года`} /* формирование даты */
            new CreateCellNamed(el[1],el[2],el[3],el[4],el[0],el[6]);
        },this);
    }

    createTableSimple() { /* создание множества пустых ячеек */
        for (let j=this.headerRows+1; j <= this.numOfRows+this.headerRows; j++) {

            for (let i=1; i <= this.numOfColumns; i++) {
                new CreateCellNamed(i,i+1,j,j+1,`${this.getTextAndClass(i,j-this.headerRows)[0]}`,this.getTextAndClass(i)[1]);
            }
        }
    }

    getTextAndClass(col,day) {
        let output=[];
        this.layout.forEach(function(el){ /* из массива конфига выбираем только столбцы единичной ширины, остальные - игнор */
            if (el[1]==col&&el[2]==col+1) {
                output[0]=el[5];
                output[1]='cellNamed';
                 if (el[5]==="date") { /* если в конфиге помечено, что дата, то меняем строку на дату */
                    output[0]=`${day} ${monthDuration[this.currentMonth][1]} ${this.currentYear}`;
                    output[1]='cellDate';
                }
            }
        },this)
        return output;
    }

    createLogo() {
        this.placeForStylize.insertAdjacentHTML('afterBegin',this.htmlLogo);
        document.querySelector('.logo').style.gridRow=this.logopositionY;
        document.querySelector('.logo').style.gridColumn=this.logopositionX;
    }

    updatePage(page=false,month=0) {

        if (page) {this.page++; if (this.page>=this.maxPage) {this.page=0}} /* циклическая смена страницы */

       this.currentMonth=this.currentMonth+month;
        if (this.currentMonth<0) {this.currentMonth=11; this.currentYear--}; /* переход года назад */
        if (this.currentMonth>11) {this.currentMonth=0; this.currentYear++}; /* переход года вперед */

        this.updateLayout();
        this.clearPage();
        this.createGridStyle();
        this.createTableHead();
        this.createTableSimple();
        this.createLogo();
    }

    updateLayout() {
        this.numOfRows=Number(monthDuration[this.currentMonth][0]); /* перерасчет строк */
        this.layout=this.layoutGeneral[this.page]; /* обновление макета */
        this.headerColumnsWidth=this.headerColumnsWidthGeneral[this.page]; /* обновление разметки столбцов */
        this.numOfColumns=this.headerColumnsWidth.length; /* обновление количества столбцов */
    }

    checkPageButton() {
        const button=document.querySelector('.changePage');
        const caption=document.querySelector('.changePage *');

        if (this.maxPage<=1) {
            button.classList.add('notavailablebutton');
            caption.classList.add('notavailablecaption');
        }else{
            button.classList.remove('notavailablebutton');
            caption.classList.remove('notavailablecaption');
        }
    }

    checkTitle() {
        document.querySelector('title').innerHTML=this.title;
    }

    changeJournal() {
        if (this.currentJournal==journalReceiver) {this.currentJournal=journalShift}else{this.currentJournal=journalReceiver};
        this.updateJournal();
        this.updatePage();
    }
}

