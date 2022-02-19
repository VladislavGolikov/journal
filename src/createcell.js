export class CreateCellNamed {
    constructor(columnBegin='', columnEnd='', rowBegin='', rowEnd='', text='',className='') {
        this.placeForInsert=document.querySelector('.allthereis');
        this.placeForStylize=null;
        this.cellTemplate=``;
        this.className=className;
        this.idName=`${columnBegin}_${rowBegin}`;
        this.text=text;
        this.columnBegin=columnBegin;
        this.columnEnd=columnEnd;
        this.rowBegin=rowBegin;
        this.rowEnd=rowEnd;

        this.createTemplate();
        this.createCell();
        this.getElement();
        this.stylizeCell();
    }
    createTemplate() {
        this.cellTemplate=`<div id=${this.idName} class=${this.className}>${this.text}</div>`;
    }
    createCell() {
        this.placeForInsert.insertAdjacentHTML('afterBegin',this.cellTemplate);
    }
    getElement() {
        this.placeForStylize=document.getElementById(this.idName);
    }
    stylizeCell() {
        this.placeForStylize.style.gridRow=`${this.rowBegin} / ${this.rowEnd}`
        this.placeForStylize.style.gridColumn=`${this.columnBegin} / ${this.columnEnd}`
    }
}

