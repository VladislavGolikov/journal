import {tables, columns, currentPage, monthDuration} from './config.json';
import {CreateCell, CreateCellNamed} from './createcell.js';


export class CreateTable {
    constructor(currentMonth=false) {
        this.placeForStylize=document.querySelector('.allthereis');
        this.date=new Date();
        this.numOfRows=Number(monthDuration[this.date.getMonth()][0]);
        if (currentMonth) {this.numOfRows=Number(currentMonth)}
        this.numOfColumns=tables[currentPage].length*columns.length;
        this.numOfRowsIndent=3; /* столько строк добавим на заголовки таблицы */
        this.IndentX=2; /* один столбец для даты, поэтому начинаем с 2 */
        this.dateWidth=`10vh`; /* колонка с датами */
        this.yearHeight=`4vh`; /* заголовок года */
        this.packetHeight=`4vh`; /* заголовок пакета */
        this.parameterHeight=`4vh`; /* заголовок параметра */

        this.createGridStyle();
        this.createTableSimple();
        this.createTableHead();
        this.createTableDates();

    }
    createGridStyle() { /* разметка грида */

        this.placeForStylize.style.gridTemplateColumns=`[beginDate beginYear] ${this.dateWidth} [endDate] repeat(${this.numOfColumns}, 1fr) [endYear]`;
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
            `${this.date.toLocaleString('ru', {month: 'long'})} ${this.date.getFullYear()} года`);

        /*** заголовок пакета ***/
        tables[currentPage].forEach(function(el,ind){

            new CreateCellNamed(ind*2+this.IndentX, ind*2+this.IndentX+2,'beginPacket','endPacket',el)
        },this);

        /*** заголовок параметра ***/
        tables[currentPage].forEach(function(el,ind){
            const indexOuter=ind;

            columns.forEach(function(el,ind){
                new CreateCellNamed(ind+this.IndentX+indexOuter*2, ind+this.IndentX+indexOuter*2+1,'beginParameter','endParameter',el)
            },this,indexOuter)
        },this);

        /*** заголовок даты ***/
        new CreateCellNamed(1,2,'beginPacket','endParameter','Дата:');

    }
    createTableDates(){/* создание множества ячеек с датами */
        for (let j=1+this.numOfRowsIndent; j <= this.numOfRows+this.numOfRowsIndent; j++) {

                new CreateCell(1,j,`${j-this.numOfRowsIndent} ${monthDuration[this.date.getMonth()][1]}`);
        }
    }
}

