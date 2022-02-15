
import {CreateCell, CreateCellNamed} from './createcell.js';


import {journalShift, journalReceiver, monthDuration, defaultPage} from './config.json';


const {headerRowsHeight, headerColumnsWidth, layout, logo, title}=journalShift; /*journalShift или journalReceiver*/



import htmlLogo from 'bundle-text:./logo.pug';


export class CreateTableGeneral {
    constructor() {
        this.placeForStylize=document.querySelector('.allthereis');
        this.htmlLogo=htmlLogo;
        this.logopositionX=logo[0]; /* грид позиция логотипа по Х */
        this.logopositionY=logo[1]; /* грид позиция логотипа по Y */
        this.title=title;
        this.checkTitle(); /* изменение заголовка журнала */
        this.date=new Date();
        this.currentMonth=this.date.getMonth(); /* месяц по дефолту вначале */
        this.currentYear=this.date.getFullYear(); /* год по дефолту вначале */
        this.page=defaultPage;

        /* массив из массивов, где:
        название клетки, его x-grid начало, его x-grid конец, его y-grid начало, его y-grid конец, текст для заполнения ячеек.
        И сам при этом элемент массива страниц! */
        this.layoutGeneral=layout; /* весь массив макетов */
        this.layout=this.layoutGeneral[this.page]; /* текущий макет */
        this.maxPage=this.layoutGeneral.length; /* максимум страниц - количество макетов страниц */
        this.checkPageButton(); /* кнопка сереет, если страница одна */
        this.headerRowsHeight=headerRowsHeight; /* разметка строк */
        this.headerColumnsWidthGeneral=headerColumnsWidth; /* весь массив разметки столбцов */
        this.headerColumnsWidth=this.headerColumnsWidthGeneral[this.page]; /* текущая разметка столбцов */
        this.headerRows=this.headerRowsHeight.length; /* столько строк в заголовке таблицы */

        this.numOfRows=Number(monthDuration[this.currentMonth][0]); /* количество строк в зависимости от длины месяца берется из конфига */
        this.numOfColumns=this.headerColumnsWidth.length; /* количество столбцов берется из конфига из разметки */

        this.clearPage();
        this.createGridStyle();
        this.createTableHead();
        this.createTableSimple();
        this.createLogo();
    }

    clearPage() {
        this.placeForStylize.innerHTML='';
    }

    createGridStyle() { /* разметка грида */
        this.placeForStylize.style.gridTemplateColumns=`repeat(${this.numOfColumns}, 1fr)`;
        this.placeForStylize.style.gridTemplateRows=`repeat(${this.numOfRows+this.headerRows}, 1fr)`;
    }

    createTableHead() {
        this.layout.forEach(function(el){
            if (el[5]==="date") {el[0]=`${monthDuration[this.currentMonth][2]} ${this.currentYear} года`} /* формирование даты */
            new CreateCellNamed(el[1],el[2],el[3],el[4],el[0]);
        },this);
    }

    createTableSimple() { /* создание множества пустых ячеек */
        for (let j=this.headerRows+1; j <= this.numOfRows+this.headerRows; j++) {

            for (let i=1; i <= this.numOfColumns; i++) {
                new CreateCellNamed(i,i+1,j,j+1,`${this.getText(i,j-this.headerRows)}`);
            }
        }
    }

    getText(col,day) {
        let outputText='';
        this.layout.forEach(function(el){ /* из массива конфига выбираем только столбцы единичной ширины, остальные - игнор */
            if (el[1]==col&&el[2]==col+1) {
                outputText=el[5]; if (el[5]==="date") { /* если в конфиге помечено, что дата, то меняем строку на дату */
                    outputText=`${day} ${monthDuration[this.currentMonth][1]} ${this.currentYear}`;
                }
            }
        },this)
        return outputText;
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

}

