import './main.scss';
import {CreateTable, CreateTableGeneral} from './createtable.js';

const journalPage2=new CreateTableGeneral();

//const journalPage=new CreateTable();

document.querySelector('.changePage').addEventListener('click', ()=>{journalPage.updatePage(true,false,this)});

document.querySelector('.changeMonthForward').addEventListener('click', ()=>{journalPage2.updatePage(1,this)});

document.querySelector('.changeMonthBackward').addEventListener('click', ()=>{journalPage2.updatePage(-1,this)});

document.querySelector('.printPage').addEventListener('click', ()=>window.print());



