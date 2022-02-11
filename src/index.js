import './main.scss';
import {CreateTable, CreateTableGeneral} from './createtable.js';

const vava=new CreateTableGeneral();

//const journalPage=new CreateTable();

document.querySelector('.changePage').addEventListener('click', ()=>{journalPage.updatePage(true,false,this)});

document.querySelector('.changeMonthForward').addEventListener('click', ()=>{journalPage.updatePage(false,1,this)});

document.querySelector('.changeMonthBackward').addEventListener('click', ()=>{journalPage.updatePage(false,-1,this)});

document.querySelector('.printPage').addEventListener('click', ()=>window.print());



