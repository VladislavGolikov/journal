import {tables, columns, defaultPage, monthDuration} from './config.json';
import {CreateCell, CreateCellNamed} from './createcell.js';

export class CreateTable {
    constructor(currentPage=defaultPage) {
        this.placeForStylize=document.querySelector('.allthereis');
        this.date=new Date();
        this.numOfRowsIndent=3; /* столько строк добавим на заголовки таблицы */
        this.IndentX=2; /* один столбец для даты, поэтому начинаем с 2 */
        this.dateWidth=`15vh`; /* колонка с датами */
        this.yearHeight=`4vh`; /* заголовок года */
        this.packetHeight=`4vh`; /* заголовок пакета */
        this.parameterHeight=`4vh`; /* заголовок параметра */

        this.currentMonth=this.date.getMonth(); /* месяц по дефолту вначале */
        this.currentYear=this.date.getFullYear(); /* год по дефолту вначале */
        this.currentPage=currentPage; /* по дефолту страница из конфига */

        this.numOfRows=Number(monthDuration[this.currentMonth][0]); /* количество строк в зависимости от длины месяца берется из конфига */
        this.numOfColumns=tables[this.currentPage].length*columns.length; /* количество столбцов берется из конфига для каждой страницы */

        this.clearPage();
        this.createGridStyle();
        this.createTableSimple();
        this.createTableHead();
        this.createTableDates();
    }

    clearPage() {
        this.placeForStylize.innerHTML='';
    }

    createGridStyle() { /* разметка грида */

        this.placeForStylize.style.gridTemplateColumns=`[beginDate] ${this.dateWidth} [endDate beginYear] repeat(${this.numOfColumns}, 1fr) [endYear]`;
        this.placeForStylize.style.gridTemplateRows=`
        [beginYear] ${this.yearHeight} [endYear beginPacket] ${this.packetHeight} [endPacket beginParameter]
        ${this.parameterHeight} [endParameter] repeat(${this.numOfRows}, 1fr)
        `;
    }

    createTableSimple() { /* создание множества пустых ячеек */
        for (let j=1+this.numOfRowsIndent; j <= this.numOfRows+this.numOfRowsIndent; j++) {
            for (let i=this.IndentX; i < this.numOfColumns+this.IndentX; i++) {
                new CreateCell(i,j,`col${i} row${j}`);
            }
        }
    }

    createTableHead(){
        /*** заголовок года ***/
        new CreateCellNamed('beginYear','endYear','beginYear','endYear',
            `${monthDuration[this.currentMonth][2]} ${this.currentYear} года`); // тут подумать!!!

        /*** заголовок пакета ***/
        tables[this.currentPage].forEach(function(el,ind){

            new CreateCellNamed(ind*2+this.IndentX, ind*2+this.IndentX+2,'beginPacket','endPacket',el)
        },this);

        /*** заголовок параметра ***/
        tables[this.currentPage].forEach(function(el,ind){
            const indexOuter=ind;

            columns.forEach(function(el,ind){
                new CreateCellNamed(ind+this.IndentX+indexOuter*2, ind+this.IndentX+indexOuter*2+1,'beginParameter','endParameter',el)
            },this,indexOuter)
        },this);

        /*** заголовок даты ***/
        new CreateCellNamed(1,2,'beginParameter','endParameter','Дата:');

    }

    createTableDates(){/* создание множества ячеек с датами */
        for (let j=1+this.numOfRowsIndent; j <= this.numOfRows+this.numOfRowsIndent; j++) {

                new CreateCell(1,j,`${j-this.numOfRowsIndent} ${monthDuration[this.currentMonth][1]}`);
        }
    }

    updatePage(page=false,month=0) {

        if (page) {this.currentPage++; if (this.currentPage>=tables.length) {this.currentPage=0}} /* циклическая смена страницы */

        this.currentMonth=this.currentMonth+month;
        if (this.currentMonth<0) {this.currentMonth=11; this.currentYear--}; /* переход года назад */
        if (this.currentMonth>11) {this.currentMonth=0; this.currentYear++}; /* переход года вперед */

        this.updateLayout();
        this.clearPage();
        this.createGridStyle();
        this.createTableSimple();
        this.createTableHead();
        this.createTableDates();
    }

    updateLayout() {
        this.numOfRows=Number(monthDuration[this.currentMonth][0]); /* перерасчет строк */
        this.numOfColumns=tables[this.currentPage].length*columns.length; /* перерасчет столбцов */

    }

}

